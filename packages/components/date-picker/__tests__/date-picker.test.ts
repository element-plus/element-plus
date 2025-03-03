// @ts-nocheck
import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import dayjs from 'dayjs'
import { rAF } from '@element-plus/test-utils/tick'
import ConfigProvider from '@element-plus/components/config-provider'
import { CommonPicker } from '@element-plus/components/time-picker'
import Input from '@element-plus/components/input'
import zhCn from '@element-plus/locale/lang/zh-cn'
import enUs from '@element-plus/locale/lang/en'
import 'dayjs/locale/zh-cn'
import { EVENT_CODE } from '@element-plus/constants'
import { ElFormItem } from '@element-plus/components/form'
import DatePicker from '../src/date-picker'

const _mount = (template: string, data = () => ({}), otherObj?) =>
  mount(
    {
      components: {
        'el-date-picker': DatePicker,
        'el-form-item': ElFormItem,
      },
      template,
      data,
      ...otherObj,
    },
    {
      attachTo: 'body',
    }
  )

afterEach(() => {
  document.documentElement.innerHTML = ''
})

const testDatePickerPanelChange = async (type: 'date' | 'daterange') => {
  let mode
  const wrapper = _mount(
    `<el-date-picker
        type="${type}"
        v-model="value"
        @panel-change="onPanelChange"
    />`,
    () => ({ value: type === 'daterange' ? [] : '' }),
    {
      methods: {
        onPanelChange(value, _mode) {
          mode = _mode
        },
      },
    }
  )

  const reset = () => {
    mode = undefined
  }

  const input = wrapper.find('input')
  input.trigger('blur')
  input.trigger('focus')
  await nextTick()
  const prevMonth = document.querySelector<HTMLElement>('button.arrow-left')
  const prevYear = document.querySelector<HTMLElement>('button.d-arrow-left')
  const nextMonth = document.querySelector<HTMLElement>('button.arrow-right')
  const nextYear = document.querySelector<HTMLElement>('button.d-arrow-right')
  prevMonth.click()
  await nextTick()
  expect(mode).toBe('month')
  reset()
  nextMonth.click()
  await nextTick()
  expect(mode).toBe('month')
  reset()
  prevYear.click()
  await nextTick()
  expect(mode).toBe('year')
  reset()
  nextYear.click()
  await nextTick()
  expect(mode).toBe('year')
}

