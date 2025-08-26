<template>
  <div class="demo">
    <div>
      <p>Custom header content</p>
      <el-autocomplete
        v-model="headerSlotState"
        :fetch-suggestions="querySearchAsync"
        placeholder="Please input"
        @select="handleSelect"
      >
        <template #header>header content</template>
      </el-autocomplete>
    </div>
    <div>
      <p>Custom footer content</p>
      <el-autocomplete
        ref="footerAutocompleteRef"
        v-model="footerSlotstate"
        :fetch-suggestions="querySearchAsync"
        placeholder="Please input"
        @select="handleSelect"
      >
        <template #footer>
          <el-button link size="small" @click="handleClear"> Clear </el-button>
        </template>
      </el-autocomplete>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const headerSlotState = ref('')
const footerSlotstate = ref('')

interface LinkItem {
  value: string
  link: string
}

const links = ref<LinkItem[]>([])

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

let timeout: ReturnType<typeof setTimeout>
const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
  const results = queryString
    ? links.value.filter(createFilter(queryString))
    : links.value

  clearTimeout(timeout)
  timeout = setTimeout(() => {
    cb(results)
  }, 3000 * Math.random())
}
const createFilter = (queryString: string) => {
  return (restaurant: LinkItem) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}

const handleSelect = (item: Record<string, any>) => {
  console.log(item)
}

onMounted(() => {
  links.value = loadAll()
})

const footerAutocompleteRef = ref()
const handleClear = () => {
  footerSlotstate.value = ''
  footerAutocompleteRef.value.getData()
}
</script>

<style>
.demo {
  display: flex;
}

.demo > div {
  flex: 1;
  text-align: center;
}
.demo > div > .el-autocomplete {
  width: 50%;
}

.demo > div:not(:last-child) {
  border-right: 1px solid var(--el-border-color);
}
</style>
