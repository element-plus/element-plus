import { mount } from '@vue/test-utils'
import Alert from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Alert.vue', () => {
  test('render test', () => {
    const wrapper = mount(Alert, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
