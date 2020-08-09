<template>
  <div>
    <div>
      <el-alert
        title="success alert"
        type="success"
      />
      <el-alert
        title="info alert"
        type="info"
      />
      <el-alert
        title="warning alert"
        type="warning"
      />
      <el-alert
        title="error alert"
        type="error"
      />
    </div>
    <div>
      <el-alert
        title="success alert"
        type="success"
        show-icon
      />
      <el-alert
        title="info alert"
        type="info"
        effect="dark"
      />
      <el-alert
        title="warning alert"
        type="warning"
        :closable="false"
      />
      <el-alert
        title="error alert"
        type="error"
        center
      />
    </div>
  </div>
</template>

<style scoped>
.el-alert {
  margin: 6px;
}
</style>

