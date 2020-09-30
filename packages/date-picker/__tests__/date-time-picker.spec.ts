import { mount } from '@vue/test-utils'
import dayjs from 'dayjs'
import { nextTick } from 'vue'
import DatePicker from '../src/date-picker'

const _mount = (template: string, data = () => ({}), otherObj?) => mount({
  components: {
    'el-date-picker': DatePicker,
  },
  template,
  data,
  ...otherObj,
}, {
  global: {
    provide: {
      elForm: {},
      elFormItem: {},
    },
  },
})

afterEach(() => {
  document.documentElement.innerHTML = ''
})


describe('Datetime Picker', () => {

  it('both picker show correct formated value (extract date-format and time-format from format property', async () => {
    const wrapper = _mount(`<el-date-picker
        v-model="value"
        type="datetime"
        :format="format"
    />`, () => ({
      value: new Date(2018, 2, 5, 10, 15, 24),
      format: 'YYYY/MM/DD HH:mm A',
    }))
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const dateInput = document.querySelector('.el-date-picker__time-header > span:nth-child(1) input')
    const timeInput = document.querySelector('.el-date-picker__time-header > span:nth-child(2) input');
    (timeInput as HTMLElement).focus()
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
    const wrapper = _mount(`<el-date-picker
        v-model="value"
        type="datetime"
    />`, () => ({
      value: new Date(2000, 9, 1, 10, 0, 1),
    }))

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const dateInput = document.querySelector('.el-date-picker__time-header > span:nth-child(1) input')
    const timeInput = document.querySelector('.el-date-picker__time-header > span:nth-child(2) input');
    (timeInput as HTMLElement).focus()
    await nextTick()
    // both input shows correct value
    expect((dateInput as HTMLInputElement).value).toBe('2000-10-01')
    expect((timeInput as HTMLInputElement).value).toBe('10:00:01')
    // time spinner highlight is correct
    let spinners = document.querySelectorAll('.el-time-spinner ul li.active') as any
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
    const wrapper = _mount(`<el-date-picker
        v-model="value"
        type="datetime"
    />`, () => ({
      value: '',
    }))
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick();
    (document.querySelector('.el-picker-panel__link-btn') as HTMLElement).click()
    await nextTick()
    const vm = wrapper.vm as any
    // test if is current time (deviation 10 seconds)
    expect(dayjs(vm.value).diff(dayjs()) < 10).toBeTruthy()
  })

  it('timepicker select && input time && input date', async () => {
    const wrapper = _mount(`<el-date-picker
        v-model="value"
        type="datetime"
    />`, () => ({
      value: '',
    }))
    const vm = wrapper.vm as any
    expect(vm.value).toBe('')
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const input_ = document.querySelectorAll('.el-date-picker__editor-wrap input')[1];
    (input_ as HTMLElement).focus()
    await nextTick()
    const timePanel = document.querySelector('.el-time-panel')
    expect(timePanel.querySelector('.el-time-spinner').innerHTML).not.toBeNull()
    const button = document.querySelector('.el-time-panel .confirm') as HTMLElement
    button.click()
    await nextTick()
    expect(vm.value).not.toBe('')
    const timeInput = document.querySelectorAll('.el-date-picker__editor-wrap input')[1] as HTMLInputElement
    timeInput.value = '20:30:33'
    timeInput.dispatchEvent(new Event('change'))
    await nextTick()
    const valueResult = dayjs(vm.value)
    expect(valueResult.hour()).toBe(20)
    expect(valueResult.minute()).toBe(30)
    expect(valueResult.second()).toBe(33)
    const dateInput = document.querySelector('.el-date-picker__editor-wrap input') as HTMLInputElement
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
    const wrapper = _mount(`<el-date-picker
        v-model="value"
        type="datetime"
        :disabledDate="disabledDate"
    />`, () => ({
      value: '',
      disabledDate() {
        return isDisable
      },
    }))
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    // click now button
    const btn = document.querySelector('.el-picker-panel__footer .el-button--text') as HTMLElement
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
    const wrapper = _mount(`<el-date-picker
        v-model="value"
        type="datetime"
    />`, () => ({
      value: new Date(2000, 9, 1, 12, 0, 0), // 2010-10-01 12:00:00
    }))
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick();
    // changed month / year should not effect picked time
    (document.querySelector('.el-date-picker__header .el-icon-arrow-right') as HTMLElement).click();
    (document.querySelector('.el-date-picker__header .el-icon-d-arrow-right') as HTMLElement).click();
    // click confirm button
    (document.querySelector('.el-picker-panel__footer .el-button--default') as HTMLElement).click()
    const vm = wrapper.vm as any
    expect(dayjs(vm.value).format('YYYY-MM-DD HH:mm:ss')).toBe('2000-10-01 12:00:00')
  })
})
