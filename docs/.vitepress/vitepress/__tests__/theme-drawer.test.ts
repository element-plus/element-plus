import { nextTick } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import clipboardCopy from 'clipboard-copy'
import { readability } from '@ctrl/tinycolor'
import { createPinia, disposePinia, setActivePinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ElButton } from '@element-plus/components/button'
import { ElMessage } from 'element-plus'
import Drawer from '../components/theme-editor/ep-theme-drawer.vue'
import { isDark } from '../composables/dark'
import { useThemeStore } from '../store/theme'

vi.mock('clipboard-copy', () => ({ default: vi.fn() }))

let wrapper: ReturnType<typeof mount>
let pinia: ReturnType<typeof createPinia>

beforeEach(() => {
  vi.mocked(clipboardCopy).mockReset().mockResolvedValue(undefined)
  vi.spyOn(ElMessage, 'success').mockReturnValue({ close: vi.fn() })
  vi.spyOn(ElMessage, 'error').mockReturnValue({ close: vi.fn() })
  localStorage.clear()
  pinia = createPinia()
  setActivePinia(pinia)
  wrapper = mount(Drawer, {
    global: {
      plugins: [
        createI18n({
          legacy: false,
          locale: 'en',
          missingWarn: false,
          fallbackWarn: false,
          messages: {
            en: {
              editor: {
                'copy-css': 'Copy CSS',
                'copy-css-success': 'Theme CSS copied',
                'copy-css-error':
                  'Unable to copy the theme CSS. Try Export CSS instead.',
              },
            },
          },
        }),
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
  vi.restoreAllMocks()
})

describe('theme copy button contrast', () => {
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
      const style =
        wrapper.get<HTMLButtonElement>('.theme-editor-copy').element.style
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

describe('copy theme CSS', () => {
  it('copies current base colors and both light and dark variants', async () => {
    const store = useThemeStore()
    store.updateColor('primary', '#ff0000')
    store.updateColor('success', '#123456')
    await wrapper.get('.theme-editor-copy').trigger('click')
    await flushPromises()
    const css = vi.mocked(clipboardCopy).mock.calls[0][0]
    expect(css).toContain(':root {')
    expect(css).toContain('html.dark {')
    expect(css).toContain('--el-color-primary: #ff0000;')
    expect(css).toContain('--el-color-success: #123456;')
    expect(css).toContain('--el-color-primary-light-3: #ff4d4d;')
    expect(css).toContain('--el-color-primary-light-3: #b90606;')
    expect(ElMessage.success).toHaveBeenCalledWith({
      message: 'Theme CSS copied',
      grouping: true,
    })
  })

  it('copies the restored theme after resetting', async () => {
    useThemeStore().updateColor('primary', '#ff0000')
    await wrapper.get('.theme-editor-reset').trigger('click')
    await wrapper.get('.theme-editor-copy').trigger('click')
    await flushPromises()
    expect(vi.mocked(clipboardCopy).mock.calls[0][0]).toContain(
      '--el-color-primary: #409eff;'
    )
  })

  it('suggests file export if clipboard access fails', async () => {
    vi.mocked(clipboardCopy).mockRejectedValue(new Error('Clipboard denied'))
    await wrapper.get('.theme-editor-copy').trigger('click')
    await flushPromises()
    expect(ElMessage.error).toHaveBeenCalledWith({
      message: 'Unable to copy the theme CSS. Try Export CSS instead.',
      grouping: true,
    })
    expect(ElMessage.success).not.toHaveBeenCalled()
    expect(wrapper.find('.theme-editor-export').exists()).toBe(true)
  })
})
