import path from 'path'
import os from 'os'
import {
  arrayToRegExp,
  getTypeSymbol,
  hyphenate,
  isCommonType,
  isUnionType,
  main,
} from 'components-helper'
import {
  epOutput,
  epPackage,
  getPackageManifest,
  projRoot,
} from '@element-plus/build-utils'

import type { TaskFunction } from 'gulp'
import type {
  ReAttribute,
  ReComponentName,
  ReDocUrl,
  ReWebTypesSource,
  ReWebTypesType,
} from 'components-helper'

const typeMap = {
  vue: ['Component', 'VNode', 'CSSProperties', 'StyleValue'],
}

const removeTag = (str: string) => {
  return str.replaceAll(/\^\([^)]*\)/g, '').trim()
}

const reComponentName: ReComponentName = (title) => {
  return `el-${hyphenate(removeTag(title)).replace(/[ ]+/g, '-')}`
}

const reDocUrl: ReDocUrl = (fileName, header) => {
  const docs = 'https://element-plus.org/en-US/component/'
  const _header = header
    ? removeTag(header).replaceAll(/\s+/g, '-').toLowerCase()
    : ''

  return `${docs}${fileName}.html${_header ? '#' : ''}${_header}`
}

const reWebTypesSource: ReWebTypesSource = (title) => {
  const symbol = `El${removeTag(title)
    .replaceAll(/-/g, ' ')
    .replaceAll(/^\w|\s+\w/g, (item) => {
      return item.trim().toUpperCase()
    })}`

  return { symbol }
}

const reAttribute: ReAttribute = (value, key) => {
  const str = removeTag(value)
    .replaceAll(/<del>.*<\/del>/g, '')
    .replace(/^\*\*(.*)\*\*$/, '$1')
    .replace(/^`(.*)`$/, '$1')
    .replace(/^~~(.*)~~$/, '')

  if (key === 'Name' && /^(-|—)$/.test(str)) {
    return 'default'
  } else if (str === '' || /^(-|—)$/.test(str)) {
    return undefined
  } else if (key === 'Name' && /v-model:(.+)/.test(str)) {
    const _str = str.match(/v-model:(.+)/)
    return _str ? _str[1] : undefined
  } else if (key === 'Name' && /v-model/.test(str)) {
    return 'model-value'
  } else if (key === 'Name') {
    return str
      .replaceAll(/\s*[\\*]\s*/g, '')
      .replaceAll(/\s*<.*>\s*/g, '')
      .replaceAll(/\s*\(.*\)\s*/g, '')
      .replaceAll(/\B([A-Z])/g, '-$1')
      .toLowerCase()
  } else if (key === 'Type') {
    return rewriteType(str)
      .replaceAll(/\bfunction(\(.*\))?(:\s*\w+)?\b/gi, 'Function')
      .replaceAll(/\([^)]*\)(?!\s*=>)/g, '')
      .replaceAll(/(<[^>]*>|\{[^}]*}|\([^)]*\))/g, (item) => {
        return item.replaceAll(/(\/|\|)/g, '=_0!')
      })
      .replaceAll(/(\b\w+)\s*\|/g, '$1 /')
      .replaceAll(/\|\s*(\b\w+)/g, '/ $1')
      .replaceAll(/=_0!/g, '|')
  } else if (key === 'Accepted Values') {
    return /\[.+\]\(.+\)/.test(str) || /^\*$/.test(str)
      ? undefined
      : str.replaceAll(/`/g, '').replaceAll(/\([^)]*\)(?!\s*=>)/g, '')
  } else if (key === 'Subtags') {
    return str
      ? `el-${str
          .replaceAll(/\s*\/\s*/g, '/el-')
          .replaceAll(/\B([A-Z])/g, '-$1')
          .replaceAll(/\s+/g, '-')
          .toLowerCase()}`
      : undefined
  } else {
    return str
  }
}

const reWebTypesType: ReWebTypesType = (type) => {
  const isPublicType = isCommonType(type)
  const isNumber = /^\d+$/.test(type)
  const symbol = getTypeSymbol(type)
  const isUnion = isUnionType(symbol)
  const module = findModule(symbol)

  return isPublicType || isNumber || !symbol || isUnion
    ? type
    : { name: type, source: { symbol, module } }
}

const findModule = (type: string): string | undefined => {
  let result: string | undefined = undefined

  for (const key in typeMap) {
    const regExp = arrayToRegExp(typeMap[key as keyof typeof typeMap])
    const inModule = regExp.test(getTypeSymbol(type))

    if (inModule) {
      result = key
      break
    }
  }

  return result
}

const rewriteType = (str: string): string => {
  if (/\^\[([^\]]*)\](`[^`]*`)?/.test(str)) {
    return str
      .replaceAll(/\^\[([^\]]*)\](`[^`]*`)?/g, (_, type, details) => {
        return details ? details.replace(/^`(.*)`$/, '$1') : type
      })
      .replaceAll(/\[[^\]]*\]\([^)]*\)/g, '')
  } else if (/<.*>/.test(str)) {
    const list = str.matchAll(/<(\w+)Type\s([^>]*)>/g)

    return Array.from(list, (item) => {
      const type = item ? item[1] : ''
      const params = item ? item[2] : ''

      switch (type) {
        case 'External':
          return ''
        case 'Enum':
          return transformEnum(params)
        case 'Function':
          return transformFunction(params)
        default:
          return type.toLowerCase()
      }
    })
      .filter((item) => item)
      .join('|')
  } else {
    return str
  }
}

const transformEnum = (str: string) => {
  const result = str.match(/:values="\[([^\]]*)\]/)
  return result ? result[1].replaceAll(/,\s*/g, ' | ') : 'string'
}

const transformFunction = (str: string) => {
  const paramsStr = str.match(/:params="\[(.*)\]"/)
  const returnsStr = str.match(/:returns="(.*)"/)
  let params = ''
  let returns = ''

  if (paramsStr) {
    const list = paramsStr[0].matchAll(/\['([^\]]*)'\]/g)

    params = Array.from(list, (item) => {
      return item[1].replaceAll(/',\s*'/g, ': ')
    }).join(', ')
  }

  returns = returnsStr ? returnsStr[1] : 'void'

  return `(${params}) => ${returns}`
}

export const buildHelper: TaskFunction = (done) => {
  const { name, version } = getPackageManifest(epPackage)

  const tagVer = process.env.TAG_VERSION
  const _version = tagVer
    ? tagVer.startsWith('v')
      ? tagVer.slice(1)
      : tagVer
    : version!
  let entry = `${path.resolve(
    projRoot,
    'docs/en-US/component'
  )}/!(datetime-picker|message-box|message).md`
  if (os.platform() === 'win32') {
    entry = entry.replace(/\\/g, '/')
  }

  main({
    name: name!,
    version: _version,
    entry,
    outDir: epOutput,
    reComponentName,
    reDocUrl,
    reWebTypesSource,
    reAttribute,
    reWebTypesType,
    props: 'Attributes',
    propsOptions: 'Accepted Values',
    tableRegExp:
      /#+\s+(.*\s*Attributes|.*\s*Events|.*\s*Slots|.*\s*Directives)\s*\n+(\|?.+\|.+)\n\|?\s*:?-+:?\s*\|.+((\n\|?.+\|.+)+)/g,
  })

  done()
}
