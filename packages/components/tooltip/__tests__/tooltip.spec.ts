import { h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { debugWarn } from '@element-plus/utils/error'
import { rAF } from '@element-plus/test-utils/tick'
import { ElPopperTrigger } from '@element-plus/components/popper'
import Tooltip from '../src/tooltip.vue'

import type { VNode } from 'vue'

jest.useFakeTimers()

jest.mock('@element-plus/utils/error', () => ({
  debugWarn: jest.fn(),
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
    ;(debugWarn as jest.Mock).mockClear()
  })

  describe('rendering', () => {
    it('should render correctly', async () => {
      wrapper = createComponent()
      await nextTick()
      expect(findTrigger().text()).toContain(AXIOM)
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
      await triggerEl.trigger('mouseenter')
      jest.runAllTimers()
      await rAF()

      expect(wrapper.emitted()).toHaveProperty('show')

      await triggerEl.trigger('mouseleave') // dispatches a timer with 200ms timeout.
      jest.runAllTimers()
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
      await triggerEl.trigger('mousedown')
      jest.runAllTimers()
      await rAF()
      expect(wrapper.emitted()).toHaveProperty('show')

      await triggerEl.trigger('mousedown')
      jest.runAllTimers()
      await rAF()
      expect(wrapper.emitted()).toHaveProperty('hide')
    })
  })
})
