import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it } from 'vitest'
import dayjs from 'dayjs'
import triggerEvent from '@element-plus/test-utils/trigger-event'
import { ElFormItem } from '@element-plus/components/form'
import DatePicker from '../src/date-picker'
import type DatePickerRange from '../src/date-picker-com/panel-date-range.vue'
import type { VueWrapper } from '@vue/test-utils'
import type { VNode } from 'vue'

const formatStr = 'YYYY-MM-DD HH:mm:ss'
const makeRange = (start: number, end: number) => {
  const result = []
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}

const _mount = (render: () => VNode) => {
  return mount(render, { attachTo: document.body })
}

afterEach(() => {
  document.documentElement.innerHTML = ''
})

describe('Datetime Picker', () => {
  it('both picker show correct formated value (extract date-format and time-format from format property', async () => {
    const value = ref(new Date(2018, 2, 5, 10, 15, 24))
    const format = ref('YYYY/MM/DD HH:mm A')
    const dateFormat = ref('')
    const timeFormat = ref('')
    const wrapper = _mount(() => (
      <DatePicker
        v-model={value.value}
        type="datetime"
        format={format.value}
        dateFormat={dateFormat.value}
        timeFormat={timeFormat.value}
      />
    ))

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const dateInput: HTMLInputElement = document.querySelector(
      '.el-date-picker__time-header > span:nth-child(1) input'
    )!
    const timeInput: HTMLInputElement = document.querySelector(
      '.el-date-picker__time-header > span:nth-child(2) input'
    )!
    timeInput.focus()
    await nextTick()
    // both input shows correct value
    expect(dateInput.value).toBe('2018/03/05')
    expect(timeInput.value).toBe('10:15 AM')

    format.value = 'MM-DD-YYYY HH a'
    await nextTick()
    expect(dateInput.value).toBe('03-05-2018')
    expect(timeInput.value).toBe('10 am')

    dateFormat.value = 'YYYY/MM/DD ddd'
    timeFormat.value = 'A hh:mm:ss'
    await nextTick()
    expect(dateInput.value).toBe('2018/03/05 Mon')
    expect(timeInput.value).toBe('AM 10:15:24')
  })

  it('both picker show correct value', async () => {
    const value = ref(new Date(2000, 9, 1, 10, 0, 1))
    const wrapper = _mount(() => (
      <DatePicker v-model={value.value} type="datetime" />
    ))

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const dateInput: HTMLInputElement = document.querySelector(
      '.el-date-picker__time-header > span:nth-child(1) input'
    )!
    const timeInput: HTMLInputElement = document.querySelector(
      '.el-date-picker__time-header > span:nth-child(2) input'
    )!
    timeInput.focus()
    await nextTick()
    // both input shows correct value
    expect(dateInput.value).toBe('2000-10-01')
    expect(timeInput.value).toBe('10:00:01')
    // time spinner highlight is correct
    let spinners = document.querySelectorAll(
      '.el-time-spinner ul li.is-active'
    ) as NodeListOf<HTMLElement>
    expect(spinners[0].textContent).toBe('10')
    expect(spinners[1].textContent).toBe('00')
    expect(spinners[2].textContent).toBe('01')
    value.value = new Date(2001, 10, 2, 11, 1, 2)

    await nextTick()
    spinners = document.querySelectorAll(
      '.el-time-spinner ul li.is-active'
    ) as NodeListOf<HTMLElement>
    expect(dateInput.value).toBe('2001-11-02')
    expect(timeInput.value).toBe('11:01:02')
    expect(spinners[0].textContent).toBe('11')
    expect(spinners[1].textContent).toBe('01')
    expect(spinners[2].textContent).toBe('02')
  })

  it('click now button', async () => {
    const value = ref('')
    const wrapper = _mount(() => (
      <DatePicker v-model={value.value} type="datetime" />
    ))

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    ;(
      document.querySelector('.el-picker-panel__link-btn') as HTMLElement
    ).click()
    await nextTick()
    // test if is current time (deviation 10 seconds)
    expect(dayjs(value.value).diff(dayjs()) < 10).toBeTruthy()
  })

  it('time-picker select && input time && input date', async () => {
    const value = ref('')
    const wrapper = _mount(() => (
      <DatePicker v-model={value.value} type="datetime" />
    ))

    expect(value.value).toBe('')
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const input_ = document.querySelectorAll(
      '.el-date-picker__editor-wrap input'
    )[1] as HTMLElement
    input_.focus()
    await nextTick()
    const timePanel = document.querySelector('.el-time-panel')
    expect(
      timePanel!.querySelector('.el-time-spinner')!.innerHTML
    ).not.toBeNull()
    const button: HTMLElement = document.querySelector(
      '.el-time-panel .confirm'
    )!
    button.click()
    await nextTick()
    expect(value.value).not.toBe('')
    const timeInput = document.querySelectorAll(
      '.el-date-picker__editor-wrap input'
    )[1] as HTMLInputElement
    timeInput.value = '20:30:33'
    timeInput.dispatchEvent(new Event('change'))
    await nextTick()
    const valueResult = dayjs(value.value)
    expect(valueResult.hour()).toBe(20)
    expect(valueResult.minute()).toBe(30)
    expect(valueResult.second()).toBe(33)
    const dateInput: HTMLInputElement = document.querySelector(
      '.el-date-picker__editor-wrap input'
    )!
    dateInput.value = '2017-02-02'
    dateInput.dispatchEvent(new Event('change'))
    await nextTick()
    const valueResult2 = dayjs(value.value)
    expect(valueResult2.year()).toBe(2017)
    expect(valueResult2.month()).toBe(1)
    expect(valueResult2.date()).toBe(2)
  })

  it('now button: can not choose disabled date', async () => {
    const isDisable = true
    const value = ref('')
    const disabledDate = () => isDisable
    const wrapper = _mount(() => (
      <DatePicker
        v-model={value.value}
        type="datetime"
        disabledDate={disabledDate}
      />
    ))

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    // click now button
    const btn: HTMLElement = document.querySelector(
      '.el-picker-panel__footer .is-text'
    )!
    btn.click()
    await nextTick()

    expect(value.value).toBe('')
  })

  it('now button: should be disabled when current date is disabled', async () => {
    const isDisable = true
    const disabledDate = () => isDisable
    const wrapper = _mount(() => (
      <DatePicker type="datetime" disabledDate={disabledDate} />
    ))

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    // now button is disabled
    const btn: HTMLElement = document.querySelector(
      '.el-picker-panel__footer .is-text'
    )!
    expect(btn.getAttribute('disabled')).not.toBeUndefined()
  })

  it('confirm button honors picked date', async () => {
    const value = ref(new Date(2000, 9, 1, 12, 0, 0))
    const wrapper = _mount(() => (
      <DatePicker v-model={value.value} type="datetime" />
    ))

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    // changed month / year should not effect picked time
    ;(
      document.querySelector(
        '.el-date-picker__header .arrow-right'
      ) as HTMLElement
    ).click()
    ;(
      document.querySelector(
        '.el-date-picker__header .d-arrow-right'
      ) as HTMLElement
    ).click()
    // click confirm button
    ;(
      document.querySelectorAll(
        '.el-picker-panel__footer .el-button'
      )[1] as HTMLElement
    ).click()

    expect(dayjs(value.value).format(formatStr)).toBe('2000-10-01 12:00:00')
  })

  it('selectableRange', async () => {
    const disabledHoursArr = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 23,
    ]
    const disabledHoursData = () => {
      return disabledHoursArr
    }
    const disabledMinutesData = (hour: number) => {
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
      return []
    }
    const disabledSecondsData = (hour: number, minute: number) => {
      if (hour === 18 && minute === 30) {
        return makeRange(1, 59)
      }
      if (hour === 20 && minute === 30) {
        return makeRange(1, 59)
      }
      if (hour === 22 && minute === 0) {
        return makeRange(1, 59)
      }
      return []
    }
    const value = ref(new Date(2019, 0, 1, 18, 50))
    const wrapper = _mount(() => (
      <DatePicker
        v-model={value.value}
        type="datetime"
        disabledHours={disabledHoursData}
        disabledMinutes={disabledMinutesData}
        disabledSeconds={disabledSecondsData}
      />
    ))

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
    const disabledHours = Array.from(
      hoursEl.querySelectorAll('.is-disabled')
    ).map((node) => Number(node.textContent))
    expect(disabledHours).toStrictEqual(disabledHoursArr)
    const minutesEl = list[1]
    const disabledMinutes = Array.from(
      minutesEl.querySelectorAll('.is-disabled')
    ).map((node) => Number(node.textContent))
    expect(disabledMinutes.length).toBe(19)
  })

  it('defaultTime takes effect when the type is datetime', async () => {
    const value = ref('')
    const defaultTime = ref(new Date(2000, 1, 1, 12, 24, 48))
    const wrapper = _mount(() => (
      <DatePicker
        v-model={value.value}
        type="datetime"
        default-time={defaultTime.value}
      />
    ))

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const someDateTd: HTMLElement = document.querySelector(
      '.el-picker-panel__content tr:nth-child(3) td:nth-child(4)'
    )!
    const timeInput: HTMLInputElement = document.querySelector(
      '.el-date-picker__time-header > span:nth-child(2) input'
    )!
    someDateTd.click()
    timeInput.focus()
    await nextTick()
    expect(timeInput.value).toBe('12:24:48')
    // time spinner highlight is correct
    const spinners = document.querySelectorAll(
      '.el-time-spinner ul li.is-active'
    ) as NodeListOf<HTMLElement>
    expect(spinners[0].textContent).toBe('12')
    expect(spinners[1].textContent).toBe('24')
    expect(spinners[2].textContent).toBe('48')
  })

  it('defaultTime only takes effect when time is not selected', async () => {
    const value = ref('')
    const defaultTime = ref(new Date(2000, 1, 1, 12, 0, 0))
    const wrapper = _mount(() => (
      <DatePicker
        v-model={value.value}
        type="datetime"
        default-time={defaultTime.value}
      />
    ))

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const cells = document.querySelectorAll('.available .el-date-table-cell')
    ;(cells[0] as HTMLElement).click()
    await nextTick()
    const timeInput: HTMLInputElement = document.querySelector(
      '.el-date-picker__time-header > span:nth-child(2) input'
    )!
    expect(timeInput.value).toBe('12:00:00')
    timeInput.focus()
    await nextTick()
    const spinner: HTMLElement = document.querySelector(
      '.el-time-spinner ul li.is-active'
    )!
    ;(spinner.nextSibling as HTMLElement).click()
    await nextTick()
    expect(timeInput.value).toBe('13:00:00')
  })

  // fix #15196
  it('first click accuracy', async () => {
    const value = ref('')
    const wrapper = _mount(() => (
      <DatePicker v-model={value.value} type="datetime" />
    ))

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const dayItems = document.querySelectorAll('.el-date-table-cell__text')
    const targetDay = dayItems[15] as HTMLElement // Try to make sure the date is this month
    const dayText = targetDay.textContent
    targetDay.click()
    await nextTick()
    expect(dayjs(value.value).format('D')).toBe(dayText)
  })
})

