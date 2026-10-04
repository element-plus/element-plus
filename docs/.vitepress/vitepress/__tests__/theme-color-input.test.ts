import { mount } from '@vue/test-utils'
import { createPinia, disposePinia, setActivePinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { ElInput } from '@element-plus/components/input'
import ColorInput from '../components/theme-editor/ep-theme-color-input.vue'
import { useThemeStore } from '../store/theme'

let wrapper: ReturnType<typeof mount>
let pinia: ReturnType<typeof createPinia>
beforeEach(() => {
  localStorage.clear()
  document.querySelector('#ep-custom-theme')?.remove()
  pinia = createPinia()
  setActivePinia(pinia)
  wrapper = mount(ColorInput, {
    props: { name: 'primary' },
    global: {
      plugins: [
        pinia,
        createI18n({
          legacy: false,
          locale: 'en',
          messages: {
            en: {
              editor: {
                colors: { primary: 'Primary' },
                'invalid-color': 'Invalid color',
              },
            },
          },
        }),
      ],
      components: { ElInput },
      stubs: { ElColorPicker: true },
    },
  })
})
afterEach(() => {
  wrapper.unmount()
  disposePinia(pinia)
})

describe('theme color input', () => {
  it('keeps incomplete input out of the preview and reports invalid colors', async () => {
    const input = wrapper.get('input')
    await input.setValue('invalid')
    expect(wrapper.get('[role="alert"]').text()).toBe('Invalid color')
    expect(useThemeStore().fullTheme.colors.primary).toBe('#409eff')
    await input.setValue('#123')
    expect(wrapper.find('[role="alert"]').exists()).toBe(false)
    expect(useThemeStore().fullTheme.colors.primary).toBe('#112233')
    expect(input.element.value).toBe('#112233')
  })

  it('clears invalid input on reset even when the stored color has not changed', async () => {
    const input = wrapper.get('input')
    await input.setValue('invalid')
    useThemeStore().reset()
    await wrapper.vm.$nextTick()
    expect(wrapper.find('[role="alert"]').exists()).toBe(false)
    expect(input.element.value).toBe('#409eff')
  })
})
