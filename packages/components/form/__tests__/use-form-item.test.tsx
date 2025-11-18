import { defineComponent, provide } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { NOOP } from '@element-plus/utils'
import {
  ElButton,
  buttonGroupContextKey,
} from '@element-plus/components/button'
import { formContextKey, formItemContextKey } from '../src/constants'

import type { FormContext, FormItemContext } from '../src/types'

const AXIOM = 'Rem is the best girl'

const mountComponent = (setup = NOOP, options = {}) =>
  mount(
    defineComponent({
      setup,
      render() {
        return <ElButton {...this.$attrs}>{AXIOM}</ElButton>
      },
    }),
    options
  )

describe('use-form-item', () => {
  it('should return local value', () => {
    const wrapper = mountComponent()
    expect(wrapper.find('.el-button').exists()).toBe(true)
  })

  it('should return props.size instead of injected.size', () => {
    const propSize = 'small'
    const wrapper = mountComponent(
      () => {
        provide(formItemContextKey, {
          size: 'large',
        } as FormItemContext)
      },
      {
        props: { size: propSize },
      }
    )

    expect(wrapper.find(`.el-button--${propSize}`).exists()).toBe(true)
  })

  it('should return fallback.size instead inject.size', () => {
    const fallbackSize = 'small'
    const wrapper = mountComponent(() => {
      provide(buttonGroupContextKey, {
        size: fallbackSize,
      })

      provide(formItemContextKey, {
        size: 'large',
      } as FormItemContext)
    })

    expect(wrapper.find(`.el-button--${fallbackSize}`).exists()).toBe(true)
  })

  it('should return formItem.size instead form.size', () => {
    const itemSize = 'small'
    const wrapper = mountComponent(() => {
      provide(formItemContextKey, {
        size: itemSize,
      } as FormItemContext)

      provide(formContextKey, {
        size: 'large',
      } as FormContext)
    })

    expect(wrapper.find(`.el-button--${itemSize}`).exists()).toBe(true)
  })

  it('should inherit form.disabled by default', () => {
    const wrapper = mountComponent(() => {
      provide(formContextKey, {
        disabled: true,
      } as FormContext)
    })

    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
  })

  it('should bypass inherited disabled when inheritDisabled is false', () => {
    const wrapper = mountComponent(
      () => {
        provide(formContextKey, {
          disabled: true,
        } as FormContext)
      },
      {
        props: {
          inheritDisabled: false,
        },
      }
    )

    expect(wrapper.find('button').attributes('disabled')).toBeUndefined()
  })
})
