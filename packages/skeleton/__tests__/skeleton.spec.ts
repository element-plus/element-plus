import { mount } from '@vue/test-utils'
import Skeleton from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Skeleton.vue', () => {
  test('render test', () => {
    const wrapper = mount(Skeleton, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
