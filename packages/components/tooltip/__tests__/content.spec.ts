import { nextTick, ref } from 'vue'
import ElTeleport from '@element-plus/components/teleport'
import { shallowMount } from '@vue/test-utils'
import ElToolTipContent from '../src/content.vue'
import { TOOLTIP_INJECTION_KEY } from '../src/tokens'

const AXIOM = 'rem is the best girl'

describe('<ElTooltipContent />', () => {
  const onOpen = jest.fn()
  const onClose = jest.fn()
  const onToggle = jest.fn()
  const onShow = jest.fn()
  const onHide = jest.fn()
  const id = ref('test_id')
  const open = ref(false)
  const controlled = ref(false)
  const trigger = ref('hover')

  const defaultProvide = {
    [TOOLTIP_INJECTION_KEY as symbol]: {
      controlled,
      id,
      trigger,
      open,
      onOpen,
      onClose,
      onToggle,
      onShow,
      onHide,
    },
  }

  const createComponent = (props = {}, provides = {}) =>
    shallowMount(ElToolTipContent, {
      props,
      global: {
        provide: {
          ...defaultProvide,
          ...provides,
        },
      },
      slots: {
        default: () => [AXIOM],
      },

      attachTo: document.body,
    })

  let wrapper: ReturnType<typeof createComponent>

  afterEach(() => {
    ;[onOpen, onClose, onToggle, onShow, onHide].forEach((fn) => fn.mockClear())
    open.value = false
    controlled.value = false
    wrapper?.unmount()
    document.body.innerHTML = ''
  })

  describe('rendering', () => {
    it('should render nothing initially when not controlled', async () => {
      wrapper = createComponent()
      await nextTick()

      expect(wrapper.text()).toBe('')
    })

    describe('persistent content', () => {
      it('should teleport the content to the body when teleport is not disabled', async () => {
        wrapper = createComponent({
          persistent: true,
        })
        await nextTick()

        const teleportComponent = wrapper.findComponent(ElTeleport)
        expect(teleportComponent.props('disabled')).toBe(false)
      })

      it('should not teleport the content to body when teleport is disabled', async () => {
        wrapper = createComponent({
          persistent: true,
          teleported: false,
        })
        await nextTick()

        const teleportComponent = wrapper.findComponent(ElTeleport)
        expect(teleportComponent.props('disabled')).toBe(true)
        const { vm } = wrapper
        expect(vm.shouldRenderTeleport).toBe(true)
        expect(vm.shouldRenderPopperContent).toBe(true)
        expect(vm.shouldShowPopperContent).toBe(false)
      })

      it('should be able to inherit style', async () => {
        const customStyle = {
          position: 'absolute',
        }

        wrapper = createComponent({
          style: customStyle,
        })
        await nextTick()

        expect(wrapper.vm.contentStyle).toEqual(customStyle)
      })
    })

    describe('displaying content when non-persistent', () => {
      it('should be able to show and hide content when updating the indicator', async () => {
        wrapper = createComponent()
        await nextTick()

        const { vm } = wrapper
        // when non persistent this should always be true so we only assert it once
        expect(vm.shouldShowPopperContent).toBe(true)

        expect(vm.shouldRenderTeleport).toBe(false)
        expect(vm.shouldRenderPopperContent).toBe(false)

        open.value = true

        expect(vm.shouldRenderTeleport).toBe(false)
        expect(vm.shouldRenderPopperContent).toBe(false)
        // for allowing vue to trigger update effects
        await nextTick()
        expect(vm.shouldRenderTeleport).toBe(true)
        expect(vm.shouldRenderPopperContent).toBe(false)
        await nextTick()
        expect(vm.shouldRenderTeleport).toBe(true)
        expect(vm.shouldRenderPopperContent).toBe(true)
        await nextTick()
        expect(onShow).toHaveBeenCalled()
        expect(vm.shouldRenderTeleport).toBe(true)
        expect(vm.shouldRenderPopperContent).toBe(true)

        open.value = false
        expect(vm.shouldRenderTeleport).toBe(true)
        expect(vm.shouldRenderPopperContent).toBe(true)
        await nextTick()
        expect(vm.leaving).toBe(true)
        expect(vm.shouldRenderTeleport).toBe(true)
        expect(vm.shouldRenderPopperContent).toBe(false)
        await nextTick()
        expect(vm.leaving).toBe(true)
        expect(vm.shouldRenderTeleport).toBe(false)
        expect(vm.shouldRenderPopperContent).toBe(false)
        await nextTick()

        /**
         * NOTE for commenting this line
         * Since vm.leaving = false is dispatched by `<transition /> after leave event`
         * In our test transition is stubbed so that we cannot assert on this value for validate it
         * It should be able to set vm.leaving to false because when the transition ends this event
         * will be triggered.
         */

        // expect(vm.leaving).toBe(false)

        expect(vm.shouldRenderTeleport).toBe(false)
        expect(vm.shouldRenderPopperContent).toBe(false)
        expect(onHide).toHaveBeenCalled()
      })

      it('it should be able to interrupt showing', async () => {
        wrapper = createComponent()
        await nextTick()

        const { vm } = wrapper
        expect(vm.shouldRenderTeleport).toBe(false)
        expect(vm.shouldRenderPopperContent).toBe(false)

        open.value = true
        await nextTick()
        expect(vm.shouldRenderTeleport).toBe(true)
        expect(vm.shouldRenderPopperContent).toBe(false)

        await nextTick()
        expect(vm.shouldRenderTeleport).toBe(true)
        expect(vm.shouldRenderPopperContent).toBe(true)
        expect(onShow).not.toHaveBeenCalled()
        open.value = false
        await nextTick()
        expect(onShow).not.toHaveBeenCalled()
        expect(vm.shouldRenderTeleport).toBe(true)
        expect(vm.shouldRenderPopperContent).toBe(true)
        await nextTick()
        expect(vm.shouldRenderTeleport).toBe(false)
        expect(vm.shouldRenderPopperContent).toBe(false)
      })

      it('should be able to interrupt hiding', async () => {
        wrapper = createComponent()
        const { vm } = wrapper
        await nextTick()

        open.value = true
        await nextTick()
        await nextTick()
        await nextTick()
        expect(vm.shouldRenderTeleport).toBe(true)
        expect(vm.shouldRenderPopperContent).toBe(true)
        expect(onShow).toHaveBeenCalled()
        expect(onHide).not.toHaveBeenCalled()

        open.value = false
        await nextTick()
        expect(vm.leaving).toBe(true)
        await nextTick()
        expect(vm.shouldRenderTeleport).toBe(false)
        expect(vm.shouldRenderPopperContent).toBe(false)
        expect(onHide).not.toHaveBeenCalled()

        open.value = true
        await nextTick()
        expect(vm.leaving).toBe(false)
        expect(vm.entering).toBe(true)
      })
    })

    describe('events', () => {
      beforeEach(async () => {
        wrapper = createComponent()
        await nextTick()
        open.value = true
        await nextTick()
        await nextTick()
      })

      it('should be able to enter trigger', async () => {
        const { vm } = wrapper
        expect(vm.shouldShowPopperContent).toBe(true)
        expect(onOpen).not.toHaveBeenCalled()
        const enterEvent = new MouseEvent('mouseenter')
        vm.onContentEnter(enterEvent)
        expect(onOpen).toHaveBeenCalled()
        const leaveEvent = new MouseEvent('mouseleave')
        expect(onClose).not.toHaveBeenCalled()
        vm.onContentLeave(leaveEvent)
        expect(onClose).toHaveBeenCalled()
      })

      it('should not trigger close event when the trigger is not hover', async () => {
        const { vm } = wrapper

        trigger.value = 'click'
        await nextTick()
        const leaveEvent = new MouseEvent('mouseleave')
        expect(onClose).not.toHaveBeenCalled()
        vm.onContentLeave(leaveEvent)
        expect(onClose).not.toHaveBeenCalled()
      })

      it('should be able to stop triggering when controlled', async () => {
        controlled.value = true
        await nextTick()
        const { vm } = wrapper

        expect(vm.shouldShowPopperContent).toBe(true)
        expect(onOpen).not.toHaveBeenCalled()
        const enterEvent = new MouseEvent('mouseenter')
        vm.onContentEnter(enterEvent)
        expect(onOpen).not.toHaveBeenCalled()
        const leaveEvent = new MouseEvent('mouseleave')
        expect(onClose).not.toHaveBeenCalled()
        vm.onContentLeave(leaveEvent)
        expect(onClose).not.toHaveBeenCalled()
      })
    })
  })
})
