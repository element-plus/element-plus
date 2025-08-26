import { defineComponent, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vitest } from 'vitest'
import { usePopper } from '../use-popper'

import type { State } from '@popperjs/core'
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

  let wrapper: ReturnType<typeof mount>

  const createComponent = async () => {
    wrapper = mount(TestComponent)
    await nextTick()
    referenceRef.value = document.createElement('div')
    popperRef.value = document.createElement('div')
  }

  const getExposed = (key: string) => wrapper.vm[key] as any

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

    expect(getExposed('state')).toBeDefined()
  })

  describe('updates', () => {
    it('should not render popper instance when elements have not changed', async () => {
      const preservedInstance = getExposed('instanceRef')

      await wrapper.setProps({})

      expect(preservedInstance).toStrictEqual(getExposed('instanceRef'))
    })

    it('should render again after reference/popper element changed', async () => {
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
      const instance = getExposed('instanceRef')
      optionsRef.value = { placement: 'bottom' } as PartialOptions
      await nextTick()

      expect(getExposed('instanceRef')).toStrictEqual(instance)
    })

    it('update options', async () => {
      const instance = getExposed('instanceRef') as any

      const setOptionSpy = vitest.spyOn(instance, 'setOptions')

      optionsRef.value = { placement: 'bottom' } as PartialOptions
      await nextTick()

      expect(setOptionSpy).toHaveBeenCalled()
    })

    it('destroys popper instance when unmounted', async () => {
      const instance = getExposed('instanceRef') as any

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

      expect((getExposed('state').styles as State['styles']).arrow).toEqual(
        expect.objectContaining({
          position: 'absolute',
          transform: 'translate(0px, 0px)',
        })
      )
    })
  })
})
