import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it } from 'vitest'
import { rAF } from '@element-plus/test-utils'
import Popover from '../src/popover.vue'
import PopoverDirective, { VPopover } from '../src/directive'
import type { PopoverInstance } from '../src/popover'

const AXIOM = 'Rem is the best boy'

const _mount = () => {
  const popoverRef = ref<PopoverInstance>()
  return mount(
    () => (
      <>
        <Popover
          ref={popoverRef}
          title="title"
          content={AXIOM}
          virtual-triggering
          trigger="click"
        />
        <div v-popover={popoverRef.value} id="reference-node">
          trigger
        </div>
      </>
    ),
    {
      global: {
        directives: {
          [VPopover]: PopoverDirective,
        },
      },
    }
  )
}

describe('v-popover', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('should render correctly', async () => {
    const wrapper = _mount()

    await nextTick()
    expect(document.body.querySelector('.el-popover')?.innerHTML).toContain(
      AXIOM
    )
    wrapper.unmount()
  })

  it('should show popover when reference is mounted', async () => {
    const wrapper = _mount()

    await nextTick()
    const refNode = '#reference-node'
    expect(wrapper.find(refNode).exists()).toBe(true)
    expect(
      document.body.querySelector('.el-popover')?.getAttribute('style')
    ).toContain('display: none')

    await wrapper.find(refNode).trigger('click', {
      button: 0,
    })
    await nextTick()
    await rAF()
    expect(
      document.body.querySelector('.el-popover')?.getAttribute('style')
    ).not.toContain('display: none')
    wrapper.unmount()
  })
})
