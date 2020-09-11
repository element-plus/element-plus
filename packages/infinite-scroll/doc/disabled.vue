<template>
  <ul
    v-infinite-scroll="load"
    infinite-scroll-disabled="disabled"
    class="infinite-list"
  >
    <li
      v-for="i in count"
      :key="i"
      class="list-item"
    >
      {{ i }}
    </li>
    <li v-if="loading">Loading...</li>
    <li v-if="noMore">No more</li>
  </ul>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const count = ref(0)
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
}
</script>

<style lang="scss" scoped>

.infinite-list {
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;

  .list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: #e8f3fe;
    margin: 10px;
    color: lighten(#1989fa, 20%);
  }
}

</style>

