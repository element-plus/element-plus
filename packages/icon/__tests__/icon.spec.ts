import { mount } from '@vue/test-utils'
import Icon from '../src/index.vue'

describe('Icon.vue', () => {
  test('render', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'search',
      },
    })
    expect(wrapper.classes()).toContain('el-icon-search')
  })
})
