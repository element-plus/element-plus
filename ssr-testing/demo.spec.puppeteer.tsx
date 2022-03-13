import { createApp } from 'vue'
import { renderToString } from '@vue/server-renderer'
import {
  afterAll,
  beforeAll,
  beforeEach,
  afterEach,
  describe,
  expect,
  it,
} from 'vitest'
import puppeteer from 'puppeteer'
import ElementPlus from '../dist/element-plus'

import type { DefineComponent } from 'vue'
import type { Browser, Page } from 'puppeteer'

type ESModule = {
  default: DefineComponent
}

type ParsedDemo = {
  filename: string
  Module: DefineComponent
}

const demoPrefix = '../../docs/examples'
const rootDir = `${process.cwd()}/ssr-testing`
let demos: ParsedDemo[]
describe('Cypress Button', () => {
  let browser: Browser
  let page: Page

  beforeAll(async () => {
    browser = await puppeteer.launch()
    demos = Object.entries(
      (import.meta as any).globEager('../../docs/examples/button/*.vue')
    ).map(([file, module]) => {
      return {
        filename: file.slice(demoPrefix.length),
        Module: (module as ESModule).default,
      }
    })
  })

  beforeEach(async () => {
    page = await browser.newPage()
  })

  describe('when initialized', () => {
    console.log(demos)
    it.each(demos)(`render correctly`, async ({ Module, filename }) => {
      page.goto('file//:${process.cwd()}/ssr-testing/index.html')
      const app = createApp(<Module />).use(ElementPlus)
      const html = await renderToString(app)

      await page.evaluate((innerHTML) => {
        document.querySelector('#root')!.innerHTML = innerHTML
      }, html)

      await page.screenshot({
        path: `${rootDir}/screenshots/${filename}`,
      })
      expect(true).toBe(true)
    })
  })
})
