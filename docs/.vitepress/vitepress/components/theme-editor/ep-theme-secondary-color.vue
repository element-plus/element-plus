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
    <div flex="~" m="y-2">
      <div flex justify-center items-center m="r-3">
        <el-color-picker
          v-model="sColor"
          class="inline-flex bg-$ep-color rounded-lg"
          w="15"
          h="15"
          size="large"
        />
      </div>
      <div class="inline-flex flex-col" font="bold">
        <span flex class="text-xs"> color-{{ name }} </span>
        <div flex>
          <el-input
            v-model="sColor"
            w="18"
            size="small"
            :placeholder="themes.default.colors[name]"
          />
          <span />
        </div>
      </div>
    </div>
    <ep-theme-color-bar :name="name" :main-color="sColor" />
  </div>
</template>
