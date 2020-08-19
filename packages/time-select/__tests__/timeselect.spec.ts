import { mount } from '@vue/test-utils'
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
})
