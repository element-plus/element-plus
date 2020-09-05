import { h } from 'vue'
import { mount } from '@vue/test-utils'
import ElPopconfirm from '../src/index.vue'

const AXIOM = 'Rem is the best girl'
const _mount = (props: any = {}, AXIOM: string) => mount(ElPopconfirm, {
  slots: {
    reference: () => h('div', AXIOM),
  },
  props,
})

describe('Popconfirm.vue', () => {

  test('render test', async () => {
    const wrapper = _mount(undefined, AXIOM)
    expect(wrapper.html()).toContain(AXIOM)
    const trigger = wrapper.find('.click-trigger')
    expect(wrapper.vm.visible).toBe(false)
    await trigger.trigger('click')
    expect(wrapper.vm.visible).toBe(true)
  })
})
