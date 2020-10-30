/* eslint-disable */
const cp = require('child_process')
const { getPackagesSync } =  require('@lerna/project')
const ora = require('ora')
const chalk = require('chalk')

const spinner = ora(`${chalk.blue('Building...')}`).start()
const pkgs = getPackagesSync()
  .map(pkg => pkg.name)
  .filter(name =>
    name.includes('@element-plus') &&
    !name.includes('transition') &&
    !name.includes('utils'),
  )

const buildChild = (a, b) => {
  const c1 = cp.spawn('node', ['./build/build.component.js', a, b])
  c1.stdout.on('data', function (data) {
    spinner.info(`${chalk.blue(data)}`)
  })

  c1.stderr.on('data', function (data) {
    spinner.warn(`${chalk.red(data)}`)
  })

  c1.on('close', function (code) {
    a += 5
    b += 5
    if (a > pkgs.length && b > pkgs.length) {
      spinner.succeed(`${chalk.green('Build done. Exit code ' + code)}`)
      return
    }
    buildChild(a, b)
  })
}

/**
 * @link https://github.com/ezolenko/rollup-plugin-typescript2/issues/177
 */
buildChild(0, 5)
