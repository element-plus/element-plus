<template>
  <el-scrollbar
    ref="navScroll"
    class="right-nav"
    wrap-style="max-height: 300px"
    style="position: fixed;right: 10px;top: 100px;width: 150px;border-left: 1px solid rgb(220, 223, 230);height: auto;max-height: 300px;"
  >
    <div v-for="item in anchors" :key="item" style="margin: 3px 0 3px 10px">
      <el-link
        :id="item"
        :title="item"
        class="link"
        :type="active === item ? 'primary' : 'default'"
        href="javascript:void 0;"
        @click="handleAnchorClick(item)"
      >
        {{ item }}
      </el-link>
    </div>
  </el-scrollbar>
</template>

<script lang="ts">
import { defineComponent, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import ResizeObserver from 'resize-observer-polyfill'

export default defineComponent({
  setup() {
    // ordered
    const map = new Map()
    let anchors = ref([])
    let scrollContainer = null
    const active = ref('')
    const navScroll = ref(null)

    const handleAnchorClick = anchor => {
      scrollContainer.scrollTop = map.get(anchor)
      active.value = anchor
    }

    let resizeObserver = null

    onMounted(async () => {
      // waiting for components render, e.g. table.
      await nextTick()
      scrollContainer = document.querySelector('.el-scrollbar.page-component__scroll>.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default')
      const content = document.querySelector('.content.element-doc.content')
      if (!content) return
      const h3 = content.querySelectorAll('h3')
      anchors.value = Array.from(h3).map(item => {
        const text = item.childNodes[1].textContent.trim()
        map.set(text, item.offsetTop)
        return text
      })

      let mapValues = Array.from(map.values()).reverse()
      let mapKeys = Array.from(map.keys()).reverse()
      resizeObserver = new ResizeObserver(() => {
        Array.from(h3).forEach(item => {
          const text = item.childNodes[1].textContent.trim()
          map.set(text, item.offsetTop)
        })
        mapValues = Array.from(map.values()).reverse()
        mapKeys = Array.from(map.keys()).reverse()
      })
      resizeObserver.observe(scrollContainer.childNodes[0])


      let cachedIndex = -1
      scrollContainer.addEventListener('scroll', () => {
        const index = mapValues.findIndex(item => scrollContainer.scrollTop > item - 75)
        if (cachedIndex !== index && index !== -1) {
          active.value = mapKeys[index]
          cachedIndex = index
          document.getElementById(active.value)?.focus()
        }
      })
    })

    onBeforeUnmount(() => {
      resizeObserver?.disconnect()
    })
    return {
      navScroll,
      anchors,
      active,
      handleAnchorClick,
    }
  },
})
</script>

<style lang="scss" scoped>
.link {
  ::v-deep(span) {
    font-size: 12px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 135px;
  }
}

@media (max-width: 1000px) {
  .right-nav {
    display: none;
  }
}
</style>
