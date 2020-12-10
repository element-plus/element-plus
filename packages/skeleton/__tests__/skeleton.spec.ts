import { mount } from '@vue/test-utils'
import Skeleton from '../src/index.vue'

describe('Skeleton.vue', () => {
  test('render test', () => {
    const wrapper = mount(Skeleton)
    expect(wrapper.classes()).toContain('el-skeleton')
  })
})
