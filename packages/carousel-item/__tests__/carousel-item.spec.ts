import { mount } from '@vue/test-utils'
import CarouselItem from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('CarouselItem.vue', () => {
  test('render test', () => {
    const wrapper = mount(CarouselItem, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
