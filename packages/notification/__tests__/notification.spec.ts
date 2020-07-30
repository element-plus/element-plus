import { mount } from '@vue/test-utils'
import Notification from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Notification.vue', () => {
  test('render test', () => {
    const wrapper = mount(Notification, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
