import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { readability } from '@ctrl/tinycolor'
import { createPinia, disposePinia, setActivePinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { ElButton } from '@element-plus/components/button'
import Drawer from '../components/theme-editor/ep-theme-drawer.vue'
import { isDark } from '../composables/dark'
import { useThemeStore } from '../store/theme'

let wrapper: ReturnType<typeof mount>
let pinia: ReturnType<typeof createPinia>

beforeEach(() => {
  localStorage.clear()
  pinia = createPinia()
  setActivePinia(pinia)
  wrapper = mount(Drawer, {
    global: {
      plugins: [
        createI18n({ legacy: false, missingWarn: false, fallbackWarn: false }),
        pinia,
      ],
      components: { ElButton },
      stubs: {
        ElDrawer: { template: '<div><slot name="footer" /></div>' },
        ElTooltip: { template: '<div><slot /></div>' },
        EpThemePrimaryColors: true,
        EpThemePrimary: true,
        EpThemeSecondaryColors: true,
        EpThemeUploadTheme: true,
        'i-ep-refresh': true,
        'i-ep-download': true,
      },
    },
  })
})

afterEach(() => {
  wrapper.unmount()
  disposePinia(pinia)
  document.querySelector('#ep-custom-theme')?.remove()
  isDark.value = false
})

describe('theme export button contrast', () => {
  it.each([
    [false, '#409eff', '#79bbff', '#337ecc'],
    [true, '#409eff', '#3375b9', '#66b1ff'],
    [false, '#0066cc', '#4d94db', '#0052a3'],
    [true, '#0066cc', '#064d95', '#3385d6'],
    [false, '#f3b814', '#f7cd5b', '#c29310'],
    [true, '#f3b814', '#b08714', '#f5c643'],
  ])(
    'keeps default, hover and active text readable (dark: %s, color: %s)',
    async (dark, base, hover, active) => {
      isDark.value = dark
      useThemeStore().updateColor('primary', base)
      await nextTick()
      const style = wrapper.get<HTMLButtonElement>('.theme-editor-export')
        .element.style
      for (const [state, background] of [
        ['', base],
        ['hover-', hover],
        ['active-', active],
      ]) {
        expect(
          readability(
            background,
            style.getPropertyValue(`--el-button-${state}text-color`)
          )
        ).toBeGreaterThanOrEqual(4.5)
      }
    }
  )
})
