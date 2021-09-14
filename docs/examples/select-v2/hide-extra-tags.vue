<template>
  <el-select-v2
    v-model="value"
    :options="options"
    placeholder="Please select"
    style="width: 240px"
    multiple
    collapse-tags
  />
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

export default defineComponent({
  setup() {
    return {
      options: ref(
        Array.from({ length: 1000 }).map((_, idx) => ({
          value: `Option ${idx + 1}`,
          label: `${initials[idx % 10]}${idx}`,
        }))
      ),
      value: ref([]),
    }
  },
})
</script>
