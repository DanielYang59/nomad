#
# Copyright The NOMAD Authors.
#
# This file is part of NOMAD. See https://nomad-lab.eu for further info.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

import pytest


def test_alive(client):
    rv = client.get('/alive')
    assert rv.status_code == 200


def test_docs(client):
    rv = client.get('/docs/index.html')
    assert rv.status_code == 200
    assert 'no-cache, no-store, must-revalidate' in rv.headers['Cache-Control']
    rv = client.get('/docs/oasis.html')
    assert rv.status_code == 200
    assert 'Cache-Control' not in rv.headers


@pytest.mark.parametrize('path', ['env.js', 'artifacts.js'])
def test_gui(client, path):
    rv = client.get(f'/gui/{path}')
    assert rv.status_code == 200
