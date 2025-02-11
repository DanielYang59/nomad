/*
 * Copyright The NOMAD Authors.
 *
 * This file is part of NOMAD. See https://nomad-lab.eu for further info.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React, {useState, useEffect, useMemo, useCallback, forwardRef} from 'react'
import PropTypes from 'prop-types'
import { makeStyles, useTheme } from '@material-ui/core'
import { hasWebGLSupport, DType } from '../../utils'
import * as d3 from 'd3'
import { DefinitionTitle } from '../DefinitionTitle'
import Plot from './Plot'
import { useHistory } from 'react-router-dom'
import { getUrl } from '../nav/Routes'

function getAxisType(type, scale) {
  return type === DType.Timestamp && (scale === 'linear' || !scale)
    ? 'date'
    : scale
}

function transformData(type, data) {
  return type === DType.Timestamp
    ? data.map((iso) => new Date(iso).getTime())
    : data
}

/**
 * A Plotly-based interactive scatter plot.
 */
const hasWebGL = hasWebGLSupport()
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridTemplateRows: '1fr auto',
    marginBottom: theme.spacing(0.5)
  },
  plot: {
    gridColumn: 2,
    gridRow: 1,
    position: 'relative'
  },
  xaxis: {
    gridColumn: 2,
    gridRow: 2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '1rem',
    marginTop: theme.spacing(0.5)
  },
  yaxis: {
    gridColumn: 1,
    gridRow: 1,
    height: '100%',
    marginRight: theme.spacing(0.5),
    width: '1rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  square: {
    gridColumn: 1,
    gridRow: 2
  },
  color: {
    gridColumn: 3,
    gridRow: 1,
    height: '100%',
    marginLeft: theme.spacing(0.5),
    width: '1rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  colorlabel: {
    transform: 'rotate(90deg)'
  },
  axisTitle: {
    fontSize: '0.75rem'
  }

}))

