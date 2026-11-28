import { readFile } from 'node:fs/promises'
import { afterAll, beforeAll, expect, it } from 'vitest'
import puppeteer from 'puppeteer'

import type { Browser } from 'puppeteer'

const themeDir = new URL('../dist/element-plus/theme-chalk/', import.meta.url)
let browser: Browser
let documentCss: string
let shadowCss: string

beforeAll(async () => {
  const [base, dark, shadow] = await Promise.all([
    readFile(new URL('index.css', themeDir), 'utf8'),
    readFile(new URL('dark/css-vars.css', themeDir), 'utf8'),
    readFile(new URL('shadow/index.css', themeDir), 'utf8'),
  ])
  documentCss = `${base}\n${dark}`
  shadowCss = shadow
  browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
})

afterAll(async () => {
  await browser?.close()
})

it.each(['document', 'shadow root'])(
  'applies theme CSS in the %s',
  async (scope) => {
    const page = await browser.newPage()

    try {
      await page.setContent('<!DOCTYPE html><main></main>')
      const useShadowRoot = scope === 'shadow root'
      const theme = await page.evaluate(
        (css, useShadowRoot) => {
          const host = document.querySelector('main')!
          const root = useShadowRoot
            ? host.attachShadow({ mode: 'open' })
            : host
          const themeRoot = useShadowRoot ? host : document.documentElement
          const style = document.createElement('style')
          style.textContent = css
          const card = document.createElement('div')
          card.className = 'el-card'
          card.style.transition = 'none'
          root.append(style, card)

          const readTheme = () => {
            const style = getComputedStyle(card)
            return {
              colorScheme: style.colorScheme,
              cardBackground: style.backgroundColor,
              primaryColor: style.getPropertyValue('--el-color-primary').trim(),
            }
          }

          const light = readTheme()
          themeRoot.classList.add('dark')
          const dark = readTheme()
          const overrides = document.createElement('style')
          const selector = useShadowRoot ? ':host(.dark)' : 'html.dark'
          overrides.textContent = `${selector} { --el-color-primary: rebeccapurple }`
          root.append(overrides)
          const cardStyle = getComputedStyle(card)

          return {
            light,
            dark,
            documentColorScheme: getComputedStyle(document.documentElement)
              .colorScheme,
            primaryColor: cardStyle
              .getPropertyValue('--el-color-primary')
              .trim(),
            menuItemHeight: cardStyle
              .getPropertyValue('--el-menu-item-height')
              .trim(),
            loadingSpinnerSize: cardStyle
              .getPropertyValue('--el-loading-spinner-size')
              .trim(),
            popupOpacity: Number(
              cardStyle.getPropertyValue('--el-popup-modal-opacity')
            ),
          }
        },
        useShadowRoot ? shadowCss : documentCss,
        useShadowRoot
      )

      expect(theme).toEqual({
        light: {
          colorScheme: 'light',
          cardBackground: 'rgb(255, 255, 255)',
          primaryColor: '#409eff',
        },
        dark: {
          colorScheme: 'dark',
          cardBackground: 'rgb(29, 30, 31)',
          primaryColor: '#409eff',
        },
        documentColorScheme: useShadowRoot ? 'normal' : 'dark',
        primaryColor: 'rebeccapurple',
        menuItemHeight: '56px',
        loadingSpinnerSize: '42px',
        popupOpacity: 0.5,
      })
    } finally {
      await page.close()
    }
  }
)

it('inherits the page theme when the regular CSS is also loaded in a shadow root', async () => {
  const page = await browser.newPage()

  try {
    await page.setContent('<!DOCTYPE html><main></main>')
    await page.addStyleTag({
      content: `
        ${documentCss}
        :root { --el-color-primary: rebeccapurple }
        html.dark { --el-color-primary: coral }
      `,
    })
    const theme = await page.evaluate((css) => {
      const host = document.querySelector('main')!
      const shadowRoot = host.attachShadow({ mode: 'open' })
      const styles = document.createElement('style')
      styles.textContent = css
      const card = document.createElement('div')
      card.className = 'el-card'
      card.style.transition = 'none'
      shadowRoot.append(styles, card)

      const readTheme = () => {
        const computed = getComputedStyle(card)
        return {
          colorScheme: computed.colorScheme,
          cardBackground: computed.backgroundColor,
          primaryColor: computed.getPropertyValue('--el-color-primary').trim(),
        }
      }

      const light = readTheme()
      document.documentElement.classList.add('dark')
      return { light, dark: readTheme() }
    }, documentCss)

    expect(theme).toEqual({
      light: {
        colorScheme: 'light',
        cardBackground: 'rgb(255, 255, 255)',
        primaryColor: 'rebeccapurple',
      },
      dark: {
        colorScheme: 'dark',
        cardBackground: 'rgb(20, 20, 20)',
        primaryColor: 'coral',
      },
    })
  } finally {
    await page.close()
  }
})
