import StragglyAxis from './stragglyAxis';
import type { Align } from './virtual-scroll';

// 查找方向
enum FindDir {
  // 向前
  FORWARD = 1,
  // 向后
  BACKWARD = 2,
  // 两边扩散
  WAVE = 3,
}

/**
 * 是否包含向前查找方向
 * @param val 向前或向两侧
 */
const isIncludeForward = (val: FindDir) => (val & FindDir.FORWARD) > 0;

/**
 * 是否包含向后查找
 * @param val 向后或向两侧
 */
const isIncludeBackward = (val: FindDir) => (val & FindDir.BACKWARD) > 0;

// align映射查找方向
const alignDirMap: Record<Align, FindDir> = {
  start: FindDir.BACKWARD,
  center: FindDir.WAVE,
  end: FindDir.FORWARD,
};

// 覆盖结果
enum CoverResult {
  // 未覆盖
  NOT_COVER = 0,
  // 全覆盖
  FULL_COVER = 1,
  // 覆盖后半部分
  SUFF_HALF_COVER = 2,
  // 覆盖前半部分
  PRE_HALF_COVER = 4,
}

const halfCover = CoverResult.PRE_HALF_COVER + CoverResult.SUFF_HALF_COVER;

const getDirByCoverResult = (coverResult: CoverResult, originDir: FindDir) => {
  // center查找：前半部分已覆盖，往后查找
  if (coverResult & CoverResult.PRE_HALF_COVER) {
    return FindDir.BACKWARD;
  }

  // center查找：后半部分已覆盖，往前查找
  if (coverResult & CoverResult.SUFF_HALF_COVER) {
    return FindDir.FORWARD;
  }

  // 保持方向不变
  return originDir;
};

/**
 * 滑窗位于散列数轴上
 */
class SlideWindowOnAxis extends StragglyAxis {
  // slideWinSize 滑窗尺寸
  constructor(listData: any[] = [], public slideWinSize: number = 0) {
    super(listData.length);
  }

  // 更新滑窗尺寸
  setSlideWinSize(val: number) {
    this.slideWinSize = val;
  }

  /**
   * 在数轴距离原点distance处
   * 获取滑窗起止下标等属性
   * @param distance 距离原点的距离
   */
  getWinRecoodByDistance(distance: number) {
    // 滚动距离对应的显示项index
    const curIndex = this.getIndexByDistance(distance);
    /**
     * 偏移距离：getSlideRecoodByIndex计算是以curIndex为起点
     * 会忽略distance-ticks[curIndex]可能大于0
     */
    const offset = this.getRelativeDistance(distance) - (this.ticks[curIndex] ?? 0);
    return this.getWinRecoodByIndex(curIndex, 'start', this.slideWinSize + offset);
  }

  /**
   * 根据目标index获取滑窗覆盖结果
   */
  private getSlideWinCoverResult(align: Align, curIndex: number, startIndex: number, endIndex: number, slideWinSize: number) {
    const ticks = this.ticks;
    if (align === 'end' || align === 'start') {
      return ticks[endIndex] - ticks[startIndex] >= slideWinSize ? CoverResult.FULL_COVER : CoverResult.NOT_COVER;
    }

    const halfCurTick = (ticks[curIndex + 1] - ticks[curIndex]) / 2;
    const halfWinSize = slideWinSize / 2;
    // 后半部分覆盖滑窗
    const isSuffHalfCover = ticks[endIndex] - ticks[curIndex] - halfCurTick >= halfWinSize;
    const suffhalfResult = isSuffHalfCover ? CoverResult.SUFF_HALF_COVER : CoverResult.NOT_COVER;
    // 前半部分覆盖滑窗
    const isPreHalfCover = ticks[curIndex] - ticks[startIndex] + halfCurTick >= halfWinSize;
    const preHalfResult = isPreHalfCover ? CoverResult.PRE_HALF_COVER : CoverResult.NOT_COVER;

    return preHalfResult + suffhalfResult;
  }

  private isFullCover(coverResult: CoverResult, startIndex: number, endIndex: number, slideWinSize: number) {
    // 单向查找，直接判断是否全覆盖
    if (coverResult & CoverResult.FULL_COVER) {
      return true;
    }

    // 双向查找，前半部分和后半部分都覆盖
    if (coverResult >= (halfCover as CoverResult)) {
      return true;
    }

    // 双向查找，整体覆盖滑窗
    if (this.ticks[endIndex] - this.ticks[startIndex] >= slideWinSize) {
      // 前半部分已覆盖且后半部分到达终点
      if (coverResult & CoverResult.PRE_HALF_COVER) {
        return endIndex === this.maxIndex;
      }
      // 后半部分已覆盖且前半部分到达起点
      if (coverResult & CoverResult.SUFF_HALF_COVER) {
        return startIndex === 0;
      }
    }

    return false;
  }

