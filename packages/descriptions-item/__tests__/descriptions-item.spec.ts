import { mount } from '@vue/test-utils'
import DescriptionsItem from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('DescriptionsItem.vue', () => {
  test('render test', () => {
    const wrapper = mount(DescriptionsItem, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
