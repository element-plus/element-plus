import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Watermark from '../src/watermark.vue'

const AXIOM = 'Rem is the best girl'

describe('Watermark.vue', () => {
  it('create', () => {
    const wrapper = mount(() => (
      <Watermark class="watermark">{AXIOM}</Watermark>
    ))

    expect(wrapper.classes()).toContain('watermark')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('slots', () => {
    const wrapper = mount(() => <Watermark>{AXIOM}</Watermark>)

    expect(wrapper.text()).toContain(AXIOM)
  })
})
