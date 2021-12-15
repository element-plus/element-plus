import { ref, nextTick } from 'vue'
import { shallowMount } from '@vue/test-utils'
import { debugWarn } from '@element-plus/utils/error'
import ElContent from '../src/content.vue'
import { POPPER_INJECTION_KEY } from '../src/tokens'

jest.mock('@element-plus/utils/error', () => ({
  debugWarn: jest.fn(),
}))

const AXIOM = 'rem is the best girl'
const popperInjection = {
  triggerRef: ref(null),
  popperInstanceRef: ref(null),
  contentRef: ref(null),
}

const mountContent = (props = {}) =>
  shallowMount(ElContent, {
    props,
    slots: {
      default: () => AXIOM,
    },
    global: {
      provide: {
        [POPPER_INJECTION_KEY as symbol]: popperInjection,
      },
    },
  })

describe('<ElPopperContent />', () => {
  describe('with triggerRef provided', () => {
    const triggerKls = 'el-popper__trigger'
    let wrapper: ReturnType<typeof mountContent>
    beforeEach(() => {
      const trigger = document.createElement('div')
      trigger.className = triggerKls

      popperInjection.triggerRef.value = trigger
    })

    afterEach(() => {
      popperInjection.triggerRef.value = null
      ;(debugWarn as jest.MockedFunction<typeof debugWarn>).mockClear()
      wrapper?.unmount()
    })

    it('should mount the component correctly and set popperInstance correctly', async () => {
      wrapper = mountContent()
      await nextTick()

      expect(popperInjection.triggerRef).toBeDefined()
      expect(wrapper.html()).toContain(AXIOM)
      expect(popperInjection.popperInstanceRef.value).toBeDefined()
      expect(wrapper.classes()).toEqual(['el-popper', 'is-dark'])
      expect(wrapper.vm.contentStyle[0]).toHaveProperty('zIndex')
      expect(wrapper.vm.contentStyle[1]).toBeUndefined()
    })

    it('should be able to be pure and themed', async () => {
      wrapper = mountContent()
      await nextTick()

      await wrapper.setProps({
        pure: true,
        effect: 'custom',
      })

      expect(wrapper.classes()).toEqual(['el-popper', 'is-pure', 'is-custom'])
    })

    it('should be able to set customized styles', async () => {
      wrapper = mountContent()
      await nextTick()

      const style = {
        position: 'absolute',
      }
      await wrapper.setProps({
        popperStyle: style,
      })

      expect(wrapper.vm.contentStyle[1]).toEqual(style)
    })

    it('should be able to emit events', async () => {
      wrapper = mountContent()
      await nextTick()

      expect(wrapper.emitted()).not.toHaveProperty('mouseenter')
      expect(wrapper.emitted()).not.toHaveProperty('mouseleave')

      await wrapper.trigger('mouseenter')
      expect(wrapper.emitted()).toHaveProperty('mouseenter')

      await wrapper.trigger('mouseleave')
      expect(wrapper.emitted()).toHaveProperty('mouseleave')
    })

    describe('instantiate popper instance', () => {
      it('should warn when there are no reference node for popper', async () => {
        popperInjection.triggerRef.value = null

        wrapper = mountContent()
        await nextTick()
        expect(debugWarn).toHaveBeenCalledWith(
          'ElPopper',
          'Popper content needs a HTMLElement or virtual trigger to work'
        )
      })

      it('should be able to update the current instance', async () => {
        wrapper = mountContent()
        await nextTick()

        jest
          .spyOn(popperInjection.triggerRef.value, 'getBoundingClientRect')
          .mockImplementation(() => ({
            bottom: 1,
            height: 0,
            left: 0,
            right: 0,
            top: 0,
            width: 0,
          }))

        wrapper.vm.$forceUpdate()
      })

      it('should be able to update the reference node', async () => {
        wrapper = mountContent()
        await nextTick()

        const oldInstance = wrapper.vm.popperInstanceRef

        const newRef = document.createElement('div')
        newRef.classList.add('new-ref')

        popperInjection.triggerRef.value = newRef
        await nextTick()

        expect(wrapper.vm.popperInstanceRef).not.toStrictEqual(oldInstance)

        popperInjection.triggerRef.value = null

        await nextTick()

        expect(wrapper.vm.popperInstanceRef).toBe(null)
      })
    })
  })
})
