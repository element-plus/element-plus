import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Link from '../src/link.vue'

const AXIOM = 'Rem is the best girl'

describe('Link.vue', () => {
  it('render test', () => {
    const wrapper = mount(Link, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })

  it('it should handle click event when link is not disabled', async () => {
    const wrapper = mount(Link, {
      slots: {
        default: AXIOM,
      },
    })

    await wrapper.find('.el-link').trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it('it should disable click when link is disabled', async () => {
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

  it('icon slots', () => {
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