const PlotScatter = React.memo(forwardRef((
{
  data,
  title,
  xAxis,
  yAxis,
  colorAxis,
  discrete,
  autorange,
  dragMode,
  onSelected,
  onDeselect,
  onNavigateToEntry,
  'data-testid': testID
}, canvas) => {
  const styles = useStyles()
  const titleClasses = {text: styles.axisTitle}
  const theme = useTheme()
  const [finalData, setFinalData] = useState(!data ? data : undefined)
  const history = useHistory()

  // Side effect that runs when the data that is displayed should change. By
  // running all this heavy stuff within useEffect (instead of e.g. useMemo),
  // the first render containing the placeholders etc. can be done as fast as
  // possible.
  useEffect(() => {
    if (!data) {
      setFinalData(data)
      return
    }

    // Map the data depending on axis types. This manual transformation is
    // needed because the plotly automatic axis type detection does not work
    // when scaling option is read from the axis configuration.
    data.x = transformData(xAxis.dtype, data.x)
    data.y = transformData(yAxis.dtype, data.y)

    const hoverTemplate = (xLabel, yLabel, colorLabel) => {
      let template = `<b>Click to go to entry page</b>` +
        `<br>` +
        `${xLabel || ''}: %{x}<br>` +
        `${yLabel || ''}: %{y}<br>`
      if (colorLabel) {
        template = template +
          `${colorLabel || ''}: %{${discrete ? 'text' : 'text:.3'}}<br>`
      }
      template = template + `<extra></extra>`
      return template
    }
    const scatterType = hasWebGL ? 'scattergl' : 'scatter'

    // If dealing with a quantized color, each group is separated into it's own
    // trace which has a legend as well.
    const traces = []
    if (colorAxis?.search_quantity && discrete) {
      const options = [...new Set(data.color)]
      const nOptions = options.length
      const scale = d3.scaleSequential([0, 1], d3.interpolateTurbo)
      const offset = 0.1
      for (const option of options) {
        const xArray = []
        const yArray = []
        const colorArray = []
        const entryIdArray = []
        for (let i = 0; i < data.color.length; ++i) {
          if (data.color[i] === option) {
            xArray.push(data.x[i])
            yArray.push(data.y[i])
            colorArray.push(data.color[i])
            entryIdArray.push(data.id[i])
          }
        }
        traces.push({
          x: xArray,
          y: yArray,
          entry_id: entryIdArray,
          name: option,
          text: colorArray,
          mode: 'markers',
          type: scatterType,
          textposition: 'top center',
          showlegend: true,
          hovertemplate: hoverTemplate(
            xAxis.title,
            yAxis.title,
            colorAxis.title
          ),
          marker: {
            size: 8,
            color: scale(offset + (1 - 2 * offset) * options.indexOf(option) / (nOptions - 1)),
            line: {
              color: theme.palette.grey[800],
              width: 1
            }
          }
        })
      }
    // When dealing with a continuous color, display a colormap
    } else if (colorAxis?.search_quantity && !discrete) {
      traces.push({
        x: data.x,
        y: data.y,
        color: data.color,
        text: data.color,
        entry_id: data.id,
        mode: 'markers',
        type: scatterType,
        textposition: 'top center',
        showlegend: false,
        hoverinfo: "text",
        hovertemplate: hoverTemplate(
          xAxis.title,
          yAxis.title,
          colorAxis.title
        ),
        marker: {
          size: 8,
          color: data.color,
          colorscale: 'YlGnBu',
          line: {
            color: theme.palette.grey[800],
            width: 1
          },
          colorbar: {
            thickness: 20,
            ypad: 0,
            xpad: 5,
            tickfont: {
              family: theme.typography.fontFamily
            }
          }
        }
      })
    // When color is not set, all points are displayed in a single plot with
    // primary theme color.
    } else {
      traces.push({
        x: data.x,
        y: data.y,
        entry_id: data.id,
        mode: 'markers',
        type: scatterType,
        textposition: 'top center',
        showlegend: false,
        hoverinfo: "text",
        hovertemplate: hoverTemplate(
          xAxis.title,
          yAxis.title,
          ''
        ),
        marker: {
          size: 8,
          color: theme.palette.secondary.main,
          line: {
            color: theme.palette.grey[800],
            width: 1
          }
        }
      })
    }
    setFinalData(traces)
  }, [colorAxis?.search_quantity, colorAxis?.title, colorAxis?.unit, data, discrete, theme, xAxis.dtype, xAxis.title, xAxis.unit, yAxis.dtype, yAxis.title, yAxis.unit])

  const layout = useMemo(() => {
    return {
      dragmode: dragMode,
      hovermode: 'closest',
      hoverlabel: {
        bgcolor: theme.palette.grey[100],
        bordercolor: theme.palette.grey[100],
        font: {
          color: theme.palette.grey[800],
          family: theme.typography.fontFamily
        }
      },
      showlegend: true,
      legend: {
        x: 1,
        xanchor: 'right',
        y: 1
      },
      xaxis: {
        type: getAxisType(xAxis.dtype, xAxis.scale),
        fixedrange: false,
        autorange: autorange
      },
      yaxis: {
        type: getAxisType(yAxis.dtype, yAxis.scale),
        fixedrange: false,
        autorange: autorange
      },
      margin: {
        l: 8,
        r: 0,
        t: 8,
        b: 24
      }
    }
  }, [autorange, xAxis.dtype, xAxis.scale, yAxis.dtype, yAxis.scale, dragMode, theme])

  const handleClick = useCallback(d => {
    const pointIndex = d.points[0].pointIndex
    const entryId = d.points[0].data.entry_id[pointIndex]
    const path = `entry/id/${entryId}`
    onNavigateToEntry()
    history.push(getUrl(path))
  }, [history, onNavigateToEntry])

  return <div className={styles.root}>
    <div className={styles.yaxis}>
      <DefinitionTitle
        label={yAxis.title}
        description={yAxis.description}
        variant="subtitle2"
        rotation="up"
        classes={titleClasses}
      />
    </div>
    <div className={styles.plot}>
      <Plot
        data={finalData}
        layout={layout}
        floatTitle={title}
        fixedMargins={true}
        autorange={autorange}
        onSelected={onSelected}
        onDeselect={onDeselect}
        disableDefaultActions
        throttleResize
        data-testid={testID}
        ref={canvas}
        onClick={handleClick}
      />
    </div>
    <div className={styles.square} />
    <div className={styles.xaxis}>
      <DefinitionTitle
        label={xAxis.title}
        description={xAxis.description}
        variant="subtitle2"
        classes={titleClasses}
      />
    </div>
    {!discrete && colorAxis &&
      <div className={styles.color}>
        <DefinitionTitle
          label={colorAxis.title}
          description={colorAxis.description}
          rotation="down"
          variant="subtitle2"
          classes={titleClasses}
        />
      </div>
    }
  </div>
}))

PlotScatter.propTypes = {
  data: PropTypes.object,
  title: PropTypes.string,
  xAxis: PropTypes.object, // Contains x-axis settings
  yAxis: PropTypes.object, // Contains y-axis settings
  colorAxis: PropTypes.object, // Contains colorbar settings
  discrete: PropTypes.bool,
  autorange: PropTypes.bool,
  dragMode: PropTypes.string,
  onSelected: PropTypes.func,
  onDeselect: PropTypes.func,
  onNavigateToEntry: PropTypes.func,
  'data-testid': PropTypes.string
}

PlotScatter.defaultProps = {
  unitX: 'dimensionless',
  unitY: 'dimensionless',
  unitColor: 'dimensionless'
}

export default PlotScatter
