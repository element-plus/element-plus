import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Ellipsis from '../src/ellipsis.vue'

const AXIOM = 'Rem is the best girl'

describe('Ellipsis.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Ellipsis>{AXIOM}</Ellipsis>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
