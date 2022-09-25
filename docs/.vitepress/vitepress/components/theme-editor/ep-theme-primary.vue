<script lang="ts" setup>
import { computed } from 'vue'
import { TinyColor } from '@ctrl/tinycolor'
import { useThemeStore } from '~/store/theme'

const tStore = useThemeStore()
const primaryColor = computed({
  get: () => tStore.theme.colors['primary'],
  set: (val) => {
    tStore.updateColor('primary', val)
  },
})
const pColor = computed(() => new TinyColor(primaryColor.value))

const hsbString = computed(() => {
  const hsb = pColor.value.toHsv()
  return `(${Math.round(hsb.h)}, ${Math.round(hsb.s * 100)}, ${Math.round(
    hsb.v * 100
  )})`
})
</script>

<template>
  <div class="border border-$el-color-primary rounded-md" p="2">
    <div
      class="rounded text-sm flex flex-wrap justify-between uppercase"
      w="full"
      bg="$el-color-primary"
      p="x-2 y-3"
      text="white"
    >
      <div>
        <span class="inline-flex" m="r-2">
          HEX: {{ pColor.toHexString() }}
        </span>
        <span class="inline-flex"> HSB: {{ hsbString }} </span>
      </div>
      <div>
        <span class="inline-flex" m="r-2"> APCA: TODO </span>
        <span class="inline-flex">
          RGB: {{ pColor.toRgbString().replace('RGB', '') }}
        </span>
      </div>
    </div>
    <div m="y-2" />
    <el-input v-model="primaryColor" />
  </div>

  <ep-theme-color-bar m="y-2" :main-color="primaryColor" />
</template>
