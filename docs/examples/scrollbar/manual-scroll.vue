<template>
  <el-scrollbar ref="scrollbar" height="400px" always @scroll="scroll">
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

<script lang="ts">
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
    scroll({ scrollTop }) {
      this.value = scrollTop
    },
    formatTooltip(value) {
      return `${value} px`
    },
  },
}
</script>
