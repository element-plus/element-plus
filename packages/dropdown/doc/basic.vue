<template>
  <div class="block">
    <el-dropdown ref="c" placement="right">
      <span ref="a" class="el-dropdown-link">
        dropdown<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu ref="b">
          <el-dropdown-item>Apple</el-dropdown-item>
          <el-dropdown-item>Orange</el-dropdown-item>
          <el-dropdown-item>Cherry</el-dropdown-item>
          <el-dropdown-item disabled>Peach</el-dropdown-item>
          <el-dropdown-item divided>Pear</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <br>
    <br>
    <el-dropdown trigger="click" :hide-on-click="false">
      <span class="el-dropdown-link">
        dropdown<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Apple</el-dropdown-item>
          <el-dropdown-item>Orange</el-dropdown-item>
          <el-dropdown-item>Cherry</el-dropdown-item>
          <el-dropdown-item disabled>Peach</el-dropdown-item>
          <el-dropdown-item divided>Pear</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <br>
    <br>
    <el-dropdown>
      <el-button type="primary">
        dropdown<i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Apple</el-dropdown-item>
          <el-dropdown-item>Orange</el-dropdown-item>
          <el-dropdown-item>Cherry</el-dropdown-item>
          <el-dropdown-item disabled>Peach</el-dropdown-item>
          <el-dropdown-item divided>Pear</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <br>
    <br>
    <el-dropdown @command="handleCommand">
      <el-button type="primary">
        dropdown<i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="a">Apple</el-dropdown-item>
          <el-dropdown-item command="b">Orange</el-dropdown-item>
          <el-dropdown-item command="c">Cherry</el-dropdown-item>
          <el-dropdown-item command="d" disabled>Peach</el-dropdown-item>
          <el-dropdown-item command="e" divided>Pear</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <br>
    <br>
    <el-dropdown split-button type="primary" @click="handleClick">
      dropdown
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Apple</el-dropdown-item>
          <el-dropdown-item>Orange</el-dropdown-item>
          <el-dropdown-item>Cherry</el-dropdown-item>
          <el-dropdown-item disabled>Peach</el-dropdown-item>
          <el-dropdown-item divided>Pear</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <br>
    <br>
    <el-dropdown
      split-button
      size="medium"
      type="primary"
      @click="handleClick"
    >
      dropdown
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Apple</el-dropdown-item>
          <el-dropdown-item>Orange</el-dropdown-item>
          <el-dropdown-item>Cherry</el-dropdown-item>
          <el-dropdown-item disabled>Peach</el-dropdown-item>
          <el-dropdown-item divided>Pear</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <br>
    <br>
    <el-dropdown
      split-button
      size="small"
      type="primary"
      @click="handleClick"
    >
      dropdown
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Apple</el-dropdown-item>
          <el-dropdown-item>Orange</el-dropdown-item>
          <el-dropdown-item>Cherry</el-dropdown-item>
          <el-dropdown-item disabled>Peach</el-dropdown-item>
          <el-dropdown-item divided>Pear</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <br>
    <br>
    <el-dropdown
      split-button
      size="mini"
      type="primary"
      @click="handleClick"
    >
      dropdown
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Apple</el-dropdown-item>
          <el-dropdown-item>Orange</el-dropdown-item>
          <el-dropdown-item>Cherry</el-dropdown-item>
          <el-dropdown-item disabled>Peach</el-dropdown-item>
          <el-dropdown-item divided>Pear</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="tsx">
import { defineComponent } from 'vue'
export default defineComponent({
  mounted() {
    console.log(this.$refs.c.$refs.popper.$refs.popperRef)
  },
  methods: {
    handleClick() {
      alert('button click')
    },
    handleCommand(command) {
      alert('click on item ' + command)
    },
  },
})
</script>

<style>
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-dropdown-menu__item {
  word-break: keep-all;
}
</style>
