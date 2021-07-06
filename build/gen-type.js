/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const { noElPrefixFile } = require('./common')

const outsideImport = /import .* from '..\/(.*?)\/src\/.*/

// global.d.ts
fs.copyFileSync(
  path.resolve(__dirname, '../typings/vue-shim.d.ts'),
  path.resolve(__dirname, '../lib/element-plus.d.ts'),
)
// index.d.ts
const newIndexPath = path.resolve(__dirname, '../lib/index.d.ts')
fs.copyFileSync(path.resolve(__dirname, '../lib/element-plus/index.d.ts'), newIndexPath)
const index = fs.readFileSync(newIndexPath)
const newIndex = index.toString().replace(/@element-plus\//g, './el-').replace('el-utils', 'utils').replace('el-locale', 'locale')
fs.writeFileSync(newIndexPath, newIndex)

// remove ep
fs.rmdirSync(path.resolve(__dirname, '../lib/element-plus'), { recursive: true })

// remove test-utils
fs.rmdirSync(path.resolve(__dirname, '../lib/test-utils'), { recursive: true })

// component
const libDirPath = path.resolve(__dirname, '../lib')
fs.readdirSync(libDirPath).forEach(comp => {
  if (!noElPrefixFile.test(comp)) {
    if (fs.lstatSync(path.resolve(libDirPath, comp)).isDirectory()) {
      // rename
      const newCompName = `el-${comp}`
      fs.renameSync(path.resolve(libDirPath, comp),
        path.resolve(libDirPath, newCompName))
      // re-import
      const imp = fs.readFileSync(path.resolve(__dirname, '../lib', newCompName, 'index.d.ts')).toString()
      if (outsideImport.test(imp) || imp.includes('@element-plus/')) {
        const newImp = imp.replace(outsideImport, (i, c) => {
          return i.replace(`../${c}`, `../el-${c}`)
        }).replace(/@element-plus\//g, '../el-').replace('el-utils', 'utils').replace('el-locale', 'locale')
        fs.writeFileSync(path.resolve(__dirname, '../lib', newCompName, 'index.d.ts'), newImp)
      }
    }
  }
})

// after components dir renamed
fs.readdirSync(libDirPath).forEach(comp => {
  // check src/*.d.ts exist
  const srcPath = path.resolve(libDirPath, comp, './src')
  if (fs.existsSync(srcPath)) {
    if (fs.lstatSync(srcPath).isDirectory()) {
      fs.readdir(srcPath, 'utf-8', (err, data) => {
        if (err) return
        // replace all @element-plus in src/*.d.ts
        data.forEach(f => {
          if (!fs.lstatSync(path.resolve(srcPath, f)).isDirectory()) {
            const imp = fs.readFileSync(path.resolve(srcPath, f)).toString()
            if (imp.includes('@element-plus/')) {
              const newImp = imp.replace(/@element-plus\//g, '../../el-').replace('el-utils', 'utils').replace('el-locale', 'locale')
              fs.writeFileSync(path.resolve(srcPath, f), newImp)
            }
          }
        })
      })
    }
  }
})
