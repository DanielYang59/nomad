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
import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { FilterSubMenu, filterMenuContext } from './FilterMenu'
import { InputGrid, InputGridItem } from '../input/InputGrid'
import InputRange from '../input/InputRange'
import InputField from '../input/InputField'

const FilterSubMenuSolarCell = React.memo(({
  id,
  ...rest
}) => {
  const {selected, open} = useContext(filterMenuContext)
  const visible = open && id === selected

  return <FilterSubMenu id={id} {...rest}>
    <InputGrid>
      <InputGridItem xs={12}>
        <InputRange
          quantity="results.properties.optoelectronic.solar_cell.efficiency"
          visible={visible}
        />
        <InputRange
          quantity="results.properties.optoelectronic.solar_cell.fill_factor"
          visible={visible}
        />
        <InputRange
          quantity="results.properties.optoelectronic.solar_cell.open_circuit_voltage"
          visible={visible}
        />
        <InputRange
          quantity="results.properties.optoelectronic.solar_cell.short_circuit_current_density"
          visible={visible}
        />
        <InputRange
          quantity="results.properties.optoelectronic.solar_cell.illumination_intensity"
          visible={visible}
        />
        <InputRange
          quantity="results.properties.optoelectronic.solar_cell.device_area"
          visible={visible}
        />
        <InputField
          quantity="results.properties.optoelectronic.solar_cell.device_architecture"
          visible={visible}
        />
        <InputField
          quantity="results.properties.optoelectronic.solar_cell.device_stack"
          visible={visible}
        />
        <InputField
          quantity="results.properties.optoelectronic.solar_cell.absorber"
          visible={visible}
        />
        <InputField
          quantity="results.properties.optoelectronic.solar_cell.absorber_fabrication"
          visible={visible}
        />
        <InputField
          quantity="results.properties.optoelectronic.solar_cell.electron_transport_layer"
          visible={visible}
        />
        <InputField
          quantity="results.properties.optoelectronic.solar_cell.hole_transport_layer"
          visible={visible}
        />
        <InputField
          quantity="results.properties.optoelectronic.solar_cell.substrate"
          visible={visible}
        />
        <InputField
          quantity="results.properties.optoelectronic.solar_cell.back_contact"
          visible={visible}
        />
      </InputGridItem>
    </InputGrid>
  </FilterSubMenu>
})
FilterSubMenuSolarCell.propTypes = {
  id: PropTypes.string
}

export default FilterSubMenuSolarCell
