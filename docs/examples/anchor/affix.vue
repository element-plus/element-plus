<template>
  <el-affix :offset="60">
    <el-anchor :offset="70" style="width: 300px">
      <el-anchor-link href="#basic-usage">Basic Usage</el-anchor-link>
      <el-anchor-link href="#horizontal-mode">Horizontal Mode</el-anchor-link>
      <el-anchor-link href="#affix-mode">Affix Mode</el-anchor-link>
      <el-anchor-link href="#anchor-api">
        Anchor API
        <template #sublist>
          <el-anchor-link href="#anchor-attributes">
            Anchor Attributes
          </el-anchor-link>
          <el-anchor-link href="#anchor-events">Anchor events</el-anchor-link>
        </template>
      </el-anchor-link>
    </el-anchor>
  </el-affix>
</template>