describe('DatePicker', () => {
  it('create & custom class & style', async () => {
    const popperClassName = 'popper-class-test'
    const customClassName = 'custom-class-test'
    const wrapper = _mount(
      `<el-date-picker
        :readonly="true"
        placeholder='test_'
        format='HH-mm-ss'
        :style="{color:'red'}"
        :class="customClassName"
        :popperClass="popperClassName"
    />`,
      () => ({ popperClassName, customClassName })
    )
    const input = wrapper.find('input')
    expect(input.attributes('placeholder')).toBe('test_')
    expect(input.attributes('readonly')).not.toBeUndefined()
    const outterInput = wrapper.find('.el-input')
    expect(outterInput.classes()).toContain(customClassName)
    expect(outterInput.attributes().style).toBeDefined()
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    expect(
      document
        .querySelector('.el-picker__popper')
        .classList.contains(popperClassName)
    ).toBe(true)
  })

  it('select date', async () => {
    const wrapper = _mount(
      `<el-date-picker
        v-model="value"
    />`,
      () => ({ value: '' })
    )
    const date = dayjs()

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const spans = document.querySelectorAll('.el-date-picker__header-label')
    const arrowLeftElm = document.querySelector(
      '.el-date-picker__prev-btn .arrow-left'
    ) as HTMLElement
    const arrowRightElm = document.querySelector(
      '.el-date-picker__next-btn .arrow-right'
    ) as HTMLElement
    expect(spans[0].textContent).toContain(date.year())
    expect(spans[1].textContent).toContain(date.format('MMMM'))
    const arrowLeftYeayElm = document.querySelector(
      '.el-date-picker__prev-btn .d-arrow-left'
    ) as HTMLElement
    arrowLeftYeayElm.click()
    let count = 20
    while (--count) {
      arrowLeftElm.click()
    }
    count = 20
    while (--count) {
      arrowRightElm.click()
    }
    await nextTick()
    expect(spans[0].textContent).toContain(date.add(-1, 'year').year())
    expect(spans[1].textContent).toContain(date.format('MMMM'))
    ;(document.querySelector('td.available') as HTMLElement).click()
    await nextTick()
    const vm = wrapper.vm as any
    expect(vm.value).toBeDefined()
  })

  it('defaultTime and clear value', async () => {
    const wrapper = _mount(
      `<el-date-picker
        v-model="value"
        :default-time="new Date(2011,1,1,12,0,1)"
    />`,
      () => ({ value: '' })
    )
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    ;(document.querySelector('td.available') as HTMLElement).click()
    await nextTick()
    const vm = wrapper.vm as any
    expect(vm.value).toBeDefined()
    expect(vm.value.getHours()).toBe(12)
    expect(vm.value.getMinutes()).toBe(0)
    expect(vm.value.getSeconds()).toBe(1)
    const picker = wrapper.findComponent(CommonPicker)
    ;(picker.vm as any).showClose = true
    await nextTick()
    ;(document.querySelector('.clear-icon') as HTMLElement).click()
    expect(vm.value).toBe(null)
  })

  it('defaultValue', async () => {
    const wrapper = _mount(
      `<el-date-picker
        v-model="value"
        :default-value="defaultValue"
    />`,
      () => ({
        value: '',
        defaultValue: new Date(2011, 10, 1),
      })
    )
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    document.querySelector<HTMLElement>('td.available').click()
    await nextTick()
    const vm = wrapper.vm as any
    expect(vm.value).toBeDefined()
    expect(vm.value.getFullYear()).toBe(2011)
    expect(vm.value.getMonth()).toBe(10)
    expect(vm.value.getDate()).toBe(1)
    const picker = wrapper.findComponent(CommonPicker)
    ;(picker.vm as any).showClose = true
    await nextTick()
    document.querySelector<HTMLElement>('.clear-icon').click()
    expect(vm.value).toBe(null)

    vm.defaultValue = new Date(2031, 5, 1)
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    document.querySelector<HTMLElement>('td.available').click()
    await nextTick()
    expect(vm.value).toBeDefined()
    expect(vm.value.getFullYear()).toBe(2031)
    expect(vm.value.getMonth()).toBe(5)
    expect(vm.value.getDate()).toBe(1)
  })

  it('event change, focus, blur, keydown', async () => {
    const changeHandler = vi.fn()
    const focusHandler = vi.fn()
    const blurHandler = vi.fn()
    const keydownHandler = vi.fn()
    let onChangeValue: Date | undefined
    const wrapper = _mount(
      `<el-date-picker
        v-model="value"
        @change="onChange"
        @focus="onFocus"
        @blur="onBlur"
        @keydown="onKeydown"
      />`,
      () => ({ value: new Date(2016, 9, 10, 18, 40) }),
      {
        methods: {
          onChange(e) {
            onChangeValue = e
            return changeHandler(e)
          },
          onFocus(e) {
            return focusHandler(e)
          },
          onBlur(e) {
            return blurHandler(e)
          },
          onKeydown(e) {
            return keydownHandler(e)
          },
        },
      }
    )

    const input = wrapper.find('input')
    input.trigger('focus')
    input.trigger('blur')
    input.trigger('keydown')
    await nextTick()
    await rAF()
    expect(focusHandler).toHaveBeenCalledTimes(1)
    expect(blurHandler).toHaveBeenCalled()
    expect(keydownHandler).toHaveBeenCalledTimes(1)
    input.trigger('focus')
    await nextTick()
    ;(document.querySelector('td.available') as HTMLElement).click()
    await nextTick()
    await rAF()
    expect(changeHandler).toHaveBeenCalledTimes(1)
    expect(onChangeValue?.getTime()).toBe(new Date(2016, 9, 1).getTime())
  })

  it('emits focus on click when not currently focused', async () => {
    const focusHandler = vi.fn()
    const wrapper = _mount(
      `<el-date-picker
        v-model="value"
        @focus="onFocus"
      />`,
      () => ({ value: new Date(2016, 9, 10, 18, 40) }),
      {
        methods: {
          onFocus(e: Event) {
            return focusHandler(e)
          },
        },
      }
    )

    const input = wrapper.find('input')
    input.trigger('mousedown')
    input.trigger('focus')
    await nextTick()
    await rAF()
    expect(focusHandler).toHaveBeenCalledTimes(1)
  })

  it('opens popper on click when input is focused', async () => {
    const wrapper = _mount(`<el-date-picker v-model="value" />`, () => ({
      value: new Date(2016, 9, 10, 18, 40),
    }))
    const popperEl = document.querySelector('.el-picker__popper') as HTMLElement
    expect(popperEl.style.display).toBe('none')
    const input = wrapper.find('input')
    input.element.focus()
    input.trigger('mousedown')
    await nextTick()
    await rAF()

    expect(popperEl.style.display).not.toBe('none')
  })

  it('shortcuts', async () => {
    const text = 'Yesterday'
    const value = new Date(Date.now() - 86400000)
    value.setHours(0, 0, 0, 0)
    const wrapper = _mount(
      `<el-date-picker
        v-model="value"
        :shortcuts="shortcuts"
    />`,
      () => ({
        value: '',
        shortcuts: [
          {
            text,
            value,
          },
        ],
      })
    )
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const shortcut = document.querySelector('.el-picker-panel__shortcut')
    expect(shortcut.textContent).toBe(text)
    expect(document.querySelector('.el-picker-panel__sidebar')).not.toBeNull()
    ;(shortcut as HTMLElement).click()
    await nextTick()
    const vm = wrapper.vm as any
    expect(vm.value.valueOf()).toBe(value.valueOf())
  })

  it('disabledDate', async () => {
    const wrapper = _mount(
      `<el-date-picker
        v-model="value"
        :disabledDate="disabledDate"
    />`,
      () => ({
        value: '',
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7
        },
      })
    )
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    expect(document.querySelector('.disabled')).not.toBeNull()
  })

  it('select year picker when using disabledDate prop', async () => {
    const wrapper = _mount(
      `<el-date-picker
        v-model="value"
        :disabledDate="disabledDate"
    />`,
      () => ({
        value: '2024-01-01',
        disabledDate(time) {
          const dayTime = new Date(2023, 1, 4).getTime()
          return time.getTime() < dayTime
        },
      })
    )
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const yearLabel: HTMLElement = document.querySelectorAll(
      '.el-date-picker__header-label'
    )[0]
    yearLabel.click()
    await nextTick()
    const yearCells = document.querySelectorAll('.el-date-table-cell__text')
    const year2023 = [...yearCells].find((item) => item.innerHTML === '2023')
    year2023.click()
    await nextTick()
    expect(input.element.value).toBe('2023-02-04')
  })

  it('select month picker when using disabledDate prop', async () => {
    const wrapper = _mount(
      `<el-date-picker
        v-model="value"
        :disabledDate="disabledDate"
    />`,
      () => ({
        value: '2023-05-01',
        disabledDate(time) {
          const dayTime = new Date(2023, 1, 4).getTime()
          return time.getTime() < dayTime
        },
      })
    )
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const monthLabel: HTMLElement = document.querySelectorAll(
      '.el-date-picker__header-label'
    )[1]
    monthLabel.click()
    await nextTick()
    const monthCells = document.querySelectorAll('.el-date-table-cell__text')
    const februaryCell = monthCells[1]
    februaryCell.click()
    await nextTick()
    expect(input.element.value).toBe('2023-02-04')
  })

  it('should work when using disabledDate prop and daterange type', async () => {
    const wrapper = _mount(
      `<el-date-picker
        v-model="value"
        type="daterange"
        :disabledDate="disabledDate"
    />`,
      () => ({
        value: ['2000-10-01', '2002-10-01'],
        disabledDate(time) {
          return time.getTime() > new Date(2002, 11)
        },
      })
    )
    const input = wrapper.findAll('input')[1]
    input.element.value = '2001-10-01'
    await input.trigger('input')
    await input.trigger('change')
    expect(dayjs(wrapper.vm.value[1]).toDate()).toEqual(new Date(2001, 9))

    input.element.value = '2003-10-01'
    await input.trigger('input')
    await input.trigger('change')
    expect(dayjs(wrapper.vm.value[1]).toDate()).toEqual(new Date(2001, 9))
  })

  it('ref focus', async () => {
    _mount(
      `<el-date-picker
        v-model="value"
        ref="input"
      />`,
      () => ({ value: '' }),
      {
        mounted() {
          this.$refs.input.focus()
        },
      }
    )
    await nextTick()
    await rAF()
    const popperEl = document.querySelector('.el-picker__popper')
    const attr = popperEl.getAttribute('aria-hidden')
    expect(attr).toEqual('false')
  })

  it('ref handleOpen', async () => {
    _mount(
      `<el-date-picker
        v-model="value"
        ref="input"
      />`,
      () => ({ value: '' }),
      {
        mounted() {
          this.$refs.input.handleOpen()
        },
      }
    )
    await nextTick()
    const popperEl = document.querySelector('.el-picker__popper')
    const attr = popperEl.getAttribute('aria-hidden')
    expect(attr).toEqual('false')
  })

  it('ref handleClose', async () => {
    vi.useFakeTimers()

    _mount(
      `<el-date-picker
        v-model="value"
        ref="input"
      />`,
      () => ({ value: '' }),
      {
        mounted() {
          this.$refs.input.handleOpen()

          setTimeout(() => {
            this.$refs.input.handleClose()
          }, 1000000)
        },
      }
    )

    vi.runAllTimers()
    await nextTick()
    const popperEl = document.querySelector('.el-picker__popper')
    const attr = popperEl.getAttribute('aria-hidden')
    expect(attr).toEqual('true')

    vi.useRealTimers()
  })

  it('custom content', async () => {
    const wrapper = _mount(
      `<el-date-picker
        v-model="value"
        ref="input">
        <template #default="{ isCurrent, text }">
          <div class="el-date-table-cell__text" :class="{ current: isCurrent }">
            <div>{{ text }}</div>
          </div>
        </template>
      </el-date-picker>`,
      () => ({ value: '' }),
      {
        mounted() {
          this.$refs.input.focus()
        },
      }
    )
    await nextTick()
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    {
      ;(
        document.querySelector(
          'td.available .el-date-table-cell__text'
        ) as HTMLElement
      ).click()
    }
    input.trigger('focus')
    await nextTick()
    expect(
      document
        .querySelector('td.available .el-date-table-cell__text')
        .classList.contains('current')
    ).toBeTruthy()
  })

  it('custom content comment', async () => {
    _mount(
      `<el-date-picker
        v-model="value"
        ref="input">
        <template #default="{ isCurrent, text }">
          <!-- <div class="cell" :class="{ current: isCurrent }">
            <div>{{ text + "csw" }}</div>
          </div> -->
        </template>
      </el-date-picker>`,
      () => ({ value: '' }),
      {
        mounted() {
          this.$refs.input.focus()
        },
      }
    )
    await nextTick()
    const el = document.querySelector('td.available .el-date-table-cell')
    const text = el.textContent
    expect(text.includes('csw')).toBeFalsy()
  })

  it('custom content value validate', async () => {
    _mount(
      `<el-date-picker
        v-model="value"
        ref="input">
        <template #default="{ isCurrent, text }">
          <div class="el-date-table-cell__text" :class="{ current: isCurrent }">
            <div>{{ text + "csw" }}</div>
          </div>
        </template>
      </el-date-picker>`,
      () => ({ value: '' }),
      {
        mounted() {
          this.$refs.input.focus()
        },
      }
    )
    await nextTick()
    const el = document.querySelector('td.available .el-date-table-cell__text')
    const text = el.textContent
    expect(text.includes('csw')).toBeTruthy()
  })

  it('custom content bail out slot compoent', async () => {
    _mount(
      `<el-date-picker
        v-model="value"
        ref="input">
        <slot name="testest"></slot>
      </el-date-picker>`,
      () => ({ value: '' }),
      {
        mounted() {
          this.$refs.input.focus()
        },
      }
    )
    await nextTick()
    const el = document.querySelector<HTMLElement>('td.available')
    const text = el.textContent
    expect(!!text).toBeTruthy()
  })

  it('custom content for type is month', async () => {
    const wrapper = _mount(
      `<el-date-picker
        type="month"
        v-model="value"
        ref="input">
        <template #default="{ text }">
          <div class="el-date-table-cell">
            <div class="el-date-table-cell__text">{{ text }}期</div>
          </div>
        </template>
      </el-date-picker>`,
      () => ({ value: '' }),
      {
        mounted() {
          this.$refs.input.focus()
        },
      }
    )
    await nextTick()
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    {
      ;(document.querySelector('td .el-date-table-cell') as HTMLElement).click()
    }
    input.trigger('focus')
    await nextTick()
    const el = document.querySelector('td.current .el-date-table-cell')
    expect(el.textContent.includes('期')).toBeTruthy()
  })

  it('custom content comment for type is month', async () => {
    _mount(
      `<el-date-picker
        v-model="value"
        type="month"
        ref="input">
        <template #default="{ text }">
          <!-- <div class="el-date-table-cell">
            <div>{{ text + "csw" }}</div>
          </div> -->
        </template>
      </el-date-picker>`,
      () => ({ value: '' }),
      {
        mounted() {
          this.$refs.input.focus()
        },
      }
    )
    await nextTick()
    const el = document.querySelector('td .el-date-table-cell')
    const text = el.textContent
    expect(text.includes('csw')).toBeFalsy()
  })

  it('custom content for type is year', async () => {
    const wrapper = _mount(
      `<el-date-picker
        type="year"
        v-model="value"
        ref="input">
        <template #default="{ text }">
          <div class="el-date-table-cell">
            <div class="el-date-table-cell__text">{{ text }}y</div>
          </div>
        </template>
      </el-date-picker>`,
      () => ({ value: '' }),
      {
        mounted() {
          this.$refs.input.focus()
        },
      }
    )
    await nextTick()
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    {
      ;(document.querySelector('td .el-date-table-cell') as HTMLElement).click()
    }
    input.trigger('focus')
    await nextTick()
    const el = document.querySelector('td.current .el-date-table-cell')
    expect(el.textContent.includes('y')).toBeTruthy()
  })

  it('custom content comment for type is year', async () => {
    _mount(
      `<el-date-picker
        v-model="value"
        type="year"
        ref="input">
        <template #default="{ text }">
          <!-- <div class="el-date-table-cell">
            <div>{{ text + "csw" }}</div>
          </div> -->
        </template>
      </el-date-picker>`,
      () => ({ value: '' }),
      {
        mounted() {
          this.$refs.input.focus()
        },
      }
    )
    await nextTick()
    const el = document.querySelector('td .el-date-table-cell')
    const text = el.textContent
    expect(text.includes('csw')).toBeFalsy()
  })

  describe('value-format', () => {
    it('with literal string', async () => {
      const day = dayjs()
      const format = 'YYYY-MM-DD'
      const valueFormat = '[Element-Plus] DD/MM YYYY'
      const value = day.format(valueFormat)
      const wrapper = _mount(
        `
        <el-date-picker
          ref="compo"
          v-model="value"
          type="date"
          format="${format}"
          value-format="${valueFormat}" />
        <button @click="changeValue">click</button>
      `,
        () => {
          return {
            value,
          }
        },
        {
          methods: {
            changeValue() {
              this.value = '[Element-Plus] 31/05 2021'
            },
          },
        }
      )
      const vm = wrapper.vm as any
      const input = wrapper.find('input')
      await input.trigger('blur')
      await input.trigger('focus')
      await nextTick()
      {
        ;(document.querySelector('td.available') as HTMLElement).click()
      }
      await nextTick()
      expect(vm.value).toBe(
        dayjs(
          `[Element-Plus] 01/${`0${day.month() + 1}`.slice(-2)} ${day.year()}`,
          valueFormat
        ).format(valueFormat)
      )
      await wrapper.find('button').trigger('click')
      await nextTick()
      expect(wrapper.findComponent(Input).vm.modelValue).toBe('2021-05-31')
    })

    it('with "x"', async () => {
      const format = 'YYYY/MM/DD'
      const dateStr = '2021/05/31'
      const valueFormat = 'x'
      const value = Date.now()
      const wrapper = _mount(
        `
        <el-date-picker
          ref="compo"
          v-model="value"
          type="date"
          format="${format}"
          value-format="${valueFormat}" />
        <button @click="changeValue">click</button>
      `,
        () => {
          return {
            value,
          }
        },
        {
          methods: {
            changeValue() {
              this.value = +new Date(dateStr)
            },
          },
        }
      )
      const vm = wrapper.vm as any
      const input = wrapper.find('input')
      await input.trigger('blur')
      await input.trigger('focus')
      await nextTick()
      ;(document.querySelector('td.available') as HTMLElement).click()
      await nextTick()
      expect(vm.value).toBe(+dayjs().startOf('M'))
      await wrapper.find('button').trigger('click')
      await nextTick()
      expect(wrapper.findComponent(Input).vm.modelValue).toBe(dateStr)
    })
  })

  describe('It should generate accessible attributes', () => {
    it('should generate aria attributes', async () => {
      const wrapper = _mount(
        `<el-date-picker
          v-model="value"
          type="date"
          aria-label="Date picker"
        />`,
        () => ({ value: '' })
      )
      const input = wrapper.find('input')
      expect(input.attributes('role')).toBe('combobox')
      expect(input.attributes('aria-controls')).toBeTruthy()
      expect(input.attributes('aria-expanded')).toBe('false')
      expect(input.attributes('aria-haspopup')).toBe('dialog')
      expect(input.attributes('aria-label')).toBe('Date picker')

      input.trigger('focus')
      await nextTick()
      const popper = document.querySelector('.el-picker__popper')

      expect(input.attributes('aria-expanded')).toBe('true')
      expect(input.attributes('aria-controls')).toBe(popper.getAttribute('id'))
      expect(popper.getAttribute('role')).toBe('dialog')
      expect(popper.getAttribute('aria-modal')).toBe('false')
      expect(popper.getAttribute('aria-hidden')).toBe('false')
    })

    it('should generate aria attributes for range', async () => {
      const wrapper = _mount(
        `<el-date-picker
          v-model="value"
          type="daterange"
          aria-label="Date picker"
        />`,
        () => ({ value: [] })
      )
      const inputs = wrapper.findAll('input')
      expect(inputs[0].attributes('role')).toBe('combobox')
      expect(inputs[0].attributes('aria-controls')).toBeTruthy()
      expect(inputs[0].attributes('aria-expanded')).toBe('false')
      expect(inputs[0].attributes('aria-haspopup')).toBe('dialog')
      expect(inputs[0].attributes('aria-label')).toBe('Date picker')

      expect(inputs[1].attributes('role')).toBe('combobox')
      expect(inputs[1].attributes('aria-controls')).toBeTruthy()
      expect(inputs[1].attributes('aria-expanded')).toBe('false')
      expect(inputs[1].attributes('aria-haspopup')).toBe('dialog')
      expect(inputs[1].attributes('aria-label')).toBe('Date picker')
      expect(inputs[1].attributes('aria-controls')).toBe(
        inputs[0].attributes('aria-controls')
      )

      wrapper.find('input').trigger('focus')
      await nextTick()
      const popper = document.querySelector('.el-picker__popper')

      expect(inputs[0].attributes('aria-expanded')).toBe('true')
      expect(inputs[0].attributes('aria-controls')).toBe(
        popper.getAttribute('id')
      )
      expect(popper.getAttribute('role')).toBe('dialog')
      expect(popper.getAttribute('aria-modal')).toBe('false')
      expect(popper.getAttribute('aria-hidden')).toBe('false')
    })
  })

  describe('Trigger the change event when clearing the date picker', () => {
    it('click the button to clear the date', async () => {
      const changeHandler = vi.fn()
      const wrapper = _mount(
        `<el-date-picker
          v-model="value"
          @change="changeHandler"
        />`,
        () => ({ value: new Date(), changeHandler })
      )

      await wrapper.find('input').trigger('focus')
      await wrapper.find('.el-input').trigger('mouseenter')
      await wrapper.find('.clear-icon').trigger('click')
      expect(changeHandler).toHaveBeenCalledTimes(1)
    })

    it('manually clear date', async () => {
      const changeHandler = vi.fn()
      const wrapper = _mount(
        `<el-date-picker
          v-model="value"
          @change="changeHandler"
        />`,
        () => ({ value: new Date(), changeHandler })
      )

      const input = wrapper.find('input')
      await input.trigger('focus')
      await input.setValue('')
      await input.trigger('blur')
      expect(changeHandler).toHaveBeenCalledTimes(1)
    })
  })
})

