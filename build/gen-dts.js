/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const fs = require('fs')
const { Project } = require('ts-morph')
const vueCompiler = require('@vue/compiler-sfc')
const klawSync = require('klaw-sync')
const chalk = require('chalk')

const TSCONFIG_PATH = path.resolve(__dirname, '../tsconfig.json')
const DEMO_RE = /\/demo\/\w+\.vue$/
const TEST_RE = /__test__|__tests__/
const excludedFiles = [
  'mock',
  'package.json',
  'spec',
  'test',
  'tests',
  'css',
  '.DS_Store',
]
const exclude = path => !excludedFiles.some(f => path.includes(f))

/**
 * fork = require( https://github.com/egoist/vue-dts-gen/blob/main/src/index.ts
 */
const genVueTypes = async (root, outDir = path.resolve(__dirname, '../dist/types')) => {
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
    },
    tsConfigFilePath: TSCONFIG_PATH,
    skipAddingFilesFromTsConfig: true,
  })

  const sourceFiles = []

  const filePaths = klawSync(root, {
    nodir: true,
  })
    .map(item => item.path)
    .filter(path => !DEMO_RE.test(path))
    .filter(path => !TEST_RE.test(path))
    .filter(exclude)

  await Promise.all(
    filePaths.map(async file => {
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
            content,
          )
          sourceFiles.push(sourceFile)
        }
      } else if (file.endsWith('.ts')) {
        const sourceFile = project.addSourceFileAtPath(file)
        sourceFiles.push(sourceFile)
      }
    }),
  )

  const diagnostics = project.getPreEmitDiagnostics()

  console.log(project.formatDiagnosticsWithColorAndContext(diagnostics))

  await project.emit({
    emitOnlyDtsFiles: true,
  })

  for (const sourceFile of sourceFiles) {
    console.log(
      chalk.yellow(
        'Generating definition for file: ' +
        chalk.bold(
          sourceFile.getBaseName(),
        ),
      ),
    )

    const emitOutput = sourceFile.getEmitOutput()
    for (const outputFile of emitOutput.getOutputFiles()) {
      const filepath = outputFile.getFilePath()

      await fs.promises.mkdir(path.dirname(filepath), {
        recursive: true,
      })

      await fs.promises.writeFile(filepath,
        outputFile
          .getText()
          .replaceAll('@element-plus/components', 'element-plus/es')
          .replaceAll('@element-plus/theme-chalk', 'element-plus/theme-chalk')
          .replaceAll('@element-plus', 'element-plus/es'),
        'utf8')
      console.log(
        chalk.green(
          'Definition for file: ' +
          chalk.bold(
            sourceFile.getBaseName(),
          ) +
          ' generated',
        ),
      )
    }
  }
}

module.exports = genVueTypes
