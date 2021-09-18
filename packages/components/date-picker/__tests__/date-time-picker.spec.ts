import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import dayjs from 'dayjs'
import { triggerEvent } from '@element-plus/test-utils'
import DatePicker from '../src/date-picker'

const formatStr = 'YYYY-MM-DD HH:mm:ss'
const makeRange = (start, end) => {
  const result = []
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}
const _mount = (template: string, data = () => ({}), otherObj?) =>
  mount(
    {
      components: {
        'el-date-picker': DatePicker,
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

describe('Datetime Picker', () => {
  it('both picker show correct formated value (extract date-format and time-format from format property', async () => {
    const wrapper = _mount(
      `<el-date-picker
        v-model="value"
        type="datetime"
        :format="format"
    />`,
      () => ({
        value: new Date(2018, 2, 5, 10, 15, 24),
        format: 'YYYY/MM/DD HH:mm A',
      })
    )
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const dateInput = document.querySelector(
      '.el-date-picker__time-header > span:nth-child(1) input'
    )
    const timeInput = document.querySelector(
      '.el-date-picker__time-header > span:nth-child(2) input'
    )
    ;(timeInput as HTMLElement).focus()
    await nextTick()
    // both input shows correct value
    expect((dateInput as HTMLInputElement).value).toBe('2018/03/05')
    expect((timeInput as HTMLInputElement).value).toBe('10:15 AM')
    wrapper.setProps({
      format: 'MM-DD-YYYY HH a',
    })
    await nextTick()
    expect((dateInput as HTMLInputElement).value).toBe('03-05-2018')
    expect((timeInput as HTMLInputElement).value).toBe('10 am')
  })

  it('both picker show correct value', async () => {
    const wrapper = _mount(
      `<el-date-picker
        v-model="value"
        type="datetime"
    />`,
      () => ({
        value: new Date(2000, 9, 1, 10, 0, 1),
      })
    )

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const dateInput = document.querySelector(
      '.el-date-picker__time-header > span:nth-child(1) input'
    )
    const timeInput = document.querySelector(
      '.el-date-picker__time-header > span:nth-child(2) input'
    )
    ;(timeInput as HTMLElement).focus()
    await nextTick()
    // both input shows correct value
    expect((dateInput as HTMLInputElement).value).toBe('2000-10-01')
    expect((timeInput as HTMLInputElement).value).toBe('10:00:01')
    // time spinner highlight is correct
    let spinners = document.querySelectorAll(
      '.el-time-spinner ul li.active'
    ) as any
    expect(spinners[0].textContent).toBe('10')
    expect(spinners[1].textContent).toBe('00')
    expect(spinners[2].textContent).toBe('01')
    wrapper.setProps({
      modelValue: new Date(2001, 10, 2, 11, 1, 2),
    })
    await nextTick()
    spinners = document.querySelectorAll('.el-time-spinner ul li.active') as any
    expect((dateInput as HTMLInputElement).value).toBe('2001-11-02')
    expect((timeInput as HTMLInputElement).value).toBe('11:01:02')
    expect(spinners[0].textContent).toBe('11')
    expect(spinners[1].textContent).toBe('01')
    expect(spinners[2].textContent).toBe('02')
  })

  it('click now button', async () => {
    const wrapper = _mount(
      `<el-date-picker
        v-model="value"
        type="datetime"
    />`,
      () => ({
        value: '',
      })
    )
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    ;(
      document.querySelector('.el-picker-panel__link-btn') as HTMLElement
    ).click()
    await nextTick()
    const vm = wrapper.vm as any
    // test if is current time (deviation 10 seconds)
    expect(dayjs(vm.value).diff(dayjs()) < 10).toBeTruthy()
  })

  it('timepicker select && input time && input date', async () => {
    const wrapper = _mount(
      `<el-date-picker
        v-model="value"
        type="datetime"
    />`,
      () => ({
        value: '',
      })
    )
    const vm = wrapper.vm as any
    expect(vm.value).toBe('')
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const input_ = document.querySelectorAll(
      '.el-date-picker__editor-wrap input'
    )[1]
    ;(input_ as HTMLElement).focus()
    await nextTick()
    const timePanel = document.querySelector('.el-time-panel')
    expect(timePanel.querySelector('.el-time-spinner').innerHTML).not.toBeNull()
    const button = document.querySelector(
      '.el-time-panel .confirm'
    ) as HTMLElement
    button.click()
    await nextTick()
    expect(vm.value).not.toBe('')
    const timeInput = document.querySelectorAll(
      '.el-date-picker__editor-wrap input'
    )[1] as HTMLInputElement
    timeInput.value = '20:30:33'
    timeInput.dispatchEvent(new Event('change'))
    await nextTick()
    const valueResult = dayjs(vm.value)
    expect(valueResult.hour()).toBe(20)
    expect(valueResult.minute()).toBe(30)
    expect(valueResult.second()).toBe(33)
    const dateInput = document.querySelector(
      '.el-date-picker__editor-wrap input'
    ) as HTMLInputElement
    dateInput.value = '2017-02-02'
    dateInput.dispatchEvent(new Event('change'))
    await nextTick()
    const valueResult2 = dayjs(vm.value)
    expect(valueResult2.year()).toBe(2017)
    expect(valueResult2.month()).toBe(1)
    expect(valueResult2.date()).toBe(2)
  })

  it('now button: can not choose disabled date', async () => {
    let isDisable = true
    const wrapper = _mount(
      `<el-date-picker
        v-model="value"
        type="datetime"
        :disabledDate="disabledDate"
    />`,
      () => ({
        value: '',
        disabledDate() {
          return isDisable
        },
      })
    )
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    // click now button
    const btn = document.querySelector(
      '.el-picker-panel__footer .el-button--text'
    ) as HTMLElement
    btn.click()
    await nextTick()
    const vm = wrapper.vm as any
    expect(vm.value).toBe('')
    isDisable = false
    await nextTick()
    btn.click()
    await nextTick()
    expect(vm.value).not.toBe('')
  })

  it('confirm button honors picked date', async () => {
    const wrapper = _mount(
      `<el-date-picker
        v-model="value"
        type="datetime"
    />`,
      () => ({
        value: new Date(2000, 9, 1, 12, 0, 0), // 2010-10-01 12:00:00
      })
    )
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    // changed month / year should not effect picked time
    ;(
      document.querySelector(
        '.el-date-picker__header .el-icon-arrow-right'
      ) as HTMLElement
    ).click()
    ;(
      document.querySelector(
        '.el-date-picker__header .el-icon-d-arrow-right'
      ) as HTMLElement
    ).click()
    // click confirm button
    ;(
      document.querySelector(
        '.el-picker-panel__footer .el-button--default'
      ) as HTMLElement
    ).click()
    const vm = wrapper.vm as any
    expect(dayjs(vm.value).format(formatStr)).toBe('2000-10-01 12:00:00')
  })

  it('selectableRange', async () => {
    const disabledHoursArr = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 23,
    ]
    const wrapper = _mount(
      `<el-date-picker
        v-model="value"
        type="datetime"
        :disabledHours="disabledHours"
        :disabledMinutes="disabledMinutes"
        :disabledSeconds="disabledSeconds"
    />`,
      () => ({
        value: new Date(2019, 0, 1, 18, 50),
      }),
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
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const input1 = document.querySelectorAll(
      '.el-date-picker__editor-wrap input'
    )[1] as HTMLInputElement
    input1.blur()
    input1.focus()
    await nextTick()
    const list = document.querySelectorAll('.el-time-spinner__list')
    const hoursEl = list[0]
    const disabledHours = [].slice
      .call(hoursEl.querySelectorAll('.disabled'))
      .map((node) => Number(node.textContent))
    expect(disabledHours).toStrictEqual(disabledHoursArr)
    const minutesEl = list[1]
    const disabledMinutes = [].slice
      .call(minutesEl.querySelectorAll('.disabled'))
      .map((node) => Number(node.textContent))
    expect(disabledMinutes.length).toBe(19)
  })

  it('defaultTime takes effect when the type is datetime', async () => {
    const wrapper = _mount(
      `<el-date-picker
        v-model="value"
        type="datetime"
        :default-time="defaultTime"
    />`,
      () => ({
        value: '',
        defaultTime: new Date(2000, 1, 1, 12, 24, 48),
      })
    )

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const someDateTd = document.querySelector(
      '.el-picker-panel__content tr:nth-child(3) td:nth-child(4)'
    )
    const timeInput = document.querySelector(
      '.el-date-picker__time-header > span:nth-child(2) input'
    )
    ;(someDateTd as HTMLElement).click()
    ;(timeInput as HTMLElement).focus()
    await nextTick()
    expect((timeInput as HTMLInputElement).value).toBe('12:24:48')
    // time spinner highlight is correct
    const spinners = document.querySelectorAll(
      '.el-time-spinner ul li.active'
    ) as any
    expect(spinners[0].textContent).toBe('12')
    expect(spinners[1].textContent).toBe('24')
    expect(spinners[2].textContent).toBe('48')
  })
})

describe('Datetimerange', () => {
  it('select daterange and default Time and input format', async () => {
    const wrapper = _mount(
      `<el-date-picker
        v-model="value"
        type="datetimerange"
        :defaultTime="new Date(2020, 1, 1, 1, 1, 1)"
        format="YYYY/MM/DD HH:mm A"
    />`,
      () => ({
        value: [new Date(2000, 10, 8, 10, 10), new Date(2000, 10, 11, 10, 10)],
      })
    )
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const pickers = document.querySelectorAll('.el-date-range-picker__content')
    const leftCell = pickers[0].querySelector('td.available')
    const rightCell = pickers[1].querySelector('td.available')
    triggerEvent(leftCell, 'mousemove', true)
    triggerEvent(leftCell, 'click', true)
    await nextTick()
    triggerEvent(rightCell, 'mousemove', true)
    triggerEvent(rightCell, 'click', true)
    await nextTick()
    ;(
      document.querySelector(
        '.el-picker-panel__footer .el-button--default'
      ) as HTMLElement
    ).click()
    await nextTick()
    const vm = wrapper.vm as any
    expect(vm.value.map((_) => dayjs(_).format(formatStr))).toStrictEqual([
      '2000-11-01 01:01:01',
      '2000-12-01 01:01:01',
    ])
    const pickerss = document.querySelectorAll(
      '.el-date-range-picker__time-header .el-date-range-picker__editors-wrap'
    )
    const left = {
      dateInput: pickerss[0].querySelector(
        '.el-date-range-picker__time-picker-wrap:nth-child(1) input'
      ),
      timeInput: pickerss[0].querySelector(
        '.el-date-range-picker__time-picker-wrap:nth-child(2) input'
      ),
    }
    const right = {
      dateInput: pickerss[1].querySelector(
        '.el-date-range-picker__time-picker-wrap:nth-child(1) input'
      ),
      timeInput: pickerss[1].querySelector(
        '.el-date-range-picker__time-picker-wrap:nth-child(2) input'
      ),
    }
    await nextTick()
    // both input shows correct value
    expect((left.dateInput as HTMLInputElement).value).toBe('2000/11/01')
    expect((left.timeInput as HTMLInputElement).value).toBe('01:01 AM')
    expect((right.dateInput as HTMLInputElement).value).toBe('2000/12/01')
    expect((right.timeInput as HTMLInputElement).value).toBe('01:01 AM')
  })

  it('input date', async () => {
    const wrapper = _mount(
      `<el-date-picker
        v-model="value"
        type="datetimerange"
    />`,
      () => ({
        value: '',
      })
    )
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const pickerss = document.querySelectorAll(
      '.el-date-range-picker__time-header .el-date-range-picker__editors-wrap'
    )
    const leftDateInput = pickerss[0].querySelector(
      '.el-date-range-picker__time-picker-wrap:nth-child(1) input'
    ) as HTMLInputElement
    const rightDateInput = pickerss[0].querySelector(
      '.el-date-range-picker__time-picker-wrap:nth-child(1) input'
    ) as HTMLInputElement
    leftDateInput.value = '1999-03-04'
    triggerEvent(leftDateInput, 'input', true)
    triggerEvent(leftDateInput, 'change', true)
    await nextTick()
    const pickers = document.querySelectorAll('.el-date-range-picker__content')
    const leftCell = pickers[0].querySelector('td.available')
    const rightCell = pickers[1].querySelector('td.available')
    triggerEvent(leftCell, 'mousemove', true)
    triggerEvent(leftCell, 'click', true)
    await nextTick()
    triggerEvent(rightCell, 'mousemove', true)
    triggerEvent(rightCell, 'click', true)
    await nextTick()
    const btn = document.querySelector(
      '.el-picker-panel__footer .el-button--default'
    ) as HTMLElement
    btn.click()
    await nextTick()
    const vm = wrapper.vm as any
    expect(vm.value.map((_) => dayjs(_).format(formatStr))).toStrictEqual([
      '1999-03-01 00:00:00',
      '1999-04-01 00:00:00',
    ])
    // input date when minDate > maxDate
    rightDateInput.value = '1998-01-01'
    triggerEvent(rightDateInput, 'input', true)
    triggerEvent(rightDateInput, 'change', true)
    await nextTick()
    btn.click()
    await nextTick()
    expect(dayjs(vm.value[0]).isBefore(vm.value[1])).toBeTruthy()
  })

  it('select time', async () => {
    const wrapper = _mount(
      `<el-date-picker
        v-model="value"
        type="datetimerange"
    />`,
      () => ({
        value: '',
      })
    )
    const vm = wrapper.vm as any
    expect(vm.value).toBe('')
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const timeInput = document.querySelectorAll(
      '.el-date-range-picker__editors-wrap input'
    )[1] as HTMLInputElement
    timeInput.blur()
    timeInput.focus()
    timeInput.blur()
    await nextTick()
    const button = document.querySelector(
      '.el-date-range-picker__time-picker-wrap .el-time-panel .confirm'
    ) as HTMLElement
    button.click()
    await nextTick()
    const btn = document.querySelector(
      '.el-picker-panel__footer .el-button--default'
    ) as HTMLElement
    btn.click()
    await nextTick()
    expect(vm.value).not.toBe('')
  })

  it('confirm honors disabledDate', async () => {
    const wrapper = _mount(
      `<el-date-picker
        v-model="value"
        type="datetimerange"
        :disabledDate="disabledDate"
    />`,
      () => ({
        value: '',
        disabledDate: (date) => {
          return date.getTime() < new Date(2000, 9, 1) // 2000-10-01
        },
      })
    )
    const vm = wrapper.vm as any
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    // simulate user input of invalid date
    const pickerss = document.querySelectorAll(
      '.el-date-range-picker__time-header .el-date-range-picker__editors-wrap'
    )
    const leftDateInput = pickerss[0].querySelector(
      '.el-date-range-picker__time-picker-wrap:nth-child(1) input'
    ) as HTMLInputElement
    leftDateInput.value = '2000-09-01'
    triggerEvent(leftDateInput, 'input', true)
    triggerEvent(leftDateInput, 'change', true)
    await nextTick()
    const btn = document.querySelector(
      '.el-picker-panel__footer .el-button--default'
    ) as HTMLElement
    expect(btn.getAttribute('disabled')).not.toBeUndefined() // invalid input disables button
    btn.click()
    await nextTick()
    const rangePanel = document.querySelector('.el-date-range-picker')
    expect(rangePanel.getAttribute('visible')).toBe('true') // popper still open
    expect(vm.value).toBe('')
    leftDateInput.value = '2001-09-01'
    triggerEvent(leftDateInput, 'input', true)
    triggerEvent(leftDateInput, 'change', true)
    await nextTick()
    expect(btn.getAttribute('disabled')).not.toBeUndefined()
    btn.click()
    await nextTick()
    expect(rangePanel.getAttribute('visible')).toBe('false') // popper dismiss
    expect(vm.value).not.toBe('')
  })

  it('selectableRange', async () => {
    const disabledHoursArr = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 23,
    ]
    const disabledHoursRightArr = [0, 1, 2]
    const wrapper = _mount(
      `<el-date-picker
        v-model="value"
        type="datetimerange"
        :disabledHours="disabledHours"
    />`,
      () => ({
        value: '',
      }),
      {
        methods: {
          disabledHours(role) {
            if (role === 'end') {
              return disabledHoursRightArr
            }
            return disabledHoursArr
          },
        },
      }
    )
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const pickerss = document.querySelectorAll(
      '.el-date-range-picker__time-header .el-date-range-picker__editors-wrap'
    )
    const leftDateInput = pickerss[0].querySelector(
      '.el-date-range-picker__time-picker-wrap:nth-child(2) input'
    ) as HTMLInputElement
    const rightDateInput = pickerss[1].querySelector(
      '.el-date-range-picker__time-picker-wrap:nth-child(2) input'
    ) as HTMLInputElement
    leftDateInput.blur()
    leftDateInput.focus()
    await nextTick()
    const listleft = document.querySelectorAll(
      '.el-date-range-picker__editors-wrap .el-time-spinner__list'
    )
    const hoursEl = listleft[0]
    const disabledHours = [].slice
      .call(hoursEl.querySelectorAll('.disabled'))
      .map((node) => Number(node.textContent))
    expect(disabledHours).toStrictEqual(disabledHoursArr)
    const button = document.querySelector(
      '.el-date-range-picker__time-picker-wrap .el-time-panel .confirm'
    ) as HTMLElement
    button.click()
    await nextTick()
    rightDateInput.blur()
    rightDateInput.focus()
    await nextTick()
    const listright = document.querySelectorAll(
      '.el-date-range-picker__editors-wrap.is-right .el-time-spinner__list'
    )
    const hoursEl2 = listright[0]
    const disabledHours2 = [].slice
      .call(hoursEl2.querySelectorAll('.disabled'))
      .map((node) => Number(node.textContent))
    expect(disabledHours2).toStrictEqual(disabledHoursRightArr)
  })

  it('select same date, different time', async () => {
    const leftSelect = ['10', '59', '59']
    const wrapper = _mount(
      `<el-date-picker
        v-model="value"
        type="datetimerange"
    />`,
      () => ({
        value: '',
      })
    )
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const pickers = document.querySelectorAll('.el-date-range-picker__content')
    const leftCell = pickers[0].querySelector('td.available')
    triggerEvent(leftCell, 'mousemove', true)
    triggerEvent(leftCell, 'click', true)
    await nextTick()
    triggerEvent(leftCell, 'mousemove', true)
    triggerEvent(leftCell, 'click', true)
    await nextTick()
    const leftTimeInput = document.querySelectorAll(
      '.el-date-range-picker__editors-wrap input'
    )[1] as HTMLInputElement
    leftTimeInput.blur()
    leftTimeInput.focus()
    await nextTick()
    const leftList = document.querySelectorAll('.el-time-spinner__list')
    triggerEvent(leftList[0].children[+leftSelect[0]], 'click', true)
    await nextTick()
    triggerEvent(leftList[1].children[+leftSelect[1]], 'click', true)
    await nextTick()
    triggerEvent(leftList[2].children[+leftSelect[2]], 'click', true)
    await nextTick()
    ;(
      document.querySelector('.el-time-panel__btn.confirm') as HTMLElement
    ).click()
    await nextTick()
    const rightTimeInput = document.querySelectorAll(
      '.el-date-range-picker__editors-wrap input'
    )[3] as HTMLInputElement
    rightTimeInput.blur()
    rightTimeInput.focus()
    await nextTick()
    const rightList = document.querySelectorAll(
      '.is-right .el-time-spinner__list'
    )
    // auto set left time to right time
    expect(
      rightList[0].querySelector('.el-time-spinner__item.active').innerHTML
    ).toBe(leftSelect[0])
    expect(
      rightList[1].querySelector('.el-time-spinner__item.active').innerHTML
    ).toBe(leftSelect[1])
    expect(
      rightList[2].querySelector('.el-time-spinner__item.active').innerHTML
    ).toBe(leftSelect[2])
    triggerEvent(rightList[0].children[12], 'click', true)
    await nextTick()
    triggerEvent(rightList[1].children[12], 'click', true)
    await nextTick()
    triggerEvent(rightList[2].children[12], 'click', true)
    await nextTick()
    ;(
      document.querySelector(
        '.is-right .el-time-panel__btn.confirm'
      ) as HTMLElement
    ).click()
    await nextTick()
    ;(
      document.querySelector(
        '.el-picker-panel__footer .el-button--default'
      ) as HTMLElement
    ).click()
    await nextTick()
    const vm = wrapper.vm as any
    expect(vm.value.map((_) => dayjs(_).format('HH:mm:ss'))).toStrictEqual([
      '10:59:59',
      '12:12:12',
    ])
  })
})
