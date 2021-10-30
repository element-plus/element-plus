import { cyan, bold, yellow, green } from 'chalk'

import type { FileSizeReporter } from 'rollup-plugin-filesize'

export const reporter: FileSizeReporter = (opt, outputOptions, info) => {
  return `${cyan(bold(info.fileName))}: bundle size ${yellow(
    info.bundleSize
  )} -> minified ${green(info.minSize)}`
}
