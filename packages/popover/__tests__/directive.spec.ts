import { nextTick } from 'vue'
import Popover from '../src/index.vue'
import PopoverDirective, { VPopover } from '../src/directive'
import makeMount from '@element-plus/test-utils/make-mount'

import type { ComponentPublicInstance } from 'vue'


const AXIOM = 'Rem is the best girl'

const Comp = {
  template: `
  <el-popover title="title" :content="content" ref="popover"/>
  <div v-popover:popover v-if="visible" id="reference-node">
    ${AXIOM}
  </div>
  `,
  components: {
    [Popover.name]: Popover,
  },
  data() {
    return {
      visible: false,
      content: AXIOM,
    }
  },
}

const mount = makeMount(Comp, {
  props: {

  },
  global: {
    directives: {
      [VPopover]: PopoverDirective,
    },
  },
})

describe('v-popover', () => {

  test('should render correctly', () => {
    const wrapper = mount()

    expect(wrapper.text()).toContain(AXIOM)

  })

  test('should show popover when reference is mounted', async () => {
    const wrapper = mount()
    const refNode = '#reference-node'
    expect(wrapper.find(refNode).exists()).toBe(false);

    (wrapper.vm as ComponentPublicInstance<{visible: boolean;}>).visible = true
    await nextTick()

    expect(wrapper.find(refNode).exists()).toBe(true)
    expect(wrapper.find('.el-popover').attributes('style')).toContain('display: none')
    await wrapper.find(refNode).trigger('click')
    expect(wrapper.find('.el-popover').attributes('style')).not.toContain('display: none')
  })
})
