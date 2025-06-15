import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { usePopperContainerId, useZIndex } from '@element-plus/hooks'
import { rAF } from '@element-plus/test-utils/tick'
import { ElPopperTrigger } from '@element-plus/components/popper'
import Popover from '../src/popover.vue'
import type { VueWrapper } from '@vue/test-utils'
import type { PopoverProps } from '../src/popover'

const AXIOM = 'Rem is the best girl'

const _mount = (props?: Partial<PopoverProps>) =>
  mount(
    {
      setup() {
        const slots = {
          default: () => AXIOM,
          reference: () => <button>click me</button>,
        }
        return () => <Popover {...props} v-slots={slots} />
      },
    },
    {
      attachTo: document.body,
    }
  )

describe('Popover.vue', () => {
  let wrapper: VueWrapper<any>
  const findContentComp = () =>
    wrapper.findComponent({
      name: 'ElPopperContent',
    })

  afterEach(() => {
    wrapper?.unmount()
    document.body.innerHTML = ''
  })

  it('render test', () => {
    wrapper = _mount()

    expect(findContentComp().text()).toEqual(AXIOM)
  })

  it('should render with title', () => {
    const title = 'test title'
    wrapper = _mount({ title })

    expect(findContentComp().text()).toContain(title)
  })

  it(`should modify popover's style with width`, async () => {
    wrapper = _mount({ width: 200 })

    const popperContent = findContentComp()
    expect(getComputedStyle(popperContent.element).width).toBe('200px')

    await wrapper.setProps({ width: '100vw' })

    expect(getComputedStyle(popperContent.element).width).toBe('100vw')
  })

  it('the content should be overrode by slots', () => {
    const content = 'test content'
    wrapper = _mount({ content })

    expect(findContentComp().text()).toContain(AXIOM)
  })

  it('should render content when no slots were passed', () => {
    const content = 'test content'
    const virtualRef = document.createElement('button')
    wrapper = mount(() => (
      <Popover
        content={content}
        teleported={false}
        // type checking failed as `virtualRef` is a fallthrough attribute
        // @ts-ignore
        virtualRef={virtualRef}
        virtualTriggering
      />
    ))

    expect(findContentComp().text()).toBe(content)
  })

  it('popper z-index should be dynamical', () => {
    wrapper = _mount()

    const { currentZIndex } = useZIndex()
    expect(
      Number.parseInt(window.getComputedStyle(findContentComp().element).zIndex)
    ).toBeLessThanOrEqual(currentZIndex.value)
  })

  it('defind hide method', async () => {
    wrapper = _mount()
    const vm = wrapper.findComponent(Popover).vm

    expect(vm.hide).toBeDefined()
  })

  it('should be able to emit after-enter and after-leave', async () => {
    const wrapper = _mount({ trigger: 'click' })

    await nextTick()
    const trigger$ = wrapper.findComponent(ElPopperTrigger)
    const triggerEl = trigger$.find('.el-tooltip__trigger')
    vi.useFakeTimers()
    await triggerEl.trigger('click')
    vi.runAllTimers()
    vi.useRealTimers()
    await rAF()
    expect(wrapper.findComponent(Popover).emitted()).toHaveProperty(
      'after-enter'
    )

    vi.useFakeTimers()
    await triggerEl.trigger('click')
    vi.runAllTimers()
    vi.useRealTimers()
    await rAF()
    expect(wrapper.findComponent(Popover).emitted()).toHaveProperty(
      'after-leave'
    )
  })

  it('test visible controlled mode trigger invalid', async () => {
    const wrapper = _mount({ visible: false, trigger: 'click' })
    await nextTick()
    const trigger$ = wrapper.findComponent(ElPopperTrigger)
    const triggerEl = trigger$.find('.el-tooltip__trigger')
    const popoverDom: HTMLElement = document.querySelector('.el-popper')!

    vi.useFakeTimers()
    await triggerEl.trigger('click')
    vi.runAllTimers()
    vi.useRealTimers()
    await rAF()
    expect(popoverDom.style.display).toBe('none')

    vi.useFakeTimers()
    await wrapper.setProps({ visible: true })
    vi.runAllTimers()
    vi.useRealTimers()
    await rAF()
    expect(popoverDom.style.display).not.toBe('none')

    vi.useFakeTimers()
    await wrapper.setProps({ visible: false })
    vi.runAllTimers()
    vi.useRealTimers()
    await rAF()
    expect(popoverDom.style.display).toBe('none')
  })

  it('test v-model:visible', async () => {
    const wrapper = mount(
      {
        setup() {
          const visible = ref(false)
          return () => (
            <Popover v-model={[visible.value, 'visible']} trigger="click">
              {{
                default: () => AXIOM,
                reference: () => <button>click me</button>,
              }}
            </Popover>
          )
        },
      },
      {
        attachTo: document.body,
      }
    )
    await nextTick()
    const trigger$ = wrapper.findComponent(ElPopperTrigger)
    const triggerEl = trigger$.find('.el-tooltip__trigger')
    const popoverDom: HTMLElement = document.querySelector('.el-popper')!

    vi.useFakeTimers()
    await triggerEl.trigger('click')
    vi.runAllTimers()
    vi.useRealTimers()
    await rAF()
    expect(popoverDom.style.display).not.toBe('none')

    vi.useFakeTimers()
    await triggerEl.trigger('click')
    vi.runAllTimers()
    vi.useRealTimers()
    await rAF()
    expect(popoverDom.style.display).toBe('none')
  })

  describe('teleported API', () => {
    it('should mount on popper container', async () => {
      expect(document.body.innerHTML).toBe('')
      _mount()

      await nextTick()
      const { selector } = usePopperContainerId()
      expect(document.body.querySelector(selector.value)?.innerHTML).not.toBe(
        ''
      )
    })

    it('should not mount on the popper container', async () => {
      expect(document.body.innerHTML).toBe('')
      _mount({ teleported: false })

      await nextTick()
      const { selector } = usePopperContainerId()
      expect(document.body.querySelector(selector.value)?.innerHTML).toBe('')
    })
  })
})
