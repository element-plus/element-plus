import { mount } from '@vue/test-utils'
import Affix from '../src/index.vue'
import { makeScroll } from '@element-plus/test-utils'

const _mount = (template: string) => mount({
  components: {
    'el-affix': Affix,
  },
  template,
}, { attachTo: document.body })

const AXIOM = 'Rem is the best girl'

describe('Affix.vue', () => {
  test('render test', async () => {
    const wrapper = _mount(`
      <div class="target" style="height: 200px; overflow: auto">
        <el-affix>${AXIOM}</el-affix>
        <div style="height: 2000px; width: 100%"></div>
      </div>
    `)
    expect(wrapper.text()).toEqual(AXIOM)
    expect(wrapper.find('.el-affix--fixed').exists()).toBe(false)
    const targetEl = wrapper.find('.target').element
    await makeScroll(targetEl, 'scrollTop', 2000)
    expect(wrapper.find('.el-affix--fixed').exists()).toBe(true)
  })
})
