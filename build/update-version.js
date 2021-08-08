/* eslint-disable */
const chalk = require('chalk')
const path = require('path')
const fs = require('fs')
const pkgs = require('./getPkgs')

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

console.log(chalk.cyan([
  'NOTICE:',
  `$TAG_VERSION: ${tagVersion}`,
  `$GIT_HEAD: ${gitHead}`
].join('\n')))

  ; (async () => {
    await Promise.all(pkgs.map(async p => {
      console.log(chalk.yellow(`Updating package.json for package: ${p.name
        }`))

      const pkgRoot = p.resolved.fetchSpec
      const pkgJson = path.resolve(pkgRoot, './package.json')
      const json = require(pkgJson)

      json.version = tagVersion
      json.gitHead = gitHead
      const { dependencies } = json
      Object.keys(dependencies).map(d => {
        if(pkgs.some(({ name }) => name === d)) {
          dependencies[d] = `^${tagVersion}`
        }
      })

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

      console.log(chalk.green(`Package ${p.name} updated`))
    }))

    console.log(chalk.green('Version updated'))
  })()
