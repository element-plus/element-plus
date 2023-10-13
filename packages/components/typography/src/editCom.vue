<template>
  <div ref="editBox" :class="ns.e('edit')">
    {{ props }}
    <el-button text :icon="props.icon || Edit" @click="triggerClick">
      {{ props.triggerText }}
    </el-button>
    <template v-if="!hub">
      <el-input
        ref="editInputRef"
        v-model="editValue"
        resize="none"
        class="inputBox"
        :placeholder="props.placeholder"
        :autosize="props.autoSize || true"
        type="textarea"
        @change="textChange"
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
import { ns } from './util'
import { baseProps } from './base'
import type { ExtractPropTypes } from 'vue'
// import type { PropType } from 'vue'
import type { EditConfig } from './base'

// import type { InternalBlockProps } from './typography'
// import { getDesignatedType, ns } from './util'

const emit = defineEmits(['onEnd', 'onStart', 'onChange', 'onTextChange'])
type presentProps = {
  value: string
  // ...baseProps()['editable']
}
console.log(baseProps())
const props = defineProps<presentProps>()

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
const textChange = (value) => {
  emit('onTextChange', value)
}
const inputComplete = () => {
  hub.value = true
  emit('onEnd')
  emit('onChange', hub.value)
}
</script>

<style lang="scss" scoped>
.edit {
  display: inline-block;
}
.inputBox {
  width: 100%;
}
</style>
