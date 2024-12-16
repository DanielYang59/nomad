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
import React, { useCallback, useMemo } from 'react'
import { Subject } from 'rxjs'
import PropTypes from 'prop-types'
import { Quantity } from '../units/Quantity'
import { useUnitContext } from '../units/UnitContext'
import DOS from './DOS'
import BandStructure from './BandStructure'
import BrillouinZone from './BrillouinZone'
import BandGap from './BandGap'
import GreensFunctions from './GreensFunctions'
import { makeStyles } from '@material-ui/core/styles'
import { electronicRange } from '../../config'
import { PropertyGrid, PropertyItem } from '../entry/properties/PropertyCard'
import H5Web from './H5Web'

// Styles
const useStyles = makeStyles((theme) => {
  return {
    nodata: {
      top: theme.spacing(0.7),
      bottom: '3.55rem'
    },
    placeholder: {
      top: theme.spacing(0.7),
      bottom: theme.spacing(2)
    }
  }
})

const ElectronicProperties = React.memo(({
  bs,
  dos,
  brillouin_zone,
  band_gap,
  gf,
  density_charge,
  index,
  classes
}) => {
  // We resolve the DMFT methodology from results.method
  const dmftprovenance = index?.results?.method?.simulation?.dmft || []

  const {units} = useUnitContext()
  const range = useMemo(() => new Quantity(electronicRange, 'electron_volt').toSystem(units).value(), [units])
  const bsLayout = useMemo(() => ({yaxis: {autorange: false, range: range}}), [range])
  const dosLayout = useMemo(() => ({yaxis: {autorange: false, range: range}}), [range])

  // RxJS subject for efficiently propagating y axis changes between DOS and BS
  const bsYSubject = useMemo(() => new Subject(), [])
  const dosYSubject = useMemo(() => new Subject(), [])

  // Styles
  const styles = useStyles({classes: classes})

  // Synchronize panning between BS/DOS plots
  const handleBSRelayouting = useCallback((event) => {
    const update = {yaxis: {range: [event['yaxis.range[0]'], event['yaxis.range[1]']]}}
    bsYSubject.next(update)
  }, [bsYSubject])
  const handleDOSRelayouting = useCallback((event) => {
    const update = {yaxis: {range: [event['yaxis.range[0]'], event['yaxis.range[1]']]}}
    dosYSubject.next(update)
  }, [dosYSubject])

  // Create the charge density component
  let densityChargeComp = null
  if (density_charge !== false) {
    if (density_charge === undefined) {
      return null
    }
    const sectionPath = density_charge.split('/').slice(0, -1).join('/')
    densityChargeComp = <H5Web
      key={density_charge}
      upload_id={index.upload_id}
      filename={index.entry_id}
      initialPath={sectionPath}
      source='archive'
      sidebarOpen={false}
    />
  }

  // Custom layout if only band gaps are available
  if (bs === false && dos === false && brillouin_zone === false && gf === false && density_charge === false) {
    return <PropertyGrid>
      <PropertyItem title="Band gaps" xs={12} height="auto">
        <BandGap data={band_gap}/>
      </PropertyItem>
    </PropertyGrid>
  // Custom layout if only DOS is available
  } else if (bs === false && band_gap === false && brillouin_zone === false && gf === false && density_charge === false) {
    return <PropertyGrid>
      <PropertyItem title="Band structure" xs={8}>
        <BandStructure
          data={false}
          layout={bsLayout}
          units={units}
          onRelayouting={handleBSRelayouting}
          onReset={() => { bsYSubject.next({yaxis: {range: range}}) }}
          layoutSubject={dosYSubject}
          data-testid="bs-electronic"
        />
      </PropertyItem>
      <PropertyItem title="Density of states" xs={4}>
        <DOS
          data={dos}
          layout={dosLayout}
          placeHolderStyle={styles.placeholder}
          noDataStyle={styles.nodata}
          onRelayouting={handleDOSRelayouting}
          onReset={() => { dosYSubject.next({yaxis: {range: range}}) }}
          units={units}
          layoutSubject={bsYSubject}
          data-testid="dos-electronic"
        />
      </PropertyItem>
    </PropertyGrid>
  // Custom layout if only Greens functions are available
  } else if (bs === false && dos === false && band_gap === false && brillouin_zone === false && density_charge === false) {
    return <PropertyGrid>
      <PropertyItem title="Green's functions" xs={12} height='auto'>
        <GreensFunctions
          data={gf}
          provenance={dmftprovenance}
        />
      </PropertyItem>
    </PropertyGrid>
  // Custom layout if only charge density are available
  } else if (bs === false && dos === false && band_gap === false && brillouin_zone === false && gf === false) {
    return <PropertyGrid>
      <PropertyItem title="Charge density" xs={12} height="auto">
        {densityChargeComp}
      </PropertyItem>
    </PropertyGrid>
  // Layout when all properties can be present
  } else {
    return <PropertyGrid>
      <PropertyItem title="Band structure" xs={8}>
        <BandStructure
          data={bs}
          layout={bsLayout}
          units={units}
          onRelayouting={handleBSRelayouting}
          onReset={() => { bsYSubject.next({yaxis: {range: range}}) }}
          layoutSubject={dosYSubject}
          data-testid="bs-electronic"
        />
      </PropertyItem>
      <PropertyItem title="Density of states" xs={4}>
        <DOS
          data={dos}
          layout={dosLayout}
          placeHolderStyle={styles.placeholder}
          noDataStyle={styles.nodata}
          onRelayouting={handleDOSRelayouting}
          onReset={() => { dosYSubject.next({yaxis: {range: range}}) }}
          units={units}
          layoutSubject={bsYSubject}
          data-testid="dos-electronic"
        />
      </PropertyItem>
      <PropertyItem title="Brillouin zone" xs={8}>
        <BrillouinZone
          data={brillouin_zone}
          data-testid="bz-electronic"
        />
      </PropertyItem>
      <PropertyItem title="Band gaps" xs={4}>
        <BandGap data={band_gap}/>
      </PropertyItem>
      {gf !== false &&
        <PropertyItem title="Green's functions" xs={12} height="auto">
          <GreensFunctions
            data={gf}
            provenance={dmftprovenance}
          />
        </PropertyItem>
      }
      {density_charge !== false &&
        <PropertyItem title="Charge density" xs={12} height="auto">
          {densityChargeComp}
        </PropertyItem>
      }
    </PropertyGrid>
  }
})

ElectronicProperties.propTypes = {
  dos: PropTypes.any,
  bs: PropTypes.any,
  brillouin_zone: PropTypes.any,
  band_gap: PropTypes.any,
  gf: PropTypes.any,
  density_charge: PropTypes.string,
  classes: PropTypes.object,
  index: PropTypes.object
}

export default ElectronicProperties
