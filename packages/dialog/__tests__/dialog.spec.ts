import { mount } from '@vue/test-utils'
import Dialog from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Dialog.vue', () => {
  test('render test', () => {
    const wrapper = mount(Dialog, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
