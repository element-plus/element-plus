<template>
  <div ref="dropdownRef" :class="ns.b('dropdown')">
    <div v-if="$slots.header" :class="ns.be('dropdown', 'header')">
      <slot name="header" />
    </div>
    <el-scrollbar
      v-show="options.length > 0 && !loading"
      :id="contentId"
      ref="scrollbarRef"
      tag="ul"
      :wrap-class="ns.be('dropdown', 'wrap')"
      :view-class="ns.be('dropdown', 'list')"
      role="listbox"
      :aria-label="ariaLabel"
      aria-orientation="vertical"
    >
      <li
        v-for="(item, index) in options"
        :id="`${contentId}-${index}`"
        ref="optionRefs"
        :key="index"
        :class="optionkls(item, index)"
        role="option"
        :aria-disabled="item.disabled || disabled || undefined"
        :aria-selected="hoveringIndex === index"
        @mousemove="handleMouseEnter(index)"
        @click.stop="handleSelect(item)"
      >
        <slot name="label" :item="item" :index="index">
          <span>{{ item.label ?? item.value }}</span>
        </slot>
      </li>
    </el-scrollbar>
    <div v-if="loading" :class="ns.be('dropdown', 'loading')">
      <slot name="loading"> {{ t('el.mention.loading') }} </slot>
    </div>
    <div v-if="$slots.footer" :class="ns.be('dropdown', 'footer')">
      <slot name="footer" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { scrollIntoView } from '@element-plus/utils'
import ElScrollbar from '@element-plus/components/scrollbar'
import { mentionDropdownEmits, mentionDropdownProps } from './mention-dropdown'

import type { MentionOption } from './types'

defineOptions({
  name: 'ElMentionDropdown',
})

const props = defineProps(mentionDropdownProps)
const emit = defineEmits(mentionDropdownEmits)

const ns = useNamespace('mention')
const { t } = useLocale()
const hoveringIndex = ref(-1)

const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()
const optionRefs = ref<HTMLElement[]>()
const dropdownRef = ref<HTMLElement>()

const optionkls = (item: MentionOption, index: number) => [
  ns.be('dropdown', 'item'),
  ns.is('hovering', hoveringIndex.value === index),
  ns.is('disabled', item.disabled || props.disabled),
]

const handleSelect = (item: MentionOption) => {
  if (item.disabled || props.disabled) return
  emit('select', item)
}

const handleMouseEnter = (index: number) => {
  hoveringIndex.value = index
}

const filteredAllDisabled = computed(
  () => props.disabled || props.options.every((item) => item.disabled)
)

const hoverOption = computed(() => props.options[hoveringIndex.value])

const selectHoverOption = () => {
  if (!hoverOption.value) return
  emit('select', hoverOption.value)
}

const navigateOptions = (direction: 'next' | 'prev') => {
  const { options } = props
  if (options.length === 0 || filteredAllDisabled.value) return

  if (direction === 'next') {
    hoveringIndex.value++
    if (hoveringIndex.value === options.length) {
      hoveringIndex.value = 0
    }
  } else if (direction === 'prev') {
    hoveringIndex.value--
    if (hoveringIndex.value < 0) {
      hoveringIndex.value = options.length - 1
    }
  }
  const option = options[hoveringIndex.value]
  if (option.disabled) {
    navigateOptions(direction)
    return
  }
  nextTick(() => scrollToOption(option))
}

const scrollToOption = (option: MentionOption) => {
  const { options } = props

  const index = options.findIndex((item) => item.value === option.value)
  const target = optionRefs.value?.[index]

  if (target) {
    const menu = dropdownRef.value?.querySelector?.(
      `.${ns.be('dropdown', 'wrap')}`
    )
    if (menu) {
      scrollIntoView(menu as HTMLElement, target)
    }
  }
  scrollbarRef.value?.handleScroll()
}

const resetHoveringIndex = () => {
  if (filteredAllDisabled.value || props.options.length === 0) {
    hoveringIndex.value = -1
  } else {
    hoveringIndex.value = 0
  }
}

watch(() => props.options, resetHoveringIndex, {
  immediate: true,
})

defineExpose({
  hoveringIndex,
  navigateOptions,
  selectHoverOption,
  hoverOption,
})
</script>
