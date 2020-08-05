import { mount } from '@vue/test-utils'
import Link from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Link.vue', () => {
  test('render test', () => {
    const wrapper = mount(Link, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })

  test('it should handle click event when link is not disabled', async () => {
    const wrapper = mount(Link, {
      slots: {
        default: AXIOM,
      },
    })

    await wrapper.find('.el-link').trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  test('it should disable click when link is disabled', async () => {
    const wrapper = mount(Link, {
      slots: {
        default: AXIOM,
      },
      props: {
        disabled: true,
      },
    })

    await wrapper.find('.el-link').trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })


  test('icon slots', () => {
    const linkName = 'test link'
    const wrapper = mount(Link, {
      slots: {
        default: linkName,
        icon: AXIOM,
      },
    })
    expect(wrapper.text()).toContain(linkName)
    expect(wrapper.text()).toContain(AXIOM)
  })

})
