import path from 'path'
import { defineConfig } from 'vite'
import Vue2 from '@vitejs/plugin-vue2'
import DefineOptions from 'unplugin-vue-define-options/vite'
import Inspect from 'vite-plugin-inspect'
import mkcert from 'vite-plugin-mkcert'
import { epRoot, pkgRoot } from '@element-plus/build-utils'

const shimPath = path.resolve(__dirname, 'src/vue2-shims.ts')
const shimRe = /from\s*['"]vue['"]/gs

export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^element-plus(\/(es|lib))?$/,
        replacement: path.resolve(epRoot, 'index.ts'),
      },
      {
        find: /^element-plus\/(es|lib)\/(.*)$/,
        replacement: `${pkgRoot}/$2`,
      },
    ],
  },
  plugins: [
    Vue2(),
    DefineOptions(),
    mkcert(),
    Inspect(),
    {
      name: 'vue-shim',
      enforce: 'pre',
      transform(code, id) {
        if (id.startsWith(pkgRoot) && shimRe.test(code)) {
          return code.replaceAll(shimRe, `from "${shimPath}"`)
        }
      },
    },
  ],
})
