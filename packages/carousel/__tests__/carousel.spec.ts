import { mount } from '@vue/test-utils'
import Carousel from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Carousel.vue', () => {
  test('render test', () => {
    const wrapper = mount(Carousel, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
