<template>
  <el-text tag="p">
    open(close) the Dropdown list2 will close(open) the Dropdown List1.
  </el-text>
  <el-button class="block m-3" @click="showClick">show</el-button>
  <el-dropdown ref="dropdown1" trigger="contextmenu" style="margin-right: 30px">
    <el-link :underline="false" type="primary">Dropdown List1</el-link>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
        <el-dropdown-item disabled>Action 4</el-dropdown-item>
        <el-dropdown-item divided>Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

  <el-dropdown trigger="contextmenu" @visible-change="handleVisible2">
    <el-link :underline="false" type="primary">Dropdown List2</el-link>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
        <el-dropdown-item disabled>Action 4</el-dropdown-item>
        <el-dropdown-item divided>Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const dropdown1 = ref()
function handleVisible2(visible: any) {
  if (visible) {
    dropdown1.value.handleClose()
  } else {
    dropdown1.value.handleOpen()
  }
}
function showClick() {
  dropdown1.value.handleOpen()
}
</script>
