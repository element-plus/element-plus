import { writeFile } from 'fs/promises'
import path from 'path'
import consola from 'consola'
import { epRoot } from '@element-plus/build-utils'
import pkg from '../packages/element-plus/package.json' // need to be checked

function getVersion() {
  const tagVer = process.env.TAG_VERSION
  if (tagVer) {
    return tagVer.startsWith('v') ? tagVer.slice(1) : tagVer
  } else {
    return pkg.version
  }
}

const version = getVersion()

async function main() {
  consola.info(`Version: ${version}`)
  await writeFile(
    path.resolve(epRoot, 'version.ts'),
    `export const version = '${version}'\n`
  )
}

main()
