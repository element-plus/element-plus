<template>
  <el-button plain @click="dialogVisible = true">
    Open the event Dialog
  </el-button>

  <el-dialog
    v-model="dialogVisible"
    modal-class="overide-animation"
    :before-close="
      (doneFn) => {
        console.log('before-close'), doneFn()
      }
    "
    @open="console.log('open')"
    @open-auto-focus="console.log('open-auto-focus')"
    @opened="console.log('opened')"
    @close="console.log('close')"
    @close-auto-focus="console.log('close-auto-focus')"
    @closed="console.log('closed')"
  >
    <span>It's a event Dialog</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dialogVisible = ref(false)
</script>

<style lang="scss">
.dialog-fade-enter-active {
  animation: modal-fade-in 2s;
  .el-overlay-dialog {
    animation: dialog-fade-in 2s;
  }
}

.dialog-fade-leave-active {
  animation: modal-fade-out 2s;
  .el-overlay-dialog {
    animation: dialog-fade-out 2s;
  }
}
</style>
