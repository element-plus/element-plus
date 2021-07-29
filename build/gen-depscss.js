/* eslint-disable @typescript-eslint/no-var-requires */
const klawSync = require('klaw-sync')
const { resolve, dirname, basename } = require('path')
const { cwd } = require('process')
const fs = require('fs')
const { init, parse } = require('es-module-lexer')
const { buildSync } = require('esbuild')

async function combineDepsCss() {
  const PATH_RE = /^\.*\//
  const IGNORE_RE = /(utils|directives|hooks|locale)/

  const alljs = klawSync(`${cwd()}/es`, {
    nofile: true,
    depthLimit: 0,
  }).map(dir => dir.path + '/index.js')
  await init
  alljs.forEach(js => {
    const [imports] = parse(fs.readFileSync(js, 'utf-8'))
    if (!IGNORE_RE.test(js)) {
      const selfCss = `import '../../lib/theme-chalk/${basename(dirname(js))}.css'\n`
      const depsCss = imports
        .flat()
        .map(item => item.n)
        .filter(n => PATH_RE.test(n) && !IGNORE_RE.test(n))
        .map(n => `import '../../lib/theme-chalk/${basename(n)}.css'`)
        .join('\n')

      const styleFile = resolve(dirname(js), './style.js')

      fs.writeFileSync(styleFile, depsCss + '\n' + selfCss)

      buildSync({
        entryPoints: [styleFile],
        format: 'cjs',
        outfile: resolve(
          dirname(js).replace('/es/', '/lib/'),
          './style.js',
        ),
      })
    }
  })
}

combineDepsCss()
