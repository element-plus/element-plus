import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { debugWarn } from '@element-plus/utils'
import { rAF } from '@element-plus/test-utils'
import { ElPopperTrigger } from '@element-plus/components/src/popper'
import Tooltip from '../src/tooltip.vue'

import type { VNode } from 'vue'

vi.mock('@element-plus/utils', async () => ({
  ...(await vi.importActual<typeof import('@element-plus/utils')>(
    '@element-plus/utils'
  )),
  debugWarn: vi.fn(),
}))

const AXIOM = 'Rem is the best girl'

describe('<ElTooltip />', () => {
  const createComponent = (props: any = {}, content: string | VNode = '') =>
    mount(Tooltip, {
      slots: {
        default: () => AXIOM,
        content: () => content,
      },
      props,
      attachTo: document.body,
    })

  let wrapper: ReturnType<typeof createComponent>
  const findTrigger = () => wrapper.findComponent(ElPopperTrigger)

  afterEach(() => {
    wrapper?.unmount()
    document.body.innerHTML = ''
  })

  describe('rendering', () => {
    it('should render correctly', async () => {
      wrapper = createComponent()
      await nextTick()
      expect(findTrigger().text()).toContain(AXIOM)
    })
    it('content should teleport according appendTo', async () => {
      const el = document.createElement('div')
      el.id = 'test'
      document.body.appendChild(el)
      wrapper = createComponent({ appendTo: '#test' }, 'test appendTo props')
      await nextTick()
      const trigger$ = findTrigger()
      const triggerEl = trigger$.find('.el-tooltip__trigger')
      await triggerEl.trigger('mouseenter')
      expect(document.querySelector('#test')?.innerHTML).toContain(
        'test appendTo props'
      )
    })
  })

  describe('deprecating API', () => {
    it('should warn about API that will be deprecated', async () => {
      expect(debugWarn).toHaveBeenCalledTimes(0)

      wrapper = createComponent({
        openDelay: 200,
        visibleArrow: true,
      })

      await nextTick()
      expect(debugWarn).toHaveBeenCalledTimes(2)
    })
  })

  describe('functionality', () => {
    const content = 'Test content'

    it('should be able to update popper content manually', async () => {
      wrapper = createComponent()
      await nextTick()

      const { vm } = wrapper
      expect(vm.updatePopper).toBeDefined()
      vm.updatePopper()
    })

    it('should be able to open & close tooltip content', async () => {
      wrapper = createComponent({}, content)
      await nextTick()

      const trigger$ = findTrigger()
      const triggerEl = trigger$.find('.el-tooltip__trigger')

      vi.useFakeTimers()
      await triggerEl.trigger('mouseenter')
      vi.runAllTimers()
      vi.useRealTimers()
      await rAF()

      expect(wrapper.emitted()).toHaveProperty('show')

      vi.useFakeTimers()
      await triggerEl.trigger('mouseleave') // dispatches a timer with 200ms timeout.
      vi.runAllTimers()
      vi.useRealTimers()
      await rAF()

      expect(wrapper.emitted()).toHaveProperty('hide')
    })

    it('should be able to toggle visibility of tooltip content', async () => {
      wrapper = createComponent(
        {
          trigger: 'click',
        },
        content
      )
      await nextTick()

      const trigger$ = findTrigger()
      const triggerEl = trigger$.find('.el-tooltip__trigger')

      vi.useFakeTimers()
      await triggerEl.trigger('click')
      vi.runAllTimers()
      vi.useRealTimers()
      await rAF()
      expect(wrapper.emitted()).toHaveProperty('show')

      vi.useFakeTimers()
      await triggerEl.trigger('click')
      vi.runAllTimers()
      vi.useRealTimers()
      await rAF()
      expect(wrapper.emitted()).toHaveProperty('hide')
    })
  })
})
