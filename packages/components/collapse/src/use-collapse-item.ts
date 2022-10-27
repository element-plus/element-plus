import { computed, inject, ref, unref } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { generateId } from '@element-plus/utils'
import { collapseContextKey } from '@element-plus/tokens'

import type { CollapseItemProps } from './collapse-item'

export const useCollapseItem = (props: CollapseItemProps) => {
  const collapse = inject(collapseContextKey)

  const focusing = ref(false)
  const isClick = ref(false)
  const id = ref(generateId())

  const isActive = computed(() =>
    collapse?.activeNames.value.includes(props.name)
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
    collapse?.handleItemClick(props.name)
    focusing.value = false
    isClick.value = true
  }

  const handleEnterClick = () => {
    collapse?.handleItemClick(props.name)
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
