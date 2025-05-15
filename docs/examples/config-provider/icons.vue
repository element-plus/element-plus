<template>
  <div>
    <el-config-provider :icons="icons">
      <div class="flex items-center space-x-4">
        <el-select v-model="value" placeholder="Select" style="width: 240px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>

        <el-button plain @click="dialogVisible = true">
          Click to open the Dialog
        </el-button>

        <el-button plain @click="openMessage">
          Click to open message
        </el-button>
      </div>

      <el-dialog
        v-model="dialogVisible"
        title="Tips"
        width="500"
        :before-close="handleClose"
      >
        <span>This is a message</span>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="dialogVisible = false">
              Confirm
            </el-button>
          </div>
        </template>
      </el-dialog>
    </el-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ArrowDownBold, CircleClose } from '@element-plus/icons-vue'

const icons = reactive({
  close: CircleClose,
  dropdown: ArrowDownBold,
})
const options = [
  {
    value: '1',
    label: 'Option 1',
  },
  {
    value: '2',
    label: 'Option 2',
  },
]
const value = ref('1')
const dialogVisible = ref(false)

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}

const openMessage = () => {
  ElMessage({
    message: 'This is a message.',
    showClose: true,
  })
}
</script>
