import path from 'path'
import { readFile, writeFile } from 'fs/promises'
import ts from 'typescript'
import glob from 'fast-glob'
import { copy, remove } from 'fs-extra'
import { Extractor, ExtractorConfig } from '@microsoft/api-extractor'
import { buildOutput, epRoot, projRoot } from '@element-plus/build-utils'
import { pathRewriter, run } from '../utils'

export const generateTypesDefinitions = async () => {
  const typesDir = path.join(buildOutput, 'types', 'packages')
  const entryDir = path.join(typesDir, 'element-plus')
  const entryFilePath = path.join(entryDir, 'index.d.ts')
  const tsDir = path.join(projRoot, 'node_modules', 'typescript')
  const tsConfigPath = path.join(projRoot, 'tsconfig.web.json')
  const tsConfig = ts.readConfigFile(tsConfigPath, ts.sys.readFile)

  // Generate .d.ts files
  await run(
    'npx vue-tsc -p tsconfig.web.json --declaration --emitDeclarationOnly --declarationDir dist/types'
  )

  // Rollup all .d.ts files into index.d.ts
  const extractorConfig = ExtractorConfig.prepare({
    configObject: {
      projectFolder: typesDir,
      mainEntryPointFilePath: entryFilePath,
      apiReport: {
        enabled: false,
      },
      docModel: {
        enabled: false,
      },
      tsdocMetadata: {
        enabled: false,
      },
      dtsRollup: {
        enabled: true,
        untrimmedFilePath: entryFilePath,
      },
      compiler: {
        overrideTsconfig: {
          compilerOptions: {
            lib: tsConfig.config.compilerOptions.lib,
            paths: {
              'element-plus': [entryFilePath],
              '@element-plus/*': [`${typesDir}/*`],
            },
            skipLibCheck: true,
          },
          include: [typesDir],
        },
      },
    },
    configObjectFullPath: undefined,
    packageJsonFullPath: path.join(epRoot, 'package.json'),
  })

  Extractor.invoke(extractorConfig, { typescriptCompilerFolder: tsDir })

  // Format the bundle file
  const fileContent = await readFile(entryFilePath, 'utf8')
  const sourceFile = ts.createSourceFile(
    entryFilePath,
    fileContent,
    tsConfig.config.compilerOptions.target
  )

  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed })
  const formattedText = printer.printFile(sourceFile)

  await writeFile(entryFilePath, formattedText, 'utf8')

  // "@element-plus" should be replaced with "element-plus"
  const filePaths = await glob(`**/*.d.ts`, {
    cwd: typesDir,
    absolute: true,
  })
  const rewriteTasks = filePaths.map(async (filePath) => {
    const content = await readFile(filePath, 'utf8')
    await writeFile(filePath, pathRewriter('esm')(content), 'utf8')
  })
  await Promise.all(rewriteTasks)

  await copy(entryDir, typesDir)
  await remove(entryDir)
}
