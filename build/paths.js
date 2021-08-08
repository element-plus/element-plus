/* eslint-disable */

const path = require('path')

const projRoot = path.resolve(__dirname, '../')
const pkgRoot = path.resolve(projRoot, './packages')
const compRoot = path.resolve(pkgRoot, './components')
const themeRoot = path.resolve(pkgRoot, './theme-chalk')
const hookRoot = path.resolve(pkgRoot, './hooks')
const localeRoot = path.resolve(pkgRoot, './locale')
const directiveRoot = path.resolve(pkgRoot, './directives')
const epRoot = path.resolve(pkgRoot, './element-plus')
const utilRoot = path.resolve(pkgRoot, './utils')
const buildOutput = path.resolve(projRoot, './dist')

exports.projRoot = projRoot
exports.pkgRoot = pkgRoot
exports.compRoot = compRoot
exports.themeRoot = themeRoot
exports.hookRoot = hookRoot
exports.directiveRoot = directiveRoot
exports.localeRoot = localeRoot
exports.epRoot = epRoot
exports.utilRoot = utilRoot
exports.buildOutput = buildOutput
