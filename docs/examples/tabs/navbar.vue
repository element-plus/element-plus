<template>
  <el-space direction="vertical">
    <el-radio-group v-model="position">
      <el-radio-button v-for="pos in positions" :key="pos" :label="pos" />
    </el-radio-group>
    <div>
      <el-checkbox v-model="change" label="allow change" />
      <el-checkbox v-model="navbar" label="navbar" />
      <el-checkbox v-model="closable" label="icon close" />
    </div>
  </el-space>

  <el-divider content-position="left">default</el-divider>
  <div>
    <el-tabs
      :model-value="activeName"
      :tab-position="position"
      :closable="closable"
      :navbar="navbar"
      @tab-change="handleChange"
    >
      <template #prefix>
        <div>prefix</div>
      </template>
      <template #suffix>
        <div>suffix</div>
      </template>
      <el-tab-pane
        v-for="i in count"
        :key="i"
        :label="`Tab${i}`"
        :name="`name${i}`"
      />
    </el-tabs>
  </div>
  <el-divider content-position="left">card</el-divider>
  <div class="card">
    <el-tabs
      :model-value="activeName"
      :tab-position="position"
      type="card"
      :closable="closable"
      :navbar="navbar"
      @tab-change="handleChange"
    >
      <el-tab-pane
        v-for="i in count"
        :key="i"
        :label="`Tab${i}`"
        :name="`name${i}`"
      />
    </el-tabs>
  </div>
  <el-divider content-position="left">border-card</el-divider>
  <div class="border-card">
    <el-tabs
      :model-value="activeName"
      :tab-position="position"
      type="border-card"
      :closable="closable"
      :navbar="navbar"
      @tab-change="handleChange"
    >
      <el-tab-pane
        v-for="i in count"
        :key="i"
        :label="`Tab${i}`"
        :name="`name${i}`"
      />
    </el-tabs>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const positions = ref(['top', 'right', 'bottom', 'left'])
const position = ref('top')
const closable = ref(false)
const navbar = ref(true)

const activeName = ref('name1')
const count = ref(5)

const change = ref(true)
const handleChange = (name) => {
  if (change.value) {
    activeName.value = name
  }
}
</script>
