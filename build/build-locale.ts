/* eslint-disable */
import fs from 'fs'
import save from 'file-save'
import { resolve, basename } from 'path'
import { buildOutput } from './paths'
import babel from '@babel/core'

import type { FileResultCallback } from '@babel/core'

const localePath = resolve(__dirname, '../packages/locale/lang')
const fileList = fs.readdirSync(localePath)

const transform = function (
  filename: string,
  name: string,
  cb: FileResultCallback
) {
  babel.transformFile(
    resolve(localePath, filename),
    {
      plugins: ['@babel/plugin-transform-modules-umd'],
      moduleId: name,
    },
    cb
  )
}

fileList
  .filter(function (file) {
    return /\.ts$/.test(file)
  })
  .forEach(function (file) {
    const name = basename(file, '.ts')

    transform(file, name, function (err, result) {
      if (err) {
        console.error(err)
      } else {
        const code = result!.code!
        const transformedCode = code
          .replace('define("', 'define("element/locale/')
          .replace(
            /global\.(\S*) = mod.exports/,
            'global.ElementPlus.lang = global.ElementPlus.lang || {};\n    global.ElementPlus.lang.$1 = mod.exports.default'
          )

        save(
          resolve(buildOutput, 'element-plus/dist/locale', `${name}.js`)
        ).write(transformedCode)
      }
    })
  })
