import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Icon from '../src/icon.vue'

describe('Icon.vue', () => {
  test('render', () => {
    const wrapper = mount(() => <Icon color="#000000" size={18} />)
    expect(wrapper.element.getAttribute('style')).toContain(`--color: #000000`)
    expect(wrapper.element.getAttribute('style')).toContain(`font-size: 18px`)
  })
})
