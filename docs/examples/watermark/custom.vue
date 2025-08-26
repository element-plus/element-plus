<script setup lang="ts">
import { reactive } from 'vue'

const config = reactive({
  content: 'Element Plus',
  font: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.15)',
  },
  zIndex: -1,
  rotate: -22,
  gap: [100, 100] as [number, number],
  offset: [] as unknown as [number, number],
})
</script>

<template>
  <div class="wrapper">
    <el-watermark
      class="watermark"
      :content="config.content"
      :font="config.font"
      :z-index="config.zIndex"
      :rotate="config.rotate"
      :gap="config.gap"
      :offset="config.offset"
    >
      <div class="demo">
        <h1>Element Plus</h1>
        <h2>A Vue 3 based component library for designers and developers</h2>
        <img src="/images/hamburger.png" alt="示例图片" />
      </div>
    </el-watermark>
    <el-form
      class="form"
      :model="config"
      label-position="top"
      label-width="50px"
    >
      <el-form-item label="Content">
        <el-input v-model="config.content" />
      </el-form-item>
      <el-form-item label="Color">
        <el-color-picker v-model="config.font.color" show-alpha />
      </el-form-item>
      <el-form-item label="FontSize">
        <el-slider v-model="config.font.fontSize" />
      </el-form-item>
      <el-form-item label="zIndex">
        <el-slider v-model="config.zIndex" />
      </el-form-item>
      <el-form-item label="Rotate">
        <el-slider v-model="config.rotate" :min="-180" :max="180" />
      </el-form-item>
      <el-form-item label="Gap">
        <el-space>
          <el-input-number v-model="config.gap[0]" controls-position="right" />
          <el-input-number v-model="config.gap[1]" controls-position="right" />
        </el-space>
      </el-form-item>
      <el-form-item label="Offset">
        <el-space>
          <el-input-number
            v-model="config.offset[0]"
            placeholder="offsetLeft"
            controls-position="right"
          />
          <el-input-number
            v-model="config.offset[1]"
            placeholder="offsetTop"
            controls-position="right"
          />
        </el-space>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
}
.watermark {
  display: flex;
  flex: auto;
}
.demo {
  flex: auto;
}
.form {
  width: 330px;
  margin-left: 20px;
  border-left: 1px solid #eee;
  padding-left: 20px;
}

img {
  z-index: 10;
  width: 100%;
  max-width: 300px;
  position: relative;
}
</style>
