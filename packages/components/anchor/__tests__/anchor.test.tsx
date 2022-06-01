import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Anchor from '../src/anchor.vue'

const AXIOM = 'Rem is the best girl'

describe('Anchor.vue', () => {
  it('render test', () => {
    const wrapper = mount(() => <Anchor>{AXIOM}</Anchor>)
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
