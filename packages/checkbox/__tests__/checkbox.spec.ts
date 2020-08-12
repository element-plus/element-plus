import { mount } from '@vue/test-utils'
import Checkbox from '../src/checkbox.vue'
import CheckboxButton from '../src/checkbox-button.vue'
import CheckboxGroup from '../src/checkbox-group.vue'

const _mount = (template: string, data, otherObj?) => mount({
  components: {
    'el-checkbox': Checkbox,
    'el-checkbox-group': CheckboxGroup,
    'el-checkbox-button': CheckboxButton,
  },
  template,
  data,
  ...otherObj,
}, {
  global: {
    provide: {
      elForm: {},
      elFormItem: {},
      CheckboxGroup: {},
    },
  },
})

describe('Checkbox', () => {
  test('create', async () => {
    const wrapper = _mount('<el-checkbox v-model="checkbox" label="a"/>', () => ({ checkbox: '' }))
    expect(wrapper.classes()).toContain('el-checkbox')
    await wrapper.trigger('click')
    setTimeout(async () => {
      expect(wrapper.classes()).toContain('is-checked')
      await wrapper.trigger('click')
      expect(wrapper.classes()).not.toContain('is-checked')
    })
  })
})
