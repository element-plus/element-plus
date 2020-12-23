/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const tagVer = process.env.TAG_VERSION
const version = tagVer.startsWith('v') ? tagVer.slice(1) : tagVer
fs.writeFileSync(path.resolve(__dirname, '../packages/element-plus/version.ts'), `export const version = '${version}'
`)
