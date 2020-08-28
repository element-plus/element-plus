import { mount } from '@vue/test-utils'
import MessageBox from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('MessageBox.vue', () => {
  test('render test', () => {
    const wrapper = mount(MessageBox, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
