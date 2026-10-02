import { defineComponent, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vitest } from 'vitest'
import { usePopper } from '../use-popper'

import type { VueWrapper } from '@vue/test-utils'
import type { PartialOptions } from '../use-popper'

describe('usePopper', () => {
  const optionsRef = ref<PartialOptions>({} as PartialOptions)
  const popperRef = ref()
  const referenceRef = ref()
  const TestComponent = defineComponent({
    setup() {
      const usePopperReturns = usePopper(referenceRef, popperRef, optionsRef)
      return usePopperReturns
    },
    render() {
      return <div />
    },
  })

  let wrapper: VueWrapper<InstanceType<typeof TestComponent>>

  const createComponent = async () => {
    wrapper = mount(TestComponent)
    await nextTick()
    referenceRef.value = document.createElement('div')
    popperRef.value = document.createElement('div')
  }

  beforeEach(async () => {
    await createComponent()
  })

  afterEach(() => {
    wrapper.unmount()
    referenceRef.value = undefined
    popperRef.value = undefined
    optionsRef.value = {} as PartialOptions
  })

  it('should render well', async () => {
    await createComponent()

    expect(wrapper.vm.state).toBeDefined()
  })

  describe('updates', () => {
    it('should not render popper instance when elements have not changed', async () => {
      const preservedInstance = wrapper.vm.instanceRef

      await wrapper.setProps({})

      expect(preservedInstance).toStrictEqual(wrapper.vm.instanceRef)
    })

    it('should render again after reference/popper element changed', async () => {
      let prevInstance = wrapper.vm.instanceRef

      referenceRef.value = document.createElement('div')
      await nextTick()

      expect(prevInstance).not.toStrictEqual(wrapper.vm.instanceRef)

      prevInstance = wrapper.vm.instanceRef

      popperRef.value = document.createElement('div')
      await nextTick()

      expect(prevInstance).not.toStrictEqual(wrapper.vm.instanceRef)
    })

    it('should not render twice if only options changed', async () => {
      const instance = wrapper.vm.instanceRef
      optionsRef.value = { placement: 'bottom' } as PartialOptions
      await nextTick()

      expect(wrapper.vm.instanceRef).toStrictEqual(instance)
    })

    it('update options', async () => {
      const instance = wrapper.vm.instanceRef!

      const setOptionSpy = vitest.spyOn(instance!, 'setOptions')

      optionsRef.value = { placement: 'bottom' } as PartialOptions
      await nextTick()

      expect(setOptionSpy).toHaveBeenCalled()
    })

    it('destroys popper instance when unmounted', async () => {
      const instance = wrapper.vm.instanceRef!

      const destroySpy = vitest.spyOn(instance, 'destroy')

      wrapper.unmount()

      expect(destroySpy).toHaveBeenCalled()
    })

    it('with arrow element', async () => {
      const arrowEl = document.createElement('div')
      popperRef.value.appendChild(arrowEl)

      optionsRef.value = {
        modifiers: [{ name: 'arrow', options: { element: arrowEl } }],
      } as PartialOptions
      await nextTick()

      expect(wrapper.vm.state.styles!.arrow).toEqual(
        expect.objectContaining({
          position: 'absolute',
          transform: 'translate(0px, 0px)',
        })
      )
    })
  })
})
