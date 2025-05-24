<template>
  <div>
    <el-config-provider :icons="icons">
      <div class="space-y-4">
        <div class="flex flex-wrap items-center gap-4">
          <el-select
            v-model="value"
            placeholder="Select"
            clearable
            style="width: 240px"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>

          <el-select-v2
            v-model="value2"
            clearable
            placeholder="Select"
            style="width: 240px"
            :options="options"
          />

          <el-time-picker v-model="value3" placeholder="Arbitrary time" />

          <el-time-select
            v-model="value4"
            style="width: 240px"
            start="08:30"
            step="00:15"
            end="18:30"
            placeholder="Select time"
          />
        </div>

        <div class="flex flex-wrap items-center space-x-4">
          <el-button plain @click="dialogVisible = true">
            Click to open the Dialog
          </el-button>

          <el-button plain @click="openMessage">
            Click to open message
          </el-button>
        </div>

        <el-alert title="Primary alert" type="primary" show-icon />
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
import {
  ArrowDownBold,
  Bell,
  CircleClose,
  Close,
} from '@element-plus/icons-vue'

const icons = reactive({
  close: CircleClose,
  dropdown: ArrowDownBold,
  clear: Close,
  info: Bell,
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
const value2 = ref('1')
const value3 = ref()
const value4 = ref()
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
