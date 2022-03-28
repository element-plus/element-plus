import { writeFile } from 'fs/promises'
import consola from 'consola'
import chalk from 'chalk'
import { epPackage, getPackageManifest } from '@element-plus/build'

async function main() {
  const tagVersion = process.env.TAG_VERSION
  const gitHead = process.env.GIT_HEAD
  if (!tagVersion || !gitHead) {
    consola.error(
      new Error(
        'No tag version or git head were found, make sure that you set the environment variable $TAG_VERSION \n'
      )
    )
    process.exit(1)
  }

  consola.log(chalk.cyan('Start updating version'))
  consola.log(chalk.cyan(`$TAG_VERSION: ${tagVersion}`))
  consola.log(chalk.cyan(`$GIT_HEAD: ${gitHead}`))

  consola.debug(chalk.yellow(`Updating package.json for element-plus`))

  const json: Record<string, any> = getPackageManifest(epPackage)

  json.version = tagVersion
  json.gitHead = gitHead

  if (!(process.argv.includes('-d') || process.argv.includes('--dry-run'))) {
    try {
      await writeFile(epPackage, JSON.stringify(json, null, 2), {
        encoding: 'utf-8',
      })
    } catch {
      process.exit(1)
    }
  } else {
    consola.log(json)
  }

  consola.debug(chalk.green(`$GIT_HEAD: ${gitHead}`))
  consola.success(chalk.green(`Git head updated to ${gitHead}`))
}

main()
