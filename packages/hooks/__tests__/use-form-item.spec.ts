import { h, provide } from 'vue'
import { NOOP } from '@vue/shared'
import { mount } from '@vue/test-utils'
import { ElButton } from '@element-plus/components'
import {
  elFormKey,
  elFormItemKey,
  elButtonGroupKey,
} from '@element-plus/tokens'

import type {
  ElFormContext,
  ElFormItemContext,
  ElButtonGroupContext,
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
    buttonSize: string
    buttonDisabled: boolean
  }
}

describe('use-form-item', () => {
  it('should return local value', () => {
    const wrapper = mountComponent()
    expect(getButtonVm(wrapper).buttonSize).toBe('')
  })

  it('should return props.size instead of injected.size', () => {
    const propSize = 'mini'
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

    expect(getButtonVm(wrapper).buttonSize).toBe(propSize)
  })

  it('should return fallback.size instead inject.size', () => {
    const fallbackSize = 'mini'
    const wrapper = mountComponent(() => {
      provide(elButtonGroupKey, {
        size: fallbackSize,
      } as ElButtonGroupContext)

      provide(elFormItemKey, {
        size: 'large',
      } as ElFormItemContext)
    })

    expect(getButtonVm(wrapper).buttonSize).toBe(fallbackSize)
  })

  it('should return formItem.size instead form.size', () => {
    const itemSize = 'mini'
    const wrapper = mountComponent(() => {
      provide(elFormItemKey, {
        size: itemSize,
      } as ElButtonGroupContext)

      provide(elFormKey, {
        size: 'large',
      } as ElFormContext)
    })

    expect(getButtonVm(wrapper).buttonSize).toBe(itemSize)
  })

  // update this once useGlobalConfig is fixed
  // it('should return global config when none is provided', () => {
  //   const size = 'mini'
  //   const wrapper = mountComponent(undefined, {
  //     global: {
  //       globalProperties: {
  //         $ELEMENT: {
  //           size,
  //         },
  //       },
  //     },
  //   })
  //   console.log(wrapper.vm.$data)

  //   expect(getButtonVm(wrapper).buttonSize).toBe(size)
  // })

  // Add test case for config provider
})
