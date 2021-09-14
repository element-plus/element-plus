import chalk from 'chalk'
import { FileSizeReporter } from 'rollup-plugin-filesize'

const reporter: FileSizeReporter = (opt, outputOptions, info) => {
  const values = [
    info.fileName ? [`${outputOptions.file?.split('packages/').pop()}`] : [],

    [`${info.bundleSize}`],
    ...(info.minSize ? [`${info.minSize}`] : []),
  ]

  return `${chalk.cyan(chalk.bold(values[0]))}: bundle size ${chalk.yellow(
    values[1]
  )} -> minified ${chalk.green(values[2])}`
}

export default reporter
