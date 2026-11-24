import { nextTick } from 'vue'
import { createPinia, disposePinia, setActivePinia } from 'pinia'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useThemeStore } from '../store/theme'
import { downloadTheme, generateCssFromTheme } from '../utils/theme/helper'
import { normalizeTheme, parseFromCss } from '../utils/theme/parse'
import defaultTheme from '../utils/theme/store/default'

const storageKey = 'ep-custom-theme'
const getStyles = () => document.querySelector(`#${storageKey}`)?.textContent
let pinia: ReturnType<typeof createPinia>

beforeEach(() => {
  localStorage.clear()
  document.querySelector(`#${storageKey}`)?.remove()
  pinia = createPinia()
  setActivePinia(pinia)
})

afterEach(() => {
  disposePinia(pinia)
  document.documentElement.removeAttribute('style')
  vi.restoreAllMocks()
})

describe('theme editor', () => {
  it('starts with Element Plus defaults without overriding the page', () => {
    const store = useThemeStore()
    expect(store.fullTheme.colors).toEqual({
      primary: '#409eff',
      success: '#67c23a',
      warning: '#e6a23c',
      danger: '#f56c6c',
      info: '#909399',
    })
    expect(getStyles()).toBeUndefined()
  })

  it('previews, persists and restores a color without mutating the defaults', async () => {
    const store = useThemeStore()
    expect(store.updateColor('primary', '#0075eb')).toBe(true)
    expect(getStyles()).toContain('--el-color-primary: #0075eb;')
    expect(getStyles()).toContain('html.dark {')
    await nextTick()
    expect(JSON.parse(localStorage.getItem(storageKey)!).colors.primary).toBe(
      '#0075eb'
    )
    disposePinia(pinia)
    pinia = createPinia()
    setActivePinia(pinia)
    expect(useThemeStore().fullTheme.colors.primary).toBe('#0075eb')
    expect(defaultTheme.colors.primary).toBe('#409eff')
  })

  it('resets only editor styles and persists the reset', async () => {
    document.documentElement.style.setProperty('--unrelated', '42px')
    const store = useThemeStore()
    store.updateColor('danger', 'red')
    store.reset()
    await nextTick()
    expect(getStyles()).toBeUndefined()
    expect(document.documentElement.style.getPropertyValue('--unrelated')).toBe(
      '42px'
    )
    expect(store.fullTheme.colors).toEqual(defaultTheme.colors)
    expect(JSON.parse(localStorage.getItem(storageKey)!).colors).toEqual(
      defaultTheme.colors
    )
  })

  it.each([
    'invalid',
    '',
    null,
    '#ff000080',
    'var(--other)',
    'red; color: blue',
  ])('ignores invalid editor colors (%s)', (value) => {
    const store = useThemeStore()
    store.updateColor('primary', '#0075eb')
    const styles = getStyles()
    expect(store.updateColor('primary', value)).toBe(false)
    expect(store.fullTheme.colors.primary).toBe('#0075eb')
    expect(getStyles()).toBe(styles)
  })

  it.each([
    'null',
    '[]',
    '{}',
    '{"colors":null}',
    '{"colors":{"primary":"invalid"}}',
    '{"colors":{"primary":"red"},"namespace":"el;body"}',
  ])('rejects malformed imports atomically (%s)', (json) => {
    const store = useThemeStore()
    store.updateColor('primary', '#0075eb')
    const styles = getStyles()
    expect(() => store.parse(json, 'json')).toThrow()
    expect(store.fullTheme.colors.primary).toBe('#0075eb')
    expect(getStyles()).toBe(styles)
  })

  it('merges partial imports with defaults and removes previous overrides', () => {
    const store = useThemeStore()
    store.updateColor('danger', 'red')
    store.parse(
      '{"colors":{"primary":"#123"},"background":"url(https://example.com)"}',
      'json'
    )
    expect(store.fullTheme.colors.primary).toBe('#112233')
    expect(store.fullTheme.colors.danger).toBe('#f56c6c')
    expect(getStyles()).not.toContain('example.com')
    expect(getStyles()).not.toContain('--el-color-danger: #ff0000')
  })

  it('safely falls back from malformed persisted values', () => {
    localStorage.setItem(storageKey, '{"colors":{"primary":"invalid"}}')
    expect(useThemeStore().fullTheme.colors).toEqual(defaultTheme.colors)
    expect(getStyles()).toBeUndefined()
  })
})

describe('theme CSS', () => {
  it('downloads CSS with a matching content type and file name', () => {
    const theme = normalizeTheme({ colors: { primary: '#0075eb' } })
    let href = ''
    let fileName = ''
    vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(function (
      this: HTMLAnchorElement
    ) {
      href = this.href
      fileName = this.download
    })

    downloadTheme('el-custom-theme.css', theme)

    expect(fileName).toBe('el-custom-theme.css')
    expect(href).toMatch(/^data:text\/css;charset=utf-8,/)
    expect(decodeURIComponent(href.slice(href.indexOf(',') + 1))).toBe(
      generateCssFromTheme(theme)
    )
    expect(document.querySelector('a[download]')).toBeNull()
  })

  it('imports compact declarations and comments without applying arbitrary CSS', () => {
    const store = useThemeStore()
    store.parse(
      '/* --el-color-primary: blue; */ :root{--el-color-primary:#123;--el-color-success:rgb(0, 128, 0); background:url(https://example.com);}',
      'css'
    )
    expect(store.fullTheme.colors.primary).toBe('#112233')
    expect(store.fullTheme.colors.success).toBe('#008000')
    expect(getStyles()).not.toContain('example.com')
  })

  it('round trips custom namespaces while previewing with the docs namespace', () => {
    const store = useThemeStore()
    const theme = normalizeTheme({
      namespace: 'Custom',
      colors: { primary: 'red' },
    })
    const css = generateCssFromTheme(theme)
    expect(parseFromCss(css)).toEqual(theme)
    store.parse(css, 'css')
    expect(getStyles()).toContain('--el-color-primary: #ff0000;')
    expect(() =>
      parseFromCss(
        ':root { --el-color-primary: red; --custom-color-danger: blue; }'
      )
    ).toThrow()
  })

  it('rejects CSS without base colors', () => {
    expect(() =>
      parseFromCss(':root { color: red; --el-color-primary-light-3: red; }')
    ).toThrow()
  })

  it('exports Element Plus light and dark palettes and round trips the base colors', () => {
    const theme = normalizeTheme({ colors: { primary: '#409eff' } })
    const css = generateCssFromTheme(theme)
    const [light, dark] = css.split('html.dark')
    expect(light).toContain('--el-color-primary-light-3: #79bbff;')
    expect(light).toContain('--el-color-primary-dark-2: #337ecc;')
    expect(dark).toContain('--el-color-primary-light-3: #3375b9;')
    expect(dark).toContain('--el-color-primary-dark-2: #66b1ff;')
    expect(parseFromCss(css)).toEqual(theme)
  })
})
