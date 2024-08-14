import { computed, inject, ref, unref } from 'vue'
import { useIdInjection, useNamespace } from '@element-plus/hooks'
import { collapseContextKey } from './constants'

import type { CollapseItemProps } from './collapse-item'

export const useCollapseItem = (props: CollapseItemProps) => {
  const collapse = inject(collapseContextKey)
  const { namespace } = useNamespace('collapse')

  const focusing = ref(false)
  const isClick = ref(false)
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

  const handleFocus = () => {
    setTimeout(() => {
      if (!isClick.value) {
        focusing.value = true
      } else {
        isClick.value = false
      }
    }, 50)
  }

  const handleHeaderClick = () => {
    if (props.disabled) return
    collapse?.handleItemClick(unref(name))
    focusing.value = false
    isClick.value = true
  }

  const handleEnterClick = () => {
    collapse?.handleItemClick(unref(name))
  }

  return {
    focusing,
    id,
    isActive,
    handleFocus,
    handleHeaderClick,
    handleEnterClick,
  }
}

export const useCollapseItemDOM = (
  props: CollapseItemProps,
  { focusing, isActive, id }: Partial<ReturnType<typeof useCollapseItem>>
) => {
  const ns = useNamespace('collapse')

  const rootKls = computed(() => [
    ns.b('item'),
    ns.is('active', unref(isActive)),
    ns.is('disabled', props.disabled),
  ])
  const headKls = computed(() => [
    ns.be('item', 'header'),
    ns.is('active', unref(isActive)),
    { focusing: unref(focusing) && !props.disabled },
  ])
  const arrowKls = computed(() => [
    ns.be('item', 'arrow'),
    ns.is('active', unref(isActive)),
  ])
  const itemWrapperKls = computed(() => ns.be('item', 'wrap'))
  const itemContentKls = computed(() => ns.be('item', 'content'))
  const scopedContentId = computed(() => ns.b(`content-${unref(id)}`))
  const scopedHeadId = computed(() => ns.b(`head-${unref(id)}`))

  return {
    arrowKls,
    headKls,
    rootKls,
    itemWrapperKls,
    itemContentKls,
    scopedContentId,
    scopedHeadId,
  }
}
