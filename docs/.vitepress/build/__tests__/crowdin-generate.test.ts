// @vitest-environment node

import fs from 'fs'
import os from 'os'
import path from 'path'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import consola from 'consola'
import { errorAndExit } from '@element-plus/build-utils'

const state = vi.hoisted(() => ({ docRoot: '' }))

vi.mock('@element-plus/build-utils', () => ({
  get docRoot() {
    return state.docRoot
  },
  errorAndExit: vi.fn(),
}))
vi.mock('consola', () => ({
  default: {
    trace: vi.fn(),
    debug: vi.fn(),
    success: vi.fn(),
    warn: vi.fn(),
  },
}))

const english = { source: 'Source', contributors: 'Contributors' }
const chinese = { source: '源代码', contributors: '贡献者' }

const localeFile = (lang: string) =>
  path.join(state.docRoot, '.vitepress/crowdin', lang, 'component/footer.json')

const generatedLocale = () =>
  JSON.parse(
    fs.readFileSync(
      path.join(state.docRoot, '.vitepress/i18n/component/footer.json'),
      'utf-8'
    )
  )

describe('Crowdin locale generation', () => {
  beforeEach(() => {
    vi.resetModules()
    state.docRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'ep-docs-locale-'))
    for (const lang of ['en-US', 'zh-CN']) {
      fs.mkdirSync(path.dirname(localeFile(lang)), { recursive: true })
    }
    fs.writeFileSync(localeFile('en-US'), JSON.stringify(english))
  })

  afterEach(() => {
    fs.rmSync(state.docRoot, { recursive: true, force: true })
  })

  it('preserves existing translations', async () => {
    fs.writeFileSync(localeFile('zh-CN'), JSON.stringify(chinese))
    await import('../crowdin-generate')
    await vi.waitFor(() => expect(consola.success).toHaveBeenCalledOnce())

    expect(generatedLocale()).toEqual({ 'en-US': english, 'zh-CN': chinese })
    expect(consola.warn).not.toHaveBeenCalled()
    expect(errorAndExit).not.toHaveBeenCalled()
  })

  it('falls back to English and warns when a translation file is missing', async () => {
    await import('../crowdin-generate')
    await vi.waitFor(() => expect(consola.success).toHaveBeenCalledOnce())

    expect(generatedLocale()).toEqual({ 'en-US': english, 'zh-CN': english })
    expect(consola.warn).toHaveBeenCalledWith(
      `Missing locale file: ${localeFile('zh-CN')}. Falling back to en-US.`
    )
    expect(errorAndExit).not.toHaveBeenCalled()
  })

  it('reports malformed translations instead of falling back', async () => {
    fs.writeFileSync(localeFile('zh-CN'), '{ invalid JSON')
    await import('../crowdin-generate')
    await vi.waitFor(() => expect(errorAndExit).toHaveBeenCalledOnce())

    expect(vi.mocked(errorAndExit).mock.calls[0][0]).toBeInstanceOf(SyntaxError)
    expect(consola.success).not.toHaveBeenCalled()
    expect(consola.warn).not.toHaveBeenCalled()
  })
})
