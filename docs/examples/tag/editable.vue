<template>
  <el-tag
    v-for="tag in dynamicTags"
    :key="tag"
    class="mx-1"
    closable
    :disable-transitions="false"
    @close="handleClose(tag)"
  >
    {{ tag }}
  </el-tag>
  <el-input
    v-if="inputVisible"
    ref="saveTagInput"
    v-model="inputValue"
    class="ml-1 w-20"
    size="small"
    @keyup.enter="handleInputConfirm"
    @blur="handleInputConfirm"
  >
  </el-input>
  <el-button v-else class="button-new-tag ml-1" size="small" @click="showInput">
    + New Tag
  </el-button>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'

const dynamicTags = ref(['Tag 1', 'Tag 2', 'Tag 3'])
const inputVisible = ref(false)
const inputValue = ref('')

const saveTagInput = ref()

function handleClose(tag) {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
}

function showInput() {
  inputVisible.value = true
  nextTick((_) => {
    saveTagInput.value.$refs.input.focus()
  })
}

function handleInputConfirm() {
  if (inputValue.value) {
    dynamicTags.value.push(inputValue.value)
  }
  inputVisible.value = false
  inputValue.value = ''
}
</script>
