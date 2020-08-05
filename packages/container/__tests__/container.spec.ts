import { mount } from '@vue/test-utils'
import Container from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Container.vue', () => {
  test('render test', () => {
    const wrapper = mount(Container, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