describe('Datetimerange', () => {
  it('select daterange and default Time and input format', async () => {
    const value = ref([
      new Date(2000, 10, 8, 10, 10),
      new Date(2000, 10, 11, 10, 10),
    ])
    const dateFormat = ref('')
    const timeFormat = ref('')
    const wrapper = _mount(() => (
      <DatePicker
        v-model={value.value}
        type="datetimerange"
        default-time={new Date(2020, 1, 1, 1, 1, 1)}
        format="YYYY/MM/DD HH:mm A"
        dateFormat={dateFormat.value}
        timeFormat={timeFormat.value}
      />
    ))

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const pickers = document.querySelectorAll('.el-date-range-picker__content')
    const leftCell = pickers[0].querySelector('td.available')!
    const rightCell = pickers[1].querySelector('td.available')!
    triggerEvent(leftCell, 'mousemove', true)
    triggerEvent(leftCell, 'click', true)
    await nextTick()
    triggerEvent(rightCell, 'mousemove', true)
    triggerEvent(rightCell, 'click', true)
    await nextTick()
    ;(
      document.querySelectorAll(
        '.el-picker-panel__footer .el-button'
      )[1] as HTMLElement
    ).click()
    await nextTick()

    expect(value.value.map((_) => dayjs(_).format(formatStr))).toStrictEqual([
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

    dateFormat.value = 'YYYY/MM/DD ddd'
    timeFormat.value = 'A hh:mm:ss'
    await nextTick()
    expect((left.dateInput as HTMLInputElement).value).toBe('2000/11/01 Wed')
    expect((left.timeInput as HTMLInputElement).value).toBe('AM 01:01:01')
    expect((right.dateInput as HTMLInputElement).value).toBe('2000/12/01 Fri')
    expect((right.timeInput as HTMLInputElement).value).toBe('AM 01:01:01')
  })

  it('input date', async () => {
    const value = ref<string[]>([])
    const wrapper = _mount(() => (
      <DatePicker v-model={value.value} type="datetimerange" />
    ))

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
    const leftCell = pickers[0].querySelector('td.available')!
    const rightCell = pickers[1].querySelector('td.available')!
    triggerEvent(leftCell, 'mousemove', true)
    triggerEvent(leftCell, 'click', true)
    await nextTick()
    triggerEvent(rightCell, 'mousemove', true)
    triggerEvent(rightCell, 'click', true)
    await nextTick()
    const btn = document.querySelectorAll(
      '.el-picker-panel__footer .el-button'
    )[1] as HTMLElement
    btn.click()
    await nextTick()

    expect(value.value.map((_) => dayjs(_).format(formatStr))).toStrictEqual([
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
    expect(dayjs(value.value[0]).isBefore(value.value[1])).toBeTruthy()
  })

  it('select time', async () => {
    const value = ref('')
    const wrapper = _mount(() => (
      <DatePicker v-model={value.value} type="datetimerange" />
    ))

    expect(value.value).toBe('')
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
    const button: HTMLElement = document.querySelector(
      '.el-date-range-picker__time-picker-wrap .el-time-panel .confirm'
    )!
    button.click()
    await nextTick()
    const btn = document.querySelectorAll(
      '.el-picker-panel__footer .el-button'
    )[1] as HTMLElement
    btn.click()
    await nextTick()
    expect(value.value).not.toBe('')
  })

  it('clear button should empty the input value', async () => {
    const value = ref('')
    const wrapper = _mount(() => (
      <DatePicker v-model={value.value} type="datetimerange" />
    ))
    const input = wrapper.find('input')
    input.trigger('focus')
    await nextTick()
    const dateRow = document.querySelectorAll('.el-date-table__row')
    const dateCell = dateRow[1].querySelectorAll<HTMLElement>('.available')
    dateCell[0].click()
    dateCell[3].click()
    await nextTick()
    const headerValue = document.querySelectorAll<HTMLInputElement>(
      '.el-date-range-picker__time-header input'
    )
    expect(headerValue[0].value).not.toBe('')
    expect(headerValue[1].value).not.toBe('')
    const clearBtn = document.querySelectorAll<HTMLButtonElement>(
      '.el-picker-panel__footer button'
    )[0]
    clearBtn.click()
    await nextTick()
    input.trigger('blur')
    await nextTick()
    input.trigger('focus')
    await nextTick()
    expect(headerValue[0].value).toBe('')
    expect(headerValue[1].value).toBe('')
  })

  it('confirm honors disabledDate', async () => {
    const value = ref('')
    const disabledDate = (date: Date) => {
      return date.getTime() < new Date(2000, 9, 1).getTime() // 2000-10-01
    }
    const wrapper = _mount(() => (
      <DatePicker
        v-model={value.value}
        type="datetimerange"
        disabledDate={disabledDate}
      />
    ))

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
    const btn = document.querySelectorAll(
      '.el-picker-panel__footer .el-button'
    )[1] as HTMLElement
    expect(btn.getAttribute('disabled')).not.toBeUndefined() // invalid input disables button
    btn.click()
    await nextTick()
    const rangePanelWrapper = wrapper.findComponent(
      '.el-date-range-picker'
    ) as VueWrapper<InstanceType<typeof DatePickerRange>>
    expect(rangePanelWrapper.exists()).toBe(true)
    expect(rangePanelWrapper.vm.visible).toBe(true) // popper still open
    expect(value.value).toBe('')
    leftDateInput.value = '2001-09-01'
    triggerEvent(leftDateInput, 'input', true)
    triggerEvent(leftDateInput, 'change', true)
    await nextTick()
    expect(btn.getAttribute('disabled')).not.toBeUndefined()
    btn.click()
    await nextTick()
    expect(rangePanelWrapper.vm.visible).toBe(false) // popper dismiss
    expect(value.value).not.toBe('')
  })

  it('selectableRange', async () => {
    const disabledHoursArr = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 23,
    ]
    const disabledHoursRightArr = [0, 1, 2]
    const value = ref('')
    const disabledHoursData = (role: string) => {
      if (role === 'end') {
        return disabledHoursRightArr
      }
      return disabledHoursArr
    }
    const wrapper = _mount(() => (
      <DatePicker
        v-model={value.value}
        type="datetimerange"
        disabledHours={disabledHoursData}
      />
    ))

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
    const listLeft = document.querySelectorAll(
      '.el-date-range-picker__editors-wrap .el-time-spinner__list'
    )
    const hoursEl = listLeft[0]
    const disabledHours = Array.from(
      hoursEl.querySelectorAll('.is-disabled')
    ).map((node) => Number(node.textContent))
    expect(disabledHours).toStrictEqual(disabledHoursArr)
    const button = document.querySelector(
      '.el-date-range-picker__time-picker-wrap .el-time-panel .confirm'
    ) as HTMLElement
    button.click()
    await nextTick()
    rightDateInput.blur()
    rightDateInput.focus()
    await nextTick()
    const listRight = document.querySelectorAll(
      '.el-date-range-picker__editors-wrap.is-right .el-time-spinner__list'
    )
    const hoursEl2 = listRight[0]
    const disabledHours2 = Array.from(
      hoursEl2.querySelectorAll('.is-disabled')
    ).map((node) => Number(node.textContent))
    expect(disabledHours2).toStrictEqual(disabledHoursRightArr)
  })

  it('select same date, different time', async () => {
    const leftSelect = ['10', '59', '59']
    const value = ref<string[]>([])
    const wrapper = _mount(() => (
      <DatePicker v-model={value.value} type="datetimerange" />
    ))

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const pickers = document.querySelectorAll('.el-date-range-picker__content')!
    const leftCell = pickers[0].querySelector('td.available')!
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
    ) as any
    // auto set left time to right time
    expect(
      rightList[0]!.querySelector('.el-time-spinner__item.is-active').innerHTML
    ).toBe(leftSelect[0])
    expect(
      rightList[1].querySelector('.el-time-spinner__item.is-active').innerHTML
    ).toBe(leftSelect[1])
    expect(
      rightList[2].querySelector('.el-time-spinner__item.is-active').innerHTML
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
      document.querySelectorAll(
        '.el-picker-panel__footer .el-button'
      )[1] as HTMLElement
    ).click()
    await nextTick()

    expect(value.value.map((_) => dayjs(_).format('HH:mm:ss'))).toStrictEqual([
      '10:59:59',
      '12:12:12',
    ])
  })

  describe('form item accessibility integration', () => {
    it('automatic id attachment', async () => {
      const wrapper = _mount(() => (
        <ElFormItem label="Foobar" data-test-ref="item">
          <DatePicker type="datetime" />
        </ElFormItem>
      ))

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
      const wrapper = _mount(() => (
        <ElFormItem label="Foobar" data-test-ref="item">
          <DatePicker type="datetime" id="foobar" />
        </ElFormItem>
      ))

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
      const wrapper = _mount(() => (
        <ElFormItem label="Foobar" data-test-ref="item">
          <DatePicker type="datetime" />
          <DatePicker type="datetime" />
        </ElFormItem>
      ))

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      expect(formItem.attributes().role).toBe('group')
    })
  })

  it('display value', async () => {
    const value = ref([undefined, undefined])
    const wrapper = _mount(() => (
      <DatePicker v-model={value.value} type="datetimerange" />
    ))

    await nextTick()

    const [startInput, endInput] = wrapper.findAll('input')
    expect(startInput.element.value).toBe('')
    expect(endInput.element.value).toBe('')
  })

  it('prop defaultTime should not confilt with prop shortcuts', async () => {
    const value = ref('')
    const wrapper = _mount(() => (
      <DatePicker
        v-model={value.value}
        type="datetime"
        shortcuts={[
          { text: '12:00', value: new Date(2023, 0, 1, 12) },
          { text: '13:00', value: new Date(2023, 0, 1, 13) },
          { text: '14:00', value: new Date(2023, 0, 1, 14) },
        ]}
        default-time={new Date(2023, 0, 1, 19, 0, 0)}
      />
    ))
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    ;(
      document.querySelector(
        '.el-picker-panel__sidebar .el-picker-panel__shortcut'
      ) as HTMLElement
    ).click()
    await nextTick()
    expect(value.value).toBeDefined()
    expect(dayjs(value.value).format('YYYY-MM-DD HH:mm:ss')).toStrictEqual(
      '2023-01-01 12:00:00'
    )
  })
})