describe('DatePicker Navigation', () => {
  let prevMonth, prevYear, nextMonth, nextYear, getYearLabel, getMonthLabel

  const initNavigationTest = async (value) => {
    const wrapper = _mount(
      `<el-date-picker
        v-model="value"
    />`,
      () => ({ value })
    )

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    prevMonth = document.querySelector('button.arrow-left')
    prevYear = document.querySelector('button.d-arrow-left')
    nextMonth = document.querySelector('button.arrow-right')
    nextYear = document.querySelector('button.d-arrow-right')
    getYearLabel = () =>
      document.querySelectorAll('.el-date-picker__header-label')[0].textContent
    getMonthLabel = () =>
      document.querySelectorAll('.el-date-picker__header-label')[1].textContent
  }

  it('month, year', async () => {
    await initNavigationTest(new Date(2000, 0, 1))
    expect(getYearLabel()).toContain('2000')
    expect(getMonthLabel()).toContain('January')

    prevMonth.click()
    await nextTick()
    expect(getYearLabel()).toContain('1999')
    expect(getMonthLabel()).toContain('December')

    prevYear.click()
    await nextTick()
    expect(getYearLabel()).toContain('1998')
    expect(getMonthLabel()).toContain('December')

    nextMonth.click()
    await nextTick()
    expect(getYearLabel()).toContain('1999')
    expect(getMonthLabel()).toContain('January')

    nextYear.click()
    await nextTick()
    expect(getYearLabel()).toContain('2000')
    expect(getMonthLabel()).toContain('January')
  })

  it('month with fewer dates', async () => {
    // July has 31 days, June has 30
    await initNavigationTest(new Date(2000, 6, 31))
    prevMonth.click()
    await nextTick()
    expect(getYearLabel()).toContain('2000')
    expect(getMonthLabel()).toContain('June')
  })

  it('year with fewer February dates', async () => {
    // February 2008 has 29 days, February 2007 has 28
    await initNavigationTest(new Date(2008, 1, 29))
    prevYear.click()
    await nextTick()
    expect(getYearLabel()).toContain('2007')
    expect(getMonthLabel()).toContain('February')
  })

  it('month label with fewer dates', async () => {
    await initNavigationTest(new Date(2000, 6, 31))
    const yearLabel = document.querySelectorAll(
      '.el-date-picker__header-label'
    )[0]
    ;(yearLabel as HTMLElement).click()
    await nextTick()
    const year1999Label = document.querySelectorAll('.el-year-table td')[1]
    ;(year1999Label as HTMLElement).click()
    await nextTick()
    const juneLabel = document.querySelectorAll('.el-month-table td')[5]
    ;(juneLabel as HTMLElement).click()
    await nextTick()
    expect(getYearLabel()).toContain('2001')
    expect(getMonthLabel()).toContain('June')
    const monthLabel = document.querySelectorAll(
      '.el-date-picker__header-label'
    )[1]
    ;(monthLabel as HTMLElement).click()
    await nextTick()
    const janLabel = document.querySelectorAll('.el-month-table td')[0]
    ;(janLabel as HTMLElement).click()
    await nextTick()
    expect(getYearLabel()).toContain('2001')
    expect(getMonthLabel()).toContain('January')
  })

  it('panel change event', async () => {
    await testDatePickerPanelChange('date')
  })
})

