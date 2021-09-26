import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import Backtop from '../src/backtop.vue'

const _mount = (template: string) =>
  mount(
    {
      components: {
        'el-backtop': Backtop,
      },
      template,
    },
    { attachTo: document.body }
  )

describe('Backtop.vue', () => {
  test('render', async () => {
    const wrapper = _mount(`
      <div class="target" style="height: 100px; overflow: auto">
        <div style="height: 10000px; width: 100%">
          <el-backtop target=".target" :visibilityHeight="2000" :right="100" :bottom="200" />
        </div>
      </div>
    `)
    await nextTick()

    expect(wrapper.find('.el-backtop').exists()).toBe(false)
    wrapper.element.scrollTop = 2000
    await wrapper.trigger('scroll')
    expect(wrapper.find('.el-backtop').exists()).toBe(true)

    expect(wrapper.find('.el-backtop').attributes('style')).toBe(
      'right: 100px; bottom: 200px;'
    )
    expect(wrapper.find('.el-icon-caret-top').exists()).toBe(true)

    await wrapper.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })
})
