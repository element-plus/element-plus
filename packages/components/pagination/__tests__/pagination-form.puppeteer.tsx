// @vitest-environment jsdom
import { createRequire } from 'node:module'
import path from 'node:path'
import { createSSRApp } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { expect, it } from 'vitest'
import puppeteer from 'puppeteer'
import { ID_INJECTION_KEY, ZINDEX_INJECTION_KEY } from '@element-plus/hooks'
import ConfigProvider from '../../config-provider/src/config-provider'
import Form from '../../form/src/form.vue'
import FormItem from '../../form/src/form-item.vue'
import DatePicker from '../../date-picker/src/date-picker'
import TimePicker from '../../time-picker/src/time-picker'
import Input from '../../input/src/input.vue'
import Select from '../../select/src/select.vue'
import Option from '../../select/src/option.vue'
import Pagination from '../src/pagination'

const themeRoot = path.resolve(process.cwd(), 'packages/theme-chalk')
const { compileString } = createRequire(path.join(themeRoot, 'package.json'))(
  'sass-embedded'
)

it('keeps pagination borders independent of parent form errors', async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
  try {
    const page = await browser.newPage()
    for (const namespace of ['el', 'ep']) {
      const css = compileString(
        `@use 'mixins/config' with ($namespace: '${namespace}'); @use 'base'; @use 'form'; @use 'form-item'; @use 'input'; @use 'select'; @use 'pagination'; @use 'date-picker'; @use 'time-picker';`,
        { loadPaths: [path.join(themeRoot, 'src')] }
      ).css
      for (const disabled of [false, true]) {
        const app = createSSRApp(() => (
          <ConfigProvider namespace={namespace}>
            <Form model={{ name: '' }} statusIcon>
              <FormItem prop="name" error="Name is required">
                <Input class="field-input" validateEvent={false} />
                <Select
                  class="field-select"
                  modelValue="a"
                  validateEvent={false}
                >
                  <Option label="A" value="a" />
                </Select>
                <Input class="field-textarea" type="textarea" />
                <DatePicker class="field-date-range" type="daterange" />
                <TimePicker class="field-time-range" isRange />
                <Input
                  class="group-input"
                  v-slots={{ append: () => <Input class="addon-input" /> }}
                />
                <Pagination
                  total={400}
                  layout="sizes, jumper"
                  disabled={disabled}
                />
              </FormItem>
            </Form>
          </ConfigProvider>
        ))
          .provide(ID_INJECTION_KEY, { prefix: 100, current: 0 })
          .provide(ZINDEX_INJECTION_KEY, { current: 0 })

        const html = await renderToString(app)
        await page.setContent(`<style>${css}
          .${namespace}-input__wrapper, .${namespace}-select__wrapper { transition: none !important; }
        </style>${html}`)
        const borders = await page.evaluate((ns) => {
          const root = document.querySelector(`.${ns}-form-item`)!
          const probe = document.createElement('span')
          probe.style.color = `var(--${ns}-color-danger)`
          root.append(probe)
          const danger = getComputedStyle(probe).color
          probe.remove()
          const red = (selector: string) => {
            const color = document.querySelector<HTMLElement>(selector)!
            const shadow = getComputedStyle(color).boxShadow
            return shadow.includes(danger)
          }
          return {
            danger,
            field: red(`.field-input .${ns}-input__wrapper`),
            select: red(`.field-select .${ns}-select__wrapper`),
            textarea: red(`.field-textarea .${ns}-textarea__inner`),
            dateRange: red(`.field-date-range.${ns}-input__wrapper`),
            timeRange: red(`.field-time-range.${ns}-input__wrapper`),
            sizes: red(`.${ns}-pagination__sizes .${ns}-select__wrapper`),
            jumper: red(`.${ns}-pagination__jump .${ns}-input__wrapper`),
          }
        }, namespace)
        expect(borders.field).toBe(true)
        expect(borders.select).toBe(true)
        expect(borders.textarea).toBe(true)
        expect(borders.dateRange).toBe(true)
        expect(borders.timeRange).toBe(true)
        expect(borders.sizes).toBe(false)
        expect(borders.jumper).toBe(false)

        for (const [selector, focusedClass] of [
          [
            `.${namespace}-pagination__sizes .${namespace}-select__wrapper`,
            'is-focused',
          ],
          [
            `.${namespace}-pagination__jump .${namespace}-input__wrapper`,
            'is-focus',
          ],
          [`.addon-input .${namespace}-input__wrapper`, 'is-focus'],
        ]) {
          await page.hover(selector)
          const shadow = await page.$eval(
            selector,
            (el) => getComputedStyle(el).boxShadow
          )
          expect(shadow).not.toContain(borders.danger)
          const focusedShadow = await page.$eval(
            selector,
            (el, cls) => {
              el.classList.add(cls)
              return getComputedStyle(el).boxShadow
            },
            focusedClass
          )
          expect(focusedShadow).not.toContain(borders.danger)
        }
      }
    }
  } finally {
    await browser.close()
  }
}, 60_000)
