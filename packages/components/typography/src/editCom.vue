<template>
  <div ref="editBox" class="edit">
    <template v-if="hub">
      <el-button text :icon="Edit" @click="triggerClick"> 编辑 </el-button>
    </template>
    <template v-else>
      <el-input
        ref="editInputRef"
        v-model="editValue"
        resize="none"
        class="inputBox"
        autosize
        type="textarea"
        @blur="inputComplete"
        @keydown.enter="inputComplete"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, nextTick, ref } from 'vue'
import { Edit } from '@element-plus/icons-vue'
import { ElButton, ElInput } from '@element-plus/components'
import type { EditConfig } from './base'
const emit = defineEmits(['onEnd', 'onStart', 'onChange'])
interface presentProps extends EditConfig {
  value: string
}
const props = defineProps<presentProps>()
const editValue = ref('')
const hub = ref(true)
const editInputRef = ref<HTMLInputElement | null>(null)
const editBoxRef = ref<HTMLInputElement | null>(null)
const triggerClick = async () => {
  // editBoxRef

  editValue.value = props.value.trim()
  hub.value = false
  await nextTick()
  editInputRef.value?.focus()
  emit('onChange', hub.value)
}
const inputComplete = () => {
  hub.value = true
  emit('onEnd', editValue.value)
  emit('onChange', hub.value)
}
</script>

<style lang="scss" scoped>
.edit {
  display: inline-block;
}
.inputBox {
  width: 100%;
  // border: solid red 1px;
}
</style>