describe('MonthPicker', () => {
  it('basic', async () => {
    const wrapper = _mount(
      `<el-date-picker
    type='month'
    v-model="value"
  />`,
      () => ({ value: new Date(2020, 7, 1) })
    )
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    expect(
      (document.querySelector('.el-month-table') as HTMLElement).style.display
    ).toBe('')
    expect(document.querySelector('.el-year-table')).toBeNull()
    ;(
      document.querySelector(
        '.el-month-table .el-date-table-cell__text'
      ) as HTMLElement
    ).click()
    await nextTick()
    const vm = wrapper.vm as any
    expect(vm.value.getMonth()).toBe(0)
  })

  it('value-format', async () => {
    const valueFormat = '[Element-Plus] YYYY.MM'
    const wrapper = _mount(
      `
      <el-date-picker
        type="month"
        v-model="value"
        value-format="${valueFormat}"
      ></el-date-picker>
    `,
      () => ({ value: dayjs(new Date(2020, 7, 1)).format(valueFormat) })
    )
    await nextTick()
    expect(wrapper.findComponent(Input).vm.modelValue).toBe('2020-08')
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    {
      ;(
        document.querySelector(
          '.el-month-table .el-date-table-cell__text'
        ) as HTMLElement
      ).click()
    }
    await nextTick()
    expect(wrapper.findComponent(Input).vm.modelValue).toBe('2020-01')
    expect((wrapper.vm as any).value).toBe(
      dayjs(new Date(2020, 0, 1)).format(valueFormat)
    )
  })
})

describe('YearPicker', () => {
  it('basic', async () => {
    const wrapper = _mount(
      `<el-date-picker
    type='year'
    v-model="value"
  />`,
      () => ({ value: new Date(2020, 7, 1) })
    )
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    expect(
      (document.querySelector('.el-year-table') as HTMLElement).style.display
    ).toBe('')
    expect(document.querySelector('.el-month-table')).toBeNull()

    const leftBtn = document.querySelector('.d-arrow-left') as HTMLElement
    const rightBtn = document.querySelector('.d-arrow-right') as HTMLElement
    let count = 2

    while (--count) {
      leftBtn.click()
    }
    count = 3
    while (--count) {
      rightBtn.click()
    }

    await nextTick()
    ;(
      document.querySelector(
        '.el-year-table .el-date-table-cell__text'
      ) as HTMLElement
    ).click()
    await nextTick()
    const vm = wrapper.vm as any
    expect(vm.value.getFullYear()).toBe(2030)
  })

  it('value-format', async () => {
    const valueFormat = '[Element-Plus] YYYY'
    const wrapper = _mount(
      `
      <el-date-picker
        type="year"
        v-model="value"
        value-format="${valueFormat}"
      ></el-date-picker>
    `,
      () => ({ value: dayjs(new Date(2005, 7, 1)).format(valueFormat) })
    )
    await nextTick()
    expect(wrapper.findComponent(Input).vm.modelValue).toBe('2005')
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const cell = document.querySelector(
      '.el-year-table .el-date-table-cell__text'
    ) as HTMLElement
    cell.click()
    await nextTick()
    expect((wrapper.vm as any).value).toBe(
      dayjs(new Date(Number.parseInt(cell.innerHTML.trim()), 0, 1)).format(
        valueFormat
      )
    )
  })
})

