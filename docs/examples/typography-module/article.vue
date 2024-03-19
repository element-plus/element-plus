<template>
  <el-typography font="Times New Roman">
    <h2>introduce</h2>
    <el-paragraph color="#409EFF">
      《三体》是刘慈欣创作的长篇科幻小说系列，由《三体》《三体2：黑暗森林》《三体3：死神永生》组成，第一部于2006年5月起在《科幻世界》杂志上连载，第二部于2008年5月首次出版，第三部则于2010年11月出版。
    </el-paragraph>

    <h2>general situation</h2>
    <el-paragraph>
      作品讲述了
      <el-base tag="mark">『地球人类文明和三体文明』</el-base
      >的信息交流、生死搏杀及两个文明在宇宙中的兴衰历程。《三体》的文本叙事在“后人类”的思考上有着重大突破，构建了科学与文学的互动范式，将道德内涵引入对科技的辩证思考中，并以文学手段在文化语境中对科技进行大胆假设和重构，但科技核心只是一个叙事跳板，是完成现实超越的重要媒介，也是人类命运共同体书写的重要工具。
      <el-base color="red" tag="b">
        《三体》最吸引人的地方在于通过对人类中心主义的解构，继而完成对人与自然、动物之间的伦理反思与文学表达，最终指向去人类中心化的思想内核。
        [62] 。</el-base
      >
    </el-paragraph>
    <h2>awards</h2>
    <el-paragraph>
      <ul>
        <li>
          <el-link href="#"
            >2006年度第十八届中国科幻文学银河奖科幻特别奖
          </el-link>
        </li>
        <li>
          <el-link href="#">2010年度第二十二届中国科幻银河奖特别奖 </el-link>
        </li>
        <li>
          <el-link href="#">第二届全球华语科幻星云奖最佳长篇小说金奖 </el-link>
        </li>
        <li>
          <el-link href="#">第一届西湖·类型文学双年奖金奖 </el-link>
        </li>
      </ul>
    </el-paragraph>
    <el-paragraph>
      按 <el-base keyboard> Eec </el-base> 键退出阅读……
    </el-paragraph>
  </el-typography>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
import { ElBase, ElParagraph, ElTypography } from '@element-plus/components'
import '@element-plus/theme-chalk/src/index.scss'
</script>

<style lang="scss"></style>
