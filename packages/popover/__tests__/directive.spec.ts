import { h, nextTick, Fragment, withDirectives, ref } from 'vue'
import Popover from '../src/index.vue'
import PopoverDirective, { VPopover } from '../src/directive'
import makeMount from '@element-plus/test-utils/make-mount'
import { rAF } from '@element-plus/test-utils/tick'

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

    expect(document.body.querySelector('.el-popover').innerHTML).toContain(AXIOM)
    wrapper.unmount()
  })

  test('should show popover when reference is mounted', async () => {
    const wrapper = mount()
    const refNode = '#reference-node'
    expect(wrapper.find(refNode).exists()).toBe(false);

    (wrapper.vm as ComponentPublicInstance<{visible: boolean;}>).visible = true
    await nextTick()

    expect(wrapper.find(refNode).exists()).toBe(true)
    expect(document.body.querySelector('.el-popover').getAttribute('style')).toContain('display: none')
    await wrapper.find(refNode).trigger('click')
    await rAF()
    await nextTick()
    expect(document.body.querySelector('.el-popover').getAttribute('style')).not.toContain('display: none')
    wrapper.unmount()
  })

  test('should render correctly with tabindex', async () => {
    const tabindex = ref(1)

    const Comp = {
      setup() {
        return () => {
          return h(Fragment, null, [
            h(Popover, { title: 'title', content: AXIOM, ref: 'popover', tabindex: tabindex.value }),
            withDirectives(h('div', { ref: 'trigger' }, AXIOM), [[PopoverDirective, 'popover']]),
          ])
        }
      },
    }

    const wrapper = makeMount(Comp, {})()
    const triggerDom = wrapper.vm.$refs.trigger
    expect((triggerDom as HTMLElement).getAttribute('tabindex')).toEqual('1')

    tabindex.value = 2

    await nextTick()
    expect((triggerDom as HTMLElement).getAttribute('tabindex')).toEqual('2')

    wrapper.unmount()
  })
})
