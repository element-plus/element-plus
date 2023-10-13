<template>
  <div class="play-container">
    <el-typography font="Georgia">
      <h3 class="title">The New Colossus</h3>
      <el-paragraph>
        <el-base code>
          Not like the brazen giant of Greek fame, With conquering limbs astride
          from land to land; Here at our sea-washed, sunset gates shall stand A
          mighty woman with a torch, whose flame Is the imprisoned lightning,
          and her name Mother of Exiles. From her beacon-hand Glows world-wide
          welcome; her mild eyes command The air-bridged harbor that twin cities
          frame.
        </el-base>
        <blockquote>
          <p>
            Not like the brazen giant of Greek fame, With conquering limbs
            astride from land to land; Here at our sea-washed, sunset gates
            shall stand A mighty woman with a torch, whose flame Is the
            imprisoned lightning, and her name Mother of Exiles. From her
            beacon-hand Glows world-wide welcome; her mild eyes command The
            air-bridged harbor that twin cities frame.
          </p>
        </blockquote>
        <pre>
          body {
            color: red;
          }
          </pre
        >
      </el-paragraph>
    </el-typography>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import { Delete, Edit, Search, Share, upload } from '@element-plus/icons-vue'
import { ElBase, ElParagraph, ElTypography } from '@element-plus/components'
import '@element-plus/theme-chalk/src/index.scss'
</script>
<style lang="scss" scoped>
.play-container {
  padding: 20px;
}
.title {
  color: var(--el-color-primary);
  margin-bottom: 20px;
}
</style>
