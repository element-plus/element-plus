import { defineConfig, presetUno, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [presetUno({}), presetAttributify()],
  include: [`${__dirname}/**/*`],
  exclude: [`${__dirname}/node_modules/**/*`],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#2563eb',
        deep: '#1d4ed8',
      },
    },
    breakpoints: {
      xs: '320px',
      sm: '640px',
    },
  },
})
