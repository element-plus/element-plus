<script lang="ts" setup>
import { computed, ref } from 'vue'
import { TinyColor } from '@ctrl/tinycolor'
import { useCssVar } from '@vueuse/core'
import { getCssVarName } from '~/utils/colors'

const primaryColor = useCssVar(getCssVarName('color', 'primary'))
const pColor = computed(() => new TinyColor(primaryColor.value))
</script>

<template>
  <div class="border border-$el-color-primary rounded-md" p="2">
    <div
      class="rounded text-sm flex flex-col justify-between"
      w="full"
      bg="$el-color-primary"
      p="2"
      :text="pColor.isDark() ? 'white' : 'black'"
    >
      <span class="flex">
        {{ pColor.toHsvString() }}
      </span>
      <span class="flex">
        {{ pColor.toRgbString() }}
      </span>
    </div>
    <div m="y-2" />
    <el-input v-model="primaryColor" />
  </div>
</template>
