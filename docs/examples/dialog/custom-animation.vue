<template>
  <div class="demo-block">
    <div class="demo-buttons">
      <el-button plain @click="openDialog('fade')"> Default </el-button>
      <el-button plain @click="openDialog('scale')"> Scale </el-button>
      <el-button plain @click="openDialog('slide')"> Slide </el-button>
      <el-button plain @click="openDialog('bounce')"> Bounce </el-button>
      <el-button plain @click="openDialogWithObject"> Object Config </el-button>
    </div>

    <el-dialog
      ref="dialogRef"
      v-model="dialogVisible"
      class="custom-transition-dialog"
      :title="`${currentAnimation} Animation Dialog`"
      width="30%"
      :transition="transitionConfig"
    >
      <div class="dialog-content">
        <p>
          Current animation: <strong>{{ currentAnimation }}</strong>
        </p>
        <p>
          This dialog demonstrates the {{ currentAnimation }} animation effect.
        </p>
        <p v-if="isObjectConfig">
          <strong>Using object configuration:</strong><br />
          <code>{{ JSON.stringify(transitionConfig, null, 2) }}</code>
        </p>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

import type { DialogTransition } from 'element-plus'

const dialogVisible = ref(false)
const currentAnimation = ref('fade')
const dialogRef = ref()
const isObjectConfig = ref(false)

const transitionConfig = computed<DialogTransition>(() => {
  if (isObjectConfig.value) {
    return {
      name: 'dialog-custom-object',
      appear: true,
      mode: 'out-in',
      duration: 500,
    }
  }
  return `dialog-${currentAnimation.value}`
})

const openDialog = (type: string) => {
  currentAnimation.value = type
  isObjectConfig.value = false
  dialogVisible.value = true
}

const openDialogWithObject = () => {
  currentAnimation.value = 'object-config'
  isObjectConfig.value = true
  dialogVisible.value = true
}
</script>

<style scoped>
.demo-buttons {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.dialog-content {
  line-height: 1.6;
}

.dialog-content p {
  margin: 8px 0;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

code {
  background: var(--el-bg-color-page);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  display: block;
  margin-top: 8px;
}
</style>

<style>
/* Scale Animation */
.dialog-scale-enter-active,
.dialog-scale-leave-active {
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.dialog-scale-enter-active .el-dialog,
.dialog-scale-leave-active .el-dialog {
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.dialog-scale-enter-from .el-dialog {
  transform: scale(0.5);
  opacity: 0;
}

.dialog-scale-leave-to .el-dialog {
  transform: scale(0.5);
  opacity: 0;
}

/* Slide Animation */
.dialog-slide-enter-active,
.dialog-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.dialog-slide-enter-active .el-dialog,
.dialog-slide-leave-active .el-dialog {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.dialog-slide-enter-from .el-dialog {
  transform: translateY(-100px);
  opacity: 0;
}

.dialog-slide-leave-to .el-dialog {
  transform: translateY(-100px);
  opacity: 0;
}

/* Bounce Animation */
.dialog-bounce-enter-active,
.dialog-bounce-leave-active {
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.dialog-bounce-enter-active .el-dialog,
.dialog-bounce-leave-active .el-dialog {
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.dialog-bounce-enter-from .el-dialog {
  transform: scale(0.3) translateY(-50px);
  opacity: 0;
}

.dialog-bounce-leave-to .el-dialog {
  transform: scale(0.3) translateY(-50px);
  opacity: 0;
}

/* Object Configuration Animation */
.dialog-custom-object-enter-active,
.dialog-custom-object-leave-active {
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.dialog-custom-object-enter-active .el-dialog,
.dialog-custom-object-leave-active .el-dialog {
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.dialog-custom-object-enter-from .el-dialog {
  transform: rotate(180deg) scale(0.5);
  opacity: 0;
}

.dialog-custom-object-leave-to .el-dialog {
  transform: rotate(-180deg) scale(0.5);
  opacity: 0;
}
</style>
