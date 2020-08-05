import { mount } from '@vue/test-utils'
import Radio from '../src/radio.vue'

describe('Radio', () => {
  test('create', async () => {
    const TestComponent = {
      template: `<el-radio v-model="radio" label="a">
      </el-radio>`,
      components: {
        'el-radio': Radio,
      },
      data: () => ({ radio: '' }),
    }
    const wrapper = mount(TestComponent)
    expect(wrapper.classes()).toContain('el-radio')
    await wrapper.trigger('click')
    expect(wrapper.classes()).toContain('is-checked')
  })
})
