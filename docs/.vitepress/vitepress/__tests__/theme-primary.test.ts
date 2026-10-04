import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { readability } from '@ctrl/tinycolor'
import { createPinia, disposePinia, setActivePinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import Primary from '../components/theme-editor/ep-theme-primary.vue'
import Presets from '../components/theme-editor/ep-theme-primary-colors.vue'
import { useThemeStore } from '../store/theme'

let wrapper: ReturnType<typeof mount>
let pinia: ReturnType<typeof createPinia>
const i18n = () =>
  createI18n({
    legacy: false,
    locale: 'en',
    messages: {
      en: {
        editor: {
          contrast: 'Text contrast',
          'contrast-current': 'Info card uses {color} · {ratio}:1',
          'contrast-pass': 'AA pass',
          'contrast-fail': 'Below AA',
          'contrast-help': 'Normal text needs at least 4.5:1 (WCAG AA).',
          'text-black': 'Black text',
          'text-white': 'White text',
          apca: 'APCA · theme-colored text on white',
          'apca-help': '{value} Lc · Theme color as text, white as background.',
          presets: 'Presets',
          'presets-blue': 'Classic blue',
          'presets-contrast': 'High contrast',
          'presets-gold': 'Gold',
          'presets-turquoise': 'Turquoise',
        },
      },
    },
  })
beforeEach(() => {
  localStorage.clear()
  document.querySelector('#ep-custom-theme')?.remove()
  pinia = createPinia()
  setActivePinia(pinia)
  wrapper = mount(Primary, {
    global: {
      plugins: [pinia, i18n()],
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

  it('identifies the actual foreground/background pair and normal text contrast', () => {
    expect(wrapper.text()).toContain('Info card uses Black text · 7.55:1')
    const samples = wrapper.findAll('.theme-contrast-sample')
    expect(samples[0].text()).toContain('7.55:1AA pass')
    expect(samples[1].text()).toContain('2.78:1Below AA')
    expect(wrapper.get('summary').text()).toBe(
      'APCA · theme-colored text on white'
    )
  })

  it('updates contrast after editing and resetting without accepting large-text-only contrast', async () => {
    const store = useThemeStore()
    store.updateColor('primary', '#0075eb')
    await nextTick()
    expect(wrapper.findAll('.theme-contrast-sample')[1].text()).toContain(
      '4.43:1Below AA'
    )
    store.updateColor('primary', '#141414')
    await nextTick()
    expect(wrapper.text()).toContain('Info card uses White text · 18.42:1')
    store.reset()
    await nextTick()
    expect(wrapper.text()).toContain('Info card uses Black text · 7.55:1')
  })

  it('provides a high contrast preset that supports normal white text', async () => {
    wrapper.unmount()
    wrapper = mount(Presets, { global: { plugins: [pinia, i18n()] } })
    const preset = wrapper
      .findAll('button')
      .find((button) => button.text() === 'High contrast')!
    await preset.trigger('click')
    expect(preset.attributes('aria-pressed')).toBe('true')
    expect(
      readability(useThemeStore().fullTheme.colors.primary, '#fff')
    ).toBeGreaterThanOrEqual(4.5)
  })
})
