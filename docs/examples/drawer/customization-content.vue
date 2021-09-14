<template>
  <el-button type="text" @click="table = true"
    >Open Drawer with nested table</el-button
  >
  <el-button type="text" @click="dialog = true"
    >Open Drawer with nested form</el-button
  >
  <el-drawer
    v-model="table"
    title="I have a nested table inside!"
    direction="rtl"
    size="50%"
  >
    <el-table :data="gridData">
      <el-table-column
        property="date"
        label="Date"
        width="150"
      ></el-table-column>
      <el-table-column
        property="name"
        label="Name"
        width="200"
      ></el-table-column>
      <el-table-column property="address" label="Address"></el-table-column>
    </el-table>
  </el-drawer>

  <el-drawer
    ref="drawer"
    v-model="dialog"
    title="I have a nested form inside!"
    :before-close="handleClose"
    direction="ltr"
    custom-class="demo-drawer"
  >
    <div class="demo-drawer__content">
      <el-form :model="form">
        <el-form-item label="Name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Area" :label-width="formLabelWidth">
          <el-select
            v-model="form.region"
            placeholder="Please select activity area"
          >
            <el-option label="Area1" value="shanghai"></el-option>
            <el-option label="Area2" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div class="demo-drawer__footer">
        <el-button @click="cancelForm">Cancel</el-button>
        <el-button
          type="primary"
          :loading="loading"
          @click="$refs.drawer.closeDrawer()"
          >{{ loading ? 'Submitting ...' : 'Submit' }}</el-button
        >
      </div>
    </div>
  </el-drawer>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { ElMessageBox } from 'element-plus'

export default defineComponent({
  setup() {
    const state = reactive({
      table: false,
      dialog: false,
      loading: false,
      gridData: [
        {
          date: '2016-05-02',
          name: 'Peter Parker',
          address: 'Queens, New York City',
        },
        {
          date: '2016-05-04',
          name: 'Peter Parker',
          address: 'Queens, New York City',
        },
        {
          date: '2016-05-01',
          name: 'Peter Parker',
          address: 'Queens, New York City',
        },
        {
          date: '2016-05-03',
          name: 'Peter Parker',
          address: 'Queens, New York City',
        },
      ],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      formLabelWidth: '80px',
      timer: null,
    })

    const handleClose = (done) => {
      if (state.loading) {
        return
      }
      ElMessageBox.confirm('Do you want to submit?')
        .then(() => {
          state.loading = true
          state.timer = setTimeout(() => {
            done()
            // 动画关闭需要一定的时间
            setTimeout(() => {
              state.loading = false
            }, 400)
          }, 2000)
        })
        .catch(() => {
          // catch error
        })
    }

    const cancelForm = () => {
      state.loading = false
      state.dialog = false
      clearTimeout(state.timer)
    }

    return {
      ...toRefs(state),
      handleClose,
      cancelForm,
    }
  },
})
</script>
