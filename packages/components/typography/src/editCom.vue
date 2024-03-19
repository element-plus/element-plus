<template>
  <div ref="editBox" :class="ns.e('edit')">
    <el-button text :icon="editable.icon || Edit" @click="triggerClick">
      {{ editable.triggerText }}
    </el-button>
    <template v-if="!hub">
      <el-input
        ref="editInputRef"
        v-model="editValue"
        resize="none"
        class="inputBox"
        :placeholder="editable.placeholder"
        :autosize="editable.autoSize || true"
        type="textarea"
        @change="textChange"
        @blur="inputComplete"
        @keydown.enter="inputComplete"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, nextTick, reactive, ref } from 'vue'
import { Edit } from '@element-plus/icons-vue'
import { ElButton, ElInput } from '@element-plus/components'
import { getDesignatedType, ns } from './util'
import { baseProps } from './base'

const emit = defineEmits(['onEnd', 'onStart', 'onChange', 'onTextChange'])

const props = defineProps({
  value: String,
  ...getDesignatedType(baseProps(), ['editable']),
})
const editable = reactive(props.editable)
const editValue = ref('')
const hub = ref(true)
const editInputRef = ref<HTMLInputElement | null>(null)
const triggerClick = async () => {
  editValue.value = props.value.trim()
  hub.value = false
  await nextTick()
  editInputRef.value?.focus()
  emit('onChange', hub.value)
  emit('onStart')
}
const textChange = (value: any) => {
  emit('onTextChange', value)
}
const inputComplete = () => {
  hub.value = true
  emit('onEnd')
  emit('onChange', hub.value)
}
</script>

<style lang="scss" scoped></style>
