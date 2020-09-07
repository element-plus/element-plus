<template>
  <ul v-infinite-scroll="load" class="infinite-list">
    <li v-for="i in count" :key="i">{{ i }}</li>
  </ul>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)

    const load = () => {
      count.value += 2
    }

    return {
      count,
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

  > li {
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
