/* eslint-disable @typescript-eslint/no-var-requires */
import helper from 'components-helper'
import path from 'path'
import { epRoot } from './paths'

const { name, version } = require(path.resolve(epRoot, './package.json'))

import icon from '../website/icon.json'
const icons = icon.map((item) => 'el-icon-' + item).join('/')
const tagVer = process.env.TAG_VERSION
const _version = tagVer
  ? tagVer.startsWith('v')
    ? tagVer.slice(1)
    : tagVer
  : version

helper({
  name,
  version: _version,
  entry:
    'website/docs/en-US/!(custom-theme|datetime-picker|i18n|installation|message-box|message|migration-from-2.x|notification|quickstart|transition|typography).md',
  outDir: 'dist/element-plus',
  reComponentName,
  reDocUrl,
  reAttribute,
  reWebTypesSource,
  props: 'Attributes',
  propsName: 'Attribute',
  propsOptions: 'Accepted Values',
  eventsName: 'Event Name',
  tableRegExp:
    '#+\\s+(.*\\s*Attributes|.*\\s*Events|.*\\s*Slots|.*\\s*Directives)\\s*\\n+(\\|?.+\\|.+)\\n\\|?\\s*:?-+:?\\s*\\|.+((\\n\\|?.+\\|.+)+)',
})

function reComponentName(title) {
  return (
    'el-' +
    title
      .replace(/\B([A-Z])/g, '-$1')
      .replace(/[ ]+/g, '-')
      .toLowerCase()
  )
}

function reWebTypesSource(title) {
  const symbol =
    'EL' +
    title
      .replace(/-/, ' ')
      .replace(/^\w|\s+\w/g, (item) => item.trim().toUpperCase())
  return { symbol }
}

function reDocUrl(fileName) {
  const docs = 'https://element-plus.org/#/en-US/component/'

  return docs + fileName
}

function reAttribute(value, key, item) {
  const _value = value.match(/^\*\*(.*)\*\*$/)
  const str = _value ? _value[1] : value

  if (icons && key === 'Accepted Values' && /icon/i.test(item[0])) {
    return icons
  } else if (key === 'Name' && /^(-|—)$/.test(str)) {
    return 'default'
  } else if (str === '' || /^(-|—)$/.test(str)) {
    return undefined
  } else if (key === 'Attribute' && /v-model:(.+)/.test(str)) {
    const _str = str.match(/v-model:(.+)/)
    return _str ? _str[1] : undefined
  } else if (key === 'Attribute' && /v-model/.test(str)) {
    return 'model-value'
  } else if (key === 'Attribute') {
    return str.replace(/\B([A-Z])/g, '-$1').toLowerCase()
  } else if (key === 'Type') {
    return str
      .replace(/\s*\/\s*/g, '|')
      .replace(/\s*,\s*/g, '|')
      .replace(/\(.*\)/g, '')
      .toLowerCase()
  } else if (key === 'Accepted Values') {
    return /\[.+\]\(.+\)/.test(str) || /^\*$/.test(str)
      ? undefined
      : str.replace(/`/g, '')
  } else if (key === 'Subtags') {
    return str
      ? str
          .split('/')
          .map((name) => reComponentName(name.trim()))
          .join('/')
      : str
  } else {
    return str
  }
}
