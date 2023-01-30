import { isClient, unrefElement } from '@vueuse/core'

import type { ComponentPublicInstance } from 'vue'
import type { MaybeRef } from '@vueuse/core'
import type { Measurable } from '@element-plus/tokens'
import type { PopperCoreConfigProps } from './content'
import type { Modifier } from '@popperjs/core'

type ArrowProps = {
  arrowEl: HTMLElement | undefined
  arrowOffset: number | undefined
}

export const buildPopperOptions = (
  props: PopperCoreConfigProps,
  arrowProps: ArrowProps
) => {
  const { placement, strategy, popperOptions } = props
  const options = {
    placement,
    strategy,
    ...popperOptions,
    modifiers: genModifiers(props),
  }

  attachArrow(options, arrowProps)
  options.modifiers = deriveExtraModifiers(
    options.modifiers,
    popperOptions?.modifiers
  )
  return options
}

export const unwrapMeasurableEl = (
  $el: MaybeRef<Measurable | undefined | ComponentPublicInstance>
) => {
  if (!isClient) return
  return unrefElement($el as HTMLElement)
}

function genModifiers(
  options: PopperCoreConfigProps
): Partial<Modifier<any, any>>[] {
  const { offset, gpuAcceleration, fallbackPlacements } = options
  return [
    {
      name: 'offset',
      options: {
        offset: [0, offset ?? 12],
      },
    },
    {
      name: 'preventOverflow',
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5,
        },
      },
    },
    {
      name: 'flip',
      options: {
        padding: 5,
        fallbackPlacements,
      },
    },
    {
      name: 'computeStyles',
      options: {
        gpuAcceleration,
      },
    },
  ]
}

function attachArrow(options: any, { arrowEl, arrowOffset }: ArrowProps) {
  options.modifiers.push({
    name: 'arrow',
    options: {
      element: arrowEl,
      padding: arrowOffset ?? 5,
    },
  } as any)
}

function deriveExtraModifiers(
  modifiers: Partial<Modifier<any, any>>[],
  propsModifiers: PopperCoreConfigProps['popperOptions']['modifiers']
): Partial<Modifier<any, any>>[] {
  if (!propsModifiers) {
    return modifiers
  }
  return modifiers.map((modifier) => {
    return Object.assign(
      modifier,
      propsModifiers.find((newModifier) => {
        return modifier.name === newModifier.name
      })
    )
  })
}