describe('WeekPicker', () => {
  it('create', async () => {
    const wrapper = _mount(
      `<el-date-picker
    type='week'
    v-model="value"
  />`,
      () => ({ value: new Date(2020, 7, 15) })
    )
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    expect(document.querySelector('.is-week-mode')).not.toBeNull()
    // select month still is in week-mode
    ;(
      document.querySelectorAll(
        '.el-date-picker__header-label'
      )[1] as HTMLElement
    ).click()
    await nextTick()
    ;(
      document.querySelectorAll(
        '.el-month-table .el-date-table-cell__text'
      )[7] as HTMLElement
    ).click()
    await nextTick()
    expect(document.querySelector('.is-week-mode')).not.toBeNull()
    const numberOfHighlightRows = () =>
      document.querySelectorAll('.el-date-table__row.current').length
    ;(
      document.querySelector(
        '.el-date-table__row ~ .el-date-table__row td.available'
      ) as HTMLElement
    ).click()
    await nextTick()
    const vm = wrapper.vm as any
    expect(vm.value).not.toBeNull()
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    expect(numberOfHighlightRows()).toBe(1)
    // test: next month should not have highlight
    ;(document.querySelector('.arrow-right') as HTMLElement).click()
    await nextTick()
    expect(numberOfHighlightRows()).toBe(0)
    // test: next year should not have highlight
    ;(document.querySelector('.arrow-left') as HTMLElement).click()
    await nextTick()
    ;(document.querySelector('.d-arrow-right') as HTMLElement).click()
    await nextTick()
    expect(numberOfHighlightRows()).toBe(0)
  })
  ;[
    { locale: enUs, name: 'Sunday', value: 0 },
    { locale: zhCn, name: 'Monday', value: 1 },
  ].forEach((loObj) => {
    it(`emit first day of the week, ${loObj.locale.name} locale, ${loObj.name}`, async () => {
      const wrapper = mount(
        {
          components: {
            'el-date-picker': DatePicker,
            'el-config-provider': ConfigProvider,
          },
          template: `
          <el-config-provider :locale="locale">
            <el-date-picker
              type='week'
              v-model="value"
            />
          </el-config-provider>
        `,
          data() {
            return {
              locale: loObj.locale,
              value: '',
            }
          },
        },
        {
          attachTo: 'body',
        }
      )
      const input = wrapper.find('input')
      input.trigger('blur')
      input.trigger('focus')
      await nextTick()
      // click Wednesday
      ;(
        document.querySelectorAll(
          '.el-date-table__row ~ .el-date-table__row td'
        )[3] as HTMLElement
      ).click()
      await nextTick()
      const vm = wrapper.vm as any
      expect(vm.value).not.toBeNull()
      expect(+dayjs(vm.value).locale(loObj.locale.name)).toBe(
        +dayjs(vm.value).locale(loObj.locale.name).startOf('week')
      )
      expect(dayjs(vm.value).locale(loObj.locale.name).day()).toBe(loObj.value) // Sunday or Monday
    })
  })
})

describe('DatePicker dates', () => {
  it('create', async () => {
    const wrapper = _mount(
      `<el-date-picker
    type='dates'
    v-model="value"
  />`,
      () => ({ value: '' })
    )
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const td = document.querySelectorAll(
      '.el-date-table__row .available'
    ) as NodeListOf<HTMLElement>
    const vm = wrapper.vm as any
    td[0].click()
    await nextTick()
    expect(vm.value.length).toBe(1)
    td[1].click()
    await nextTick()
    expect(vm.value.length).toBe(2)
    expect(
      document.querySelectorAll('.el-date-table__row .selected').length
    ).toBe(2)
    td[0].click()
    await nextTick()
    expect(vm.value.length).toBe(1)
    td[1].click()
    await nextTick()
    expect(vm.value.length).toBe(0)
  })

  it('selected', async () => {
    const wrapper = _mount(
      `<el-date-picker
        type="dates"
        v-model="value"
      />`,
      () => ({ value: [new Date()] })
    )
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    expect(
      document.querySelectorAll('.el-date-table__row .selected').length
    ).toBe(1)
  })
})

describe('DatePicker months', () => {
  it('create', async () => {
    const wrapper = _mount(
      `<el-date-picker
    type='months'
    v-model="value"
  />`,
      () => ({ value: '' })
    )
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const td = document.querySelectorAll(
      '.el-month-table tr td'
    ) as NodeListOf<HTMLElement>
    const vm = wrapper.vm as any
    td[0].click()
    await nextTick()
    expect(vm.value.length).toBe(1)
    td[1].click()
    await nextTick()
    expect(vm.value.length).toBe(2)
    expect(
      document.querySelectorAll('.el-month-table tr .current').length
    ).toBe(2)
    td[0].click()
    await nextTick()
    expect(vm.value.length).toBe(1)
    td[1].click()
    await nextTick()
    expect(vm.value.length).toBe(0)
  })

  it('selected', async () => {
    const wrapper = _mount(
      `<el-date-picker
        type="months"
        v-model="value"
      />`,
      () => ({ value: [new Date()] })
    )
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    expect(
      document.querySelectorAll('.el-month-table tr .current').length
    ).toBe(1)
  })
})

describe('DatePicker keyboard events', () => {
  it('enter', async () => {
    const wrapper = _mount(
      `<el-date-picker
    type='date'
    v-model="value"
  />`,
      () => ({ value: '' })
    )
    const input = wrapper.find('.el-input__inner')
    await input.trigger('focus')
    await input.trigger('click')
    await nextTick()

    const popperEl = document.querySelectorAll('.el-picker__popper')[0]
    const attr = popperEl.getAttribute('aria-hidden')
    expect(attr).toEqual('false')

    await input.trigger('keydown', {
      code: EVENT_CODE.enter,
    })
    await rAF()
    const popperEl2 = document.querySelectorAll('.el-picker__popper')[0]
    const attr2 = popperEl2.getAttribute('aria-hidden')
    expect(attr2).toEqual('true')
  })

  it('numpadEnter', async () => {
    const wrapper = _mount(
      `<el-date-picker
    type='date'
    v-model="value"
  />`,
      () => ({ value: '' })
    )
    const input = wrapper.find('.el-input__inner')
    await input.trigger('focus')
    await input.trigger('click')
    await nextTick()

    const popperEl = document.querySelectorAll('.el-picker__popper')[0]
    const attr = popperEl.getAttribute('aria-hidden')
    expect(attr).toEqual('false')

    await input.trigger('keydown', {
      code: EVENT_CODE.numpadEnter,
    })
    await rAF()
    const popperEl2 = document.querySelectorAll('.el-picker__popper')[0]
    const attr2 = popperEl2.getAttribute('aria-hidden')
    expect(attr2).toEqual('true')
  })
})

