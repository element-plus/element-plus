import { mount } from '@vue/test-utils'
import Message from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Message.vue', () => {
  test('render test', () => {
    const wrapper = mount(Message, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
