/* eslint-disable */

const path = require('path')
const fs = require('fs')
const chalk = require('chalk')
const glob = require('fast-glob')
const { Project } = require('ts-morph')
const { epRoot, buildOutput } = require('./paths')
const TSCONFIG_PATH = path.resolve(__dirname, '../tsconfig.dts.json')

const gen = async () => {
  const files = await glob(epRoot + '/*.ts')
  const project = new Project({
    compilerOptions: {
      allowJs: true,
      declaration: true,
      emitDeclarationOnly: true,
      noEmitOnError: false,
      outDir: path.resolve(buildOutput, 'entry/types'),
      skipLibCheck: true,
      esModuleInterop: true,
      target: "ESNEXT",
      downlevelIteration: true,
      // types: ["./typings", "esnext", "dom"],
    },
    skipFileDependencyResolution: true,
    tsConfigFilePath: TSCONFIG_PATH,
    skipAddingFilesFromTsConfig: true,
  })
  const sourceFiles = []
  files.map(f => {
    const sourceFile = project.addSourceFileAtPath(f)
    sourceFiles.push(sourceFile)
  })

  for (const sourceFile of sourceFiles) {

    console.log(chalk.yellow(
      `Emitting file: ${chalk.bold(sourceFile.getFilePath())}`
    ))
    const emitted = await sourceFile.emit()
    const emitOutput = sourceFile.getEmitOutput()
    for (const outputFile of emitOutput.getOutputFiles()) {
      const filepath = outputFile.getFilePath()

      await fs.promises.mkdir(path.dirname(filepath), {
        recursive: true,
      })
      await fs.promises.writeFile(filepath,
        outputFile
          .getText()
          .replaceAll('@element-plus', '.'),
          // .replaceAll('@element-plus/theme-chalk', 'element-plus/theme-chalk'),
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

module.exports = gen
