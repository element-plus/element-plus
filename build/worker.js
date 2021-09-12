/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const { parentPort, workerData } = require('worker_threads')
const { Project } = require('ts-morph')
const chalk = require('chalk')
const vueCompiler = require('@vue/compiler-sfc')

const TSCONFIG_PATH = path.resolve(process.cwd(), 'tsconfig.dts.json')

;(async () => {
  const { filePaths, workerId, outDir } = workerData
  let messagePort
  parentPort.once('message', async ({ port }) => {
    messagePort = port

    messagePort.postMessage({
      type: 'log',
      message: chalk.yellow(
        `Worker: ${chalk.bold(workerData.workerId)} started`
      ),
    })

    const project = new Project({
      compilerOptions: {
        outDir,
      },
      tsConfigFilePath: TSCONFIG_PATH,
      skipAddingFilesFromTsConfig: true,
    })

    const sourceFiles = []

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
    await project.emit({
      emitOnlyDtsFiles: true,
    })

    messagePort.postMessage({
      type: 'log',
      message: project.formatDiagnosticsWithColorAndContext(diagnostics),
    })

    for (const sourceFile of sourceFiles) {
      messagePort.postMessage({
        type: 'log',
        message: chalk.yellow(
          'Generating definition for file: ' +
            chalk.bold(sourceFile.getFilePath())
        ),
      })

      // console.log(sourceFile.getStructure())
      const ElementPlusSign = '@element-plus/'

      sourceFile
        .getImportDeclarations((dec) =>
          dec.getModuleSpecifierValue().startsWith(ElementPlusSign)
        )
        .map(modifySpecifier)

      function modifySpecifier(d) {
        const replaceTo =
          'element-plus/es/' +
          d.getModuleSpecifierValue().slice(ElementPlusSign.length)
        d.setModuleSpecifier(replaceTo)
      }

      // console.log(sourceFile.getFilePath())

      const emitOutput = sourceFile.getEmitOutput({
        emitOnlyDtsFiles: true,
      })
      for (const outputFile of emitOutput.getOutputFiles()) {
        // console.log(outputFile)
        const filepath = outputFile.getFilePath()

        await fs.promises.mkdir(path.dirname(filepath), {
          recursive: true,
        })

        await fs.promises.writeFile(filepath, outputFile.getText(), 'utf8')
        messagePort.postMessage({
          type: 'log',
          message: chalk.green(
            'Definition for file: ' +
              chalk.bold(sourceFile.getBaseName()) +
              ' generated'
          ),
        })
      }

      messagePort.postMessage({ type: 'fulfill', message: workerId })
    }
  })
  // parentPort.emit
})()
