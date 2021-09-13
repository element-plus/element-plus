<template>
  <div>
    <div style="margin-bottom: 15px">
      direction:
      <el-radio v-model="direction" label="horizontal">horizontal</el-radio>
      <el-radio v-model="direction" label="vertical">vertical</el-radio>
    </div>
    <div style="margin-bottom: 15px">
      fillRatio:<el-slider v-model="fillRatio"></el-slider>
    </div>
    <el-space
      fill
      wrap
      :fill-ratio="fillRatio"
      :direction="direction"
      style="width: 100%"
    >
      <el-card v-for="i in 5" :key="i" class="box-card">
        <template #header>
          <div class="card-header">
            <span>Card name</span>
            <el-button class="button" type="text">Operation button</el-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ 'List item ' + o }}
        </div>
      </el-card>
    </el-space>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return { direction: 'horizontal', fillRatio: 30 }
  },
}
</script>
