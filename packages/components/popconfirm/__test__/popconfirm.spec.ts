import { h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { rAF } from '@element-plus/test-utils/tick'
import ElPopconfirm from '../src/popconfirm.vue'

const AXIOM = 'rem is the best girl'
const selector = '.el-popper'
const _mount = (props: any = {}) =>
  mount(ElPopconfirm, {
    props: {
      ...props,
    },
    slots: {
      reference: () =>
        h(
          'div',
          {
            class: 'reference',
          },
          [AXIOM]
        ),
    },
    attachTo: 'body',
  })

describe('Popconfirm.vue', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('render test', async () => {
    const wrapper = _mount()
    await nextTick()
    const trigger = wrapper.find('.reference')

    expect(document.querySelector(selector)!.getAttribute('style')).toContain(
      'display: none'
    )

    await trigger.trigger('mousedown', {
      button: 0,
    })

    await nextTick()
    await rAF()

    expect(
      document.querySelector(selector)!.getAttribute('style')
    ).not.toContain('display: none')
  })
})
