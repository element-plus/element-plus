import { computed, onBeforeUnmount, ref, shallowRef, unref, watch } from 'vue'
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
        .reduce((styles, [element, style]) => {
          styles[element] = style
          return styles
        }, {} as { [key: string]: any })

      const attributes = elements
        .map((element) => [element, state.attributes[element]] as const)
        .reduce((attrs, [element, attribute]) => {
          attrs[element] = attribute
          return attrs
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

  const destroy = () => {
    if (!instanceRef.value) return

    instanceRef.value.destroy()
    instanceRef.value = undefined
  }

  watch(
    options,
    (newOptions) => {
      const instance = unref(instanceRef)
      if (instance) {
        instance.setOptions(newOptions)
      }
    },
    {
      deep: true,
    }
  )

  watch(
    [referenceElementRef, popperElementRef],
    ([referenceElement, popperElement]) => {
      destroy()
      if (!referenceElement || !popperElement) return

      instanceRef.value = createPopper(
        referenceElement,
        popperElement,
        unref(options)
      )
    }
  )

  onBeforeUnmount(() => {
    destroy()
  })

  return {
    state: computed(() => unref(instanceRef)?.state),
    styles: computed(() => unref(states).styles),
    attributes: computed(() => unref(states).attributes),
    update: () => unref(instanceRef)?.update(),
    forceUpdate: () => unref(instanceRef)?.forceUpdate(),
    // Preventing end users from modifying the instance.
    instanceRef: computed(() => unref(instanceRef)),
  }
}
