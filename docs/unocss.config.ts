import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWind3,
} from 'unocss'
import { breakpoints } from './.vitepress/vitepress/constant'

export default defineConfig({
  presets: [presetWind3(), presetAttributify(), presetIcons()],
  content: {
    pipeline: {
      include: ['./**/*'],
      exclude: ['./node_modules/**/*', './.vitepress/cache/**/*'],
    },
  },
  theme: {
    breakpoints: Object.fromEntries(
      Object.entries(breakpoints).map(([k, v]) => [k, `${v}px`])
    ),
    colors: {
      primary: {
        DEFAULT: '#2563eb',
        deep: '#1d4ed8',
      },
    },
  },
})
