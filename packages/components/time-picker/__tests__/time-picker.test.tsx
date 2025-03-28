// @ts-nocheck
import { computed, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import dayjs from 'dayjs'
import triggerEvent from '@element-plus/test-utils/trigger-event'
import { rAF } from '@element-plus/test-utils/tick'
import { ElFormItem } from '@element-plus/components/form'
import TimePicker from '../src/time-picker'
import Picker from '../src/common/picker.vue'

const makeRange = (start, end) => {
  const result = []
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}

const getSpinnerTextAsArray = (dom, selector) => {
  return Array.prototype.slice
    .call(dom.querySelectorAll(selector))
    .map((node) => Number(node.textContent))
}

afterEach(() => {
  document.body.innerHTML = ''
})

describe('TimePicker', () => {
  it('create & custom class & style', async () => {
    const placeholder = ref('test_')
    const readonly = ref(true)
    const wrapper = mount(() => (
      <TimePicker
        placeholder={placeholder.value}
        readonly={readonly.value}
        style="color:red"
        class="customClass"
      />
    ))

    const input = wrapper.find('input')
    expect(input.attributes('placeholder')).toBe('test_')
    expect(input.attributes('readonly')).not.toBeUndefined()
    const outterInput = wrapper.find('.el-input')
    expect(outterInput.classes()).toContain('customClass')
    expect(outterInput.attributes().style).toBeDefined()
  })

  it('set format && default value && set AM/PM spinner && no $attr to panel', async () => {
    const format = ref('hh-mm:ss A')
    const value = ref(new Date(2016, 9, 10, 18, 40))
    const wrapper = mount(() => (
      <TimePicker format={format.value} v-model={value.value} />
    ))

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
    const times = document.querySelectorAll('.el-time-spinner__list .is-active')
    expect(times[0].textContent).toBe('06 PM')
    expect(times[1].textContent).toBe('40') // default value
    expect(times[2].textContent).toBe('00')
    const panel = document.querySelector('.el-time-panel') as any
    expect(panel.classList.contains('customClass')).toBeFalsy()
  })

  it('select time', async () => {
    const value = ref('')
    const wrapper = mount(() => <TimePicker v-model={value.value} />)

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

    const date = value.value
    expect(hourEl.classList.contains('is-active')).toBeTruthy()
    expect(minuteEl.classList.contains('is-active')).toBeTruthy()
    expect(secondEl.classList.contains('is-active')).toBeTruthy()
    expect(date.getHours()).toBe(4)
    expect(date.getMinutes()).toBe(36)
    expect(date.getSeconds()).toBe(20)
  })

  it('click confirm / cancel button', async () => {
    const value = ref('')
    const wrapper = mount(() => <TimePicker v-model={value.value} />)

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    ;(document.querySelector('.el-time-panel__btn.cancel') as any).click()

    expect(value.value).toBe('')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    ;(document.querySelector('.el-time-panel__btn.confirm') as any).click()

    expect(value.value).toBeInstanceOf(Date)
  })

  it('should update oldValue when visible change', async () => {
    const value = ref(new Date(2016, 9, 10, 18, 40))
    const wrapper = mount(() => <TimePicker v-model={value.value} />)

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
    const date = value.value
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
    const value = ref('')
    const wrapper = mount(() => (
      <TimePicker v-model={value.value} format="HH:mm" />
    ))

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

  it('event change, focus, blur, keydown', async () => {
    const changeHandler = vi.fn()
    const focusHandler = vi.fn()
    const blurHandler = vi.fn()
    const keydownHandler = vi.fn()

    const value = ref(new Date(2016, 9, 10, 18, 40))
    const wrapper = mount(() => (
      <TimePicker
        v-model={value.value}
        onChange={changeHandler}
        onFocus={focusHandler}
        onBlur={blurHandler}
        onKeydown={keydownHandler}
      />
    ))

    const input = wrapper.find('input')
    input.trigger('focus')
    await nextTick()
    await rAF() // Set selection range causes focus to be retained
    input.element.blur()
    input.trigger('blur')
    await nextTick()
    await rAF() // Blur is delayed to ensure focus was not moved to popper
    input.trigger('keydown')
    await nextTick()
    await rAF()
    expect(focusHandler).toHaveBeenCalledTimes(1)
    expect(blurHandler).toHaveBeenCalled()
    expect(keydownHandler).toHaveBeenCalledTimes(1)

    input.trigger('focus')
    await nextTick()
    await rAF()
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
  })

  it('selectableRange ', async () => {
    // ['17:30:00 - 18:30:00', '18:50:00 - 20:30:00', '21:00:00 - 22:00:00']
    const disabledHoursArr = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 23,
    ]
    const disabledHoursData = () => {
      return disabledHoursArr
    }
    const disabledMinutesData = (hour) => {
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
    }
    const disabledSeconds = (hour, minute) => {
      if (hour === 18 && minute === 30) {
        return makeRange(1, 59)
      }
      if (hour === 20 && minute === 30) {
        return makeRange(1, 59)
      }
      if (hour === 22 && minute === 0) {
        return makeRange(1, 59)
      }
    }
    const value = ref('')
    const wrapper = mount(() => (
      <TimePicker
        v-model={value.value}
        disabled-hours={disabledHoursData}
        disabled-minutes={disabledMinutesData}
        disabled-seconds={disabledSeconds}
      />
    ))

    const input = wrapper.find('input')
    input.trigger('focus')
    await nextTick()

    const list = document.querySelectorAll('.el-time-spinner__list')
    const hoursEl = list[0]
    const minutesEl = list[1]
    const secondsEl = list[2]
    const disabledHours = getSpinnerTextAsArray(hoursEl, '.is-disabled')
    expect(disabledHours).toEqual(disabledHoursArr)
    const hourSpinners = hoursEl.querySelectorAll('.el-time-spinner__item')
    ;(hourSpinners[18] as any).click()
    await nextTick()
    const disabledMinutes = getSpinnerTextAsArray(minutesEl, '.is-disabled')
    expect(disabledMinutes.every((t) => t > 30 && t < 50)).toBeTruthy()
    expect(disabledMinutes.length).toEqual(19)
    ;(hourSpinners[22] as any).click()
    await nextTick()
    const enabledMinutes = getSpinnerTextAsArray(
      minutesEl,
      ':not(.is-disabled)'
    )
    const enabledSeconds = getSpinnerTextAsArray(
      secondsEl,
      ':not(.is-disabled)'
    )
    expect(enabledMinutes).toEqual([0])
    expect(enabledSeconds).toEqual([0])
  })

  it('exposed focus & blur', async () => {
    const value = ref(new Date(2016, 9, 10, 18, 40))
    const wrapper = mount(() => <TimePicker v-model={value.value} />)

    await nextTick()
    const timePickerExposed = wrapper.findComponent(TimePicker).vm.$.exposed

    expect(timePickerExposed.focus).toBeTruthy()
    expect(timePickerExposed.blur).toBeTruthy()
  })

  it('ref handleOpen', async () => {
    const value = ref(new Date(2016, 9, 10, 18, 40))
    const wrapper = mount(() => <TimePicker v-model={value.value} />)
    const timePickerExposed = wrapper.findComponent(TimePicker).vm.$.exposed

    await nextTick()
    timePickerExposed.handleOpen()

    await nextTick()
    const popperEl = document.querySelector('.el-picker__popper')
    const attr = popperEl.getAttribute('aria-hidden')
    expect(attr).toEqual('false')
  })

  it('ref handleClose', async () => {
    const value = ref(new Date(2016, 9, 10, 18, 40))
    const wrapper = mount(() => <TimePicker v-model={value.value} />)
    const timePickerExposed = wrapper.findComponent(TimePicker).vm.$.exposed

    await nextTick()
    timePickerExposed.handleOpen()
    await nextTick()
    timePickerExposed.handleClose()

    await rAF()
    const popperEl = document.querySelector('.el-picker__popper')
    const attr = popperEl.getAttribute('aria-hidden')
    expect(attr).toEqual('true')
  })

  it('model value should sync when disabled-hours was updated', async () => {
    const value = ref('2000-01-01 00:00:00')
    const minHour = ref('8')
    const disabledHours = computed(() => () => {
      return Array.from({ length: 24 })
        .fill(null)
        .map((_, i) => i)
        .filter((h) => h < Number.parseInt(minHour.value, 10))
    })
    mount(() => (
      <TimePicker
        v-model={value.value}
        disabled-hours={disabledHours.value}
        value-format="YYYY-MM-DD HH:mm:ss"
      />
    ))

    await nextTick()

    expect(value.value).toEqual('2000-01-01 08:00:00')
    minHour.value = '9'
    await nextTick()
    expect(value.value).toEqual('2000-01-01 09:00:00')
    minHour.value = '8'
    await nextTick()
    expect(value.value).toEqual('2000-01-01 09:00:00')
  })

  it('when a time is input, the type of modelValue should be Date by default', async () => {
    const value = ref('2024-11-18 12:00:00')
    const wrapper = mount(() => <TimePicker v-model={value.value} />)

    const input = wrapper.find('input')
    input.trigger('focus')

    await input.setValue('10:00:00')

    input.trigger('blur')
    expect(value.value).toBeInstanceOf(Date)
  })

  it('when a time is input, the type of modelValue should be Date by default (is-range)', async () => {
    const value = ref([
      new Date('2024-11-18 10:00:00'),
      new Date('2024-11-18 12:00:00'),
    ])
    const wrapper = mount(() => <TimePicker v-model={value.value} is-range />)

    const [startTimeInput, endTimeInput] = wrapper.findAll('input')

    // Input start time
    startTimeInput.trigger('focus')
    await startTimeInput.setValue('10:00:10')
    startTimeInput.trigger('blur')
    expect(value.value[0]).toBeInstanceOf(Date)

    // Input end time
    endTimeInput.trigger('focus')
    await endTimeInput.setValue('12:00:10')
    endTimeInput.trigger('blur')
    expect(value.value[1]).toBeInstanceOf(Date)
  })

  it('picker-panel should not pop up when readonly', async () => {
    const wrapper = mount(() => <TimePicker readonly />)

    const input = wrapper.find('input')
    await input.trigger('mousedown')
    await nextTick()
    expect((wrapper.findComponent(Picker).vm as any).pickerVisible).toEqual(
      false
    )
  })

  it('picker-panel should not pop up when disabled', async () => {
    const wrapper = mount(() => <TimePicker readonly />)

    const input = wrapper.find('input')
    await input.trigger('mousedown')
    await nextTick()
    expect((wrapper.findComponent(Picker).vm as any).pickerVisible).toEqual(
      false
    )
  })

  it('can auto skip when disabled', async () => {
    vi.useFakeTimers()

    const disabledHours = () => [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 23,
    ]
    const value = ref(new Date(2016, 9, 20, 18, 30))
    const wrapper = mount(
      () => (
        <TimePicker
          v-model={value.value}
          disabled-hours={disabledHours}
          arrow-control
        />
      ),
      {
        attachTo: document.body,
      }
    )
    const input = wrapper.find('input')
    input.trigger('focus')
    await nextTick()

    const list = document.querySelectorAll('.el-time-spinner__list')
    const hoursEl = list[0]
    let activeHours = getSpinnerTextAsArray(hoursEl, '.is-active')[0]

    expect(activeHours).toEqual(20)
    const hoursElWrapperList = document.querySelectorAll(
      '.el-time-spinner__wrapper'
    )
    const hoursElWrapper = hoursElWrapperList[0]
    const hoursElArrowDown: Element | null =
      hoursElWrapper.querySelector('.arrow-down')
    expect(hoursElArrowDown).toBeTruthy()

    const mousedownEvt = new MouseEvent('mousedown')
    const mouseupEvt = new MouseEvent('mouseup')

    const testTime = 130
    hoursElArrowDown.dispatchEvent(mousedownEvt)
    hoursElArrowDown.dispatchEvent(mouseupEvt)
    vi.advanceTimersByTime(testTime)
    await nextTick()
    activeHours = getSpinnerTextAsArray(hoursEl, '.is-active')[0]
    expect(activeHours).toEqual(21)
    hoursElArrowDown.dispatchEvent(mousedownEvt)
    hoursElArrowDown.dispatchEvent(mouseupEvt)
    vi.advanceTimersByTime(testTime)
    await nextTick()
    activeHours = getSpinnerTextAsArray(hoursEl, '.is-active')[0]
    expect(activeHours).toEqual(22)
    hoursElArrowDown.dispatchEvent(new MouseEvent('mousedown'))
    hoursElArrowDown.dispatchEvent(new MouseEvent('mouseup'))
    vi.advanceTimersByTime(testTime)
    await nextTick()
    activeHours = getSpinnerTextAsArray(hoursEl, '.is-active')[0]
    expect(activeHours).toEqual(20)

    vi.useRealTimers()
  })
})

describe('TimePicker(range)', () => {
  it('create', async () => {
    const value = ref([
      new Date(2016, 9, 10, 18, 40),
      new Date(2016, 9, 10, 19, 40),
    ])
    const wrapper = mount(
      () => <TimePicker v-model={value.value} size="small" is-range={true} />,
      {
        attachTo: document.body,
      }
    )

    expect(wrapper.find('.el-range-editor--small').exists()).toBeTruthy()
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    // For skipping Transition animation
    await rAF()
    const list = document.querySelectorAll(
      '.el-time-spinner__list .el-time-spinner__item.is-active'
    )

    ;['18', '40', '00', '19', '40', '00'].forEach((_, i) => {
      expect(list[i].textContent).toBe(_)
    })
  })

  it('default value', async () => {
    const value = ref('')
    const defaultValue = ref([
      new Date(2000, 9, 1, 10, 20, 0),
      new Date(2000, 9, 1, 11, 10, 0),
    ])
    const wrapper = mount(
      () => (
        <TimePicker
          v-model={value.value}
          default-value={defaultValue.value}
          is-range={true}
        />
      ),
      {
        attachTo: document.body,
      }
    )

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    // For skipping Transition animation
    await rAF()
    const list = document.querySelectorAll(
      '.el-time-spinner__list .el-time-spinner__item.is-active'
    )

    ;['10', '20', '00', '11', '10', '00'].forEach((_, i) => {
      expect(list[i].textContent).toBe(_)
    })
  })

  it('cancel button', async () => {
    const cancelDates = [
      new Date(2016, 9, 10, 9, 40),
      new Date(2016, 9, 10, 15, 40),
    ]
    const value = ref(cancelDates)
    const wrapper = mount(() => <TimePicker v-model={value.value} is-range />, {
      attachTo: document.body,
    })

    const input = wrapper.find('input')
    input.trigger('blur')
    await nextTick()
    input.trigger('focus')
    await nextTick()
    // For skipping Transition animation
    await rAF()
    ;(document.querySelector('.el-time-panel__btn.cancel') as any).click()
    await rAF()

    expect(value.value).toEqual(cancelDates)
    expect((wrapper.findComponent(Picker).vm as any).pickerVisible).toEqual(
      false
    )
    expect(document.querySelector('.el-picker-panel')).toBeNull()
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    ;(document.querySelector('.el-time-panel__btn.confirm') as any).click()
    expect(Array.isArray(value.value)).toBeTruthy()
    value.value.forEach((v: unknown) => {
      expect(v).toBeInstanceOf(Date)
    })
  })

  it('clear button', async () => {
    const value = ref([
      new Date(2016, 9, 10, 9, 40),
      new Date(2016, 9, 10, 15, 40),
    ])
    const wrapper = mount(() => <TimePicker v-model={value.value} is-range />)

    const findInputWrapper = () => wrapper.find('.el-date-editor')
    const findClear = () => wrapper.find('.el-range__close-icon')

    await nextTick()
    const inputWrapper = findInputWrapper()
    await inputWrapper.trigger('mouseenter')
    await rAF()
    const clearIcon = findClear()
    await clearIcon.trigger('click')
    await nextTick()
    expect(value.value).toEqual(null)
  })

  it('should close pick when click the clear button on pick opened', async () => {
    const value = ref([
      new Date(2016, 9, 10, 9, 40),
      new Date(2016, 9, 10, 15, 40),
    ])
    const wrapper = mount(() => <TimePicker v-model={value.value} is-range />)
    const findInputWrapper = () => wrapper.find('.el-date-editor')
    const findClear = () => wrapper.find('.el-range__close-icon')
    const findPicker = () => wrapper.find('.el-picker-panel')

    await nextTick()
    const inputWrapper = findInputWrapper()
    await inputWrapper.trigger('mouseenter')
    await inputWrapper.trigger('mousedown')

    await nextTick()
    // when the input is clicked, the picker is displayed.
    expect(findPicker()).toBeTruthy()
    const clearIcon = findClear()
    await clearIcon.trigger('click')

    await nextTick()
    expect(value.value).toEqual(null)
    // when the "clear" button is clicked, the pick is hidden.
    expect(findPicker().exists()).toBe(false)
  })

  it('selectableRange ', async () => {
    // left ['08:00:00 - 12:59:59'] right ['11:00:00 - 16:59:59']
    const value = ref([
      new Date(2016, 9, 10, 9, 40),
      new Date(2016, 9, 10, 15, 40),
    ])
    const disabledHours = (role) => {
      if (role === 'start') {
        return makeRange(0, 7).concat(makeRange(13, 23))
      }
      return makeRange(0, 10).concat(makeRange(17, 23))
    }
    const wrapper = mount(() => (
      <TimePicker
        v-model={value.value}
        is-range
        disabled-hours={disabledHours}
      />
    ))

    const input = wrapper.find('input')
    input.trigger('focus')
    await nextTick()
    // For skipping Transition animation
    await rAF()

    const list = document.querySelectorAll('.el-time-spinner__list')
    const leftHoursEl = list[0]
    const leftEndbledHours = getSpinnerTextAsArray(
      leftHoursEl,
      ':not(.is-disabled)'
    )
    expect(leftEndbledHours).toEqual([8, 9, 10, 11, 12])
    const rightHoursEl = list[3]
    const rightEndbledHours = getSpinnerTextAsArray(
      rightHoursEl,
      ':not(.is-disabled)'
    )
    expect(rightEndbledHours).toEqual([11, 12, 13, 14, 15, 16])
    ;(leftHoursEl.querySelectorAll('.el-time-spinner__item')[12] as any).click()
    await nextTick()
    const NextRightEndbledHours = getSpinnerTextAsArray(
      rightHoursEl,
      ':not(.is-disabled)'
    )
    expect(NextRightEndbledHours).toEqual([12, 13, 14, 15, 16])
  })

  it('arrow key', async () => {
    const value = ref(new Date(2016, 9, 10, 18, 40))
    const wrapper = mount(() => (
      <TimePicker v-model={value.value} format="YYYY-MM-DD HH:mm:ss" />
    ))

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
    const value = ref(new Date(2016, 9, 10, 18, 40))
    const options = ref(ElPopperOptions)
    const wrapper = mount(
      () => (
        <TimePicker
          v-model={value.value}
          format="YYYY-MM-DD HH:mm:ss"
          popper-options={options.value}
        />
      ),
      {
        global: {
          provide() {
            return {
              ElPopperOptions,
            }
          },
        },
      }
    )

    await nextTick()

    expect((wrapper.findComponent(Picker).vm as any).elPopperOptions).toEqual(
      ElPopperOptions
    )
  })

  it('am/pm mode avoid render redundant content', async () => {
    const timeRange = ref([])
    const wrapper = mount(
      () => (
        <TimePicker
          v-model={timeRange.value}
          is-range
          range-separator="To"
          start-placeholder="Start time"
          end-placeholder="End time"
          arrow-control
          format="hh:mm:ss a"
        />
      ),
      {
        attachTo: document.body,
      }
    )

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    // For skipping Transition animation
    await rAF()

    const list = document.querySelectorAll('.el-time-spinner__list')
    expect(
      list[0]
        .querySelector('.el-time-spinner__item.is-active')
        .innerHTML.split(' ').length
    ).toBe(2)
    expect(
      list[1]
        .querySelector('.el-time-spinner__item.is-active')
        .innerHTML.split(' ').length
    ).toBe(1)
    expect(
      list[2]
        .querySelector('.el-time-spinner__item.is-active')
        .innerHTML.split(' ').length
    ).toBe(1)
  })

  describe('form item accessibility integration', () => {
    it('automatic id attachment', async () => {
      const wrapper = mount(() => (
        <ElFormItem label="Foobar" data-test-ref="item">
          <TimePicker />
        </ElFormItem>
      ))

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      const formItemLabel = formItem.find('.el-form-item__label')
      const timePickerInput = wrapper.find('.el-input__inner')
      expect(formItem.attributes().role).toBeFalsy()
      expect(formItemLabel.attributes().for).toBe(
        timePickerInput.attributes().id
      )
    })

    it('specified id attachment', async () => {
      const wrapper = mount(() => (
        <ElFormItem label="Foobar" data-test-ref="item">
          <TimePicker id="foobar" />
        </ElFormItem>
      ))

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      const formItemLabel = formItem.find('.el-form-item__label')
      const timePickerInput = wrapper.find('.el-input__inner')
      expect(formItem.attributes().role).toBeFalsy()
      expect(timePickerInput.attributes().id).toBe('foobar')
      expect(formItemLabel.attributes().for).toBe(
        timePickerInput.attributes().id
      )
    })

    it('form item role is group when multiple inputs', async () => {
      const wrapper = mount(() => (
        <ElFormItem label="Foobar" data-test-ref="item">
          <TimePicker />
          <TimePicker />
        </ElFormItem>
      ))

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      expect(formItem.attributes().role).toBe('group')
    })
  })

  describe('dismiss events restore picker', () => {
    let wrapper: ReturnType<typeof mount>

    const findInput = () =>
      wrapper.findComponent({
        name: 'ElInput',
      })
    const findClear = () => wrapper.find('.clear-icon')
    const findPicker = () =>
      wrapper.findComponent({
        name: 'Picker',
      })

    beforeEach(() => {
      const value = ref(new Date(2016, 9, 10, 18, 40))
      wrapper = mount(() => <TimePicker v-model={value.value} ref="input" />, {
        attachTo: document.body,
      })
    })

    afterEach(() => {
      wrapper.unmount()
    })

    it('should be able to focus back and callout picker after clear', async () => {
      await nextTick()
      const input = findInput()
      await input.trigger('mouseenter')
      await rAF()
      const clearIcon = findClear()
      await clearIcon.trigger('click')
      await rAF()
      expect(document.activeElement).toBe(wrapper.find('input').element)
      expect(document.querySelector('.el-time-panel')).toBeFalsy()
      await input.vm.$emit('input', 'a')
      await rAF()
      expect(document.querySelector('.el-time-panel')).toBeTruthy()
    })

    it('should be able to focus back and callout picker after pick', async () => {
      await nextTick()
      const picker = findPicker()
      const input = findInput()
      input.vm.$emit('input', 'a')
      await rAF()
      expect(document.querySelector('.el-time-panel')).toBeTruthy()
      picker.vm.onPick('', false)
      await rAF() // Picker triggers popup close, event propagation
      await rAF() // Focus trap recognizes focusout event, and propagation
      expect(document.activeElement).toBe(wrapper.find('input').element)
      expect(document.querySelector('.el-time-panel')).toBeFalsy()
      input.vm.$emit('input', 'a')
      await rAF()
      expect(document.querySelector('.el-time-panel')).toBeTruthy()
    })
  })

  it('display value', async () => {
    const value = ref([undefined, undefined])
    const wrapper = mount(() => <TimePicker v-model={value.value} is-range />)

    await nextTick()

    const [startInput, endInput] = wrapper.findAll('input')
    expect(startInput.element.value).toBe('')
    expect(endInput.element.value).toBe('')
  })

  it('avoid update initial value when using disabledHours', async () => {
    const value = ref([])

    const disabledHours = () => {
      const curH = dayjs().hour()
      if (curH === 0) {
        return [curH, 1]
      } else if (curH === 23) {
        return [curH - 1, curH]
      }
      return [curH - 1, curH + 1]
    }
    const wrapper = mount(() => (
      <TimePicker
        v-model={value.value}
        disabled-hours={disabledHours}
        is-range={true}
      />
    ))
    await nextTick()

    const [startInput, endInput] = wrapper.findAll('input')

    expect(startInput.element.value).toBe('')
    expect(endInput.element.value).toBe('')
    expect(value.value).toEqual([])
  })

  it('can clear when using disabledHours', async () => {
    const value = ref([
      new Date(2016, 9, 10, 9, 40),
      new Date(2016, 9, 10, 15, 40),
    ])

    const disabledHours = () => {
      const curH = dayjs().hour()
      if (curH === 0) {
        return [curH, 1]
      } else if (curH === 23) {
        return [curH - 1, curH]
      }
      return [curH - 1, curH + 1]
    }
    const wrapper = mount(() => (
      <TimePicker
        v-model={value.value}
        disabled-hours={disabledHours}
        is-range={true}
      />
    ))

    await nextTick()
    const findInputWrapper = () => wrapper.find('.el-date-editor')
    const findClear = () => wrapper.find('.el-range__close-icon')

    await nextTick()
    const inputWrapper = findInputWrapper()
    await inputWrapper.trigger('mouseenter')
    const clearIcon = findClear()
    await clearIcon.trigger('click')
    await nextTick()
    expect(value.value).toEqual(null)
  })

  describe('It should generate accessible attributes', () => {
    it('should generate aria attributes', async () => {
      const wrapper = mount(() => <TimePicker aria-label="time picker" />)
      const input = wrapper.find('input')
      expect(input.attributes('role')).toBe('combobox')
      expect(input.attributes('aria-controls')).toBeTruthy()
      expect(input.attributes('aria-haspopup')).toBe('dialog')
      expect(input.attributes('aria-expanded')).toBe('false')
      expect(input.attributes('aria-label')).toBe('time picker')

      input.trigger('focus')
      await nextTick()
      await rAF()
      const popper = document.querySelector('.el-picker__popper')
      expect(input.attributes('aria-expanded')).toBe('true')
      expect(input.attributes('aria-controls')).toBe(popper?.getAttribute('id'))
      expect(popper?.getAttribute('role')).toBe('dialog')
      expect(popper?.getAttribute('aria-hidden')).toBe('false')
      expect(popper?.getAttribute('aria-modal')).toBe('false')
    })

    it('should generate aria attributes for range', async () => {
      const wrapper = mount(() => (
        <TimePicker is-range aria-label="time picker" />
      ))
      const inputs = wrapper.findAll('input')
      expect(inputs[0].attributes('role')).toBe('combobox')
      expect(inputs[0].attributes('aria-controls')).toBeTruthy()
      expect(inputs[0].attributes('aria-haspopup')).toBe('dialog')
      expect(inputs[0].attributes('aria-expanded')).toBe('false')
      expect(inputs[0].attributes('aria-label')).toBe('time picker')

      expect(inputs[1].attributes('role')).toBe('combobox')
      expect(inputs[1].attributes('aria-controls')).toBeTruthy()
      expect(inputs[1].attributes('aria-haspopup')).toBe('dialog')
      expect(inputs[1].attributes('aria-expanded')).toBe('false')
      expect(inputs[1].attributes('aria-label')).toBe('time picker')
      expect(inputs[0].attributes('aria-controls')).toBe(
        inputs[1].attributes('aria-controls')
      )

      wrapper.find('input').trigger('focus')
      await nextTick()
      await rAF()
      const popper = document.querySelector('.el-picker__popper')
      expect(inputs[0].attributes('aria-expanded')).toBe('true')
      expect(inputs[1].attributes('aria-expanded')).toBe('true')
      expect(inputs[0].attributes('aria-controls')).toBe(
        popper?.getAttribute('id')
      )
      expect(popper?.getAttribute('role')).toBe('dialog')
      expect(popper?.getAttribute('aria-hidden')).toBe('false')
      expect(popper?.getAttribute('aria-modal')).toBe('false')
    })
  })
})
