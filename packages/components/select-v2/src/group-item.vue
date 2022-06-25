<template>
  <div
    v-if="item.isTitle"
    :class="ns.be('group', 'title')"
    :style="[style, { lineHeight: `${height}px` }]"
  >
    {{ item.label }}
  </div>
  <div v-else :class="ns.be('group', 'split')" :style="style">
    <span
      :class="ns.be('group', 'split-dash')"
      :style="{ top: `${height / 2}px` }"
    />
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@element-plus/hooks'
import { GroupProps } from './group-item'

defineProps(GroupProps)

defineOptions({
  name: 'GroupItem',
})

const ns = useNamespace('select')
</script>
