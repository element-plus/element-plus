import { defineComponent, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vitest } from 'vitest'
import { usePopper } from '../use-popper'

import type { Options } from '@popperjs/core'

describe('usePopper', () => {
  const optionsRef = ref<Options>({} as Options)
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

  let wrapper: ReturnType<typeof mount>

  const createComponent = async () => {
    wrapper = mount(TestComponent)
    await nextTick()
    referenceRef.value = document.createElement('div')
    popperRef.value = document.createElement('div')
  }

  const getExposed = (key: string) => wrapper.vm[key]

  afterEach(() => {
    wrapper.unmount()
    referenceRef.value = undefined
    popperRef.value = undefined
    optionsRef.value = {} as Options
  })

  it('should render well', async () => {
    await createComponent()

    expect(getExposed('state')).toBeDefined()
  })

  describe('updates', () => {
    it('should not render popper instance when elements have not changed', async () => {
      await createComponent()
      const preservedInstance = getExposed('instanceRef')

      await wrapper.setProps({})

      expect(preservedInstance).toStrictEqual(getExposed('instanceRef'))
    })

    it('should render again after reference/popper element changed', async () => {
      await createComponent()
      let prevInstance = getExposed('instanceRef')

      referenceRef.value = document.createElement('div')
      await nextTick()

      expect(prevInstance).not.toStrictEqual(getExposed('instanceRef'))

      prevInstance = getExposed('instanceRef')

      popperRef.value = document.createElement('div')
      await nextTick()

      expect(prevInstance).not.toStrictEqual(getExposed('instanceRef'))
    })

    it('should not render twice if only options changed', async () => {
      await createComponent()
      const instance = getExposed('instanceRef')
      optionsRef.value = { placement: 'bottom' } as Options
      await nextTick()

      expect(getExposed('instanceRef')).toStrictEqual(instance)
    })

    it('update options', async () => {
      await createComponent()
      const instance = getExposed('instanceRef') as any

      const setOptionSpy = vitest.spyOn(instance, 'setOptions')

      optionsRef.value = { placement: 'bottom' } as Options
      await nextTick()

      expect(setOptionSpy).toHaveBeenCalled()
    })

    it('destroys popper instance when unmounted', async () => {
      await createComponent()
      const instance = getExposed('instanceRef') as any

      const destroySpy = vitest.spyOn(instance, 'destroy')

      wrapper.unmount()

      expect(destroySpy).toHaveBeenCalled()
    })
  })
})
