import {mount} from '@vue/test-utils'
import Badge from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Badge.vue', () => {
  test('render test', () => {
    const instance = mount(Badge, {
      slots: {
        default: AXIOM,
      },
    })
    expect(instance.text()).toEqual(AXIOM)
  })
})
