/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const { noElPrefixFile } = require('./common')

const outsideImport = /import .* from '..\/(.*?)\/src\/.*/

// index.d.ts
const newIndexPath = path.resolve(__dirname, '../lib/index.d.ts')
fs.copyFileSync(path.resolve(__dirname, '../lib/element-plus/index.d.ts'), newIndexPath)
fs.rmdirSync(path.resolve(__dirname, '../lib/element-plus'), { recursive: true })
const index = fs.readFileSync(newIndexPath)
const newIndex = index.toString().replace(/@element-plus\//g, './el-')
fs.writeFileSync(newIndexPath, newIndex)

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
      if(outsideImport.test(imp)) {
        const newImp = imp.replace(outsideImport, (i, c) => {
          return i.replace(c, `el-${c}`)
        })
        fs.writeFileSync(path.resolve(__dirname, '../lib', newCompName, 'index.d.ts'), newImp)
      }
    }
  }
})

// todo remove test-utils
// todo cp pkg.d.ts
