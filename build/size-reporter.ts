import chalk from 'chalk'

export default async function reporter(opt, outputOptions, info) {
  const values = [
    // ...(outputOptions.file || outputOptions.dest
    //   ? [
    //     `${title('Destination: ')}${value(
    //       outputOptions.file || outputOptions.dest,
    //     )}`,
    //   ]
    // :
    info.fileName ? [`${outputOptions.file.split('packages/').pop()}`] : [],
    // )
    // ...(info.bundleSizeBefore
    //   ? [
    //     `${value(info.bundleSize)} (was ${value(
    //       info.bundleSizeBefore,
    //     )}${info.lastVersion
    //       ? ` in version ${info.lastVersion}`
    //       : ' in last build'
    //     })`,
    //   ]
    //   :
    [`${info.bundleSize}`],
    // ),
    ...(info.minSize
      ? // info.minSizeBefore
        //   ? [
        //     `${title('Minified Size: ')} ${value(info.minSize)} (was ${value(
        //       info.minSizeBefore,
        //     )}${info.lastVersion
        //       ? ` in version ${info.lastVersion}`
        //       : ' in last build'
        //     })`,
        //   ]
        //   :
        [`${info.minSize}`]
      : []),
    // ...(info.gzipSize
    //   ? info.gzipSizeBefore
    //     ? [
    //       `${title('Gzipped Size: ')} ${value(info.gzipSize)} (was ${value(
    //         info.gzipSizeBefore,
    //       )}${info.lastVersion
    //         ? ` in version ${info.lastVersion}`
    //         : ' in last build'
    //       })`,
    //     ]
    //     : [`${title('Gzipped Size: ')} ${value(info.gzipSize)}`]
    //   : []),
    // ...(info.brotliSize
    //   ? info.brotliSizeBefore
    //     ? [
    //       `${title('Brotli size: ')}${value(info.brotliSize)} (was ${value(
    //         info.brotliSizeBefore,
    //       )}${info.lastVersion
    //         ? ` in version ${info.lastVersion}`
    //         : ' in last build'
    //       })`,
    //     ]
    //     : [`${title('Brotli size: ')}${value(info.brotliSize)}`]
    //   : []),
  ]

  return `${chalk.cyan(chalk.bold(values[0]))}: bundle size ${chalk.yellow(
    values[1]
  )} -> minified ${chalk.green(values[2])}`
}
