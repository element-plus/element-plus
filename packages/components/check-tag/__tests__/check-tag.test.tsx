import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import CheckTag from '../src/check-tag.vue'

const AXIOM = 'Rem is the best girl'

describe('CheckTag.vue', () => {
  test('render test', async () => {
    const wrapper = mount(CheckTag, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)

    expect(wrapper.classes()).toContain('el-check-tag')
    expect(wrapper.classes()).not.toContain('is-disabled')
  })

  test('functionality', async () => {
    const wrapper = mount({
      data: () => ({ checked: false }),
      render() {
        return (
          <CheckTag
            onChange={() => (this.checked = !this.checked)}
            checked={this.checked}
          >
            {AXIOM}
          </CheckTag>
        )
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)

    await wrapper.find('.el-check-tag').trigger('click')

    expect(wrapper.vm.checked).toBe(true)

    await wrapper.find('.el-check-tag').trigger('click')

    expect(wrapper.vm.checked).toBe(false)
  })

  test('disabled', async () => {
    const wrapper = mount({
      data: () => ({ checked: false }),
      render() {
        return (
          <CheckTag
            disabled={true}
            onChange={() => (this.checked = !this.checked)}
            checked={this.checked}
          >
            {AXIOM}
          </CheckTag>
        )
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
    expect(wrapper.classes()).toContain('is-disabled')

    await wrapper.find('.el-check-tag').trigger('click')

    expect(wrapper.vm.checked).toBe(false)
  })
})
