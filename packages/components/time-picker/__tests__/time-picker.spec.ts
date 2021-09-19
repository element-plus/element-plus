import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import dayjs from 'dayjs'
import { triggerEvent } from '@element-plus/test-utils'
import TimePicker from '../src/time-picker'
import Picker from '../src/common/picker.vue'

const _mount = (template: string, data, otherObj?) =>
  mount(
    {
      components: {
        'el-time-picker': TimePicker,
      },
      template,
      data,
      ...otherObj,
    },
    {
      attachTo: 'body',
    }
  )

const makeRange = (start, end) => {
  const result = []
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}

const getSpinnerTextAsArray = (dom, selector) => {
  return [].slice
    .call(dom.querySelectorAll(selector))
    .map((node) => Number(node.textContent))
}

afterEach(() => {
  document.documentElement.innerHTML = ''
})

describe('TimePicker', () => {
  it('create & custom class & style', async () => {
    const wrapper = _mount(
      `<el-time-picker
    :placeholder="placeholder"
    :readonly="readonly"
    :style="{color:'red'}"
    class="customClass"
  />`,
      () => ({ placeholder: 'test_', readonly: true })
    )
    const input = wrapper.find('input')
    expect(input.attributes('placeholder')).toBe('test_')
    expect(input.attributes('readonly')).not.toBeUndefined()
    const outterInput = wrapper.find('.el-input')
    expect(outterInput.classes()).toContain('customClass')
    expect(outterInput.attributes().style).toBeDefined()
  })

  it('set format && default value && set AM/PM spinner && no $attr to panel', async () => {
    const wrapper = _mount(
      `<el-time-picker
        :format="format"
        v-model="value"
        class="customClass"
      />`,
      () => ({ format: 'hh-mm:ss A', value: new Date(2016, 9, 10, 18, 40) })
    )
    await nextTick()
    const input = wrapper.find('input')
    expect(input.element.value).toBe('06-40:00 PM') // format
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const list = document.querySelectorAll('.el-time-spinner__list')
    const hoursEl = list[0]
    const items = hoursEl.querySelectorAll('.el-time-spinner__item')
    expect(items[0].textContent).toBe('12 AM') // am pm
    expect(items[1].textContent).toBe('01 AM')
    expect(items[12].textContent).toBe('12 PM')
    expect(items[15].textContent).toBe('03 PM')
    const times = document.querySelectorAll('.el-time-spinner__list .active')
    expect(times[0].textContent).toBe('06 PM')
    expect(times[1].textContent).toBe('40') // default value
    expect(times[2].textContent).toBe('00')
    const panel = document.querySelector('.el-time-panel') as any
    expect(panel.classList).not.toContain('customClass')
  })

  it('select time', async () => {
    const wrapper = _mount(
      `<el-time-picker
        v-model="value"
      />`,
      () => ({ value: '' })
    )
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const list = document.querySelectorAll('.el-time-spinner__list')
    const hoursEl = list[0]
    const minutesEl = list[1]
    const secondsEl = list[2]
    const hourEl = hoursEl.querySelectorAll('.el-time-spinner__item')[4] as any
    const minuteEl = minutesEl.querySelectorAll(
      '.el-time-spinner__item'
    )[36] as any
    const secondEl = secondsEl.querySelectorAll(
      '.el-time-spinner__item'
    )[20] as any
    // click hour, minute, second one at a time.
    hourEl.click()
    await nextTick()
    minuteEl.click()
    await nextTick()
    secondEl.click()
    await nextTick()
    const vm = wrapper.vm as any
    const date = vm.value
    expect(hourEl.classList.contains('active')).toBeTruthy()
    expect(minuteEl.classList.contains('active')).toBeTruthy()
    expect(secondEl.classList.contains('active')).toBeTruthy()
    expect(date.getHours()).toBe(4)
    expect(date.getMinutes()).toBe(36)
    expect(date.getSeconds()).toBe(20)
  })

  it('click confirm / cancel button', async () => {
    const wrapper = _mount(
      `<el-time-picker
        v-model="value"
      />`,
      () => ({ value: '' })
    )
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    ;(document.querySelector('.el-time-panel__btn.cancel') as any).click()
    const vm = wrapper.vm as any
    expect(vm.value).toBe('')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    ;(document.querySelector('.el-time-panel__btn.confirm') as any).click()
    expect(vm.value instanceof Date).toBeTruthy()
  })

  it('should update oldValue when visible change', async () => {
    const wrapper = _mount(
      `<el-time-picker
        v-model="value"
      />`,
      () => ({ value: new Date(2016, 9, 10, 18, 40) })
    )

    // show picker panel
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()

    // select time
    const list = document.querySelectorAll('.el-time-spinner__list')
    const hoursEl = list[0]
    const minutesEl = list[1]
    const secondsEl = list[2]
    const hourEl = hoursEl.querySelectorAll('.el-time-spinner__item')[4] as any
    const minuteEl = minutesEl.querySelectorAll(
      '.el-time-spinner__item'
    )[36] as any
    const secondEl = secondsEl.querySelectorAll(
      '.el-time-spinner__item'
    )[20] as any
    hourEl.click()
    await nextTick()
    minuteEl.click()
    await nextTick()
    secondEl.click()
    await nextTick()

    // click confirm button
    ;(document.querySelector('.el-time-panel__btn.confirm') as any).click()
    const date = (wrapper.vm as any).value
    expect(date.getHours()).toBe(4)
    expect(date.getMinutes()).toBe(36)
    expect(date.getSeconds()).toBe(20)

    // show picker panel and click cancel button
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    ;(document.querySelector('.el-time-panel__btn.cancel') as any).click()
    expect(date.getHours()).toBe(4)
    expect(date.getMinutes()).toBe(36)
    expect(date.getSeconds()).toBe(20)
  })

  it('set format', async () => {
    const wrapper = _mount(
      `<el-time-picker
        v-model="value"
        format='HH:mm'
      />`,
      () => ({ value: '' })
    )
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const spinnerDom = document.querySelectorAll('.el-time-spinner__wrapper')
    const minutesDom = spinnerDom[1]
    const secondsDom = spinnerDom[2]
    expect(minutesDom).not.toBeUndefined()
    expect(secondsDom).toBeUndefined()
  })

  it('event change, focus, blur', async () => {
    const changeHandler = jest.fn()
    const focusHandler = jest.fn()
    const blurHandler = jest.fn()
    const wrapper = _mount(
      `<el-time-picker
        v-model="value"
        @change="onChange"
        @focus="onFocus"
        @blur="onBlur"
      />`,
      () => ({ value: new Date(2016, 9, 10, 18, 40) }),
      {
        methods: {
          onChange(e) {
            return changeHandler(e)
          },
          onFocus(e) {
            return focusHandler(e)
          },
          onBlur(e) {
            return blurHandler(e)
          },
        },
      }
    )

    const input = wrapper.find('input')
    input.trigger('focus')
    await nextTick()
    expect(focusHandler).toHaveBeenCalledTimes(1)
    const list = document.querySelectorAll('.el-time-spinner__list')
    const hoursEl = list[0]
    const hourEl = hoursEl.querySelectorAll('.el-time-spinner__item')[4] as any
    hourEl.click()
    await nextTick()
    expect(changeHandler).toHaveBeenCalledTimes(0)
    ;(document.querySelector('.el-time-panel__btn.confirm') as any).click()
    await nextTick()
    await nextTick() // onchange is triggered by props.modelValue update
    expect(changeHandler).toHaveBeenCalledTimes(1)
    expect(blurHandler).toHaveBeenCalledTimes(1)
  })

  it('selectableRange ', async () => {
    // ['17:30:00 - 18:30:00', '18:50:00 - 20:30:00', '21:00:00 - 22:00:00']
    const disabledHoursArr = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 23,
    ]
    const wrapper = _mount(
      `<el-time-picker
        v-model="value"
        :disabled-hours="disabledHours"
        :disabled-minutes="disabledMinutes"
        :disabled-seconds="disabledSeconds"
      />`,
      () => ({ value: '' }),
      {
        methods: {
          disabledHours() {
            return disabledHoursArr
          },
          disabledMinutes(hour) {
            // ['17:30:00 - 18:30:00', '18:50:00 - 20:30:00', '21:00:00 - 22:00:00']
            if (hour === 17) {
              return makeRange(0, 29)
            }
            if (hour === 18) {
              return makeRange(31, 49)
            }
            if (hour === 20) {
              return makeRange(31, 59)
            }
            if (hour === 22) {
              return makeRange(1, 59)
            }
          },
          disabledSeconds(hour, minute) {
            if (hour === 18 && minute === 30) {
              return makeRange(1, 59)
            }
            if (hour === 20 && minute === 30) {
              return makeRange(1, 59)
            }
            if (hour === 22 && minute === 0) {
              return makeRange(1, 59)
            }
          },
        },
      }
    )
    const input = wrapper.find('input')
    input.trigger('focus')
    await nextTick()

    const list = document.querySelectorAll('.el-time-spinner__list')
    const hoursEl = list[0]
    const minutesEl = list[1]
    const secondsEl = list[2]
    const disabledHours = getSpinnerTextAsArray(hoursEl, '.disabled')
    expect(disabledHours).toEqual(disabledHoursArr)
    const hourSpinners = hoursEl.querySelectorAll('.el-time-spinner__item')
    ;(hourSpinners[18] as any).click()
    await nextTick()
    const disabledMinutes = getSpinnerTextAsArray(minutesEl, '.disabled')
    expect(disabledMinutes.every((t) => t > 30 && t < 50)).toBeTruthy()
    expect(disabledMinutes.length).toEqual(19)
    ;(hourSpinners[22] as any).click()
    await nextTick()
    const enabledMinutes = getSpinnerTextAsArray(minutesEl, ':not(.disabled)')
    const enabledSeconds = getSpinnerTextAsArray(secondsEl, ':not(.disabled)')
    expect(enabledMinutes).toEqual([0])
    expect(enabledSeconds).toEqual([0])
  })

  it('ref focus', async () => {
    _mount(
      `<el-time-picker
        v-model="value"
        ref="input"
      />`,
      () => ({ value: new Date(2016, 9, 10, 18, 40) }),
      {
        mounted() {
          this.$refs.input.focus()
        },
      }
    )
    await nextTick()
    const popperEl = document.querySelector('.el-picker__popper')
    const attr = popperEl.getAttribute('aria-hidden')
    expect(attr).toEqual('false')
  })

  it('ref blur', async () => {
    _mount(
      `<el-time-picker
        v-model="value"
        ref="input"
      />`,
      () => ({ value: new Date(2016, 9, 10, 18, 40) }),
      {
        mounted() {
          this.$refs.input.focus()
          this.$refs.input.blur()
        },
      }
    )
    await nextTick()
    const popperEl = document.querySelector('.el-picker__popper')
    const attr = popperEl.getAttribute('aria-hidden')
    expect(attr).toEqual('true')
  })

  it('model value should sync when disabled-hours was updated', async () => {
    const wrapper = _mount(
      `
       <el-time-picker
        v-model="value"
        :disabled-hours="disabledHours"
        value-format="YYYY-MM-DD HH:mm:ss"
      />
    `,
      () => ({
        value: '2000-01-01 00:00:00',
        minHour: '8',
      }),
      {
        computed: {
          disabledHours() {
            return () => {
              return Array(24)
                .fill(null)
                .map((_, i) => i)
                .filter((h) => h < parseInt(this.minHour, 10))
            }
          },
        },
      }
    )
    await nextTick()
    const vm = wrapper.vm as any
    expect(vm.value).toEqual('2000-01-01 08:00:00')
    vm.minHour = '9'
    await nextTick()
    expect(vm.value).toEqual('2000-01-01 09:00:00')
    vm.minHour = '8'
    await nextTick()
    expect(vm.value).toEqual('2000-01-01 09:00:00')
  })
})

