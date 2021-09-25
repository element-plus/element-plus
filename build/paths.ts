import path from 'path'

export const projRoot = path.resolve(__dirname, '../')
export const pkgRoot = path.resolve(projRoot, './packages')
export const compRoot = path.resolve(pkgRoot, './components')
export const themeRoot = path.resolve(pkgRoot, './theme-chalk')
export const hookRoot = path.resolve(pkgRoot, './hooks')
export const localeRoot = path.resolve(pkgRoot, './locale')
export const directiveRoot = path.resolve(pkgRoot, './directives')
export const epRoot = path.resolve(pkgRoot, './element-plus')
export const utilRoot = path.resolve(pkgRoot, './utils')
export const buildOutput = path.resolve(projRoot, './dist')
export const docRoot = path.resolve(projRoot, './docs')