describe('DateRangePicker', () => {
  it('create & custom class & style', async () => {
    let calendarChangeValue = null
    const changeHandler = vi.fn()
    const popperClassName = 'popper-class-test'
    const customClassName = 'custom-class-test'
    const wrapper = _mount(
      `<el-date-picker
        type='daterange'
        v-model="value"
        @calendarChange="onCalendarChange"
        :style="{color:'red'}"
        :class="customClassName"
        :popperClass="popperClassName"
      />`,
      () => ({ value: '', popperClassName, customClassName }),
      {
        methods: {
          onCalendarChange(e) {
            calendarChangeValue = e
            changeHandler(e)
          },
        },
      }
    )
    const inputs = wrapper.findAll('input')
    inputs[0].trigger('blur')
    inputs[0].trigger('focus')
    await nextTick()

    const outterInput = wrapper.find('.el-range-editor.el-input__wrapper')
    expect(outterInput.classes()).toContain(customClassName)
    expect(outterInput.attributes().style).toBeDefined()
    const panels = document.querySelectorAll('.el-date-range-picker__content')
    expect(panels.length).toBe(2)
    ;(panels[0].querySelector('td.available') as HTMLElement).click()
    await nextTick()
    ;(panels[1].querySelector('td.available') as HTMLElement).click()
    await nextTick()
    inputs[0].trigger('blur')
    inputs[0].trigger('focus')
    await nextTick()
    // popperClassName
    expect(
      document
        .querySelector('.el-picker__popper')
        .classList.contains(popperClassName)
    ).toBe(true)
    // correct highlight
    const startDate = document.querySelectorAll('.start-date')
    const endDate = document.querySelectorAll('.end-date')
    const inRangeDate = document.querySelectorAll('.in-range')
    expect(startDate.length).toBe(1)
    expect(endDate.length).toBe(1)
    expect(inRangeDate.length).toBeGreaterThan(28)
    // value is array
    const vm = wrapper.vm as any
    expect(Array.isArray(vm.value)).toBeTruthy()
    // input text is something like date string
    expect(inputs[0].element.value.length).toBe(10)
    expect(inputs[1].element.value.length).toBe(10)
    // calendar-change event
    expect(changeHandler).toHaveBeenCalledTimes(2)
    expect(calendarChangeValue.length).toBe(2)
    expect(calendarChangeValue[0]).toBeInstanceOf(Date)
    expect(calendarChangeValue[1]).toBeInstanceOf(Date)
  })

  it('reverse selection', async () => {
    const wrapper = _mount(
      `<el-date-picker
      type='daterange'
      v-model="value"
    />`,
      () => ({ value: '' })
    )
    const inputs = wrapper.findAll('input')
    inputs[0].trigger('blur')
    inputs[0].trigger('focus')
    await nextTick()

    const panels = document.querySelectorAll('.el-date-range-picker__content')
    ;(panels[1].querySelector('td.available') as HTMLElement).click()
    await nextTick()
    ;(panels[0].querySelector('td.available') as HTMLElement).click()
    await nextTick()
    inputs[0].trigger('blur')
    inputs[0].trigger('focus')
    await nextTick()
    // correct highlight
    const startDate = document.querySelectorAll('.start-date')
    const endDate = document.querySelectorAll('.end-date')
    const inRangeDate = document.querySelectorAll('.in-range')
    expect(startDate.length).toBe(1)
    expect(endDate.length).toBe(1)
    expect(inRangeDate.length).toBeGreaterThan(28)
    const vm = wrapper.vm as any
    expect(vm.value[0].getTime() < vm.value[1].getTime()).toBeTruthy()
  })

  it('reset selection', async () => {
    const wrapper = _mount(
      `<el-date-picker
      type='daterange'
      v-model="value"
    />`,
      () => ({ value: '' })
    )

    const inputs = wrapper.findAll('input')
    inputs[0].trigger('blur')
    inputs[0].trigger('focus')
    await nextTick()
    const panels = document.querySelectorAll('.el-date-range-picker__content')
    ;(panels[1].querySelector('td.available') as HTMLElement).click()
    await nextTick()
    ;(panels[0].querySelector('td.available') as HTMLElement).click()
    await nextTick()
    ;(wrapper.vm as any).value = ''
    inputs[0].trigger('blur')
    inputs[0].trigger('focus')
    await nextTick()
    const inRangeDate = document.querySelectorAll('.in-range')
    expect(inRangeDate.length).toBe(0)
  })

  it('range, start-date and end-date', async () => {
    _mount(
      `<el-date-picker
      type='daterange'
      v-model="value"
    />`,
      () => ({ value: '' })
    )

    const table = document.querySelector('.el-date-table')
    const availableTds = (table as HTMLTableElement).querySelectorAll(
      'td.available'
    )

    ;(availableTds[0] as HTMLElement).click()
    await nextTick()
    ;(availableTds[1] as HTMLElement).click()
    await nextTick()

    expect(availableTds[0].classList.contains('in-range')).toBeTruthy()
    expect(availableTds[0].classList.contains('start-date')).toBeTruthy()
    expect(availableTds[1].classList.contains('in-range')).toBeTruthy()
    expect(availableTds[1].classList.contains('end-date')).toBeTruthy()
    ;(availableTds[1] as HTMLElement).click()
    await nextTick()
    ;(availableTds[0] as HTMLElement).click()
    await nextTick()

    expect(availableTds[0].classList.contains('in-range')).toBeTruthy()
    expect(availableTds[0].classList.contains('start-date')).toBeTruthy()
    expect(availableTds[1].classList.contains('in-range')).toBeTruthy()
    expect(availableTds[1].classList.contains('end-date')).toBeTruthy()

    const startDate = document.querySelectorAll('.start-date')
    const endDate = document.querySelectorAll('.end-date')
    const inRangeDate = document.querySelectorAll('.in-range')
    expect(startDate.length).toBe(1)
    expect(endDate.length).toBe(1)
    expect(inRangeDate.length).toBe(2)
  })

  it('unlink:true', async () => {
    const wrapper = _mount(
      `<el-date-picker
      type='daterange'
      v-model="value"
      unlink-panels
    />`,
      () => ({ value: [new Date(2000, 9, 1), new Date(2000, 11, 2)] })
    )
    const inputs = wrapper.findAll('input')
    inputs[0].trigger('blur')
    inputs[0].trigger('focus')
    await nextTick()
    const panels = document.querySelectorAll('.el-date-range-picker__content')
    const left = panels[0].querySelector('.el-date-range-picker__header')
    const right = panels[1].querySelector(
      '.is-right .el-date-range-picker__header'
    )
    expect(left.textContent).toBe('2000  October')
    expect(right.textContent).toBe('2000  December')
    ;(panels[1].querySelector('.d-arrow-right') as HTMLElement).click()
    await nextTick()
    ;(panels[1].querySelector('.arrow-right') as HTMLElement).click()
    await nextTick()
    expect(left.textContent).toBe('2000  October')
    expect(right.textContent).toBe('2002  January')
  })

  it('daylight saving time highlight', async () => {
    // Run test with environment variable TZ=Australia/Sydney
    // The following test uses Australian Eastern Daylight Time (AEDT)
    // AEST -> AEDT shift happened on 2016-10-02 02:00:00
    const wrapper = _mount(
      `<el-date-picker
      type='daterange'
      v-model="value"
      unlink-panels
    />`,
      () => ({ value: [new Date(2016, 9, 1), new Date(2016, 9, 3)] })
    )

    const inputs = wrapper.findAll('input')
    inputs[0].trigger('blur')
    inputs[0].trigger('focus')
    await nextTick()

    const startDate = document.querySelectorAll('.start-date')
    const endDate = document.querySelectorAll('.end-date')
    expect(startDate.length).toBe(1)
    expect(endDate.length).toBe(1)
  })

  it('value-format', async () => {
    const valueFormat = 'DD/MM YYYY'
    const wrapper = _mount(
      `
      <el-date-picker
        v-model="value"
        type="daterange"
        format="YYYY-MM-DD"
        value-format="${valueFormat}"
    />`,
      () => ({
        value: [
          dayjs(new Date(2021, 4, 2)).format(valueFormat),
          dayjs(new Date(2021, 4, 12)).format(valueFormat),
        ],
      })
    )
    await nextTick()
    const [startInput, endInput] = wrapper.findAll('input')
    expect(startInput.element.value).toBe('2021-05-02')
    expect(endInput.element.value).toBe('2021-05-12')
    startInput.trigger('blur')
    startInput.trigger('focus')
    await nextTick()
    const panels = document.querySelectorAll('.el-date-range-picker__content')
    expect(panels.length).toBe(2)
    ;(panels[0].querySelector('td.available') as HTMLElement).click()
    await nextTick()
    ;(panels[1].querySelector('td.available') as HTMLElement).click()
    await nextTick()
    expect((wrapper.vm as any).value.toString()).toBe(
      ['01/05 2021', '01/06 2021'].toString()
    )
  })

  it('panel change event', async () => {
    await testDatePickerPanelChange('daterange')
  })

  it('display value', async () => {
    const wrapper = _mount(
      `
      <el-date-picker
        v-model="value"
        type="daterange"
    />`,
      () => ({
        value: [undefined, undefined],
      })
    )

    await nextTick()

    const [startInput, endInput] = wrapper.findAll('input')
    expect(startInput.element.value).toBe('')
    expect(endInput.element.value).toBe('')
  })
})

