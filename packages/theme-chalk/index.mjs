import fs from 'node:fs'
import path from 'node:path'

const arr = []
const origin = path.resolve(process.cwd(), 'init_dist')
const new_arr = path.resolve(process.cwd(), 'dist')

const files = fs.readdirSync(origin)
files.forEach((file) => {
  let _path = path.resolve(origin, file)
  let _newPath = path.resolve(new_arr, file)
  if (fs.statSync(_path).isDirectory()) {
    _path = `${origin}/dark/css-vars.css`
    _newPath = `${new_arr}/dark/css-vars.css`
  }
  const originData = fs.readFileSync(_path.replace(/\//g, '/'), 'utf-8')
  const newData = fs.readFileSync(_newPath.replace(/\//g, '/'), 'utf-8')
  arr.push({
    name: file,
    origin: originData,
    new: newData,
  })
})

fs.writeFileSync(
  path.resolve('E:/my-repos/css-diff', 'diff_data.js'),
  'this.resultData = ' + JSON.stringify(arr, null, 2),
  'utf-8'
)
