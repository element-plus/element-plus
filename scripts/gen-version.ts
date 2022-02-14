import fs from 'fs'
import path from 'path'
import pkg from '../packages/element-plus/package.json' // need to be checked
const tagVer = process.env.TAG_VERSION
let version = ''

if (tagVer) {
  version = tagVer.startsWith('v') ? tagVer.slice(1) : tagVer
} else {
  version = pkg.version
}

fs.writeFileSync(
  path.resolve(__dirname, '../packages/element-plus/version.ts'),
  `export const version = '${version}'
`
)
