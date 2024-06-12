<template>
  <div class="demo-no-trigger">
    <div>
      <el-color-picker v-model="color1" no-trigger />
      <span> current color: {{ color1 }} </span>
    </div>
    <div>
      <el-color-picker v-model="color2" no-trigger show-alpha />
      <span> current color: {{ color2 }} </span>
    </div>
    <div>
      <el-color-picker
        v-model="color3"
        no-trigger
        show-alpha
        :predefine="predefineColors"
        color-format="hex"
      />
      <span> current color: {{ color3 }} </span>
    </div>
    <div>
      <el-switch
        v-model="disabled"
        active-text="disable"
        inactive-text="enable"
      />
      <el-color-picker
        v-model="color4"
        :disabled="disabled"
        no-trigger
        show-alpha
        :predefine="predefineColors"
      />
      <span> current color: {{ color4 }} </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const color1 = ref('#409EFF')
const color2 = ref('rgba(19, 206, 102, 0.8)')
const color3 = ref('#722C5880')
const color4 = ref<string>()

const disabled = ref(true)

const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
])
</script>

<style>
.demo-no-trigger {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-start;
}
</style>
