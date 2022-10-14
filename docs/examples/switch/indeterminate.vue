<template>
  <el-switch
    v-model="value1"
    indeterminate
    :active-icon="Check"
    :inactive-icon="Close"
  />
  <br />
  <el-switch
    v-model="value2"
    class="mt-2 ml-6"
    inline-prompt
    :active-icon="Check"
    :inactive-icon="Close"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Check, Close } from '@element-plus/icons-vue'

const value1 = ref(null)
const value2 = ref('maybe')
</script>
