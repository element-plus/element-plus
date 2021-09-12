import chalk from 'chalk'
import path from 'path'
import fs from 'fs'
import { epRoot } from './paths'

const tagVersion = process.env.TAG_VERSION
const gitHead = process.env.GIT_HEAD
if (!tagVersion || !gitHead) {
  console.log(
    chalk.red(
      'No tag version or git head were found, make sure that you set the environment variable $TAG_VERSION \n'
    )
  )
  process.exit(1)
}

console.log(chalk.cyan('Start updating version'))

console.log(
  chalk.cyan(
    ['NOTICE:', `$TAG_VERSION: ${tagVersion}`, `$GIT_HEAD: ${gitHead}`].join(
      '\n'
    )
  )
)
;(async () => {
  console.log(chalk.yellow(`Updating package.json for element-plus`))

  const pkgJson = path.resolve(epRoot, './package.json')
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const json = require(pkgJson)

  json.version = tagVersion
  json.gitHead = gitHead

  if (!(process.argv.includes('-d') || process.argv.includes('--dry-run'))) {
    try {
      await fs.promises.writeFile(pkgJson, JSON.stringify(json, null, 2), {
        encoding: 'utf-8',
      })
    } catch (e) {
      process.exit(1)
    }
  } else {
    console.log(json)
  }

  console.log(chalk.green(`Version updated to ${tagVersion}`))

  console.log(chalk.green(`Git head updated to ${gitHead}`))
})()
