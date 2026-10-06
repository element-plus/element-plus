import { flushPromises, mount } from '@vue/test-utils'
import { createPinia, disposePinia, setActivePinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ElButton } from '@element-plus/components/button'
import { ElMessage } from 'element-plus'
import Upload from '../components/theme-editor/ep-theme-upload-theme.vue'
import { useThemeStore } from '../store/theme'

let wrapper: ReturnType<typeof mount>
let pinia: ReturnType<typeof createPinia>

beforeEach(() => {
  vi.spyOn(ElMessage, 'success').mockReturnValue({ close: vi.fn() })
  vi.spyOn(ElMessage, 'error').mockReturnValue({ close: vi.fn() })
  localStorage.clear()
  pinia = createPinia()
  setActivePinia(pinia)
  wrapper = mount(Upload, {
    global: {
      plugins: [
        pinia,
        createI18n({
          legacy: false,
          locale: 'en',
          messages: {
            en: {
              editor: {
                import: 'Import theme',
                'import-success': 'Theme imported',
                'import-error': 'Invalid theme',
              },
            },
          },
        }),
      ],
      components: { ElButton },
      stubs: { 'i-ep-upload': true },
    },
  })
})

afterEach(() => {
  wrapper.unmount()
  disposePinia(pinia)
  document.querySelector('#ep-custom-theme')?.remove()
  vi.restoreAllMocks()
})

async function selectFile(name: string, content: string) {
  const file = new File([content], name)
  // jsdom's File does not implement text().
  Object.defineProperty(file, 'text', { value: async () => content })
  const input = wrapper.get<HTMLInputElement>('input[type="file"]')
  Object.defineProperty(input.element, 'files', {
    configurable: true,
    value: [file],
  })
  // Model the remembered selection that prevents another same-name change.
  Object.defineProperty(input.element, 'value', {
    configurable: true,
    writable: true,
    value: `C:\\fakepath\\${name}`,
  })
  await input.trigger('change')
  await flushPromises()
  return input.element
}

describe('theme upload', () => {
  it('allows importing updated content with the same file name', async () => {
    const store = useThemeStore()
    const first = await selectFile(
      'theme.css',
      ':root { --el-color-primary: #123456; }'
    )
    expect(store.fullTheme.colors.primary).toBe('#123456')
    expect(first.value).toBe('')

    const second = await selectFile(
      'theme.css',
      ':root { --el-color-primary: #abcdef; }'
    )
    expect(store.fullTheme.colors.primary).toBe('#abcdef')
    expect(second.value).toBe('')
    expect(ElMessage.success).toHaveBeenCalledTimes(2)
    expect(ElMessage.error).not.toHaveBeenCalled()
  })

  it('allows retrying the same file name after an invalid import', async () => {
    const store = useThemeStore()
    store.updateColor('primary', '#123456')
    const failed = await selectFile('theme.json', '{"colors":null}')
    expect(store.fullTheme.colors.primary).toBe('#123456')
    expect(failed.value).toBe('')
    expect(ElMessage.error).toHaveBeenCalledWith('Invalid theme')

    const retried = await selectFile(
      'theme.json',
      '{"colors":{"primary":"#abcdef"}}'
    )
    expect(store.fullTheme.colors.primary).toBe('#abcdef')
    expect(retried.value).toBe('')
    expect(ElMessage.success).toHaveBeenCalledWith('Theme imported')
  })
})
