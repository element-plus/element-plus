import { computed, inject, unref } from 'vue'
import { useIdInjection, useNamespace } from '@element-plus/hooks'
import { EVENT_CODE } from '@element-plus/constants'
import { getEventCode } from '@element-plus/utils'
import { collapseContextKey } from './constants'

import type { ComputedRef } from 'vue'
import type { CollapseItemProps } from './collapse-item'

export const useCollapseItem = (props: CollapseItemProps) => {
  const collapse = inject(collapseContextKey)
  const { namespace } = useNamespace('collapse')

  const idInjection = useIdInjection()
  const id = computed(() => idInjection.current++)
  const name = computed(() => {
    return (
      props.name ?? `${namespace.value}-id-${idInjection.prefix}-${unref(id)}`
    )
  })

  const isActive = computed(() =>
    collapse?.activeNames.value.includes(unref(name))
  )

  const collapsible = computed(() => props.collapsible ?? '')
  const disabled = computed(
    () => props.disabled || collapsible.value === 'disabled'
  )
  const headerTrigger = computed(
    () =>
      !props.disabled &&
      !['disabled', 'icon', 'header'].includes(collapsible.value)
  )
  const iconTrigger = computed(
    () => !props.disabled && ['icon', 'header'].includes(collapsible.value)
  )
  const titleTrigger = computed(
    () => !props.disabled && collapsible.value === 'header'
  )

  const handleInteraction = (
    trigger: ComputedRef<boolean>,
    e: MouseEvent | KeyboardEvent
  ) => {
    if (!unref(trigger)) return
    const target = e.target as HTMLElement
    if (target?.closest('input, textarea, select')) return
    e.preventDefault()
    collapse?.handleItemClick(unref(name))
  }

  const handleKeydown = (trigger: ComputedRef<boolean>, e: KeyboardEvent) => {
    const code = getEventCode(e)
    if ([EVENT_CODE.space, EVENT_CODE.enter].includes(code)) {
      handleInteraction(trigger, e)
    }
  }

  const createInteractionProps = (trigger: ComputedRef<boolean>) =>
    computed(() =>
      trigger.value
        ? {
            tabindex: 0,
            onClick: (e: MouseEvent) => handleInteraction(trigger, e),
            onKeydown: (e: KeyboardEvent) => handleKeydown(trigger, e),
          }
        : {}
    )

  const headerProps = createInteractionProps(headerTrigger)
  const titleProps = createInteractionProps(titleTrigger)
  const iconProps = createInteractionProps(iconTrigger)

  return {
    id,
    isActive,
    disabled,
    headerTrigger,
    iconTrigger,
    titleTrigger,
    headerProps,
    titleProps,
    iconProps,
    handleInteraction,
  }
}

export const useCollapseItemDOM = (
  props: CollapseItemProps,
  {
    isActive,
    id,
    disabled,
    headerTrigger,
    iconTrigger,
    titleTrigger,
  }: Partial<ReturnType<typeof useCollapseItem>>
) => {
  const ns = useNamespace('collapse')

  const rootKls = computed(() => [
    ns.b('item'),
    ns.is('active', unref(isActive)),
    ns.is('disabled', unref(disabled)),
  ])
  const headKls = computed(() => [
    ns.be('item', 'header'),
    ns.is('active', unref(isActive)),
    ns.is('collapsible', unref(headerTrigger)),
  ])
  const arrowKls = computed(() => [
    ns.be('item', 'arrow'),
    ns.is('active', unref(isActive)),
  ])
  const warpArrowKls = computed(() => [
    ns.is('collapsible', unref(iconTrigger)),
  ])
  const itemTitleKls = computed(() => [
    ns.be('item', 'title'),
    ns.is('collapsible', unref(titleTrigger)),
  ])
  const itemWrapperKls = computed(() => ns.be('item', 'wrap'))
  const itemContentKls = computed(() => ns.be('item', 'content'))
  const scopedContentId = computed(() => ns.b(`content-${unref(id)}`))
  const scopedHeadId = computed(() => ns.b(`head-${unref(id)}`))

  return {
    itemTitleKls,
    arrowKls,
    headKls,
    warpArrowKls,
    rootKls,
    itemWrapperKls,
    itemContentKls,
    scopedContentId,
    scopedHeadId,
  }
}
