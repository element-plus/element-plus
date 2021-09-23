import path from 'path'
import fs from 'fs'
import vueCompiler from '@vue/compiler-sfc'
import { Project } from 'ts-morph'
import { sync as globSync } from 'fast-glob'
import { bold } from 'chalk'

import { green, yellow } from './utils'

import type { SourceFile } from 'ts-morph'

const TSCONFIG_PATH = path.resolve(__dirname, '../tsconfig.json')

/**
 * fork = require( https://github.com/egoist/vue-dts-gen/blob/main/src/index.ts
 */
export const genTypes = async (
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
    'node_modules',
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

  const tasks = sourceFiles.map(async (sourceFile) => {
    const relativePath = path.relative(root, sourceFile.getFilePath())
    yellow(`Generating definition for file: ${bold(relativePath)}`)

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
      green(`Definition for file: ${bold(relativePath)} generated`)
    }
  })

  await Promise.all(tasks)
}

export default genTypes
