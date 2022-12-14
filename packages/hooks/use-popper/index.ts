import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
  shallowRef,
  unref,
  watch,
} from 'vue'
import { createPopper } from '@popperjs/core'

import type { Ref } from 'vue'
import type {
  Instance,
  Modifier,
  Options,
  State,
  VirtualElement,
} from '@popperjs/core'

type ElementType = HTMLElement | undefined
type ReferenceElement = ElementType | VirtualElement

export const usePopper = (
  referenceElementRef: Ref<ReferenceElement>,
  popperElementRef: Ref<ElementType>,
  opts: Ref<Options> | Options = {} as Options
) => {
  const stateUpdater = {
    name: 'updateState',
    enabled: true,
    phase: 'write',
    fn: ({ state }) => {
      const elements = Object.keys(state.elements) as unknown as Array<
        keyof State['elements']
      >

      const styles = elements
        .map((element) => [element, state.elements[element] || {}] as const)
        .reduce((acc, [element, style]) => {
          acc[element] = style
          return acc
        }, {} as { [key: string]: any })

      const attributes = elements
        .map((element) => [element, state.attributes[element]] as const)
        .reduce((acc, [element, style]) => {
          acc[element] = style
          return acc
        }, {} as { [key: string]: any })

      Object.assign(states.value, {
        attributes,
        styles,
      })
    },
    require: ['computedStyles'],
  } as Modifier<'updateState', any>

  const options = computed<Options>(() => {
    const {
      onFirstUpdate,
      placement = 'bottom',
      strategy = 'absolute',
      modifiers = [],
    } = unref(opts)
    return {
      onFirstUpdate,
      placement,
      strategy,
      modifiers: [
        ...modifiers,
        stateUpdater,
        { name: 'applyStyles', enabled: false },
      ],
    }
  })

  const instanceRef = shallowRef<Instance | undefined>()
  const states = ref<Pick<State, 'styles' | 'attributes'>>({
    styles: {
      popper: {
        position: unref(options).strategy,
        left: '0',
        right: '0',
      },
      arrow: {
        position: 'absolute',
      },
    },
    attributes: {},
  })

  watch(
    options,
    (newOptions) => {
      const instance = unref(instanceRef)
      instance?.setOptions(newOptions)
    },
    {
      deep: true,
    }
  )

  onMounted(() => {
    const referenceElement = unref(referenceElementRef)
    const popperElement = unref(popperElementRef)
    if (!referenceElement || !popperElement) return

    instanceRef.value = createPopper(
      referenceElement,
      popperElement,
      unref(options)
    )
  })

  onBeforeUnmount(() => {
    instanceRef.value?.destroy()
    instanceRef.value = undefined
  })

  return {
    state: computed(() => unref(instanceRef)?.state),
    styles: computed(() => unref(states).styles),
    attributes: computed(() => unref(states).attributes),
    update: () => unref(instanceRef)?.update(),
    forceUpdate: () => unref(instanceRef)?.forceUpdate(),
  }
}
