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
import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { string, number, bool, reach } from 'yup'
import { cloneDeep } from 'lodash'
import {
  TextField,
  MenuItem,
  Checkbox,
  FormControlLabel
} from '@material-ui/core'
import { useSearchContext } from '../SearchContext'
import { InputMetainfo } from '../input/InputMetainfo'
import { InputTextField } from '../input/InputText'
import UnitInput from '../../units/UnitInput'
import { schemaWidget, schemaAxis } from './Widget'
import { WidgetEditDialog, WidgetEditGroup, WidgetEditOption } from './WidgetEdit'
import { DType, parseJMESPath, setDeep, isEmptyString } from '../../../utils'
import { scales } from '../../plotting/common'
import { autorangeDescription } from './WidgetHistogram'

// Predefined in order to not break memoization
const dtypes = new Set([DType.Float, DType.Int, DType.Timestamp])

/**
 * A dialog that is used to configure a scatter plot widget.
 */
export const WidgetHistogramEdit = React.memo(({widget}) => {
    const { filterData, useSetWidget } = useSearchContext()
    const [settings, setSettings] = useState(cloneDeep(widget))
    const [errors, setErrors] = useState({})
    const [dimensions, setDimensions] = useState({})
    const setWidget = useSetWidget(widget.id)

    const handleChange = useCallback((key, value) => {
      setSettings(old => {
        const newValue = {...old}
        setDeep(newValue, key, value)
        return newValue
      })
    }, [setSettings])

    const handleError = useCallback((key, value) => {
      setErrors(old => ({...old, [key]: value}))
    }, [setErrors])

    const handleErrorQuantity = useCallback((key, value) => {
      handleError(key, value)
      setDimensions((old) => ({...old, [key]: null}))
    }, [handleError])

    const handleAccept = useCallback((key, value) => {
      try {
        reach(schemaWidgetHistogram, key).validateSync(value)
      } catch (e) {
        handleError(key, e.message)
        return
      }
      setErrors(old => ({...old, [key]: undefined}))
      handleChange(key, value)
    }, [handleError, handleChange])

    const handleAcceptQuantity = useCallback((key, value) => {
      handleAccept(key, value)
      const { quantity } = parseJMESPath(value)
      const dimension = filterData[quantity]?.dimension
      setDimensions((old) => ({...old, [key]: dimension}))
    }, [handleAccept, filterData])

    const handleClose = useCallback(() => {
      setWidget(old => ({...old, editing: false}))
    }, [setWidget])

    // Upon accepting the entire form, we perform final validation.
    const handleEditAccept = useCallback(() => {
      const independentErrors = Object.values(errors).some(x => !!x)
      if (independentErrors) return

      // Check for missing values. This check is required because there is no
      // value set when a new widget is created, and pressing the done button
      // without filling a value should raise an error.
      const xEmpty = isEmptyString(settings?.x?.quantity)
      if (xEmpty) {
        handleErrorQuantity('x.quantity', 'Please specify a value.')
      }

      if (!independentErrors && !xEmpty) {
        setWidget(old => ({...old, ...{...settings, editing: false, visible: true}}))
      }
    }, [settings, setWidget, errors, handleErrorQuantity])

    return <WidgetEditDialog
        id={widget.id}
        open={widget.editing}
        visible={widget.visible}
        title="Edit histogram widget"
        onClose={handleClose}
        onAccept={handleEditAccept}
      >
      <WidgetEditGroup title="x axis">
        <WidgetEditOption>
          <InputMetainfo
            label="quantity"
            value={settings.x?.quantity}
            error={errors['x.quantity']}
            onChange={(value) => handleChange('x.quantity', value)}
            onAccept={(value) => handleAcceptQuantity('x.quantity', value)}
            onSelect={(value) => handleAcceptQuantity('x.quantity', value)}
            onError={(value) => handleErrorQuantity('x.quantity', value)}
            dtypes={dtypes}
            dtypesRepeatable={dtypes}
          />
        </WidgetEditOption>
        <WidgetEditOption>
          <InputTextField
            label="title"
            fullWidth
            value={settings.x?.title}
            onChange={(event) => handleChange('x.title', event.target.value)}
          />
        </WidgetEditOption>
        <WidgetEditOption>
          <UnitInput
            label='unit'
            value={settings.x?.unit}
            onChange={(value) => handleChange('x.unit', value)}
            onSelect={(value) => handleAccept('x.unit', value)}
            onAccept={(value) => handleAccept('x.unit', value)}
            error={errors['x.unit']}
            onError={(value) => handleError('x.unit', value)}
            dimension={dimensions['x.quantity'] || null}
            optional
            disableGroup
          />
        </WidgetEditOption>
      </WidgetEditGroup>
      <WidgetEditGroup title="general">
        <WidgetEditOption>
          <InputTextField
            label="title"
            fullWidth
            value={settings?.title}
            onChange={(event) => handleChange('title', event.target.value)}
          />
        </WidgetEditOption>
        <WidgetEditOption>
          <TextField
            select
            fullWidth
            label="Statistics scaling"
            variant="filled"
            value={settings.scale}
            onChange={(event) => { handleChange('scale', event.target.value) }}
          >
            {Object.keys(scales).map((key) =>
              <MenuItem value={key} key={key}>{key}</MenuItem>
            )}
          </TextField>
        </WidgetEditOption>
        <WidgetEditOption>
          <TextField
            select
            fullWidth
            label="Maximum number of bins"
            variant="filled"
            value={settings.nbins}
            onChange={(event) => { handleChange('nbins', event.target.value) }}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={40}>40</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </TextField>
        </WidgetEditOption>

        <WidgetEditOption>
          <FormControlLabel
            control={<Checkbox checked={settings.autorange} onChange={(event, value) => handleChange('autorange', value)}/>}
            label={autorangeDescription}
          />
        </WidgetEditOption>
        <WidgetEditOption>
          <FormControlLabel
            control={<Checkbox checked={settings.showinput} onChange={(event, value) => handleChange('showinput', value)}/>}
            label='Show input fields'
          />
        </WidgetEditOption>
      </WidgetEditGroup>
    </WidgetEditDialog>
})

WidgetHistogramEdit.propTypes = {
  widget: PropTypes.object,
  onClose: PropTypes.func
}

export const schemaWidgetHistogram = schemaWidget.shape({
  x: schemaAxis.required('Quantity for the x axis is required.'),
  scale: string().required('Scale is required.'),
  nbins: number().integer().required(),
  autorange: bool(),
  showinput: bool()
})