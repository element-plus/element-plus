<template>
  <div class="demo-autocomplete">
    <div class="demo-block">
      <div class="demo-title">list suggestions when activated</div>
      <el-autocomplete
        v-model="state1"
        :fetch-suggestions="querySearch"
        clearable
        class="w-50"
        placeholder="Please Input"
        @select="handleSelect"
      />
    </div>
    <div class="demo-block">
      <div class="demo-title">list suggestions on input</div>
      <el-autocomplete
        v-model="state2"
        :fetch-suggestions="querySearch"
        :trigger-on-focus="false"
        clearable
        class="w-50"
        placeholder="Please Input"
        @select="handleSelect"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

interface RestaurantItem {
  value: string
  link: string
}

const state1 = ref('')
const state2 = ref('')

const restaurants = ref<RestaurantItem[]>([])
const querySearch = (queryString: string, cb: any) => {
  const results = queryString
    ? restaurants.value.filter(createFilter(queryString))
    : restaurants.value
  // call callback function to return suggestions
  cb(results)
}
const createFilter = (queryString: string) => {
  return (restaurant: RestaurantItem) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}
const loadAll = () => {
  return [
    { value: 'vue', link: 'https://github.com/vuejs/vue' },
    { value: 'element', link: 'https://github.com/ElemeFE/element' },
    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
    { value: 'babel', link: 'https://github.com/babel/babel' },
  ]
}

const handleSelect = (item: Record<string, any>) => {
  console.log(item)
}

onMounted(() => {
  restaurants.value = loadAll()
})
</script>

<style scoped>
.demo-autocomplete {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.demo-block {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.demo-title {
  font-size: 0.875rem;
  color: var(--el-text-color-secondary);
  min-height: 2.5em;
  display: flex;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .demo-autocomplete {
    gap: 1rem;
  }

  .demo-block {
    width: 100%;
  }
}
</style>
