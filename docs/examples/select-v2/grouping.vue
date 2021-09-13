<template>
  <el-select-v2
    v-model="value"
    filterable
    :options="options"
    placeholder="Please select"
    style="width: 240px"
    multiple
  />
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

export default defineComponent({
  setup() {
    return {
      options: ref(
        Array.from({ length: 10 }).map((_, idx) => {
          const label = idx + 1
          return {
            value: `Group ${label}`,
            label: `Group ${label}`,
            options: Array.from({ length: 10 }).map((_, idx) => ({
              value: `Option ${idx + 1 + 10 * label}`,
              label: `${initials[idx % 10]}${idx + 1 + 10 * label}`,
            })),
          }
        })
      ),
      value: ref([]),
    }
  },
})
</script>
