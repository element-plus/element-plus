<template>
  <div class="infinite-list-wrapper" style="overflow: auto">
    <ul
      v-infinite-scroll="load"
      class="list"
      infinite-scroll-disabled="disabled"
    >
      <li v-for="i in count" :key="i" class="list-item">{{ i }}</li>
    </ul>
    <p v-if="loading">Loading...</p>
    <p v-if="noMore">No more</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  setup() {
    const count = ref(10)
    const loading = ref(false)
    const noMore = computed(() => count.value >= 20)
    const disabled = computed(() => loading.value || noMore.value)
    const load = () => {
      loading.value = true
      setTimeout(() => {
        count.value += 2
        loading.value = false
      }, 2000)
    }
    return {
      count,
      loading,
      noMore,
      disabled,
      load,
    }
  },
})
</script>

<style lang="scss">
.infinite-list-wrapper {
  height: 300px;
  text-align: center;

  .list {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: var(--el-color-danger-lighter);
    color: var(--el-color-danger);
    & + .list-item {
      margin-top: 10px;
    }
  }
}
</style>
