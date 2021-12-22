import { h } from 'vue'
import { mount } from '@vue/test-utils'
import ElPopconfirm from '../src/popconfirm.vue'

const selector = '.el-popper'
const _mount = (props: any = {}) =>
  mount(ElPopconfirm, {
    props,
    slots: {
      reference: () =>
        h('div', {
          class: 'reference',
        }),
    },
    attachTo: 'body',
  })

describe('Popconfirm.vue', () => {
  test('render test', async () => {
    const wrapper = _mount()
    const trigger = wrapper.find('.reference')

    expect(document.querySelector(selector).getAttribute('style')).toContain(
      'display: none'
    )

    await trigger.trigger('click')

    expect(
      document.querySelector(selector).getAttribute('style')
    ).not.toContain('display: none')
  })
})
