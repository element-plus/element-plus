<template>
  <div>
    <div style="margin-bottom: 15px">
      fill: <el-switch v-model="fill"></el-switch>
    </div>
    <el-space :fill="fill" wrap>
      <el-card v-for="i in 3" :key="i" class="box-card">
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
    return { fill: true }
  },
}
</script>
