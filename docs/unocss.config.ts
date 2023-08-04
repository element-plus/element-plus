import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
  include: [`${__dirname}/**/*`],
  exclude: [`${__dirname}/node_modules/**/*`],
  theme: {
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    colors: {
      primary: {
        DEFAULT: '#2563eb',
        deep: '#1d4ed8',
      },
    },
  },
})
