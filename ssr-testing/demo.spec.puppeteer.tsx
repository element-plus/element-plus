import path from 'path'
import { createApp } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { beforeAll, beforeEach, afterEach, describe, expect, it } from 'vitest'
import puppeteer from 'puppeteer'
import glob from 'fast-glob'
import ElementPlus from '../dist/element-plus'

import type { Browser, Page } from 'puppeteer'

const projectRoot = process.cwd()
const testRoot = `${projectRoot}/ssr-testing`
const exampleRoot = path.resolve(projectRoot, 'docs/examples')
describe('Cypress Button', () => {
  let browser: Browser
  beforeAll(async () => {
    browser = await puppeteer.launch()
  })

  describe('when initialized', () => {
    const demos = glob
      .sync(`${projectRoot}/docs/examples/**/*.vue`)
      .map((demo) => demo.slice(exampleRoot.length + 1))
    it.each(demos)(`render %s correctly`, async (demoPath) => {
      const page = await browser.newPage()
      await page.goto(`file://${projectRoot}/ssr-testing/index.html`)
      await page.addStyleTag({
        path: path.join(
          projectRoot,
          'dist',
          'element-plus',
          'dist',
          'index.css'
        ),
      })
      const { default: Demo } = await import(path.join(exampleRoot, demoPath))
      const app = createApp(<Demo />).use(ElementPlus)
      const html = await renderToString(app)

      await page.evaluate((innerHTML) => {
        document.querySelector('#root')!.innerHTML = innerHTML
      }, html)

      const screenshotPath = demoPath
        .split('/')
        .join('-')
        .replace(/\.vue$/, '.png')
      await page.screenshot({
        path: path.join(testRoot, 'screenshots', screenshotPath),
        fullPage: true,
      })
      await page.close()
      expect(true).toBe(true)
    })
  })
})
