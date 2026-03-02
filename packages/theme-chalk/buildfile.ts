import path from 'path'
import { copyFile, mkdir, writeFile } from 'fs/promises'
import { epOutput, execCommand } from '@element-plus/build-utils'
import chalk from 'chalk'
import consola from 'consola'
import { transform } from 'lightningcss'
import { glob } from 'tinyglobby'
import { compileAsync } from 'sass-embedded'
import { chunk } from 'lodash-unified'

const distFolder = path.resolve(__dirname, 'dist')
const distBundle = path.resolve(epOutput, 'theme-chalk')

async function compress(filename: string, css: string) {
  const result = transform({
    filename,
    code: Buffer.from(css),
    minify: true,
    sourceMap: false,
    targets: {
      chrome: 85 << 16,
      firefox: 78 << 16,
      safari: 12 << 16,
      edge: 79 << 16,
    },
  })
  return result.code
}

const processfiles = async (scssFiles: string[]) => {
  const noElPrefixFile = /(index|base|display)/
  await mkdir(distFolder, { recursive: true })
  for (const scssFile of scssFiles) {
    const fullPath = path.resolve(__dirname, scssFile)
    const baseName = path.basename(scssFile, '.scss')

    const cssResult = await compileAsync(fullPath)
    const compressed = await compress(baseName, cssResult.css)

    const outputName = noElPrefixFile.test(baseName)
      ? `${baseName}.css`
      : `el-${baseName}.css`

    const outputPath = path.join(distFolder, outputName)
    await writeFile(outputPath, compressed)

    consola.success(
      `${chalk.cyan(outputName)}: ${chalk.yellow(
        cssResult.css.length / 1000
      )} KB -> ${chalk.green(compressed.length / 1000)} KB`
    )
  }
}

async function buildThemeChalk() {
  const scssFiles = await glob('src/*.scss', {
    cwd: __dirname,
    absolute: true,
  })
  const chunks = chunk(scssFiles, Math.ceil(scssFiles.length / 5))
  return Promise.all(chunks.map(processfiles))
}

async function buildDarkCssVars() {
  const darkFile = path.resolve(__dirname, 'src/dark/css-vars.scss')
  const cssResult = await compileAsync(darkFile)
  const compressed = await compress(darkFile, cssResult.css)

  const outputDir = path.join(distFolder, 'dark')
  await mkdir(outputDir, { recursive: true })
  await writeFile(path.join(outputDir, 'css-vars.css'), compressed)
}

async function copyThemeChalkBundle() {
  const files = await glob(['dist/**/*'], { cwd: __dirname })
  for (const file of files) {
    const source = path.resolve(__dirname, file)
    const dest = path.resolve(distBundle, path.relative('dist', file))
    await mkdir(path.dirname(dest), { recursive: true })
    await copyFile(source, dest)
  }
}

async function copyThemeChalkSource() {
  const destDir = path.resolve(distBundle, 'src')
  const files = await glob(['src/**/*'], { cwd: __dirname })

  for (const file of files) {
    const source = path.resolve(__dirname, file)
    const dest = path.resolve(destDir, path.relative('src', file))
    await mkdir(path.dirname(dest), { recursive: true })
    await copyFile(source, dest)
  }
}

const buildTheme = async () => {
  await execCommand(copyThemeChalkSource)
  await Promise.all([
    execCommand(buildThemeChalk),
    execCommand(buildDarkCssVars),
  ])
  await execCommand(copyThemeChalkBundle)
}

function main() {
  return execCommand(buildTheme)
}

main()
