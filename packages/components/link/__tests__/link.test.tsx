import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Link from '../src/link.vue'

const AXIOM = 'Rem is the best girl'

describe('Link.vue', () => {
  it('render test', () => {
    const wrapper = mount(() => <Link>{AXIOM}</Link>)

    expect(wrapper.text()).toEqual(AXIOM)
  })

  it('it should handle click event when link is not disabled', async () => {
    const wrapper = mount(() => <Link>{AXIOM}</Link>)

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it('it should disable click when link is disabled', async () => {
    const wrapper = mount(() => <Link disabled>{AXIOM}</Link>)

    expect(wrapper.classes()).toContain('is-disabled')
    expect(wrapper.attributes('href')).toBeUndefined()
  })

  it('icon slots', () => {
    const linkName = 'test link'

    const wrapper = mount(() => (
      <Link
        v-slots={{
          default: () => linkName,
          icon: () => AXIOM,
        }}
      />
    ))
    expect(wrapper.text()).toContain(linkName)
    expect(wrapper.text()).toContain(AXIOM)
  })

  describe('underline prop', () => {
    // will be removed in 3.0.0.
    it('it should show underline on hover when true', async () => {
      const wrapper = mount(() => <Link underline>{AXIOM}</Link>)

      expect(wrapper.classes()).not.toContain('is-underline')
      expect(wrapper.classes()).toContain('is-hover-underline')
    })

    // will be removed in 3.0.0.
    it('it should not show any underline when false', async () => {
      const wrapper = mount(() => <Link underline={false}>{AXIOM}</Link>)

      expect(wrapper.classes()).not.toContain('is-underline')
      expect(wrapper.classes()).not.toContain('is-hover-underline')
    })

    it('it should always show underline when set to "always"', async () => {
      const wrapper = mount(() => <Link underline="always">{AXIOM}</Link>)

      expect(wrapper.classes()).toContain('is-underline')
      expect(wrapper.classes()).not.toContain('is-hover-underline')
    })

    it('it should show underline on hover when set to "hover"', async () => {
      const wrapper = mount(() => <Link underline="hover">{AXIOM}</Link>)

      expect(wrapper.classes()).not.toContain('is-underline')
      expect(wrapper.classes()).toContain('is-hover-underline')
    })

    it('should never show underline when set to "never"', async () => {
      const wrapper = mount(() => <Link underline="never">{AXIOM}</Link>)

      expect(wrapper.classes()).not.toContain('is-underline')
      expect(wrapper.classes()).not.toContain('is-hover-underline')
    })
  })
})