describe('MonthRange', () => {
  it('works', async () => {
    const wrapper = _mount(
      `<el-date-picker
      type='monthrange'
      v-model="value"
    />`,
      () => ({ value: '' })
    )

    const inputs = wrapper.findAll('input')
    inputs[0].trigger('blur')
    inputs[0].trigger('focus')
    await nextTick()
    const panels = document.querySelectorAll('.el-date-range-picker__content')
    expect(panels.length).toBe(2)
    const p0 = <HTMLElement>panels[0].querySelector('td:not(.disabled)')
    p0.click()
    await nextTick()
    const p1 = <HTMLElement>panels[1].querySelector('td:not(.disabled)')
    p1.click()
    await nextTick()
    inputs[0].trigger('blur')
    inputs[0].trigger('focus')
    // correct highlight
    const startDate = document.querySelectorAll('.start-date')
    const endDate = document.querySelectorAll('.end-date')
    const inRangeDate = document.querySelectorAll('.in-range')
    expect(startDate.length).toBe(1)
    expect(endDate.length).toBe(1)
    expect(inRangeDate.length).toBeGreaterThan(0)
    // value is array
    const vm = wrapper.vm as any
    expect(Array.isArray(vm.value)).toBeTruthy()
    // input text is something like date string
    expect(inputs[0].element.value.length).toBe(7)
    expect(inputs[1].element.value.length).toBe(7)
    // reverse selection
    p1.click()
    await nextTick()
    p0.click()
    await nextTick()
    expect(vm.value[0].getTime() < vm.value[1].getTime()).toBeTruthy()
  })

  it('range, start-date and end-date', async () => {
    _mount(
      `<el-date-picker
      type='monthrange'
      v-model="value"
    />`,
      () => ({ value: '' })
    )

    const table = document.querySelector('.el-month-table')
    const tds = (table as HTMLTableElement).querySelectorAll('td')

    ;(tds[0] as HTMLElement).click()
    await nextTick()
    ;(tds[1] as HTMLElement).click()
    await nextTick()

    expect(tds[0].classList.contains('in-range')).toBeTruthy()
    expect(tds[0].classList.contains('start-date')).toBeTruthy()
    expect(tds[1].classList.contains('in-range')).toBeTruthy()
    expect(tds[1].classList.contains('end-date')).toBeTruthy()
    ;(tds[1] as HTMLElement).click()
    await nextTick()
    ;(tds[0] as HTMLElement).click()
    await nextTick()

    expect(tds[0].classList.contains('in-range')).toBeTruthy()
    expect(tds[0].classList.contains('start-date')).toBeTruthy()
    expect(tds[1].classList.contains('in-range')).toBeTruthy()
    expect(tds[1].classList.contains('end-date')).toBeTruthy()

    const startDate = document.querySelectorAll('.start-date')
    const endDate = document.querySelectorAll('.end-date')
    const inRangeDate = document.querySelectorAll('.in-range')
    expect(startDate.length).toBe(1)
    expect(endDate.length).toBe(1)
    expect(inRangeDate.length).toBe(2)
  })

  it('type:monthrange unlink:true', async () => {
    const wrapper = _mount(
      `<el-date-picker
      type='monthrange'
      v-model="value"
      unlink-panels
    />`,
      () => ({ value: [new Date(2000, 9), new Date(2002, 11)] })
    )

    const inputs = wrapper.findAll('input')
    inputs[0].trigger('blur')
    inputs[0].trigger('focus')
    await nextTick()
    const panels = document.querySelectorAll('.el-date-range-picker__content')
    const left = panels[0].querySelector('.el-date-range-picker__header')
    const right = panels[1].querySelector(
      '.is-right .el-date-range-picker__header'
    )
    expect(left.textContent).toContain(2000)
    expect(right.textContent).toContain(2002)
    ;(panels[1].querySelector('.d-arrow-right') as HTMLElement).click()
    await nextTick()
    expect(left.textContent).toContain(2000)
    expect(right.textContent).toContain(2003)
  })

  it('daylight saving time highlight', async () => {
    const wrapper = _mount(
      `<el-date-picker
      type='monthrange'
      v-model="value"
      unlink-panels
    />`,
      () => ({ value: [new Date(2016, 6), new Date(2016, 12)] })
    )

    const inputs = wrapper.findAll('input')
    inputs[0].trigger('blur')
    inputs[0].trigger('focus')
    await nextTick()
    const startDate = document.querySelectorAll('.start-date')
    const endDate = document.querySelectorAll('.end-date')
    expect(startDate.length).toBe(1)
    expect(endDate.length).toBe(1)
  })

  it('should accept popper options and pass down', async () => {
    const ElPopperOptions = {
      strategy: 'fixed',
    }
    const wrapper = _mount(
      `<el-date-picker
        type='monthrange'
        v-model="value"
        :popper-options="options"
        unlink-panels
      />`,
      () => ({
        value: [new Date(2016, 6), new Date(2016, 12)],
        options: ElPopperOptions,
      }),
      {
        provide() {
          return {
            ElPopperOptions,
          }
        },
      }
    )

    await nextTick()

    expect(
      (wrapper.findComponent(CommonPicker).vm as any).elPopperOptions
    ).toEqual(ElPopperOptions)
  })

  it('user input', async () => {
    const wrapper = _mount(
      `<el-date-picker
      type='monthrange'
      v-model="value"
      valueFormat="YYYY-MM"
    />`,
      () => ({ value: ['2022-01', '2022-02'] })
    )

    const [startInput, endInput] = wrapper.findAll('input')
    await startInput.setValue('2015-01')
    await endInput.setValue('2017-01')
    await nextTick()

    const vm = wrapper.vm
    expect(vm.value[0]).toBe('2015-01')
    expect(vm.value[1]).toBe('2017-01')
  })

  describe('form item accessibility integration', () => {
    it('automatic id attachment', async () => {
      const wrapper = _mount(
        `<el-form-item label="Foobar" data-test-ref="item">
          <el-date-picker />
        </el-form-item>`,
        () => ({})
      )

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      const formItemLabel = formItem.find('.el-form-item__label')
      const datePickerInput = wrapper.find('.el-input__inner')
      expect(formItem.attributes().role).toBeFalsy()
      expect(formItemLabel.attributes().for).toBe(
        datePickerInput.attributes().id
      )
    })

    it('specified id attachment', async () => {
      const wrapper = _mount(
        `<el-form-item label="Foobar" data-test-ref="item">
          <el-date-picker id="foobar" />
        </el-form-item>`,
        () => ({})
      )

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      const formItemLabel = formItem.find('.el-form-item__label')
      const datePickerInput = wrapper.find('.el-input__inner')
      expect(formItem.attributes().role).toBeFalsy()
      expect(datePickerInput.attributes().id).toBe('foobar')
      expect(formItemLabel.attributes().for).toBe(
        datePickerInput.attributes().id
      )
    })

    it('form item role is group when multiple inputs', async () => {
      const wrapper = _mount(
        `<el-form-item label="Foobar" data-test-ref="item">
          <el-date-picker />
          <el-date-picker />
        </el-form-item>`,
        () => ({})
      )

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      expect(formItem.attributes().role).toBe('group')
    })
  })

  it('The year which is disabled should not be selectable', async () => {
    const pickHandler = vi.fn()
    const wrapper = _mount(
      `<el-date-picker
        v-model="yearValue"
        type="year"
        :disabled-date="validateYear"
        @panel-change="onPick"
      />`,
      () => ({
        yearValue: '2022',
        validateYear: (date) => {
          if (date.getFullYear() > 2022) {
            return true
          } else {
            return false
          }
        },
        onPick(e) {
          return pickHandler(e)
        },
      })
    )
    const input = wrapper.find('input')
    input.trigger('focus')
    await nextTick()
    ;(document.querySelector('td.disabled') as HTMLElement).click()
    await nextTick()
    expect(pickHandler).toHaveBeenCalledTimes(0)
    ;(document.querySelector('td.available') as HTMLElement).click()
    await nextTick()
    expect(pickHandler).toHaveBeenCalledTimes(1)
  })

  it('prop defaultTime should not confilt with prop shortcuts', async () => {
    const wrapper = _mount(
      `<el-date-picker
          v-model="value"
          type="datetime"
          :shortcuts="[
                { text: '12:00', value: new Date(2023, 0, 1, 12) }
              , { text: '13:00', value: new Date(2023, 0, 1, 13) }
              , { text: '14:00', value: new Date(2023, 0, 1, 14) }
            ]"
          :defaultTime="new Date(2023, 0, 1, 19, 0, 0)"
        />`,
      () => ({ value: '' })
    )
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    document
      .querySelector('.el-picker-panel__sidebar .el-picker-panel__shortcut')
      .click()
    await nextTick()
    const vm = wrapper.vm as any
    expect(vm.value).toBeDefined()
    expect(vm.value.getFullYear()).toBe(2023)
    expect(vm.value.getMonth()).toBe(0)
    expect(vm.value.getDate()).toBe(1)
    expect(vm.value.getHours()).toBe(12)
  })
  it('format allows dynamic changes', async () => {
    const format = 'YYYY/MM/DD HH:mm:ss'
    const wrapper = _mount(
      `<el-date-picker
          v-model="value"
          type="datetimerange"
          :format="format"
        />
        <button @click="changeFormat">click</button>`,
      () => ({
        value: ['2024/06/14', '2024/06/15'],
        format,
      }),
      {
        methods: {
          changeFormat() {
            this.format = 'YYYY-MM-DD'
          },
        },
      }
    )
    await nextTick()
    const inputRange = wrapper.findAll('.el-range-input')
    expect(inputRange[0].element.value).toBe('2024/06/14 00:00:00')
    expect(inputRange[1].element.value).toBe('2024/06/15 00:00:00')
    await wrapper.find('button').trigger('click')
    await nextTick()
    expect(inputRange[0].element.value).toBe('2024-06-14')
    expect(inputRange[1].element.value).toBe('2024-06-15')
  })
})

