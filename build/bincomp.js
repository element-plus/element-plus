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
const STEP = 4
const START = 0
const buildChild = (start, end) => {
  const c1 = cp.spawn('node', ['./build/build.component.js', start, end])
  c1.stdout.on('data', function (data) {
    spinner.info(`${chalk.blue(data)}`)
  })

  c1.stderr.on('data', function (data) {
    spinner.warn(`${chalk.red(data)}`)
  })

  c1.on('close', function (code) {
    start += STEP
    end += STEP
    if (start > pkgs.length && end > pkgs.length) {
      spinner.succeed(`${chalk.green('Build done. Exit code ' + code)}`)
      return
    }
    buildChild(start, end)
  })
}

/**
 * @link https://github.com/ezolenko/rollup-plugin-typescript2/issues/177
 */
buildChild(START, STEP)
