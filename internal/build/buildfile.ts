import path from 'path'
import { copyFile, cp, mkdir, readFile, rm, writeFile } from 'fs/promises'
import {
  buildOutput,
  epOutput,
  epPackage,
  execCommand,
  projRoot,
} from '@element-plus/build-utils'
import {
  buildConfig,
  buildFullBundle,
  buildHelper,
  buildModules,
  generateTypesDefinitions,
  run,
} from './src'

import type { Module } from './src'

async function parseCatalog(
  yamlPath: string
): Promise<Record<string, string>> {
  const content = await readFile(yamlPath, 'utf-8')
  const catalog: Record<string, string> = {}
  let inCatalog = false

  for (const line of content.split('\n')) {
    const trimmed = line.trim()
    if (trimmed === '' || trimmed.startsWith('#')) continue

    if (/^catalog:\s*$/.test(line)) {
      inCatalog = true
      continue
    }
    if (inCatalog && /^\S/.test(line)) break

    if (inCatalog) {
      const match = line.match(
        /^\s+(?:'([^']+)'|"([^"]+)"|(\S+))\s*:\s*(.+)$/
      )
      if (match) {
        const pkgName = match[1] || match[2] || match[3]
        let version = match[4].trim()
        const commentIdx = version.indexOf(' #')
        if (commentIdx !== -1) {
          version = version.substring(0, commentIdx).trim()
        }
        catalog[pkgName] = version
      }
    }
  }

  return catalog
}

async function copyPackageJson() {
  const pkg = JSON.parse(await readFile(epPackage, 'utf-8'))
  const catalog = await parseCatalog(
    path.resolve(projRoot, 'pnpm-workspace.yaml')
  )

  const depFields = [
    'dependencies',
    'peerDependencies',
    'devDependencies',
    'optionalDependencies',
  ] as const
  for (const field of depFields) {
    const deps = pkg[field]
    if (!deps) continue
    for (const [name, version] of Object.entries(deps)) {
      if (typeof version === 'string' && version.startsWith('catalog:')) {
        if (catalog[name]) {
          deps[name] = catalog[name]
        } else {
          throw new Error(`Unresolved catalog reference: ${name}@${version}`)
        }
      }
    }
  }

  await writeFile(
    path.join(epOutput, 'package.json'),
    JSON.stringify(pkg, null, 2) + '\n',
    'utf-8'
  )
}

const copyFiles = () =>
  Promise.all([
    copyPackageJson(),
    copyFile(
      path.resolve(projRoot, 'README.md'),
      path.resolve(epOutput, 'README.md')
    ),
    copyFile(
      path.resolve(projRoot, 'typings', 'global.d.ts'),
      path.resolve(epOutput, 'global.d.ts')
    ),
    copyFile(
      path.resolve(projRoot, 'LICENSE'),
      path.resolve(epOutput, 'LICENSE')
    ),
  ])

const copyTypesDefinitions = () => {
  const src = path.resolve(buildOutput, 'types')
  const copyTypes = (module: Module) => {
    return execCommand(
      () => cp(src, buildConfig[module].output.path, { recursive: true }),
      `copyTypes:${module}`
    )
  }

  return Promise.all([copyTypes('esm'), copyTypes('cjs')])
}

const copyFullStyle = async () => {
  await mkdir(path.resolve(epOutput, 'dist'), { recursive: true })
  await copyFile(
    path.resolve(epOutput, 'theme-chalk/index.css'),
    path.resolve(epOutput, 'dist/index.css')
  )
}

const buildStyle = async () => {
  await run('pnpm run -C packages/theme-chalk build')
  await copyFullStyle()
}

const makeOutput = async () => {
  await execCommand(() => run('pnpm run clean'), 'clean output')
  await execCommand(() => mkdir(epOutput, { recursive: true }), 'create output')
}

const cleanupTypesDefinitions = () => {
  return rm(path.resolve(buildOutput, 'types'), { recursive: true })
}

async function build() {
  await makeOutput()
  buildHelper()
  await Promise.all([
    execCommand(generateTypesDefinitions),
    execCommand(buildModules),
    execCommand(buildFullBundle),
    execCommand(buildStyle),
    execCommand(copyFiles),
  ])
  await execCommand(copyTypesDefinitions)
  await execCommand(cleanupTypesDefinitions)
}

function main() {
  return execCommand(build)
}

main()