describe('TimePicker(range)', () => {
  it('create', async () => {
    const wrapper = _mount(
      `<el-time-picker
        v-model="value"
        size="mini"
        :is-range="true"
      />`,
      () => ({
        value: [new Date(2016, 9, 10, 18, 40), new Date(2016, 9, 10, 19, 40)],
      })
    )
    expect(wrapper.find('.el-range-editor--mini').exists()).toBeTruthy()
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const list = document.querySelectorAll(
      '.el-time-spinner__list .el-time-spinner__item.active'
    )

    ;['18', '40', '00', '19', '40', '00'].forEach((_, i) => {
      expect(list[i].textContent).toBe(_)
    })
  })

  it('default value', async () => {
    const defaultValue = [
      new Date(2000, 9, 1, 10, 20, 0),
      new Date(2000, 9, 1, 11, 10, 0),
    ]
    const wrapper = _mount(
      `<el-time-picker
        v-model="value"
        :default-value="defaultValue"
        :is-range="true"
      />`,
      () => ({ value: '', defaultValue })
    )

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()

    const list = document.querySelectorAll(
      '.el-time-spinner__list .el-time-spinner__item.active'
    )

    ;['10', '20', '00', '11', '10', '00'].forEach((_, i) => {
      expect(list[i].textContent).toBe(_)
    })
  })

  it('cancel button', async () => {
    const wrapper = _mount(
      `<el-time-picker
        v-model="value"
        is-range
      />`,
      () => ({ value: '' })
    )

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    ;(document.querySelector('.el-time-panel__btn.cancel') as any).click()
    await nextTick()
    const vm = wrapper.vm as any
    expect(vm.value).toBe('')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    ;(document.querySelector('.el-time-panel__btn.confirm') as any).click()
    expect(vm.value instanceof Array).toBeTruthy()
    vm.value.forEach((_) => {
      expect(_ instanceof Date).toBeTruthy()
    })
  })

  it('selectableRange ', async () => {
    // left ['08:00:00 - 12:59:59'] right ['11:00:00 - 16:59:59']
    const wrapper = _mount(
      `<el-time-picker
        v-model="value"
        is-range
        :disabled-hours="disabledHours"
      />`,
      () => ({
        value: [new Date(2016, 9, 10, 9, 40), new Date(2016, 9, 10, 15, 40)],
      }),
      {
        methods: {
          disabledHours(role) {
            if (role === 'start') {
              return makeRange(0, 7).concat(makeRange(13, 23))
            }
            return makeRange(0, 10).concat(makeRange(17, 23))
          },
        },
      }
    )
    const input = wrapper.find('input')
    input.trigger('focus')
    await nextTick()

    const list = document.querySelectorAll('.el-time-spinner__list')
    const leftHoursEl = list[0]
    const leftEndbledHours = getSpinnerTextAsArray(
      leftHoursEl,
      ':not(.disabled)'
    )
    expect(leftEndbledHours).toEqual([8, 9, 10, 11, 12])
    const rightHoursEl = list[3]
    const rightEndbledHours = getSpinnerTextAsArray(
      rightHoursEl,
      ':not(.disabled)'
    )
    expect(rightEndbledHours).toEqual([11, 12, 13, 14, 15, 16])
    ;(leftHoursEl.querySelectorAll('.el-time-spinner__item')[12] as any).click()
    await nextTick()
    const NextRightEndbledHours = getSpinnerTextAsArray(
      rightHoursEl,
      ':not(.disabled)'
    )
    expect(NextRightEndbledHours).toEqual([12, 13, 14, 15, 16])
  })

  it('arrow key', async () => {
    const wrapper = _mount(
      `<el-time-picker
        v-model="value"
        format="YYYY-MM-DD HH:mm:ss"
      />`,
      () => ({ value: new Date(2016, 9, 10, 18, 40) })
    )

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const initValue = input.element.value
    triggerEvent(input.element, 'keydown', 'ArrowDown')
    await nextTick()
    const addOneHour = input.element.value
    triggerEvent(input.element, 'keydown', 'ArrowRight')
    await nextTick()
    triggerEvent(input.element, 'keydown', 'ArrowDown')
    await nextTick()
    const addOneHourOneMinute = input.element.value
    expect(dayjs(initValue).diff(addOneHour, 'minute')).toEqual(-60)
    expect(dayjs(initValue).diff(addOneHourOneMinute, 'minute')).toEqual(-61)
  })

  it('should be able to inherit options from parent injection', async () => {
    const ElPopperOptions = {
      strategy: 'fixed',
    }
    const wrapper = _mount(
      `<el-time-picker
        v-model="value"
        format="YYYY-MM-DD HH:mm:ss"
        :popper-options="options"
      />`,
      () => ({
        value: new Date(2016, 9, 10, 18, 40),
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

    expect((wrapper.findComponent(Picker).vm as any).elPopperOptions).toEqual(
      ElPopperOptions
    )
  })
})
