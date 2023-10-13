<template>
  <div class="play-container">
    <el-typography font="Times New Roman" color="#333">
      <el-base editable type="success">
        Scientifically speaking, the word destruction is not accurate, because
        nothing is really destroyed, the amount of matter is little or nothing,
        the angular momentum is still there, but the composition of matter
        changes.
      </el-base>
      <div />
      <el-base
        :editable="{
          icon: Search,
        }"
        type="danger"
      >
        Life is like a deck of cards, rewash it..... But life is a flush, and
        everything's gone in the wash
      </el-base>
      <div />
      <el-base
        :copyable="{
          tooltip: true,
          text: () => 111,
        }"
      >
        Leave a message bottle, put the future to the new chance.
      </el-base>
      <div />
      <el-base copyable>
        But I've always been there, I'm just not that beautiful flush anymore.
      </el-base>
    </el-typography>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Delete, Edit, Search, Share, upload } from '@element-plus/icons-vue'
import { ElBase, ElParagraph, ElTypography } from '@element-plus/components'
import '@element-plus/theme-chalk/src/index.scss'
</script>
