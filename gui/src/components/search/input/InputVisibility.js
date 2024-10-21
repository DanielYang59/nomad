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
import React from 'react'
import InputRadio from './InputRadio'
import { useApi } from '../../api'

const InputVisibility = React.memo(() => {
  const {api} = useApi()
  const authenticated = api?.keycloak?.authenticated

  return <InputRadio
      quantity="visibility"
      label="Visibility"
      initialValue={authenticated ? 'visible' : 'public'}
      options={{
        all: {label: 'All', disabled: !authenticated, tooltip: 'Consider all entries.'},
        public: {label: 'Public', disabled: false, tooltip: 'Consider all entries that can be publically downloaded, i.e. only published entries without embargo.'},
        visible: {label: 'Visible', disabled: !authenticated, tooltip: 'Consider all entries that are visible to you. This includes entries with embargo or unpublished entries that belong to you or are shared with you.'},
        shared: {label: 'Shared', disabled: !authenticated, tooltip: 'Only consider entries that belong to you or are shared with you.'},
        user: {label: 'User', disabled: !authenticated, tooltip: 'Only consider entries that belong to you.'},
        staging: {label: 'Unpublished', disabled: !authenticated, tooltip: 'Only search through unpublished entries.'}
      }}
    />
})

InputVisibility.propTypes = {}

export default InputVisibility
