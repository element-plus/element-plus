import path from 'path'
import fs from 'fs'
import { Project, SourceFile } from 'ts-morph'
import vueCompiler from '@vue/compiler-sfc'
import { sync as globSync } from 'fast-glob'
import chalk from 'chalk'

const TSCONFIG_PATH = path.resolve(__dirname, '../tsconfig.json')

/**
 * fork = require( https://github.com/egoist/vue-dts-gen/blob/main/src/index.ts
 */
const genVueTypes = async (
  root: string,
  outDir = path.resolve(__dirname, '../dist/types')
) => {
  const project = new Project({
    compilerOptions: {
      allowJs: true,
      declaration: true,
      emitDeclarationOnly: true,
      noEmitOnError: true,
      outDir,
      baseUrl: path.resolve(__dirname, '../'),
      paths: {
        '@element-plus/*': ['packages/*'],
      },
      skipLibCheck: true,
      strict: false,
    },
    tsConfigFilePath: TSCONFIG_PATH,
    skipAddingFilesFromTsConfig: true,
  })

  const sourceFiles: SourceFile[] = []

  const excludedFiles = [
    /\/demo\/\w+\.vue$/,
    /__test__|__tests__/,
    'mock',
    'package.json',
    'spec',
    'test',
    'tests',
    'css',
    '.DS_Store',
  ]
  const filePaths = globSync('**/*', {
    cwd: root,
    onlyFiles: true,
    absolute: true,
  }).filter(
    (path) =>
      !excludedFiles.some((f) =>
        f instanceof RegExp ? f.test(path) : path.includes(f)
      )
  )

  await Promise.all(
    filePaths.map(async (file) => {
      if (file.endsWith('.vue')) {
        const content = await fs.promises.readFile(file, 'utf-8')
        const sfc = vueCompiler.parse(content)
        const { script, scriptSetup } = sfc.descriptor
        if (script || scriptSetup) {
          let content = ''
          let isTS = false
          if (script && script.content) {
            content += script.content
            if (script.lang === 'ts') isTS = true
          }
          if (scriptSetup) {
            const compiled = vueCompiler.compileScript(sfc.descriptor, {
              id: 'xxx',
            })
            content += compiled.content
            if (scriptSetup.lang === 'ts') isTS = true
          }
          const sourceFile = project.createSourceFile(
            path.relative(process.cwd(), file) + (isTS ? '.ts' : '.js'),
            content
          )
          sourceFiles.push(sourceFile)
        }
      } else if (file.endsWith('.ts')) {
        const sourceFile = project.addSourceFileAtPath(file)
        sourceFiles.push(sourceFile)
      }
    })
  )

  const diagnostics = project.getPreEmitDiagnostics()

  console.log(project.formatDiagnosticsWithColorAndContext(diagnostics))

  await project.emit({
    emitOnlyDtsFiles: true,
  })

  for (const sourceFile of sourceFiles) {
    const relativePath = path.relative(root, sourceFile.getFilePath())
    console.log(
      chalk.yellow(
        `Generating definition for file: ${chalk.bold(relativePath)}`
      )
    )

    const emitOutput = sourceFile.getEmitOutput()
    for (const outputFile of emitOutput.getOutputFiles()) {
      const filepath = outputFile.getFilePath()

      await fs.promises.mkdir(path.dirname(filepath), {
        recursive: true,
      })

      await fs.promises.writeFile(
        filepath,
        outputFile
          .getText()
          .replace(
            new RegExp('@element-plus/components', 'g'),
            'element-plus/es'
          )
          .replace(
            new RegExp('@element-plus/theme-chalk', 'g'),
            'element-plus/theme-chalk'
          )
          .replace(new RegExp('@element-plus', 'g'), 'element-plus/es'),
        'utf8'
      )
      console.log(
        chalk.green(
          'Definition for file: ' +
            chalk.bold(sourceFile.getBaseName()) +
            ' generated'
        )
      )
    }
  }
}

export default genVueTypes
