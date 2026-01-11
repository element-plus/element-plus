import path from 'path'
import { cp, readFile, rm, writeFile } from 'fs/promises'
import { glob } from 'tinyglobby'
import { buildOutput } from '@element-plus/build-utils'
import { pathRewriter, run } from '../utils'

export const generateTypesDefinitions = async () => {
  await run(
    'vue-tsc -p tsconfig.web.json --declaration --emitDeclarationOnly --declarationDir dist/types'
  )
  const typesDir = path.join(buildOutput, 'types', 'packages')
  const filePaths = await glob(`**/*.d.ts`, {
    cwd: typesDir,
    absolute: true,
  })
  const rewriteTasks = filePaths.map(async (filePath) => {
    const content = await readFile(filePath, 'utf8')
    await writeFile(filePath, pathRewriter('esm')(content), 'utf8')
  })
  await Promise.all(rewriteTasks)
  const sourceDir = path.join(typesDir, 'element-plus')
  await cp(sourceDir, typesDir, { recursive: true })
  await rm(sourceDir, { recursive: true })
}
