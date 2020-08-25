<template>
  <el-button @click="show = !show">
    display/hidden tab item
  </el-button>
  <el-button
    @click="activeName = activeName === 'first' ? 'second' : 'first'"
  >
    Change
  </el-button>

  <div class="flag">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane>
        <template #label>label-1slot-title</template>
        label-1slot-title
      </el-tab-pane>
      <template v-if="true">
        <el-tab-pane
          label="label-1"
          name="first"
        >
          label-1
        </el-tab-pane>
      </template>
      <el-tab-pane
        v-if="show"
        label="label-2"
        name="fourth"
      >
        label-2
      </el-tab-pane>
      <el-tab-pane label="label-3" name="second">label-3</el-tab-pane>
      <el-tab-pane label="label-4" name="third">label-4</el-tab-pane>
      <el-tab-pane v-for="i in 3" :key="i" :label="`a-${i}`">
        {{
          `name-${i}`
        }}
      </el-tab-pane>
    </el-tabs>
  </div>

  <div class="flag">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane
        closable
        label="label-1"
        name="first"
      >
        label-1
      </el-tab-pane>
      <el-tab-pane
        disabled
        label="label-2"
        name="fourth"
      >
        label-2
      </el-tab-pane>
      <el-tab-pane label="label-3" name="second">label-3</el-tab-pane>
      <el-tab-pane label="label-4" name="third">label-4</el-tab-pane>
    </el-tabs>
  </div>

  <div class="flag">
    <el-tabs
      v-model="activeName"
      type="border-card"
      @tab-click="handleClick"
    >
      <el-tab-pane
        lazy
        label="label-1"
        name="first"
      >
        label-1
      </el-tab-pane>
      <el-tab-pane
        lazy
        label="label-2"
        name="fourth"
      >
        label-2
      </el-tab-pane>
      <el-tab-pane
        lazy
        label="label-3"
        name="second"
      >
        label-3
      </el-tab-pane>
      <el-tab-pane
        lazy
        label="label-4"
        name="third"
      >
        label-4
      </el-tab-pane>
    </el-tabs>
  </div>

  <div class="flag">
    <el-button @click="tabPosition = 'top'">top</el-button>
    <el-button @click="tabPosition = 'right'">right</el-button>
    <el-button @click="tabPosition = 'bottom'">bottom</el-button>
    <el-button @click="tabPosition = 'left'">left</el-button>

    <el-tabs :tab-position="tabPosition" style="height: 200px;">
      <el-tab-pane label="label-1">label-1</el-tab-pane>
      <el-tab-pane label="label-3">label-3</el-tab-pane>
      <el-tab-pane label="label-4">label-4</el-tab-pane>
      <el-tab-pane label="label-2">label-2</el-tab-pane>
    </el-tabs>
  </div>

  <div class="flag">
    <el-tabs type="border-card">
      <el-tab-pane>
        <template #label>
          <i class="el-icon-date"></i> label-1
        </template>
        label-1
      </el-tab-pane>
      <el-tab-pane label="label-6">label-6</el-tab-pane>
      <el-tab-pane label="label-4">label-4</el-tab-pane>
      <el-tab-pane label="label-2">label-2</el-tab-pane>
    </el-tabs>
  </div>

  <div class="flag">
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      editable
      style="width: 450px;"
      @edit="handleTabsEdit"
    >
      <el-tab-pane
        v-for="item in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
        {{ item.content }}
      </el-tab-pane>
    </el-tabs>
  </div>

  <div class="flag">
    <div style="margin-bottom: 20px;">
      <el-button size="small" @click="addTab(editableTabsValue)">
        add tab
      </el-button>
    </div>
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      stretch
      addable
      closable
      @tab-remove="removeTab"
      @tab-add="addTab(editableTabsValue)"
    >
      <el-tab-pane
        v-for="item in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
        {{ item.content }}
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang='ts'>
export default {
  data() {
    return {
      show: false,
      activeName: 'second',
      tabPosition: 'left',

      editableTabsValue: '2',
      editableTabs: [
        {
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content',
        },
        {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content',
        },
      ],
      tabIndex: 2,
    }
  },
  methods: {
    addTab() {
      let newTabName = ++this.tabIndex + ''
      this.editableTabs.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content',
      })
      this.editableTabsValue = newTabName
    },
    removeTab(targetName) {
      let tabs = this.editableTabs
      let activeName = this.editableTabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }
      this.editableTabsValue = activeName
      this.editableTabs = tabs.filter(tab => tab.name !== targetName)
    },
    handleTabsEdit(targetName, action) {
      if (action === 'add') {
        let newTabName = ++this.tabIndex + ''
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content',
        })
        this.editableTabsValue = newTabName
      }
      if (action === 'remove') {
        let tabs = this.editableTabs
        let activeName = this.editableTabsValue
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1]
              if (nextTab) {
                activeName = nextTab.name
              }
            }
          })
        }
        this.editableTabsValue = activeName
        this.editableTabs = tabs.filter(
          tab => tab.name !== targetName,
        )
      }
    },
    handleClick(tab, event) {
      console.log(tab, event)
    },
  },
}
</script>
<style scoped>
.flag {
    border: 2px solid #eee;
    margin: 15px 0;
    padding: 10px;
    min-height: 250px;
}
</style>
