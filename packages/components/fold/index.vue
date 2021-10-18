<template>
  <p ref="textBox" :class="['txt text-gray-600 my-2', { 'over-hidden': !obj.unfold }]">
    <span ref="spanBox">
      {{data}}
    </span>
  </p>
  <div class="btn mb-2 text-blue-400" v-if="obj.isOver && unfold" @click="obj.unfold = !obj.unfold">{{obj.unfold ? '收起' : '展开'}}</div>
</template>

<script setup lang="ts">
import { computed, nextTick, reactive, ref, watch } from "vue"

interface propsApi {
  line?: number
  unfold?: boolean
  data: string
}
const props = withDefaults(defineProps<propsApi>(), {
  line: 3,
  unfold: false
})
const line = computed(() => {
  let line = Math.trunc(props.line)
  return line > 0 ? line : 1
})

const obj = reactive({
  isOver: false, // 文本是否超出三行，默认否
  unfold: false, // 文本是否是展开状态 默认为收起
})

const textBox = ref()
const spanBox = ref()


watch(() => props.data, val => {
  nextTick(() => {
    setTimeout(() => {
      obj.isOver = spanBox.value.offsetHeight > textBox.value.offsetHeight
    }, 100)
  })
}, {immediate: true})


</script>

<style lang="scss" scoped>

.txt {
  font-size: 16px;
  line-height: 24px;
  color: #333;
  margin-bottom: 5px;
}
.over-hidden {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: v-bind(line);
  overflow: hidden;
}
</style>