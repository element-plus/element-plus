// Run with pnpm test:ssr to measure layout in the existing browser CI target.
import assert from 'node:assert/strict'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import { it } from 'vitest'
import puppeteer from 'puppeteer'

const themeRoot = new URL('../../../theme-chalk/', import.meta.url)
const requireTheme = createRequire(new URL('package.json', themeRoot))
const { compileString } = requireTheme('sass-embedded')
it('keeps menu spacing stable across collapse states', async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  try {
    const page = await browser.newPage()
    let cases = 0

    for (const namespace of ['el', 'ep']) {
      const css = compileString(
        `@use 'mixins/config' with ($namespace: '${namespace}'); @use 'base'; @use 'menu';`,
        { loadPaths: [fileURLToPath(new URL('src/', themeRoot))] }
      ).css

      for (const grouped of [false, true]) {
        for (const margin of [
          '0 8px 8px',
          '8px',
          '3.5px 8px 7.25px',
          '-3px 8px -8px',
        ]) {
          await page.setContent(`
        <style>
          ${css}
          .${namespace}-menu { width: 280px; }
          .${namespace}-menu-item,
          .${namespace}-sub-menu__title { margin: ${margin}; }
        </style>
        <ul class="${namespace}-menu ${namespace}-menu--vertical">
          ${grouped ? `<li class="${namespace}-menu-item-group"><div class="${namespace}-menu-item-group__title">Group</div><ul>` : ''}
          <li class="${namespace}-sub-menu">
            <div class="${namespace}-sub-menu__title">Title</div>
            <ul class="${namespace}-menu ${namespace}-menu--inline">
              <li class="${namespace}-menu-item">First</li>
              <li class="${namespace}-menu-item">Last</li>
            </ul>
          </li>
          <li class="${namespace}-menu-item" data-next>Next item</li>
          ${grouped ? '</ul></li>' : ''}
        </ul>
      `)

          const measurements = await page.evaluate((ns) => {
            const submenu = document.querySelector<HTMLUListElement>(
              `.${ns}-menu--inline`
            )!
            const root = document.querySelector<HTMLUListElement>(
              `.${ns}-menu`
            )!
            const next = root.querySelector<HTMLLIElement>('[data-next]')!
            const spacing = () =>
              next.getBoundingClientRect().top -
              root.getBoundingClientRect().top -
              submenu.getBoundingClientRect().height

            submenu.style.display = 'none'
            const closed = spacing()
            submenu.style.maxHeight = '0px'
            submenu.style.display = ''
            const beforeEnter = spacing()
            submenu.style.overflow = 'hidden'
            const entering = spacing()
            submenu.style.maxHeight = ''
            submenu.style.overflow = ''
            const before = spacing()

            // The collapse transition measures before changing overflow on leave.
            submenu.style.maxHeight = `${submenu.scrollHeight}px`
            submenu.style.overflow = 'hidden'
            const during = spacing()

            submenu.style.maxHeight = ''
            submenu.style.overflow = ''
            const after = spacing()
            submenu.style.maxHeight = '0px'
            submenu.style.overflow = 'hidden'
            const leaving = spacing()
            submenu.style.display = 'none'
            submenu.style.maxHeight = ''
            submenu.style.overflow = ''
            const hidden = spacing()

            return {
              closed,
              beforeEnter,
              entering,
              before,
              during,
              after,
              leaving,
              hidden,
            }
          }, namespace)

          for (const [stage, actual] of Object.entries(measurements)) {
            assert.ok(
              Math.abs(actual - measurements.closed) < 0.5,
              `${namespace}, grouped ${grouped}, margin ${margin}: spacing jumped at ${stage} (${JSON.stringify(measurements)})`
            )
          }
          cases++
        }
      }
    }

    process.stdout.write(
      `PASS: ${cases} menu layout cases in ${await browser.version()}\n`
    )
  } finally {
    await browser.close()
  }
}, 60_000)
