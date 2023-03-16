<template>
  <el-row>
    <el-col
      v-for="(o, index) in 2"
      :key="o"
      :span="8"
      :offset="index > 0 ? 2 : 0"
    >
      <el-card :body-style="{ padding: '0px' }">
        <el-image
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="block mb-3"
        />
        <el-text size="large" class="block px-3">Yummy hamburger</el-text>
        <el-row class="p-3">
          <el-col :span="16">
            <el-text tag="time" size="small" type="info" class="mr-2">
              {{ currentDate }}
            </el-text>
          </el-col>
          <el-col :span="8">
            <el-button text class="button">Operating</el-button>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const currentDate = ref(new Date())
</script>
