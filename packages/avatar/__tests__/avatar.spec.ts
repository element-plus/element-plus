import { mount } from '@vue/test-utils'
import Avatar from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Avatar.vue', () => {
  test('render test', () => {
    const wrapper = mount(Avatar, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
