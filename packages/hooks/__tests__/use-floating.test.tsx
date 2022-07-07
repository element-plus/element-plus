// @ts-nocheck
import { computed, nextTick, reactive, ref, watch } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { rAF } from '@element-plus/test-utils/tick'
import { arrowMiddleware, useFloating } from '../use-floating'

import type { CSSProperties } from 'vue'
import type { Middleware, Placement, Strategy } from '@floating-ui/dom'

describe('useFloating', () => {
  const createComponent = (arrow = false) => {
    return mount({
      setup() {
        const placement = ref<Placement>('bottom')
        const strategy = ref<Strategy>('fixed')
        const arrowRef = ref<HTMLElement>()
        const middleware = ref<Array<Middleware>>(
          arrow
            ? [
                arrowMiddleware({
                  arrowRef,
                }),
              ]
            : []
        )

        const { referenceRef, contentRef, x, y, update, middlewareData } =
          useFloating({
            placement,
            strategy,
            middleware,
          })

        const contentStyle = computed<CSSProperties>(() => {
          return reactive({
            position: strategy,
            x,
            y,
          })
        })

        watch(arrowRef, () => update())

        return {
          arrowRef,
          contentRef,
          contentStyle,
          referenceRef,
          middlewareData,
        }
      },
      render() {
        const { contentStyle } = this
        return (
          <div>
            <button ref="referenceRef">My button</button>
            <div ref="contentRef" style={contentStyle}>
              My tooltip
              <div ref="arrowRef" />
            </div>
          </div>
        )
      },
    })
  }

  let wrapper: ReturnType<typeof createComponent>

  it('should render without arrow correctly', async () => {
    wrapper = createComponent()
    await rAF()
    await nextTick()

    expect(wrapper.vm.referenceRef).toBeInstanceOf(Element)
    expect(wrapper.vm.contentRef).toBeInstanceOf(Element)
    expect(wrapper.vm.middlewareData.arrow).toBeUndefined()
  })

  it('should render with arrow correctly', async () => {
    wrapper = createComponent(true)
    await rAF()
    await nextTick()

    expect(wrapper.vm.referenceRef).toBeInstanceOf(Element)
    expect(wrapper.vm.contentRef).toBeInstanceOf(Element)
    expect(wrapper.vm.middlewareData.arrow).toBeDefined()
  })
})
