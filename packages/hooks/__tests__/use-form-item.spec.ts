import { h, provide } from 'vue'
import { NOOP } from '@vue/shared'
import { mount } from '@vue/test-utils'
import { ElButton } from '@element-plus/components'
import {
  elFormKey,
  elFormItemKey,
  buttonGroupContextKey,
} from '@element-plus/tokens'

import type {
  ElFormContext,
  ElFormItemContext,
  ButtonGroupContext,
} from '@element-plus/tokens'

const AXIOM = 'Rem is the best girl'

const Component = {
  render() {
    return h(ElButton, this.$attrs, {
      default: () => [AXIOM],
    })
  },
}

const mountComponent = (setup = NOOP, options = {}) => {
  return mount(
    {
      ...Component,
      setup,
    },
    options
  )
}

const getButtonVm = (wrapper: ReturnType<typeof mountComponent>) => {
  return wrapper.findComponent(ElButton).vm as any as {
    _size: string
    _sisabled: boolean
  }
}

describe('use-form-item', () => {
  it('should return local value', () => {
    const wrapper = mountComponent()
    expect(getButtonVm(wrapper)._size).toBe('default')
  })

  it('should return props.size instead of injected.size', () => {
    const propSize = 'small'
    const wrapper = mountComponent(
      () => {
        provide(elFormItemKey, {
          size: 'large',
        } as ElFormItemContext)
      },
      {
        props: {
          size: propSize,
        },
      }
    )

    expect(getButtonVm(wrapper)._size).toBe(propSize)
  })

  it('should return fallback.size instead inject.size', () => {
    const fallbackSize = 'small'
    const wrapper = mountComponent(() => {
      provide(buttonGroupContextKey, {
        size: fallbackSize,
      } as ButtonGroupContext)

      provide(elFormItemKey, {
        size: 'large',
      } as ElFormItemContext)
    })

    expect(getButtonVm(wrapper)._size).toBe(fallbackSize)
  })

  it('should return formItem.size instead form.size', () => {
    const itemSize = 'small'
    const wrapper = mountComponent(() => {
      provide(elFormItemKey, {
        size: itemSize,
      } as ElFormItemContext)

      provide(elFormKey, {
        size: 'large',
      } as ElFormContext)
    })

    expect(getButtonVm(wrapper)._size).toBe(itemSize)
  })
})
