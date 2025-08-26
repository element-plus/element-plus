<template>
  <ul
    v-infinite-scroll="load"
    class="infinite-list"
    style="
      overflow: auto;
      height: 300px;
      padding: 0;
      margin: 0;
      list-style: none;
    "
  >
    <li
      v-for="i in count"
      :key="i"
      class="infinite-list-item"
      style="
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        background: var(--el-color-primary-light-9);
        margin: 10px;
        color: var(--el-color-primary);
        margin-top: 10px;
      "
    >
      {{ i }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const count = ref(0)
const load = () => {
  count.value += 2
}
</script>
