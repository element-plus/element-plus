<template>
  <span
    v-if="disableTransitions"
    :class="containerKls"
    :style="{ backgroundColor: color }"
    @click="handleClick"
  >
    <span :class="contentKls">
      <slot />
    </span>
    <el-icon v-if="closable" :class="iconKls" @click.stop="handleClose">
      <Close />
    </el-icon>
  </span>
  <transition v-else :name="`${nsTag.namespace.value}-zoom-in-center`" appear>
    <span
      :class="containerKls"
      :style="{ backgroundColor: color }"
      @click="handleClick"
    >
      <span :class="contentKls">
        <slot />
      </span>
      <el-icon v-if="closable" :class="iconKls" @click.stop="handleClose">
        <Close />
      </el-icon>
    </span>
  </transition>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import ElIcon from '@element-plus/components/icon'
import { Close } from '@element-plus/icons-vue'
import { useNamespace } from '@element-plus/hooks'
import { useFormSize } from '@element-plus/components/form'

import { tagEmits, tagProps } from './tag'

defineOptions({
  name: 'ElTag',
})
const props = defineProps(tagProps)
const emit = defineEmits(tagEmits)

const tagSize = useFormSize()
const nsTag = useNamespace('tag')
const containerKls = computed(() => {
  const { type, hit, effect, closable, round } = props
  return [
    nsTag.b(),
    nsTag.is('closable', closable),
    nsTag.m(type),
    nsTag.m(tagSize.value),
    nsTag.m(effect),
    nsTag.is('hit', hit),
    nsTag.is('round', round),
  ]
})
const contentKls = computed(() => nsTag.e('content'))
const iconKls = computed(() => nsTag.e('close'))

// methods
const handleClose = (event: MouseEvent) => {
  emit('close', event)
}

const handleClick = (event: MouseEvent) => {
  emit('click', event)
}
</script>
