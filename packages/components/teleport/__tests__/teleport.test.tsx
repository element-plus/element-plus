import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it } from 'vitest'
import Teleport from '../src/teleport.vue'

const AXIOM = 'rem is the best girl'

describe('ElTeleport', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('should render slot to body', () => {
    const wrapper = mount(() => (
      <Teleport
        to="body"
        v-slots={{
          default: () => AXIOM,
        }}
      />
    ))

    expect(wrapper.text()).toBe('')
    expect(document.body.textContent).toBe(AXIOM)
  })

  it('should render slot correctly', () => {
    const wrapper = mount(() => (
      <Teleport
        to="body"
        disabled
        v-slots={{
          default: () => AXIOM,
        }}
      />
    ))

    expect(wrapper.text()).toBe(AXIOM)
    expect(document.body.textContent).toBe('')
  })
})
