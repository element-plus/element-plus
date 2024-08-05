import process from 'process'
import path from 'path'
import { readFile } from 'fs/promises'
import consola from 'consola'
import * as vueCompiler from 'vue/compiler-sfc'
import glob from 'fast-glob'
import chalk from 'chalk'
import { Project, ts } from 'ts-morph'
import {
  buildOutput,
  epRoot,
  excludeFiles,
  pkgRoot,
  projRoot,
} from '@element-plus/build-utils'
import { pathRewriter } from '../utils'
import type { CompilerOptions, SourceFile } from 'ts-morph'

const TSCONFIG_PATH = path.resolve(projRoot, 'tsconfig.web.json')
const outDir = path.resolve(buildOutput, 'types')

/**
 * fork = require( https://github.com/egoist/vue-dts-gen/blob/main/src/index.ts
 */
export const generateTypesDefinitions = async () => {
  const compilerOptions: CompilerOptions = {
    emitDeclarationOnly: true,
    outDir,
    baseUrl: projRoot,
    preserveSymlinks: true,
    skipLibCheck: true,
    noImplicitAny: false,
  }
  const project = new Project({
    compilerOptions,
    tsConfigFilePath: TSCONFIG_PATH,
    skipAddingFilesFromTsConfig: true,
  })

  await addSourceFiles(project)
  consola.success('Added source files')

  typeCheck(project)
  consola.success('Type check passed!')

  await project.emit({
    emitOnlyDtsFiles: true,
    customTransformers: {
      // optional transformers to evaluate after built in .d.ts transformations
      afterDeclarations: [
        (context) => (sourceFile) => {
          return visitSourceFile(
            sourceFile,
            context,
            pkgNameStringLiteralRewrite
          )
        },
      ],
    },
  })

  function visitSourceFile(
    sourceFile: ts.SourceFile | ts.Bundle,
    context: ts.TransformationContext,
    visitNode: (node: ts.Node, context: ts.TransformationContext) => ts.Node
  ) {
    if (sourceFile.kind === ts.SyntaxKind.SourceFile) {
      const relativePath = path.relative(pkgRoot, sourceFile.fileName)
      consola.trace(
        chalk.yellow(
          `Generating definition for file: ${chalk.bold(relativePath)}`
        )
      )
      const result = visitNodeAndChildren(sourceFile) as ts.SourceFile
      consola.success(
        chalk.green(
          `Definition for file: ${chalk.bold(relativePath)} generated`
        )
      )
      return result
    } else {
      return sourceFile
    }
    function visitNodeAndChildren(node: ts.Node): ts.Node {
      return ts.visitEachChild(
        visitNode(node, context),
        visitNodeAndChildren,
        context
      )
    }
  }

  function pkgNameStringLiteralRewrite(
    node: ts.Node,
    context: ts.TransformationContext
  ) {
    if (ts.isStringLiteral(node)) {
      return context.factory.createStringLiteral(pathRewriter('esm')(node.text))
    }
    return node
  }
}

async function addSourceFiles(project: Project) {
  project.addSourceFileAtPath(path.resolve(projRoot, 'typings/env.d.ts'))

  const globSourceFile = '**/*.{js?(x),ts?(x),vue}'
  const filePaths = excludeFiles(
    await glob([globSourceFile, '!element-plus/**/*'], {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true,
    })
  )
  const epPaths = excludeFiles(
    await glob(globSourceFile, {
      cwd: epRoot,
      onlyFiles: true,
    })
  )

  const sourceFiles: SourceFile[] = []
  await Promise.all([
    ...filePaths.map(async (file) => {
      if (file.endsWith('.vue')) {
        const content = await readFile(file, 'utf-8')
        const hasTsNoCheck = content.includes('@ts-nocheck')

        const sfc = vueCompiler.parse(content)
        const { script, scriptSetup } = sfc.descriptor
        if (script || scriptSetup) {
          let content =
            (hasTsNoCheck ? '// @ts-nocheck\n' : '') + (script?.content ?? '')

          if (scriptSetup) {
            const compiled = vueCompiler.compileScript(sfc.descriptor, {
              id: 'xxx',
            })
            content += compiled.content
          }

          const lang = scriptSetup?.lang || script?.lang || 'js'
          const sourceFile = project.createSourceFile(
            `${path.relative(process.cwd(), file)}.${lang}`,
            content
          )
          sourceFiles.push(sourceFile)
        }
      } else {
        const sourceFile = project.addSourceFileAtPath(file)
        sourceFiles.push(sourceFile)
      }
    }),
    ...epPaths.map(async (file) => {
      const content = await readFile(path.resolve(epRoot, file), 'utf-8')
      sourceFiles.push(
        project.createSourceFile(path.resolve(pkgRoot, file), content)
      )
    }),
  ])

  return sourceFiles
}

function typeCheck(project: Project) {
  const diagnostics = project.getPreEmitDiagnostics()
  if (diagnostics.length > 0) {
    consola.error(project.formatDiagnosticsWithColorAndContext(diagnostics))
    const err = new Error('Failed to generate dts.')
    consola.error(err)
    throw err
  }
}
