import { mount } from '@vue/test-utils'
import Form from '../src/form.vue'

const AXIOM = 'Rem is the best girl'

describe('Form.vue', () => {
  test('render test', () => {
    const wrapper = mount(Form, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
