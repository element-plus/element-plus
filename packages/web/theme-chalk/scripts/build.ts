import { rm } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import glob from 'fast-glob'
import consola from 'consola'
import chalk from 'chalk'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import postcssPresetEnv from 'postcss-preset-env'
import { build as esbuild } from 'esbuild'
import { sassPlugin } from 'esbuild-sass-plugin'
import CleanCSS from 'clean-css'
import type { AcceptedPlugin } from 'postcss'

const pathDist = path.resolve(fileURLToPath(import.meta.url), '../../dist')

const formatSize = (size: number) =>
  `${(size / 1000).toFixed(2).padStart(6)} KB`

consola.log(chalk.cyan('Cleaning output...'))
await rm(pathDist, { recursive: true, force: true })
consola.success(chalk.cyan('Cleaned output'))

consola.log(chalk.cyan('Building theme chalk...'))
const opt = await esbuild({
  entryPoints: await glob([
    './src/*.{scss,sass}',
    './src/dark/css-vars.{scss,sass}',
  ]),
  outdir: pathDist,
  plugins: [
    sassPlugin({
      async transform(source, resolveDir, filePath) {
        const { css } = await postcss([
          autoprefixer,
          postcssPresetEnv({ stage: 0 }) as AcceptedPlugin,
        ]).process(source, { from: undefined })
        const { styles, warnings, stats } = await new CleanCSS({
          returnPromise: true,
        }).minify(css)
        warnings.forEach((warning) => consola.warn(warning))

        const fileName = path.relative(resolveDir, filePath)
        consola.debug(
          `${chalk.cyan(fileName.padStart(25))}: ${chalk.yellow(
            formatSize(stats.originalSize)
          )} => ${chalk.green(formatSize(stats.minifiedSize))}`
        )
        return styles
      },
    }),
  ],
  minify: true,
})
opt.warnings.forEach((message) => consola.warn(message.text))
consola.success(chalk.green('Build theme chalk complete!'))
