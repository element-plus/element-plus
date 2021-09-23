import fs from 'fs'
import { epPackage } from './utils/paths'
import { cyan, red, yellow, green } from './utils/log'

const tagVersion = process.env.TAG_VERSION
const gitHead = process.env.GIT_HEAD
if (!tagVersion || !gitHead) {
  red(
    'No tag version or git head were found, make sure that you set the environment variable $TAG_VERSION \n'
  )
  process.exit(1)
}

cyan('Start updating version')

cyan(
  ['NOTICE:', `$TAG_VERSION: ${tagVersion}`, `$GIT_HEAD: ${gitHead}`].join('\n')
)
;(async () => {
  yellow(`Updating package.json for element-plus`)

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const json = require(epPackage)

  json.version = tagVersion
  json.gitHead = gitHead

  if (!(process.argv.includes('-d') || process.argv.includes('--dry-run'))) {
    try {
      await fs.promises.writeFile(epPackage, JSON.stringify(json, null, 2), {
        encoding: 'utf-8',
      })
    } catch (e) {
      process.exit(1)
    }
  } else {
    console.log(json)
  }

  green(`Version updated to ${tagVersion}`)

  green(`Git head updated to ${gitHead}`)
})()
