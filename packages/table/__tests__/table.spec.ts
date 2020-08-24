import { mount } from '@vue/test-utils'
import Table from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Table.vue', () => {
  test('render test', () => {
    const wrapper = mount(Table, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
