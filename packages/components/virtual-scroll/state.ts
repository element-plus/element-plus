import {
  ref,
  shallowRef,
  type Ref,
  type ShallowRef,
  nextTick,
  computed,
  type ComputedRef,
  type ComponentPublicInstance,
} from 'vue';
import type { Props, VirtualItem } from './virtual-scroll';
import SlideWindowOnAxis from './slideWindowOnAxis';

const useViewWinResize = (
  virtualScrollRef: Ref<HTMLElement | undefined>,
  slideWinPos: SlideWindowOnAxis,
  isVerticalDir: ComputedRef<boolean>,
) => () => {
  const virDom = virtualScrollRef.value;
  // 水平滚动为宽度，垂直滚动为高度
  slideWinPos.setSlideWinSize((isVerticalDir.value ? virDom?.clientHeight : virDom?.clientWidth) ?? 0);
};

/**
 * 更新虚拟元素项在视窗内列表
 * @param props 组件属性
 * @param virtualItemsRef 虚拟元素列表项
 * @return {Function} 获取虚拟元素在列表数组中的对应数据
 */
const useUpdateVirtualItems = <T = any>(props: Props, virtualItemsRef: ShallowRef<VirtualItem<T>[]>) => (
  buffStartIndex: number,
  buffEndIndex: number,
  isForce: boolean = false,
) => {
  const oldVirtualItems = virtualItemsRef.value;
  const oldStartIndex = oldVirtualItems[0] ? oldVirtualItems[0].index : 0;
  const isUnChange = oldStartIndex === buffStartIndex && oldVirtualItems.length === buffEndIndex - buffStartIndex;
  if (isUnChange && !isForce) {
    // 虚拟元素项未发生变化
    return false;
  }

  const newVirtualItems: VirtualItem<T>[] = [];
  for (let index = buffStartIndex; index < buffEndIndex; index++) {
    newVirtualItems.push({
      index,
      data: props.listData[index],
    });
  }

  virtualItemsRef.value = newVirtualItems;
  return true;
};

/**
 * dom元素更新后，需更新位置坐标轴上刻度数据
 * 并更新滚动条轨道长度
 * @param slideWinPos 位置坐标轴
 * @param scrollTrackLen 滚动条轨道长度
 */
const useSetTicks = (
  slideWinPos: SlideWindowOnAxis,
  scrollTrackLen: Ref<number>,
  isVerticalDir: ComputedRef<boolean>,
) => (index: number, el: Element | ComponentPublicInstance | null) => {
  if (!(el instanceof HTMLElement)) {
    // 元素被卸载时，不修改
    return;
  }

  slideWinPos.setTick(index, isVerticalDir.value ? el.offsetHeight : el.offsetWidth);
  scrollTrackLen.value = slideWinPos.getAbsoluteDistance();
};

/**
 * 判断当前滚动方向是否是垂直滚动
 * @param props 组件属性
 * @returns 是否是垂直方向
 */
const isVerticalDirGetter = <T>(props: Props) => props.direction === 'vertical';

/**
 * 根据滚动方式
 * 获取当前滚动距离
 * @param virtualScrollRef 视窗元素
 * @param isVerticalDir 滚动方向
 * @returns 滚动距离
 */
const getScrollDisByDir = (virtualScrollRef: Ref<HTMLElement | undefined>, isVerticalDir: ComputedRef<boolean>) => {
  const target = virtualScrollRef.value;
  return (isVerticalDir.value ? target?.scrollTop : target?.scrollLeft) ?? 0;
};

const useResetSideWinPos = <T>(slideWinPos: SlideWindowOnAxis, props: Props) => () => {
  slideWinPos.resetAxis(props.listData.length, props.averageSpace);
};

// 组件相关属性
export const useState = <T = any>(props: Props) => {
  // 虚拟滚动可视容器dom元素
  const virtualScrollRef = shallowRef<HTMLElement>();
  // 滚动条轨道长度
  const scrollTrackLen = ref<number>(0);
  // 虚拟元素相对滚动轴偏移位置
  const currentOffset = ref<number>(0);
  // 位置坐标轴
  const slideWinPos = new SlideWindowOnAxis(props.listData);
  // 可视窗内展示虚拟元素
  const virtualItems = shallowRef<VirtualItem<T>[]>([]);
  // 根据指定坐标，获取虚拟展示项
  const updateVirtualItems = useUpdateVirtualItems(props, virtualItems);
  // 是否是垂直滚动方向
  const isVerticalDir = computed(() => isVerticalDirGetter(props));
  /**
   * 根据滚动距离
   * 更新视窗内虚拟元素及偏移位置
   * @param isForce 是否强制刷新
   */
  const updateViewItemsByDis = (isForce: boolean = false) => {
    const scrollDistance = getScrollDisByDir(virtualScrollRef, isVerticalDir);
    // 可视窗内可见虚拟元素起始下标
    const winPos = slideWinPos.getWinRecoodByDistance(scrollDistance);
    const isChange = updateVirtualItems(winPos.buffStartIndex, winPos.buffEndIndex, isForce);
    currentOffset.value = slideWinPos.getAbsoluteDistance(winPos.buffStartIndex);

    return {
      ...winPos,
      isChange,
    };
  };

  return {
    slideWinPos,
    currentOffset,
    virtualScrollRef,
    scrollTrackLen,
    virtualItems,
    resetSideWinPos: useResetSideWinPos(slideWinPos, props),
    updateVirtualItems,
    // 滚动至对应列表元素，并更新至可视窗口内展示
    updateViewItemsByDis,
    updateTickByDomIndex: useSetTicks(slideWinPos, scrollTrackLen, isVerticalDir),
    // 是否是垂直滚动方向
    isVerticalDir,
    // 处理可视窗口尺寸变更
    onViewWinResize: useViewWinResize(virtualScrollRef, slideWinPos, isVerticalDir),
  };
};

interface LoopResult {
  isChange: boolean;
  [key: string]: any;
}
// 轮询函数
type LoopFunc<T extends LoopResult> = () => T;
// 最大轮询次数
const MAX_LOOP = 5;
/**
 * 间隔nextTick更新时间，轮询函数
 * @param fn 轮询函数
 * @returns 返回promise
 */
export const nextTickLoop = <T extends LoopResult>(fn: LoopFunc<T>) => new Promise<T>((resolve, reject) => {
  let count: number = 0;
  const loopTask = () => {
    try {
      // 执行结果为false表示结束轮询
      const result = fn();
      if (!result.isChange || count++ > MAX_LOOP) {
        /**
         * 虚拟项占用空间远小于默认值（水平滚动为100，垂直滚动为50）
         * 且视窗远尺寸远大于可视项尺寸
         * 才会出现轮询次数大于MAX_LOOP
         */
        resolve(result);
      } else {
        // 继续轮询
        nextTick(loopTask);
      }
    } catch (error) {
      reject(new Error('Loop Error.'));
    }
  };
  loopTask();
});
