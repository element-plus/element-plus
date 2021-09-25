import path from 'path'
import fs from 'fs/promises'
import * as vueCompiler from '@vue/compiler-sfc'
import { Project } from 'ts-morph'
import glob from 'fast-glob'
import { bold } from 'chalk'

import { green, yellow } from './utils/log'
import { buildOutput, compRoot, projRoot } from './utils/paths'

import type { SourceFile } from 'ts-morph'

const TSCONFIG_PATH = path.resolve(projRoot, 'tsconfig.json')
const outDir = path.resolve(buildOutput, 'types')

/**
 * fork = require( https://github.com/egoist/vue-dts-gen/blob/main/src/index.ts
 */
export const genComponentTypes = async () => {
  const project = new Project({
    compilerOptions: {
      allowJs: true,
      declaration: true,
      emitDeclarationOnly: true,
      noEmitOnError: true,
      outDir,
      baseUrl: projRoot,
      paths: {
        '@element-plus/*': ['packages/*'],
      },
      skipLibCheck: true,
      strict: false,
    },
    tsConfigFilePath: TSCONFIG_PATH,
    skipAddingFilesFromTsConfig: true,
  })

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
  const filePaths = (
    await glob('**/*', {
      cwd: compRoot,
      onlyFiles: true,
      absolute: true,
    })
  ).filter(
    (path) =>
      !excludedFiles.some((f) =>
        f instanceof RegExp ? f.test(path) : path.includes(f)
      )
  )

  const sourceFiles: SourceFile[] = []
  await Promise.all(
    filePaths.map(async (file) => {
      if (file.endsWith('.vue')) {
        const content = await fs.readFile(file, 'utf-8')
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
    const relativePath = path.relative(compRoot, sourceFile.getFilePath())
    yellow(`Generating definition for file: ${bold(relativePath)}`)

    const emitOutput = sourceFile.getEmitOutput()
    const tasks = emitOutput.getOutputFiles().map(async (outputFile) => {
      const filepath = outputFile.getFilePath()
      await fs.mkdir(path.dirname(filepath), {
        recursive: true,
      })

      await fs.writeFile(
        filepath,
        outputFile
          .getText()
          .replaceAll('@element-plus/components', 'element-plus/es')
          .replaceAll('@element-plus/theme-chalk', 'element-plus/theme-chalk')
          .replaceAll('@element-plus', 'element-plus/es'),
        'utf8'
      )

      green(`Definition for file: ${bold(relativePath)} generated`)
    })
    await Promise.all(tasks)
  })

  await Promise.all(tasks)
}
