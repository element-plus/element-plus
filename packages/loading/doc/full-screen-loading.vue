<template>
  <el-button
    v-if="swap"
    v-loading.fullscreen.lock="fullscreenLoading"
    type="primary"
    @click="openFullScreen1"
  >
    指令方式
  </el-button>
  <el-button
    type="primary"
    @click="openFullScreen2"
  >
    服务方式
  </el-button>
  <button @click="click">1111</button>

  <div id="test" style="height: 300px;background: #3a8ee6">1111</div>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
</template>

<script>
export default {
  data() {
    return {
      fullscreenLoading: false,
      swap: true,
    }
  },
  methods: {
    click(){
      this.swap = !this.swap
    },
    openFullScreen1() {
      this.fullscreenLoading = true
      setTimeout(() => {
        this.fullscreenLoading = false
      }, 2000)
    },
    openFullScreen2() {
      const loading = this.$loading({
        target: '#test',
        lock: true,
        fullscreen: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)',
      })
      setTimeout(() => {
        loading.close()
      }, 2000)
    },
  },
}
</script>
