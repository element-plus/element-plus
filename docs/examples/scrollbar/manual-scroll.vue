<template>
  <el-scrollbar ref="scrollbar" height="400px" always>
    <div ref="inner">
      <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
        {{ item }}
      </p>
    </div>
  </el-scrollbar>

  <el-slider
    v-model="value"
    :max="max"
    :format-tooltip="formatTooltip"
    @input="inputSlider"
  ></el-slider>
</template>

<script>
export default {
  data() {
    return {
      max: 0,
      value: 0,
    }
  },
  mounted() {
    this.max = this.$refs.inner.clientHeight - 380
  },
  methods: {
    inputSlider(value) {
      this.$refs.scrollbar.setScrollTop(value)
    },
    formatTooltip(value) {
      return `${value} px`
    },
  },
}
</script>
