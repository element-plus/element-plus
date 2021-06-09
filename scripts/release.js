/* eslint-disable */
// const args = require('minimist')(process.argv.slice(2))
const fs = require('fs')
const path = require('path')
// const semver = require('semver')
// const chalk = require('chalk')
// const { prompt } = require('enquirer')
// const packageJSON = require('../package.json')
// const currentVersion = packageJSON.version
// const { getPackagesSync } = require('@lerna/project')

// const getPkgRoot = pkg => path.resolve(__dirname, '../packages/' + pkg)

// const preId =
//   args.preid ||
//   (semver.prerelease(currentVersion) && semver.prerelease(currentVersion)[0])

// const inc = i => semver.inc(currentVersion, i, preId)

// const skippedPackages = []


// const versionIncrements = [
//   'patch',
//   'minor',
//   'major',
//   ...(preId ? ['prepatch', 'preminor', 'premajor', 'prerelease'] : []),
// ]

// const pkgs = getPackagesSync()
const packages = fs
  .readdirSync(path.resolve(__dirname, '../packages'))
  .filter(p => !p.endsWith('.ts') && !p.startsWith('.') && !p.startsWith('__'))


const walkPkg = pkg => {
  // const pkgRoot = getPkgRoot(pkg)
  // const pkgPath = path.resolve(pkgRoot, 'package.json')



  const json = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))

  fs.writeFileSync(pkgPath, JSON.stringify(json, null, 2) + '\n')

  // if (json.peerDependencies && json.peerDependencies.vue) {
  //   if (json.devDependencies) {
  //     json.devDependencies.vue = json.peerDependencies.vue
  //   } else {
  //     json.devDependencies = {
  //       vue: json.peerDependencies.vue,
  //     }
  //   }

  //   delete json.peerDependencies

  // }
}

// console.log()
// walkPkg(packages.filter(p => p.startsWith('popper'))[0])

packages.map(walkPkg)
