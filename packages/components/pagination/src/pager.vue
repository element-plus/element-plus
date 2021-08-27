<template>
  <ul class="el-pager" @click="onPagerClick" @keyup.enter="onEnter">
    <li
      v-if="pageCount > 0"
      :class="{ active: currentPage === 1, disabled }"
      class="number"
      :aria-current="currentPage === 1"
      tabindex="0"
    >
      1
    </li>
    <li
      v-if="showPrevMore"
      class="el-icon more btn-quickprev"
      :class="[quickprevIconClass, { disabled }]"
      @mouseenter="onMouseenter('left')"
      @mouseleave="quickprevIconClass = 'el-icon-more'"
    >
    </li>
    <li
      v-for="pager in pagers"
      :key="pager"
      :class="{ active: currentPage === pager, disabled }"
      class="number"
      :aria-current="currentPage === pager"
      tabindex="0"
    >
      {{ pager }}
    </li>
    <li
      v-if="showNextMore"
      class="el-icon more btn-quicknext"
      :class="[quicknextIconClass, { disabled }]"
      @mouseenter="onMouseenter('right')"
      @mouseleave="quicknextIconClass = 'el-icon-more'"
    >
    </li>
    <li
      v-if="pageCount > 1"
      :class="{ active: currentPage === pageCount, disabled }"
      class="number"
      :aria-current="currentPage === pageCount"
      tabindex="0"
    >
      {{ pageCount }}
    </li>
  </ul>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  watchEffect,
} from 'vue'

export default defineComponent({
  name: 'ElPager',
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    pageCount: {
      type: Number,
    },
    pagerCount: {
      type: Number,
      default: 7,
    },
    disabled: Boolean,
  },
  emits: ['change'],
  setup(props, { emit }) {
    const showPrevMore = ref(false)
    const showNextMore = ref(false)
    const quicknextIconClass = ref('el-icon-more')
    const quickprevIconClass = ref('el-icon-more')
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
      const array = []
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

    watchEffect(() => {
      const halfPagerCount = (props.pagerCount - 1) / 2

      showPrevMore.value = false
      showNextMore.value = false

      if (props.pageCount > props.pagerCount) {
        if (props.currentPage > props.pagerCount - halfPagerCount) {
          showPrevMore.value = true
        }
        if (props.currentPage < props.pageCount - halfPagerCount) {
          showNextMore.value = true
        }
      }
    })

    watchEffect(() => {
      if(!showPrevMore.value) quickprevIconClass.value = 'el-icon-more'
    })
    watchEffect(() => {
      if(!showNextMore.value) quicknextIconClass.value = 'el-icon-more'
    })

    function onMouseenter(direction: 'left' | 'right') {
      if (props.disabled) return
      if (direction === 'left') {
        quickprevIconClass.value = 'el-icon-d-arrow-left'
      } else {
        quicknextIconClass.value = 'el-icon-d-arrow-right'
      }
    }

    function onEnter(e: UIEvent) {
      const target = e.target as HTMLElement
      if (target.tagName.toLowerCase() === 'li' && Array.from(target.classList).includes('number')) {
        const newPage = Number(target.textContent)
        if (newPage !== props.currentPage) {
          emit('change', newPage)
        }
      }
    }

    function onPagerClick(event: UIEvent) {
      const target = event.target as HTMLElement
      if (target.tagName.toLowerCase() === 'ul' || props.disabled) {
        return
      }

      let newPage = Number(target.textContent)
      const pageCount = props.pageCount
      const currentPage = props.currentPage
      const pagerCountOffset = props.pagerCount - 2
      if (target.className.includes('more')) {
        if (target.className.includes('quickprev')) {
          newPage = currentPage - pagerCountOffset
        } else if (target.className.includes('quicknext')) {
          newPage = currentPage + pagerCountOffset
        }
      }
      if (!isNaN(newPage)) {
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

    return {
      showPrevMore,
      showNextMore,
      quicknextIconClass,
      quickprevIconClass,
      pagers,
      onMouseenter,
      onPagerClick,
      onEnter,
    }
  },
})
</script>