  /**
   * 如果align为“start”则查找[curIndex, endIndex]区间;
   * 如果align为“center”则查找[startIndex, curIndex]区间;
   * 如果align为“end”则查找[startIndex, endIndex]区间;
   * 使得该区间间距大于或等于滑窗尺寸;
   * @param curIndex 目标项下标
   * @param slideWinSize 滑窗尺寸
   * @param align 目标项相对滑窗位置
   * @returns 返回查找的区间及缓存下标
   */
  getWinRecoodByIndex(curIndex: number, align: Align = 'start', slideWinSize: number = this.slideWinSize) {
    const maxIndex = this.maxIndex;
    // 滑窗内可视项起点index
    let startIndex = this.getLimitedIndex(curIndex);
    // 滑窗内可视项终点index
    let endIndex = this.getLimitedIndex(curIndex + 1);
    // 以当前刻度为基准点，向前、向后或向前向后两侧同时查找
    let dir = alignDirMap[align];

    while (startIndex > 0 || endIndex < maxIndex) {
      const coverResult = this.getSlideWinCoverResult(align, curIndex, startIndex, endIndex, slideWinSize);
      // 窗口已覆盖
      if (this.isFullCover(coverResult, startIndex, endIndex, slideWinSize)) {
        break;
      }

      // 根据覆盖情况更新查询方向
      dir = getDirByCoverResult(coverResult, dir);

      // 向前查找至原点，改为向后查找
      if (isIncludeForward(dir) && startIndex === 0) {
        dir = FindDir.BACKWARD;
      }

      // 向后查找至刻度尾，改为向前查找
      if (isIncludeBackward(dir) && endIndex === maxIndex) {
        dir = FindDir.FORWARD;
      }

      // 向前查找，起点刻度往前移
      if (isIncludeForward(dir)) {
        startIndex = Math.max(startIndex - 1, 0);
      }
      // 向后查找，终点刻度往后移
      if (isIncludeBackward(dir)) {
        endIndex = Math.min(endIndex + 1, maxIndex);
      }
    }

    return {
      startIndex,
      endIndex,
      ...this.getHalfBuffRangeIndex(startIndex, endIndex),
      scrollOffset: this.getScrollOffset(startIndex, endIndex, curIndex, slideWinSize, align),
    };
  }

  /**
   * 根据起止位置，分别向前向后获取缓存起止位置
   * @param startIndex 起始位置下标
   * @param endIndex 终止位置下标
   * @return 缓存起止位置及原始起止位置
   */
  private getHalfBuffRangeIndex(startIndex: number, endIndex: number) {
    // 缓存项为展示项的一半，至少缓存一项
    const buffSize = Math.max(Math.ceil((endIndex - startIndex) / 2), 1);
    const buffStartIndex = Math.max(startIndex - buffSize, 0);
    const buffEndIndex = Math.min(endIndex + buffSize, this.maxIndex);

    return {
      buffStartIndex,
      buffEndIndex,
    };
  }
  
  /**
   * 获取滑窗实际滚动距离
   * @param startIndex 滑窗内展示元素起始项
   * @param endIndex 滑窗内展示元素结束项
   * @param targetIndex 目标元素下标
   * @param slideWinSize 滑窗大小
   * @param align 目标元素相对于位于滑窗位置
   * @returns 滑窗滚动距离
   */
  private getScrollOffset(startIndex: number, endIndex: number, targetIndex: number, slideWinSize: number, align: Align) {
    const ticks = this.ticks;
    // 可视内容有限，无法填满滑窗
    if (ticks[endIndex] - ticks[startIndex] < slideWinSize) {
      // 滚动至起始位置
      return 0;
    }

    // 范围校验
    const curIndex = this.getLimitedIndex(targetIndex, this.maxIndex - 1);
    if (align === 'start') {
      // 滚动距离
      const scrollOffset = this.getAbsoluteDistance(curIndex);
      // curIndex~endIndex可能小于滑窗大小，需向前偏移
      return Math.max(scrollOffset - Math.max(slideWinSize - (ticks[endIndex] - ticks[curIndex]), 0), 0);
    } else if (align === 'end') {
      // 滚动距离
      const scrollOffset = this.getAbsoluteDistance(curIndex + 1) - slideWinSize;
      // startIndex~curIndex可能小于滑窗大小，需向后偏移
      return Math.max(scrollOffset + Math.max(slideWinSize - (ticks[curIndex + 1] - ticks[startIndex]), 0), 0);
    } else {
      const halfWinSize = slideWinSize >>> 1;
      const halfCurTick = (ticks[curIndex + 1] - ticks[curIndex]) >>> 1;
      // 滚动距离
      let scrollOffset = 0;
      if (ticks[endIndex] - ticks[curIndex] - halfCurTick < halfWinSize) {
        // curIndex~endIndex间距小于半个滑窗，需向前偏移
        scrollOffset = this.getAbsoluteDistance(endIndex) - slideWinSize;
      } else if (ticks[curIndex] - ticks[startIndex] + halfCurTick < halfWinSize) {
        // startIndex~curIndex间距小于半个滑窗，需向后偏移
        scrollOffset = this.getAbsoluteDistance(startIndex);
      } else {
        // curIndex位于startIndex~endIndex中间且能完全覆盖滑窗
        scrollOffset = this.getAbsoluteDistance(curIndex) + halfCurTick - halfWinSize;
      }
      return scrollOffset;
    }
  }
}

export default SlideWindowOnAxis;
