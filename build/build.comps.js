/* eslint-disable */

// name came from the terminal as `./packages/*` notation, so when resolve the name, we'd like
// to add a `..` to do so. because the current file is under `build/`, `packages/` is at the
// same level as `build/`,
const run = require('./build');
const compPath = process.argv[2]
if (!compPath) {
  console.error('Usage: node build.js [component]')
  process.exit(1)
}

const outPutPrefix = ['hooks', 'directives'].some((p) => compPath.includes(p)) ? '' : 'el-';
const compName = compPath.split('/').pop()

run(`${outPutPrefix}${compName}/index.js`, compPath)