describe('YearRange', () => {
  it('works', async () => {
    const wrapper = _mount(
      `<el-date-picker
      type='yearrange'
      v-model="value"
    />`,
      () => ({ value: '' })
    )

    const inputs = wrapper.findAll('input')
    inputs[0].trigger('blur')
    inputs[0].trigger('focus')
    await nextTick()
    const panels = document.querySelectorAll('.el-date-range-picker__content')
    expect(panels.length).toBe(2)
    const p0 = <HTMLElement>panels[0].querySelector('td:not(.disabled)')
    p0.click()
    await nextTick()
    const p1 = <HTMLElement>panels[1].querySelector('td:not(.disabled)')
    p1.click()
    await nextTick()
    inputs[0].trigger('blur')
    inputs[0].trigger('focus')
    // correct highlight
    const startDate = document.querySelectorAll('.start-date')
    const endDate = document.querySelectorAll('.end-date')
    const inRangeDate = document.querySelectorAll('.in-range')
    expect(startDate.length).toBe(1)
    expect(endDate.length).toBe(1)
    expect(inRangeDate.length).toBeGreaterThan(0)
    // value is array
    const vm = wrapper.vm as any
    expect(Array.isArray(vm.value)).toBeTruthy()
    // input text is something like date string
    expect(inputs[0].element.value.length).toBe(4)
    expect(inputs[1].element.value.length).toBe(4)
    // reverse selection
    p1.click()
    await nextTick()
    p0.click()
    await nextTick()
    expect(vm.value[0].getTime() < vm.value[1].getTime()).toBeTruthy()
  })

  it('range, start-date and end-date', async () => {
    _mount(
      `<el-date-picker
      type='yearrange'
      v-model="value"
    />`,
      () => ({ value: '' })
    )

    const table = document.querySelector('.el-year-table')
    const tds = (table as HTMLTableElement).querySelectorAll('td')

    ;(tds[0] as HTMLElement).click()
    await nextTick()
    ;(tds[1] as HTMLElement).click()
    await nextTick()

    expect(tds[0].classList.contains('in-range')).toBeTruthy()
    expect(tds[0].classList.contains('start-date')).toBeTruthy()
    expect(tds[1].classList.contains('in-range')).toBeTruthy()
    expect(tds[1].classList.contains('end-date')).toBeTruthy()
    ;(tds[1] as HTMLElement).click()
    await nextTick()
    ;(tds[0] as HTMLElement).click()
    await nextTick()

    expect(tds[0].classList.contains('in-range')).toBeTruthy()
    expect(tds[0].classList.contains('start-date')).toBeTruthy()
    expect(tds[1].classList.contains('in-range')).toBeTruthy()
    expect(tds[1].classList.contains('end-date')).toBeTruthy()

    const startDate = document.querySelectorAll('.start-date')
    const endDate = document.querySelectorAll('.end-date')
    const inRangeDate = document.querySelectorAll('.in-range')
    expect(startDate.length).toBe(1)
    expect(endDate.length).toBe(1)
    expect(inRangeDate.length).toBe(2)
  })

  it('type:yearrange unlink:true', async () => {
    const wrapper = _mount(
      `<el-date-picker
      type='yearrange'
      v-model="value"
      unlink-panels
    />`,
      () => ({ value: [new Date(2024, 0), new Date(2036, 0)] })
    )

    const inputs = wrapper.findAll('input')
    inputs[0].trigger('blur')
    inputs[0].trigger('focus')
    await nextTick()
    const panels = document.querySelectorAll('.el-date-range-picker__content')
    const left = panels[0].querySelector('.el-date-range-picker__header')
    const right = panels[1].querySelector('.el-date-range-picker__header')
    expect(left.textContent).toContain('2020-2029')
    expect(right.textContent).toContain('2030-2039')
    ;(panels[1].querySelector('.d-arrow-right') as HTMLElement).click()
    await nextTick()
    expect(left.textContent).toContain('2020-2029')
    expect(right.textContent).toContain('2040-2049')
  })

  it('daylight saving time highlight', async () => {
    const wrapper = _mount(
      `<el-date-picker
      type='yearrange'
      v-model="value"
      unlink-panels
    />`,
      () => ({ value: [new Date(2024, 0), new Date(2036, 0)] })
    )

    const inputs = wrapper.findAll('input')
    inputs[0].trigger('blur')
    inputs[0].trigger('focus')
    await nextTick()
    const startDate = document.querySelectorAll('.start-date')
    const endDate = document.querySelectorAll('.end-date')
    expect(startDate.length).toBe(1)
    expect(endDate.length).toBe(1)
  })

  it('should accept popper options and pass down', async () => {
    const ElPopperOptions = {
      strategy: 'fixed',
    }
    const wrapper = _mount(
      `<el-date-picker
        type='yearrange'
        v-model="value"
        :popper-options="options"
        unlink-panels
      />`,
      () => ({
        value: [new Date(2024, 0), new Date(2036, 0)],
        options: ElPopperOptions,
      }),
      {
        provide() {
          return {
            ElPopperOptions,
          }
        },
      }
    )

    await nextTick()

    expect(
      (wrapper.findComponent(CommonPicker).vm as any).elPopperOptions
    ).toEqual(ElPopperOptions)
  })
})
