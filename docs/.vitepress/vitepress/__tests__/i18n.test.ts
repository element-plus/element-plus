// @vitest-environment node

import { readFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import { createI18n } from 'vue-i18n'
import { describe, expect, it } from 'vitest'

describe('precompiled documentation translations', () => {
  it.each([
    ['en-US', 'Theme Editor'],
    ['zh-CN', '主题编辑器'],
    ['es-ES', 'Editor de temas'],
  ])('renders the theme editor with %s resources', async (locale, title) => {
    const filename = fileURLToPath(
      new URL(`../../locales/${locale}.yml`, import.meta.url)
    )
    const plugin = VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [filename],
    })
    const resourcePlugin = Array.isArray(plugin) ? plugin[0] : plugin
    const transform = resourcePlugin.transform
    if (!transform || typeof transform === 'function') {
      throw new Error('Expected the locale resource transform hook')
    }
    const result = await Reflect.apply(transform.handler, {}, [
      await readFile(filename, 'utf-8'),
      filename,
    ])
    const { default: messages } = await import(
      /* @vite-ignore */
      `data:text/javascript;base64,${Buffer.from(result.code).toString('base64')}`
    )
    const i18n = createI18n({
      legacy: false,
      locale,
      messages: { [locale]: messages },
    })

    expect(i18n.global.t('editor.desc')).toBe(title)
    expect(i18n.global.t('editor.copied', { color: '#409eff' })).toContain(
      '#409eff'
    )
  })
})
