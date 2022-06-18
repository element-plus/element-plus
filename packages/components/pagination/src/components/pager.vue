<template>
  <ul :class="nsPager.b()" @click="onPagerClick" @keyup.enter="onEnter">
    <li
      v-if="pageCount > 0"
      :class="[
        nsPager.is('active', currentPage === 1),
        nsPager.is('disabled', disabled),
      ]"
      class="number"
      :aria-current="currentPage === 1"
      :tabindex="tabindex"
    >
      1
    </li>
    <li
      v-if="showPrevMore"
      :class="[
        'more',
        'btn-quickprev',
        nsIcon.b(),
        nsPager.is('disabled', disabled),
      ]"
      :tabindex="tabindex"
      @mouseenter="onMouseEnter(true)"
      @mouseleave="quickPrevHover = false"
      @focus="onFocus(true)"
      @blur="quickPrevFocus = false"
    >
      <d-arrow-left v-if="quickPrevHover || quickPrevFocus" />
      <more-filled v-else />
    </li>
    <li
      v-for="pager in pagers"
      :key="pager"
      :class="[
        nsPager.is('active', currentPage === pager),
        nsPager.is('disabled', disabled),
      ]"
      class="number"
      :aria-current="currentPage === pager"
      :tabindex="tabindex"
    >
      {{ pager }}
    </li>
    <li
      v-if="showNextMore"
      :class="[
        'more',
        'btn-quicknext',
        nsIcon.b(),
        nsPager.is('disabled', disabled),
      ]"
      :tabindex="tabindex"
      @mouseenter="onMouseEnter()"
      @mouseleave="quickNextHover = false"
      @focus="onFocus()"
      @blur="quickNextFocus = false"
    >
      <d-arrow-right v-if="quickNextHover || quickNextFocus" />
      <more-filled v-else />
    </li>
    <li
      v-if="pageCount > 1"
      :class="[
        nsPager.is('active', currentPage === pageCount),
        nsPager.is('disabled', disabled),
      ]"
      class="number"
      :aria-current="currentPage === pageCount"
      :tabindex="tabindex"
    >
      {{ pageCount }}
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue'
import { DArrowLeft, DArrowRight, MoreFilled } from '@element-plus/icons-vue'
import { useNamespace } from '@element-plus/hooks'
import { paginationPagerProps } from './pager'
defineOptions({
  name: 'ElPaginationPager',
})
const props = defineProps(paginationPagerProps)
const emit = defineEmits(['change'])
const nsPager = useNamespace('pager')
const nsIcon = useNamespace('icon')
const showPrevMore = ref(false)
const showNextMore = ref(false)
const quickPrevHover = ref(false)
const quickNextHover = ref(false)
const quickPrevFocus = ref(false)
const quickNextFocus = ref(false)
const pagers = computed(() => {
  const pagerCount = props.pagerCount
  const halfPagerCount = (pagerCount - 1) / 2
  const currentPage = Number(props.currentPage)
  const pageCount = Number(props.pageCount)
  let showPrevMore = false
  let showNextMore = false
  if (pageCount > pagerCount) {
    if (currentPage > pagerCount - halfPagerCount) {
      showPrevMore = true
    }
    if (currentPage < pageCount - halfPagerCount) {
      showNextMore = true
    }
  }
  const array: number[] = []
  if (showPrevMore && !showNextMore) {
    const startPage = pageCount - (pagerCount - 2)
    for (let i = startPage; i < pageCount; i++) {
      array.push(i)
    }
  } else if (!showPrevMore && showNextMore) {
    for (let i = 2; i < pagerCount; i++) {
      array.push(i)
    }
  } else if (showPrevMore && showNextMore) {
    const offset = Math.floor(pagerCount / 2) - 1
    for (let i = currentPage - offset; i <= currentPage + offset; i++) {
      array.push(i)
    }
  } else {
    for (let i = 2; i < pageCount; i++) {
      array.push(i)
    }
  }
  return array
})
const tabindex = computed(() => (props.disabled ? -1 : 0))
watchEffect(() => {
  const halfPagerCount = (props.pagerCount - 1) / 2
  showPrevMore.value = false
  showNextMore.value = false
  if (props.pageCount! > props.pagerCount) {
    if (props.currentPage > props.pagerCount - halfPagerCount) {
      showPrevMore.value = true
    }
    if (props.currentPage < props.pageCount! - halfPagerCount) {
      showNextMore.value = true
    }
  }
})
function onMouseEnter(forward = false) {
  if (props.disabled) return
  if (forward) {
    quickPrevHover.value = true
  } else {
    quickNextHover.value = true
  }
}
function onFocus(forward = false) {
  if (forward) {
    quickPrevFocus.value = true
  } else {
    quickNextFocus.value = true
  }
}
function onEnter(e: UIEvent) {
  const target = e.target as HTMLElement
  if (
    target.tagName.toLowerCase() === 'li' &&
    Array.from(target.classList).includes('number')
  ) {
    const newPage = Number(target.textContent)
    if (newPage !== props.currentPage) {
      emit('change', newPage)
    }
  } else if (
    target.tagName.toLowerCase() === 'li' &&
    Array.from(target.classList).includes('more')
  ) {
    onPagerClick(e)
  }
}
function onPagerClick(event: UIEvent) {
  const target = event.target as HTMLElement
  if (target.tagName.toLowerCase() === 'ul' || props.disabled) {
    return
  }
  let newPage = Number(target.textContent)
  const pageCount = props.pageCount!
  const currentPage = props.currentPage
  const pagerCountOffset = props.pagerCount - 2
  if (target.className.includes('more')) {
    if (target.className.includes('quickprev')) {
      newPage = currentPage - pagerCountOffset
    } else if (target.className.includes('quicknext')) {
      newPage = currentPage + pagerCountOffset
    }
  }
  if (!Number.isNaN(+newPage)) {
    if (newPage < 1) {
      newPage = 1
    }
    if (newPage > pageCount) {
      newPage = pageCount
    }
  }
  if (newPage !== currentPage) {
    emit('change', newPage)
  }
}
</script>
