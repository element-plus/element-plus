import { shallowMount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import InputTextarea from '../src/textarea.vue'

describe('<el-textarea />', () => {
  let wrapper: ReturnType<typeof shallowMount>

  const createWrapper = (attrs = {}, slots = {}) => {
    wrapper = shallowMount(InputTextarea, {
      attrs,
      slots,
    })
  }

  const findTextarea = () => wrapper.find('textarea')

  afterEach(() => {
    wrapper.unmount()
  })

  it('should inherit attrs passed down from the parent', async () => {
    const onClick = vi.fn()
    const attrs = {
      maxlength: 10,
      onClick,
    }
    createWrapper(attrs)
    const textareaEl = findTextarea()

    expect(textareaEl.attributes('maxlength')).toBe(attrs.maxlength.toString())

    await textareaEl.trigger('click')

    expect(onClick).toHaveBeenCalled()
  })

  it('should render a slot content', () => {
    const AXIOM = 'Rem is the best girl'
    createWrapper(
      {},
      {
        default: () => AXIOM,
      }
    )

    expect(wrapper.text()).toBe(AXIOM)
  })
})
