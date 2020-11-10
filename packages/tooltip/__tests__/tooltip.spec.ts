import { h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import Tooltip from '../src/index'

import type { VNode } from 'vue'

const AXIOM = 'Rem is the best girl'

const _mount = (props: any = {}, content: string | VNode = '') => mount(Tooltip, {
  slots: {
    default: () => h('div', AXIOM),
    content: () => content,
  },
  props,
  attachTo: 'body',
})

const selector = '.el-popper'
describe('Tooltip.vue', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })
  test('render test', () => {
    const wrapper = _mount(undefined, AXIOM)
    expect(wrapper.html()).toContain(AXIOM)
  })

  test('manual mode', async () => {
    const wrapper = _mount({
      manual: true,
      modelValue: false,
    }, AXIOM)
    // since VTU does not provide any functionality for testing teleported components
    expect(document.querySelector(selector).getAttribute('style')).toContain('display: none')

    await wrapper.setProps({
      modelValue: true,
    })

    await nextTick()
    expect(document.querySelector(selector).getAttribute('style')).not.toContain('display: none')
  })
})
