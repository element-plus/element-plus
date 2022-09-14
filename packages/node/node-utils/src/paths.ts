import { resolve } from 'path'

export const projRoot = resolve(__dirname, '../../../..')
export const pkgRoot = resolve(projRoot, 'packages/web')
export const themeRoot = resolve(pkgRoot, 'theme-chalk')
export const localeRoot = resolve(pkgRoot, 'locale')
export const epRoot = resolve(pkgRoot, 'element-plus')
export const epPackage = resolve(epRoot, 'package.json')
export const buildRoot = resolve(projRoot, 'internal', 'build')

// Docs
export const docsDirName = 'docs'
export const docRoot = resolve(projRoot, docsDirName)
export const docPackage = resolve(docRoot, 'package.json')
export const vpRoot = resolve(docRoot, '.vitepress')

/** `/dist` */
export const buildOutput = resolve(projRoot, 'dist')
/** `/dist/element-plus` */
export const epOutput = resolve(buildOutput, 'element-plus')
