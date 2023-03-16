<template>
  <el-collapse accordion>
    <el-collapse-item name="1">
      <template #title>
        Consistency
        <el-icon class="ml-1">
          <info-filled />
        </el-icon>
      </template>
      <el-text tag="p">
        Consistent with real life: in line with the process and logic of real
        life, and comply with languages and habits that the users are used
        to;<br />
        Consistent within interface: all elements should be consistent, such as:
        design style, icons and texts, position of elements, etc.
      </el-text>
    </el-collapse-item>
    <el-collapse-item title="Feedback" name="2">
      <el-text tag="p">
        Operation feedback: enable the users to clearly perceive their
        operations by style updates and interactive effects;<br />
        Visual feedback: reflect current state by updating or rearranging
        elements of the page.
      </el-text>
    </el-collapse-item>
    <el-collapse-item title="Efficiency" name="3">
      <el-text tag="p">
        Simplify the process: keep operating process simple and intuitive;<br />
        Definite and clear: enunciate your intentions clearly so that the users
        can quickly understand and make decisions;<br />
        Easy to identify: the interface should be straightforward, which helps
        the users to identify and frees them from memorizing and recalling.
      </el-text>
    </el-collapse-item>
    <el-collapse-item title="Controllability" name="4">
      <el-text tag="p">
        Decision making: giving advices about operations is acceptable, but do
        not make decisions for the users;<br />
        Controlled consequences: users should be granted the freedom to operate,
        including canceling, aborting or terminating current operation.
      </el-text>
    </el-collapse-item>
  </el-collapse>
</template>

<script lang="ts" setup>
import { InfoFilled } from '@element-plus/icons-vue'
</script>
