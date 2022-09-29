<script lang="ts" setup>
import { computed } from 'vue'
import { useThemeStore } from '~/store/theme'
import { themes } from '~/utils/theme'

const tStore = useThemeStore()

const props = defineProps<{
  name: string
}>()

const emit = defineEmits(['update:color'])

const sColor = computed({
  get: () => tStore.theme.colors[props.name],
  set: (val) => {
    emit('update:color', val)
    tStore.updateColor(props.name, val)
  },
})
</script>

<template>
  <div
    :style="{ '--ep-color': sColor }"
    class="border-t border-t-gray-200"
    m="y-4"
  >
    <div class="flex" m="y-2">
      <div m="r-3">
        <span class="inline-flex bg-$ep-color rounded-lg" w="15" h="15" />
      </div>
      <div class="inline-flex flex-col" font="bold">
        <span class="mb-1"> color-{{ name }} </span>
        <el-input v-model="sColor" :placeholder="themes.default.colors[name]" />
      </div>
    </div>
    <ep-theme-color-bar :main-color="sColor" />
  </div>
</template>
