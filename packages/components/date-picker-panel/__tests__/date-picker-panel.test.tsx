import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import dayjs from 'dayjs'
import triggerEvent from '@element-plus/test-utils/trigger-event'
import { describe, expect, it, vi } from 'vitest'
import DatePickerPanel from '../src/date-picker-panel'
import DatePickerRange from '../src/date-picker-com/panel-date-range.vue'

import type { DatePickerType } from '../src/types'

const formatStr = 'YYYY-MM-DD HH:mm:ss'
const makeRange = (start: number, end: number) => {
  const result = []
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}

describe('DatePickerPanel', () => {
  it('should have border', async () => {
    const wrapper = mount(() => <DatePickerPanel />)
    expect(wrapper.classes().includes('is-border'))
  })

  describe('common disabled actions', async () => {
    const types: DatePickerType[] = [
      'year',
      'years',
      'month',
      'months',
      'date',
      'dates',
      'week',
      'datetime',
      'datetimerange',
      'daterange',
      'monthrange',
      'yearrange',
    ]

    const currentType = ref<DatePickerType>()
    const onUpdateModelValue = vi.fn()
    const onPanelChange = vi.fn()
    const modelValue = ref<string>()
    const shortcuts = [
      {
        text: 'Shortcut desu',
        value: [new Date(), new Date()],
      },
    ]
    const _wrapper = mount(() => (
      <DatePickerPanel
        modelValue={modelValue.value}
        type={currentType.value}
        disabled
        shortcuts={shortcuts}
        onPanel-change={onPanelChange}
        onUpdate:modelValue={onUpdateModelValue}
      />
    ))

    it.each(types)(
      ":type='%s' should cells element have disabled",
      async (type) => {
        const wrapper = _wrapper.findComponent(DatePickerPanel)
        currentType.value = type
        await nextTick()
        expect(currentType.value).toBe(wrapper.vm.type)
        const allCellsDisabled = wrapper
          .findAll('tr > td')
          .every((el) => el.classes().includes('disabled'))
        expect(allCellsDisabled).toBe(true)
      }
    )

    it.each(types)(
      ":type='%s' should not trigger any interaction",
      async (type) => {
        const wrapper = _wrapper.findComponent(DatePickerPanel)
        currentType.value = type
        await nextTick()
        expect(currentType.value).toBe(wrapper.vm.type)
        const prevHtml = wrapper.html()
        const allCells = wrapper.findAll('tr > td')
        const shortcuts = wrapper.findAll('.el-picker-panel__shortcut')
        const headerEls = wrapper.findAll('.el-date-picker__header-label')
        const headerIconsEls = wrapper.findAll('.el-picker-panel__icon-btn')

        for (const cell of [
          ...allCells,
          ...shortcuts,
          ...headerEls,
          ...headerIconsEls,
        ]) {
          await cell.trigger('click')
        }
        expect(prevHtml).toBe(wrapper.html()) // test change view disable
        expect(modelValue.value).toBeUndefined()
        expect(onUpdateModelValue).not.toHaveBeenCalled()
        expect(onPanelChange).not.toHaveBeenCalled()
      }
    )
  })

  describe(':type="datetime" & :type="datetimerange"', () => {
    describe(':type="datetime"', () => {
      it('both picker show correct formated value (extract date-format and time-format from format property', async () => {
        const value = ref(new Date(2018, 2, 5, 10, 15, 24))
        const format = ref('YYYY/MM/DD HH:mm A')
        const dateFormat = ref('')
        const timeFormat = ref('')
        const wrapper = mount(() => (
          <DatePickerPanel
            v-model={value.value}
            type="datetime"
            format={format.value}
            dateFormat={dateFormat.value}
            timeFormat={timeFormat.value}
          />
        ))

        const dateInput = wrapper.find(
          '.el-date-picker__time-header > span:nth-child(1) input'
        ).element as HTMLInputElement
        const timeInput = wrapper.find(
          '.el-date-picker__time-header > span:nth-child(2) input'
        ).element as HTMLInputElement
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
        const wrapper = mount(() => (
          <DatePickerPanel v-model={value.value} type="datetime" />
        ))

        const dateInput = wrapper.find(
          '.el-date-picker__time-header > span:nth-child(1) input'
        )
        const timeInput = wrapper.find(
          '.el-date-picker__time-header > span:nth-child(2) input'
        )
        await timeInput.trigger('focus')
        // both input shows correct value
        expect((dateInput.element as HTMLInputElement).value).toBe('2000-10-01')
        expect((timeInput.element as HTMLInputElement).value).toBe('10:00:01')
        // time spinner highlight is correct
        let spinners = wrapper
          .findAll('.el-time-spinner ul li.is-active')
          .map((s) => s.element)
        expect(spinners[0].textContent).toBe('10')
        expect(spinners[1].textContent).toBe('00')
        expect(spinners[2].textContent).toBe('01')
        value.value = new Date(2001, 10, 2, 11, 1, 2)

        await nextTick()
        spinners = wrapper
          .findAll('.el-time-spinner ul li.is-active')
          .map((s) => s.element)
        expect((dateInput.element as HTMLInputElement).value).toBe('2001-11-02')
        expect((timeInput.element as HTMLInputElement).value).toBe('11:01:02')
        expect(spinners[0].textContent).toBe('11')
        expect(spinners[1].textContent).toBe('01')
        expect(spinners[2].textContent).toBe('02')
      })

      it('click now button', async () => {
        const value = ref('')
        const wrapper = mount(() => (
          <DatePickerPanel v-model={value.value} type="datetime" showFooter />
        ))

        await wrapper.find('.el-picker-panel__link-btn').trigger('click')
        await nextTick()
        // test if is current time (deviation 10 seconds)
        expect(dayjs(value.value).diff(dayjs()) < 10).toBeTruthy()
      })

      it('time-picker select && input time && input date', async () => {
        const value = ref('')
        const wrapper = mount(() => (
          <DatePickerPanel v-model={value.value} type="datetime" />
        ))

        const inputs = wrapper.findAll('.el-date-picker__editor-wrap input')
        const input_ = inputs[1]
        await input_.trigger('focus')
        await nextTick()
        const timePanel = wrapper.find('.el-time-panel').element
        expect(
          timePanel!.querySelector('.el-time-spinner')!.innerHTML
        ).not.toBeNull()
        const button = wrapper.find('.el-time-panel .confirm')
        await button.trigger('click')
        expect(value.value).not.toBe('')
        const timeInput = inputs[1].element as HTMLInputElement
        timeInput.value = '20:30:33'
        timeInput.dispatchEvent(new Event('change'))
        await nextTick()
        const valueResult = dayjs(value.value)
        expect(valueResult.hour()).toBe(20)
        expect(valueResult.minute()).toBe(30)
        expect(valueResult.second()).toBe(33)
        const dateInput = inputs[0].element as HTMLInputElement
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
        const wrapper = mount(() => (
          <DatePickerPanel
            v-model={value.value}
            type="datetime"
            disabledDate={disabledDate}
            showFooter
          />
        ))

        // click now button
        const btn = wrapper.find('.el-picker-panel__footer .is-text')
          .element as HTMLElement
        btn.click()
        await nextTick()

        expect(value.value).toBe('')
      })

      it('now button: should be disabled when current date is disabled', async () => {
        const isDisable = true
        const disabledDate = () => isDisable
        const wrapper = mount(() => (
          <DatePickerPanel
            type="datetime"
            disabledDate={disabledDate}
            showFooter
          />
        ))

        // now button is disabled
        const btn = wrapper.find('.el-picker-panel__footer .is-text')
          .element as HTMLElement
        expect(btn.getAttribute('disabled')).not.toBeUndefined()
      })

      it('confirm button honors picked date', async () => {
        const value = ref(new Date(2000, 9, 1, 12, 0, 0))
        const wrapper = mount(() => (
          <DatePickerPanel v-model={value.value} type="datetime" showFooter />
        ))

        // changed month / year should not effect picked time
        await wrapper
          .find('.el-date-picker__header .arrow-right')
          .trigger('click')
        await wrapper
          .find('.el-date-picker__header .d-arrow-right')
          .trigger('click')
        // click confirm button
        const buttons = wrapper.findAll('.el-picker-panel__footer .el-button')
        await buttons[1].trigger('click')

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
        const wrapper = mount(() => (
          <DatePickerPanel
            v-model={value.value}
            type="datetime"
            disabledHours={disabledHoursData}
            disabledMinutes={disabledMinutesData}
            disabledSeconds={disabledSecondsData}
          />
        ))

        const inputTime = wrapper.findAll(
          '.el-date-picker__editor-wrap input'
        )[1]
        await inputTime.trigger('focus')
        const list = wrapper.findAll('.el-time-spinner__list')
        const hoursEl = list[0].element
        const disabledHours = Array.from(
          hoursEl.querySelectorAll('.is-disabled')
        ).map((node) => Number(node.textContent))
        expect(disabledHours).toStrictEqual(disabledHoursArr)
        const minutesEl = list[1].element
        const disabledMinutes = Array.from(
          minutesEl.querySelectorAll('.is-disabled')
        ).map((node) => Number(node.textContent))
        expect(disabledMinutes.length).toBe(19)
      })

      it('defaultTime takes effect when the type is datetime', async () => {
        const value = ref('')
        const defaultTime = ref(new Date(2000, 1, 1, 12, 24, 48))
        const wrapper = mount(() => (
          <DatePickerPanel
            v-model={value.value}
            type="datetime"
            default-time={defaultTime.value}
          />
        ))

        const someDateTd = wrapper.find(
          '.el-picker-panel__content tr:nth-child(3) td:nth-child(4)'
        )
        const timeInput = wrapper.find(
          '.el-date-picker__time-header > span:nth-child(2) input'
        )
        await someDateTd.trigger('click')
        await timeInput.trigger('focus')
        expect((timeInput.element as HTMLInputElement).value).toBe('12:24:48')
        // time spinner highlight is correct
        const spinners = wrapper
          .findAll('.el-time-spinner ul li.is-active')
          .map((s) => s.element)
        expect(spinners[0].textContent).toBe('12')
        expect(spinners[1].textContent).toBe('24')
        expect(spinners[2].textContent).toBe('48')
      })

      it('defaultTime only takes effect when time is not selected', async () => {
        const value = ref('')
        const defaultTime = ref(new Date(2000, 1, 1, 12, 0, 0))
        const wrapper = mount(() => (
          <DatePickerPanel
            v-model={value.value}
            type="datetime"
            default-time={defaultTime.value}
          />
        ))

        const cells = wrapper.findAll('.available .el-date-table-cell')
        await cells[0].trigger('click')
        await nextTick()
        const timeInput = wrapper.find(
          '.el-date-picker__time-header > span:nth-child(2) input'
        )
        expect((timeInput.element as HTMLInputElement).value).toBe('12:00:00')
        await timeInput.trigger('focus')
        await nextTick()
        const spinner = wrapper.find('.el-time-spinner ul li.is-active')
        ;(spinner.element.nextSibling as HTMLElement).click()
        await nextTick()
        expect((timeInput.element as HTMLInputElement).value).toBe('13:00:00')
      })

      it('inherit time across different picker view', async () => {
        const value = ref(new Date(2000, 10, 8, 10, 10))
        const wrapper = mount(() => (
          <DatePickerPanel v-model={value.value} type="datetime" />
        ))

        const headerPanel = wrapper.findAll('.el-date-picker__header-label')
        await headerPanel[1].trigger('click')
        await nextTick()
        const firstMonth = wrapper.find('.el-month-table td')
          .element as HTMLSpanElement
        firstMonth.click()
        const timeInput = wrapper.find(
          '.el-date-picker__time-header > span:nth-child(2) input'
        ).element as HTMLInputElement
        expect(timeInput.value).toBe('10:10:00')
      })

      // fix #15196
      it('first click accuracy', async () => {
        const value = ref('')
        const wrapper = mount(() => (
          <DatePickerPanel v-model={value.value} type="datetime" />
        ))
        const dayItems = wrapper.findAll('.el-date-table-cell__text')
        const targetDay = dayItems[15].element as HTMLElement // Try to make sure the date is this month
        const dayText = targetDay.textContent
        await dayItems[15].trigger('click')
        await nextTick()
        expect(dayjs(value.value).format('D')).toBe(dayText)
      })

      it('shows weekNumber', async () => {
        const value = ref('2025-01-01')
        const wrapper = mount(() => (
          <DatePickerPanel
            v-model={value.value}
            type="datetime"
            show-week-number
          />
        ))
        await nextTick()
        const weeks = wrapper.findAll('td.week')
        expect(weeks.length).toBe(6)
        expect(weeks.map((x) => x.text().trim())).toEqual([
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
        ])
      })
    })

    describe(':type="datetimerange"', () => {
      it('select daterange and default Time and input format', async () => {
        const value = ref([
          new Date(2000, 10, 8, 10, 10),
          new Date(2000, 10, 11, 10, 10),
        ])
        const dateFormat = ref('')
        const timeFormat = ref('')
        const wrapper = mount(() => (
          <DatePickerPanel
            v-model={value.value}
            type="datetimerange"
            default-time={new Date(2020, 1, 1, 1, 1, 1)}
            format="YYYY/MM/DD HH:mm A"
            dateFormat={dateFormat.value}
            timeFormat={timeFormat.value}
            showFooter
          />
        ))

        const pickers = wrapper.findAll('.el-date-range-picker__content')
        const leftCell = pickers[0].find('td.available')!
        const rightCell = pickers[1].find('td.available')!
        await leftCell.trigger('mousemove')
        await leftCell.trigger('click')
        await nextTick()
        await rightCell.trigger('mousemove')
        await rightCell.trigger('click')
        await nextTick()

        expect(
          value.value.map((_) => dayjs(_).format(formatStr))
        ).toStrictEqual(['2000-11-01 01:01:01', '2000-12-01 01:01:01'])
        const pickerss = wrapper.findAll(
          '.el-date-range-picker__time-header .el-date-range-picker__editors-wrap'
        )
        const left = {
          dateInput: pickerss[0].find(
            '.el-date-range-picker__time-picker-wrap:nth-child(1) input'
          ).element,
          timeInput: pickerss[0].find(
            '.el-date-range-picker__time-picker-wrap:nth-child(2) input'
          ).element,
        }
        const right = {
          dateInput: pickerss[1].find(
            '.el-date-range-picker__time-picker-wrap:nth-child(1) input'
          ).element,
          timeInput: pickerss[1].find(
            '.el-date-range-picker__time-picker-wrap:nth-child(2) input'
          ).element,
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
        expect((left.dateInput as HTMLInputElement).value).toBe(
          '2000/11/01 Wed'
        )
        expect((left.timeInput as HTMLInputElement).value).toBe('AM 01:01:01')
        expect((right.dateInput as HTMLInputElement).value).toBe(
          '2000/12/01 Fri'
        )
        expect((right.timeInput as HTMLInputElement).value).toBe('AM 01:01:01')
      })

      it('input date', async () => {
        const value = ref<string[]>([])
        const wrapper = mount(() => (
          <DatePickerPanel
            v-model={value.value}
            type="datetimerange"
            showFooter
          />
        ))

        const pickerss = wrapper.findAll(
          '.el-date-range-picker__time-header .el-date-range-picker__editors-wrap'
        )
        const leftDateInput = pickerss[0].find(
          '.el-date-range-picker__time-picker-wrap:nth-child(1) input'
        ).element as HTMLInputElement
        const rightDateInput = pickerss[1].find(
          '.el-date-range-picker__time-picker-wrap:nth-child(1) input'
        ).element as HTMLInputElement
        leftDateInput.value = '1999-03-04'
        leftDateInput.dispatchEvent(new Event('input'))
        leftDateInput.dispatchEvent(new Event('change'))
        await nextTick()
        const pickers = wrapper.findAll('.el-date-range-picker__content')
        const leftCell = pickers[0].find('td.available')!
        const rightCell = pickers[1].find('td.available')!
        await leftCell.trigger('mousemove')
        await leftCell.trigger('click')
        await rightCell.trigger('mousemove')
        await rightCell.trigger('click')

        expect(
          value.value.map((_) => dayjs(_).format(formatStr))
        ).toStrictEqual(['1999-03-01 00:00:00', '1999-04-01 00:00:00'])
        // input date when minDate > maxDate
        rightDateInput.value = '1998-01-01'
        rightDateInput.dispatchEvent(new Event('input'))
        rightDateInput.dispatchEvent(new Event('change'))
        await nextTick()
        expect(dayjs(value.value[0]).isBefore(value.value[1])).toBeTruthy()
      })

      it('select time', async () => {
        const value = ref('')
        const wrapper = mount(() => (
          <DatePickerPanel
            v-model={value.value}
            type="datetimerange"
            showFooter
          />
        ))

        expect(value.value).toBe('')
        const timeInput = wrapper.findAll(
          '.el-date-range-picker__editors-wrap input'
        )[1]
        await timeInput.trigger('blur')
        await timeInput.trigger('focus')
        await timeInput.trigger('blur')
        const button = wrapper.find(
          '.el-date-range-picker__time-picker-wrap .el-time-panel .confirm'
        )
        await button.trigger('click')
        expect(value.value).not.toBe('')
      })

      it('clear button should empty the input value', async () => {
        const value = ref('')
        const wrapper = mount(() => (
          <DatePickerPanel
            v-model={value.value}
            type="datetimerange"
            showFooter
          />
        ))
        const dateRow = wrapper.findAll('.el-date-table__row')
        const dateCell = dateRow[1].findAll('.available')
        await dateCell[0].trigger('click')
        await dateCell[3].trigger('click')
        const headerValue = wrapper.findAll<HTMLInputElement>(
          '.el-date-range-picker__time-header input'
        )
        expect(headerValue[0].element.value).not.toBe('')
        expect(headerValue[1].element.value).not.toBe('')
        const clearBtn = wrapper.findAll<HTMLButtonElement>(
          '.el-picker-panel__footer button'
        )[0].element
        clearBtn.click()
        await nextTick()
        expect(headerValue[0].element.value).toBe('')
        expect(headerValue[1].element.value).toBe('')
      })

      it('confirm honors disabledDate', async () => {
        const value = ref('')
        const disabledDate = (date: Date) => {
          return date.getTime() < new Date(2000, 9, 1).getTime() // 2000-10-01
        }
        const wrapper = mount(() => (
          <DatePickerPanel
            v-model={value.value}
            type="datetimerange"
            disabledDate={disabledDate}
            showFooter
          />
        ))

        // simulate user input of invalid date
        const pickerss = wrapper.findAll(
          '.el-date-range-picker__time-header .el-date-range-picker__editors-wrap'
        )
        const leftDateInput = pickerss[0].find(
          '.el-date-range-picker__time-picker-wrap:nth-child(1) input'
        ).element as HTMLInputElement
        leftDateInput.value = '2000-09-01'
        leftDateInput.dispatchEvent(new Event('input'))
        leftDateInput.dispatchEvent(new Event('change'))
        await nextTick()
        const rangePanelWrapper = wrapper.findComponent(DatePickerRange)
        expect(rangePanelWrapper.exists()).toBe(true)
        expect(value.value).toBe('')
        leftDateInput.value = '2001-09-01'
        leftDateInput.dispatchEvent(new Event('input'))
        leftDateInput.dispatchEvent(new Event('change'))
        await nextTick()
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
        const wrapper = mount(() => (
          <DatePickerPanel
            v-model={value.value}
            type="datetimerange"
            disabledHours={disabledHoursData}
          />
        ))

        const pickerss = wrapper.findAll(
          '.el-date-range-picker__time-header .el-date-range-picker__editors-wrap'
        )
        const leftDateInput = pickerss[0].find(
          '.el-date-range-picker__time-picker-wrap:nth-child(2) input'
        )
        const rightDateInput = pickerss[1].find(
          '.el-date-range-picker__time-picker-wrap:nth-child(2) input'
        )
        await leftDateInput.trigger('blur')
        await leftDateInput.trigger('focus')
        const hoursEl = wrapper.find(
          '.el-date-range-picker__editors-wrap .el-time-spinner__list'
        ).element
        const disabledHours = Array.from(
          hoursEl.querySelectorAll('.is-disabled')
        ).map((node) => Number(node.textContent))
        expect(disabledHours).toStrictEqual(disabledHoursArr)
        const button = wrapper.find(
          '.el-date-range-picker__time-picker-wrap .el-time-panel .confirm'
        )
        await button.trigger('click')
        await rightDateInput.trigger('blur')
        await rightDateInput.trigger('focus')
        const listRight = wrapper
          .findAll(
            '.el-date-range-picker__editors-wrap.is-right .el-time-spinner__list'
          )
          .map((el) => el.element)
        const hoursEl2 = listRight[0]
        const disabledHours2 = Array.from(
          hoursEl2.querySelectorAll('.is-disabled')
        ).map((node) => Number(node.textContent))
        expect(disabledHours2).toStrictEqual(disabledHoursRightArr)
      })

      it('select same date, different time', async () => {
        const leftSelect = ['10', '59', '59']
        const value = ref<string[]>([])
        const wrapper = mount(() => (
          <DatePickerPanel
            v-model={value.value}
            type="datetimerange"
            showFooter
          />
        ))

        const pickers = wrapper.findAll('.el-date-range-picker__content')!
        const leftCell = pickers[0].find('td.available')!
        await leftCell.trigger('mousemove')
        await leftCell.trigger('click')
        await leftCell.trigger('mousemove')
        await leftCell.trigger('click')
        const leftTimeInput = wrapper.findAll(
          '.el-date-range-picker__editors-wrap input'
        )[1]
        await leftTimeInput.trigger('blur')
        await leftTimeInput.trigger('focus')
        const leftList = wrapper
          .findAll('.el-time-spinner__list')
          .map((el) => el.element)
        triggerEvent(leftList[0].children[+leftSelect[0]], 'click', true)
        await nextTick()
        triggerEvent(leftList[1].children[+leftSelect[1]], 'click', true)
        await nextTick()
        triggerEvent(leftList[2].children[+leftSelect[2]], 'click', true)
        await nextTick()
        await wrapper.find('.el-time-panel__btn.confirm').trigger('click')
        const rightTimeInput = wrapper.findAll(
          '.el-date-range-picker__editors-wrap input'
        )[3]
        await rightTimeInput.trigger('blur')
        await rightTimeInput.trigger('focus')
        const rightList = wrapper.findAll('.is-right .el-time-spinner__list')
        // auto set left time to right time
        expect(
          rightList[0].element?.querySelector(
            '.el-time-spinner__item.is-active'
          )?.innerHTML
        ).toBe(leftSelect[0])
        expect(
          rightList[1].element.querySelector('.el-time-spinner__item.is-active')
            ?.innerHTML
        ).toBe(leftSelect[1])
        expect(
          rightList[2].element.querySelector('.el-time-spinner__item.is-active')
            ?.innerHTML
        ).toBe(leftSelect[2])
        triggerEvent(rightList[0].element.children[12], 'click', true)
        await nextTick()
        triggerEvent(rightList[1].element.children[12], 'click', true)
        await nextTick()
        triggerEvent(rightList[2].element.children[12], 'click', true)
        await nextTick()
        await wrapper
          .find('.is-right .el-time-panel__btn.confirm')
          .trigger('click')
        await nextTick()

        expect(
          value.value.map((_) => dayjs(_).format('HH:mm:ss'))
        ).toStrictEqual(['10:59:59', '12:12:12'])
      })

      it('prop defaultTime should not confilt with prop shortcuts', async () => {
        const value = ref('')
        const wrapper = mount(() => (
          <DatePickerPanel
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
        await wrapper
          .find('.el-picker-panel__sidebar .el-picker-panel__shortcut')
          .trigger('click')
        await nextTick()
        expect(value.value).toBeDefined()
        expect(dayjs(value.value).format('YYYY-MM-DD HH:mm:ss')).toStrictEqual(
          '2023-01-01 12:00:00'
        )
      })

      it('shows weekNumber', async () => {
        const value = ref([new Date(2025, 0, 1), new Date(2025, 1, 1)])
        const wrapper = mount(() => (
          <DatePickerPanel
            v-model={value.value}
            type="datetimerange"
            show-week-number
          />
        ))
        await nextTick()
        const weeks = wrapper.findAll('td.week')
        expect(weeks.length).toBe(12)
        expect(weeks.map((x) => x.text().trim())).toEqual([
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
        ])
      })
    })
  })
})
