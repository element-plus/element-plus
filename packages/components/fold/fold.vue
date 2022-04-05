<template>
  <div class="u-fold">
    <div class="txt-box" :class="{ 'over-hidden': fold }">
      <div ref="divBox">
        <slot></slot>
      </div>
    </div>
    <div class="action-box user-select">
      <div class="expand-btn" v-if="isOver && unfold" @click="fold = !fold">{{fold ? '展开' : '收起'}}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue"

defineOptions({
  name: "ElFold"
})

interface Props {
  line?: number | string
  unfold?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  line: 5,
})
const line = computed(() => {
  let line = Math.trunc(Number(props.line))
  return line > 0 ? line : 1
})

// 文本是否是展开状态 默认为收起
const fold = ref(true)
//文本是否超出五行，默认否
const isOver = ref(false)

const divBox = ref<HTMLDivElement>()

let observer: ResizeObserver

onMounted(() => {
  observer = new ResizeObserver(entry => {
    if (fold.value&&divBox.value) {
      //offsetHeight：包括内容可见部分的高度，border，可见的padding，水平方向的scrollbar（如果存在）；不包括margin。
      // clientHeight：包括内容可见部分的高度，可见的padding；不包括border，水平方向的scrollbar，margin。
      //scrollHeight：包括内容的高度（可见与不可见），padding（可见与不可见）；不包括border，margin。
      isOver.value = divBox.value.offsetHeight < divBox.value.scrollHeight
    }
  })
 
	observer.observe(divBox.value as any);
})

onUnmounted(() => {
  observer.disconnect()
})

</script>

<style lang="scss" scoped>
.u-fold {
  font-size: 14px;
  line-height: 2rem;
  color: #515767;

  .txt-box {
    margin-top: 0.5rem;
    // 会对过长的单词做词内断词处理，这样单词始终会在容器中，不会溢出容器
    word-wrap: break-word;
  }

  .action-box {
    margin-bottom: 0.5rem;
    .expand-btn {
      display: inline-block;
      line-height: 22px;
      cursor: pointer;
      color: #1171ee;
    }
  }

  .over-hidden {
    //象作为弹性伸缩盒子模型显示。
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    //设置或检索伸缩盒对象的子元素的排列方式。
    -webkit-box-orient: vertical;
    //用来限制在一个块元素显示的文本的行数。 
    -webkit-line-clamp: v-bind(line);
  }
}


</style>