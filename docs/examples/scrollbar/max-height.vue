<template>
  <el-button @click="add">Add Item</el-button>
  <el-button @click="onDelete">Delete Item</el-button>
  <el-scrollbar max-height="400px">
    <p v-for="item in count" :key="item" class="scrollbar-demo-item">
      {{ item }}
    </p>
  </el-scrollbar>
</template>

<script lang="ts">
export default {
  data() {
    return {
      count: 3,
    }
  },
  methods: {
    add() {
      this.count++
    },
    onDelete() {
      if (this.count > 0) {
        this.count--
      }
    },
  },
}
</script>
