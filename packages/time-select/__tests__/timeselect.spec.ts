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
  test('create', async () => {
    const wrapper = _mount(`<el-time-picker
    :placeholder="placeholder"
    :readonly="readonly"
  />`, () => ({ placeholder: 'test_',
      readonly: true }))
    const input = wrapper.find('input')
    expect(input.attributes('placeholder')).toBe('test_')
    expect(input.attributes()).toBeTruthy()
  })
})
