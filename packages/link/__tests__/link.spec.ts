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

  test('it should handle click event when href were given and is not disabled', async () => {
    const href = 'https://target.com'
    const wrapper = mount(Link, {
      slots: {
        default: AXIOM,
      },
      props: {
        href,
      },
    })

    await wrapper.find('.el-link').trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  test('it should disable click when it\'s disabled', async () => {
    const href = 'https://target.com'
    const wrapper = mount(Link, {
      slots: {
        default: AXIOM,
      },
      props: {
        href,
        disabled: true,
      },
    })

    await wrapper.find('.el-link').trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })



})
