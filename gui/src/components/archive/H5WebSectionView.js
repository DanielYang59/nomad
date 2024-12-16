import React, {useState, useEffect, useMemo} from 'react'
import PropTypes from 'prop-types'
import { useDataStore } from '../DataStore'
import { useEntryStore } from '../entry/EntryContext'
import { isArray } from 'lodash'
import { Compartment } from './Browser'
import H5Web from '../visualization/H5Web'
import {withErrorHandler} from '../ErrorHandler'
import { resolveNomadUrlNoThrow, resolveInternalRef, systemMetainfoUrl } from '../../utils'

class H5WebSectionViewError extends Error {
    constructor(message) {
      super(message)
      this.name = 'H5WebSectionViewError'
    }
  }

export function matchH5Path(path) {
  const h5Path = path.match(/(?:\/uploads\/(?<uploadId>.+?)\/(?<source>.+?)\/)*(?<filename>.+?)#(?<path>.+)/)
  if (!h5Path) {
    return {}
  }
  const h5File = h5Path.groups.filename
  const source = h5Path.groups.source || ((h5File.endsWith('.h5') || h5File.endsWith('.nxs')) ? 'raw' : 'archive')
  return {h5UploadId: h5Path.groups.uploadId, h5File: h5File, h5Source: source, h5Path: h5Path.groups.path}
}

const H5WebSectionView = React.memo(function H5WebSectionView({section, def, uploadId, title}) {
  const dataStore = useDataStore()
  const {url} = useEntryStore()
  const [sections, setSections] = useState([])
  const graphs = useMemo(() => {
    return sections.map(sec => {
      const signal = sec[1].m_annotations?.h5web?.[0]?.signal

      if (!signal || !sec[0][signal]) return null

      const {h5UploadId, h5File, h5Source, h5Path} = matchH5Path(sec[0][signal])

      if (!h5Path) return null

      const sectionPath = h5Path.split('/').slice(0, -1).join('/')

      return <H5Web
        key={sec[1].name}
        upload_id={h5UploadId || uploadId}
        filename={h5File}
        initialPath={sectionPath}
        source={h5Source}
        sidebarOpen={false}>
      </H5Web>
    }).filter(sec => sec)
  }, [sections, uploadId])

  useEffect(() => {
    const resolveSection = async (reference) => {
      if (typeof reference !== 'string') return reference

      const sectionUrl = url && resolveNomadUrlNoThrow(reference, url)
      const {archive} = await dataStore.getEntryAsync(
        sectionUrl.deploymentUrl,
        sectionUrl.entryId,
        false,
        '*'
      )

      return resolveInternalRef('/' + (sectionUrl.path || ''), archive)
    }

    const resolveDef = async (section, def) => {
      if (!section?.m_def || def?.m_annotations?.h5web) return def

      const metainfo = await dataStore.getMetainfoAsync(systemMetainfoUrl)
      def = await metainfo.resolveDefinition(section.m_def)

      // look at base defs if h5web annotation missing
      if (!def?.m_annotations?.h5web) {
        for (const secDef of def._allBaseSections) {
          if (secDef?.m_annotations?.h5web) return secDef
        }
      }

      return def
    }

    const resolvePath = async (pathSegments, parent, def) => {
      if (!parent || !def) return []
      parent = await resolveSection(parent)
      def = await resolveDef(parent, def)
      if (!pathSegments.length) {
        const signal = def.m_annotations?.h5web?.[0]?.signal
        // resolve if signal is reference
        if (def?._properties[signal]?.type?.type_kind === 'reference') {
          const resolvedSignal = await resolveSection(parent[signal])
          return [[{[signal]: resolvedSignal}, def]]
        }
        return [[parent, def]]
      }
      const getDef = (def, key) => {
        const properties = def?._properties[key]
        return properties?.type?._referencedDefinition || properties?.sub_section
      }

      const segment = pathSegments[0]
      const rest = pathSegments.slice(1, pathSegments.length)
      if (segment === '*' || (segment === '**' && !rest.length)) {
        if (isArray(parent)) {
          const resolved = await Promise.all(parent.map(
            async child => await resolvePath(rest, child, def)))
          return resolved.flat()
        } else {
        const resolved = await Promise.all(Object.keys(parent).map(
          async key => await resolvePath(rest, parent[key], getDef(def, key))))
        return resolved.flat()
        }
      } else if (segment === '**') {
        let index = parseInt(rest[0])
        if (index < 0) index = parent.length + index
        const child = parent[index || rest[0]]
        if (child) {
          const resolved = await resolvePath(
            rest.slice(1, rest.length),
            child,
            isArray(parent) ? def : getDef(def, rest[0]))
          return resolved
        }
        if (isArray(parent)) {
          const resolved = await Promise.all(parent.map(
            async child => await resolvePath(pathSegments, child, def)))
          return resolved.flat()
        } else {
          const resolved = await Promise.all(Object.keys(parent).map(
            async key => await resolvePath(
            pathSegments, parent[key], getDef(def, key))))
          return resolved.flat()
        }
      } else {
        let index = parseInt(segment)
        if (index < 0) index = parent.length + index
        const child = parent[isArray(parent) ? index : segment]
        const child_def = isNaN(index) ? getDef(def, segment) : def
        const resolved = await resolvePath(rest, child, child_def)
        return resolved
      }
    }

    const resolveSections = async () => {
      const values = []
      let resolved = section
      const resolvedDef = await resolveDef(section, def)
      if (typeof section === 'string') resolved = await resolveSection(section)
      if (!resolved) throw new H5WebSectionViewError('Cannot resolve section.')
      if (!resolvedDef?.m_annotations?.h5web) {
        throw new H5WebSectionViewError('No h5web annotations found.')
      }
      values.push([resolved, resolvedDef])
      const paths = resolvedDef.m_annotations?.h5web?.[0].paths || []
      for (const path of paths) {
        const secs = await resolvePath(path.split('/'), resolved, resolvedDef)
        values.push(...secs)
      }
      setSections(values)
    }

    resolveSections()
  }, [section, def, url, dataStore])

  if (!sections || !sections.length) return null

  return <Compartment title={title}>
    {graphs}
  </Compartment>
})

H5WebSectionView.propTypes = ({
  section: PropTypes.object.isRequired,
  def: PropTypes.object.isRequired,
  uploadId: PropTypes.string.isRequired,
  title: PropTypes.string
})

export default withErrorHandler(
  (error) => error.name === 'H5WebSectionViewError'
    ? error.message
    : 'Could not load h5web view due to an unexpected error.'
)(H5WebSectionView)
