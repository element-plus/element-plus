import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import TimePicker from '../src/time-picker'

const _mount = (template: string, data, otherObj?) => mount({
  components: {
    'el-time-picker': TimePicker,
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


describe('TimePicker', () => {
  it('create', async () => {
    const wrapper = _mount(`<el-time-picker
    :placeholder="placeholder"
    :readonly="readonly"
  />`, () => ({ placeholder: 'test_',
      readonly: true }))
    const input = wrapper.find('input')
    expect(input.attributes('placeholder')).toBe('test_')
    // todo readonly
    // expect(input.attributes('readonly')).toBeTruthy()
  })

  it('format', () => {
    const wrapper = _mount(`<el-time-picker
        :format="format"
        v-model="value"
      />`, () => ({ format: 'HH-mm-ss',
      value: new Date(2016, 9, 10, 18, 40) }))
    expect(wrapper.find('input').element.value).toBe('18-40-00')
  })

  it.only('set AM/PM format', async () => {
    const wrapper = _mount(`<el-time-picker
        :format="format"
        v-model="value"
      />`, () => ({ format: 'hh:mm:ss A',
      value: new Date(2016, 9, 10, 18, 40) }))

    const input = wrapper.find('input').element

    expect(input.value).toBe('06:40:00 PM')
    input.blur()
    input.focus()
    await nextTick()
    const list = wrapper.findAll('.el-time-spinner__list')
    const hoursEl = list[0]
    const items = hoursEl.element.querySelectorAll('.el-time-spinner__item')
    expect(items[0].textContent).toBe('12 AM')
    expect(items[1].textContent).toBe('01 AM')
    expect(items[12].textContent).toBe('12 PM')
    expect(items[15].textContent).toBe('03 PM')
  })
})
