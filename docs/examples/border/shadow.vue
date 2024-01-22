<template>
  <div class="container">
    <div v-for="(shadow, i) in shadowGroup" :key="i" class="item">
      <div
        class="block"
        :style="{
          boxShadow: `var(${getCssVarName(shadow.type)})`,
        }"
      />
      <span class="demo-shadow-text" text="sm">
        {{ shadow.name }}
      </span>
      <code text="xs">
        {{ getCssVarName(shadow.type) }}
      </code>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const shadowGroup = ref([
  {
    name: 'Basic Shadow',
    type: '',
  },
  {
    name: 'Light Shadow',
    type: 'light',
  },
  {
    name: 'Lighter Shadow',
    type: 'lighter',
  },
  {
    name: 'Dark Shadow',
    type: 'dark',
  },
])

const getCssVarName = (type: string) => {
  return `--el-box-shadow${type ? '-' : ''}${type}`
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 11.5rem;
  margin: auto;
}

.block {
  display: inline-flex;
  height: 7.5rem;
  width: 7.5rem;
  margin: 0.5rem;
}

.demo-shadow-text {
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.[text='xs'] {
  font-size: 0.75rem;
  line-height: 1rem;
}
</style>
