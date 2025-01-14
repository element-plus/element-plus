<!-- 虚拟滚动组件 -->
<template>
  <div
    ref="virtualScrollRef"
    :class="[
      ns.b(), {
        'is-horizontal': !isVerticalDir
      }
    ]"
  >
    <!-- 滚动条轨道长度 -->
    <div
      :class="[ns.e('track')]"
      :style="{
        [isVerticalDir ? 'height' : 'width']: `${ scrollTrackLen }px`
      }"
    ></div>
    <!-- 列表项渲染区域 -->
    <div
      :class="[ns.e('wrapper')]"
      :style="{
        transform: isVerticalDir ? `translate3d(0, ${ currentOffset }px, 0)` : `translate3d(${ currentOffset }px, 0, 0)`,
      }"
    >
      <div
        v-for="(item, index) in virtualItems"
        :key="`${ item.index }-${ index }`"
        :ref="dom => updateTickByDomIndex(item.index, dom)"
        :class="[ns.e('item')]"
      >
        <slot
          :index="item.index"
          :data="item.data"
        >
          {{ item.data }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Align, Direction, VirtualScrollInstance } from './virtual-scroll';
import { useState, nextTickLoop } from './state';
import {
  nextTick,
  onBeforeUnmount,
  onMounted,
  watch
} from 'vue';
import { isNil } from 'lodash-es';
import { useNamespace } from '@element-plus/hooks'

defineOptions({
  name: 'ElVirtualScroll',
})

interface Props {
  // 虚拟滚动列表数据
  listData: any[]
  // 滚动方向
  direction?: Direction
  // 可视窗内展示的首条元素下标
  index?: number,
  // 子元素平均高度或宽度，不传默认计算
  averageSpace?: number
}

// 定义组件属性
const props = withDefaults(defineProps<Props>(), {
  listData: () => ([]),
  // 默认垂直方向
  direction: 'vertical',
  // 可视窗内展示的首条元素下标
  index: 0,
  // 子元素平均占用空间
  averageSpace: 10
});

// 定义组件事件
const emits = defineEmits<{
  (e: 'virtualScroll', index: [number, number]): void;
  (e: 'update:index', index: number): void;
}>();

const ns = useNamespace('virtual-scroll');

const {
  scrollTrackLen,
  currentOffset,
  virtualItems,
  updateVirtualItems,
  virtualScrollRef,
  updateTickByDomIndex,
  slideWinPos,
  isVerticalDir,
  onViewWinResize,
  updateViewItemsByDis,
  resetSideWinPos,
} = useState(props);

// 是否停止监听滚动事件
let pauseScroll: boolean = false;
// 是否正在滚动中
let scrolling: boolean = false;
let timer: null | number = null;

/**
 * 根据滚动距离，刷新当前视窗内展示元素
 * @param isForce 是否强制刷新
 */
const onScroll = (isForce: boolean = false) => {
  if (pauseScroll || isNil(virtualScrollRef.value)) {
    // 暂停监听滚动事件
    return;
  }

  // 滚动至指定距离并显示对应虚拟元素
  const {
    startIndex,
    endIndex,
  } = updateViewItemsByDis(isForce);
  // 触发vir-scrol事件
  emits('virtualScroll', [startIndex, endIndex]);
  /**
   * 鼠标滚动或拖拽滚动条时，标记滚动状态
   * 避免触发监听props.index回调造成死循环
   */
  scrolling = true;
  // 支持v-model:index
  emits('update:index', startIndex);
  /**
   * 连续触发滚动事件后，位置轴上可能数据已更新
   * 此时计算的虚拟元素与滚动距离可能不匹配
   * 在最后一次触发滚动事件后追加一次矫正
   */
  if (timer) {
    clearTimeout(timer);
  }
  timer = window.setTimeout(() => {
    timer = null;
    nextTickLoop(() => updateViewItemsByDis()).then((finalPos) => {
      emits('update:index', finalPos.startIndex);
      emits('virtualScroll', [finalPos.startIndex, finalPos.endIndex]);
      nextTick(() => {
        scrolling = false;
      });
    });
  }, 60);
};

/**
 * 手动滚动至指定元素
 * @param index 指定元素下标
 * @param align 指定元素相对视窗位置
 */
const scrollToIndex = async (index: number, align: Align = 'start') => {
  // 当前正在执行滚动事件
  if (scrolling) {
    return;
  }

  const {
    buffStartIndex,
    startIndex,
    endIndex,
    scrollOffset,
  } = await nextTickLoop(() => {
    // 可视窗内可见虚拟元素起始下标
    const prePos = slideWinPos.getWinRecoodByIndex(index, align);
    // 展示虚拟滚动项列表（含缓存数据）
    return {
      isChange: updateVirtualItems(prePos.buffStartIndex, prePos.buffEndIndex, true),
      ...prePos,
    };
  });
  // 可视项偏移至buff起始部分
  currentOffset.value = slideWinPos.getAbsoluteDistance(buffStartIndex);
  // 更新当前index
  emits('update:index', startIndex);
  emits('virtualScroll', [startIndex, endIndex]);
  
  // 避免触发scroll事件造成死循环
  pauseScroll = true;
  // 滚动条滚动至指定位置
  virtualScrollRef.value?.scrollTo({
    // 滚动条滚动至显示位置
    [isVerticalDir.value ? 'top' : 'left']: scrollOffset,
  })
  pauseScroll = false;
};

// 监听组件传入列表项发生变化
watch(() => props.listData, () => {
  resetSideWinPos();
  // 基于当前滚动距离，重新获取显示项
  onScroll(true);
});

// 监听组件direction方向发生变化
watch(() => props.direction, () => {
  // 重置位置轴
  resetSideWinPos();
  // 滚动至起点
  scrollToIndex(0);
});

// 监听组件index参数，滚动至对应元素
watch(() => props.index, () => {
  // 当前正在滚动，可能触发index变化，无需重复计算
  scrollToIndex(props.index);
});

// 监听虚拟滚动可视窗尺寸变化
const resizeObserver = new ResizeObserver(() => {
  onViewWinResize();
  // 视窗尺寸如果为0，判定为隐藏元素，不更新展示元素
  if (slideWinPos.slideWinSize > 0) {
    onScroll();
  }
});
const scrollListener = () => {
  onScroll();
};
onMounted(() => {
  virtualScrollRef.value?.addEventListener('scroll', scrollListener);
  if (virtualScrollRef.value) {
    resizeObserver.observe(virtualScrollRef.value);
  }
});
onBeforeUnmount(() => {
  virtualScrollRef.value?.removeEventListener('scroll', scrollListener);
  if (virtualScrollRef.value) {
    resizeObserver.unobserve(virtualScrollRef.value);
  }
  resizeObserver.disconnect();
});

// 对外暴露接口
defineExpose<VirtualScrollInstance>({
  scrollToIndex,
});
</script>
