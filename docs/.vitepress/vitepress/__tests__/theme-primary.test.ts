import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { createPinia, disposePinia, setActivePinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import Primary from '../components/theme-editor/ep-theme-primary.vue'
import { useThemeStore } from '../store/theme'

let wrapper: ReturnType<typeof mount>
let pinia: ReturnType<typeof createPinia>
beforeEach(() => {
  localStorage.clear()
  document.querySelector('#ep-custom-theme')?.remove()
  pinia = createPinia()
  setActivePinia(pinia)
  wrapper = mount(Primary, {
    global: {
      plugins: [
        pinia,
        createI18n({
          legacy: false,
          locale: 'en',
          messages: { en: { editor: { apca: 'APCA on white' } } },
        }),
      ],
      stubs: { EpThemeColorInput: true, EpThemeColorBar: true },
    },
  })
})
afterEach(() => {
  wrapper.unmount()
  disposePinia(pinia)
})

describe('theme preview text', () => {
  it.each([
    ['#ff0000', 'rgb(0, 0, 0)'],
    ['#0075eb', 'rgb(0, 0, 0)'],
    ['#141414', 'rgb(255, 255, 255)'],
    ['#ffffff', 'rgb(0, 0, 0)'],
  ])('uses the higher contrast text color on %s', async (color, foreground) => {
    useThemeStore().updateColor('primary', color)
    await nextTick()
    expect(wrapper.get<HTMLDivElement>('.font-mono').element.style.color).toBe(
      foreground
    )
  })
})
