<template>
  <div>
    <div>
      <el-checkbox v-model="config.autoInsertSpace">
        autoInsertSpace
      </el-checkbox>
      <el-checkbox v-model="config.plain"> plain </el-checkbox>
      <el-checkbox v-model="config.round"> round </el-checkbox>
      <el-select v-model="config.type" class="ml-5" style="max-width: 150px">
        <el-option
          v-for="type in buttonTypes.filter(Boolean)"
          :key="type"
          :value="type"
        />
      </el-select>
    </div>
    <el-divider />
    <el-config-provider :button="config">
      <el-button>中文</el-button>
    </el-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { buttonTypes } from 'element-plus'

const config = reactive({
  autoInsertSpace: true,
  type: 'default',
  plain: true,
  round: true,
})
</script>
