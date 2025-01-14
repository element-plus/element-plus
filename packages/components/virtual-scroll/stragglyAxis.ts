// 默认刻度间距
export const TICK_SPACING = 50;

/**
 * 刻度不均匀的单向数轴
 * 且刻度原点值不一定为0，可以为正数或负数
 */
class StragglyAxis {
  // 刻度线
  ticks: number[] = [];
  constructor(ticksData: number | number[]) {
    this.resetAxis(ticksData);
  }

  /**
   * 重置全部刻度数据
   * @param ticksData 刻度数据
   */
  private resetAllTicks(ticksData: number[]) {
    this.ticks = ticksData;
  }

  /**
   * 以历史刻度为基准，填充刻度数据
   * @param ticksNum 刻度个数（不含原点）
   * @param tickSpace 刻度间距
   */
  private fillTicks(ticksNum: number, tickSpace: number) {
    const oldTicks = this.ticks;
    // 刻度间距最小为1
    const norTickSpace = Math.max(tickSpace, 1);
    const ticks = [oldTicks[0] ?? 0];
    for (let index: number = 1; index <= ticksNum; index++) {
      // 优先取历史刻度数据，没有取前一个+tickSpace
      ticks.push(oldTicks[index] ?? ((ticks[index - 1] ?? 0) + norTickSpace));
    }
    this.ticks = ticks;
  }

  /**
   * 重置轴刻度数据
   * @param ticksData 刻度数据，数组直接赋值，数字表示刻度个数
   * @param tickSpace 刻度间距（ticksData为数值时有效）
   */
  resetAxis(ticksData: number | number[], tickSpace: number = TICK_SPACING) {
    if (Array.isArray(ticksData)) {
      this.resetAllTicks(ticksData);
    } else {
      this.fillTicks(ticksData, tickSpace);
    }
  }

  /**
   * 当前轴上最大刻度下标
   */
  get maxIndex() {
    return Math.max(this.ticks.length - 1, 0);
  }

  /**
   * 获取新的间距与原始间距的差值
   * @param index 刻度下标
   * @param newSpace 新的间距
   * @returns 变更差值
   */
  private getDiffSpace(index: number, newSpace: number) {
    return Math.max(newSpace, 1) - (this.ticks[index + 1] - this.ticks[index]);
  }

  /**
   * 判断目标下标是否超出刻度轴
   * @param index 目标刻度
   */
  protected isOverTicks(index: number) {
    return index < 0 || index >= this.maxIndex;
  }

  /**
   * 限制目标刻度在数轴上
   * @param targetIndex 目标刻度下标
   * @returns 在数轴上下标
   */
  protected getLimitedIndex(targetIndex: number, maxIndex: number = this.maxIndex) {
    return Math.max(Math.min(targetIndex, maxIndex), 0);
  }

  /**
   * 设置目标刻度i~i+1间距
   * @param index 目标刻度
   * @param spacing 间距，最小为1
   */
  setTick(index: number, spacing: number) {
    const ticks = this.ticks;
    const len = ticks.length;
    if (this.isOverTicks(index)) {
      // 无效index
      return;
    }
    // 占据空间差值，i~i+1为i节点占据空间
    const diffSpacing = this.getDiffSpace(index, spacing);
    if (diffSpacing === 0) {
      // 刻度间距未发生变化
      return;
    }

    // index位于前半部分，更新前半部分刻度
    if (index < (len >>> 1)) {
      for (let i = index; i >= 0; i--) {
        ticks[i] -= diffSpacing;
      }
    } else {
      // index位于后半部分，更新后半部分刻度
      for (let i = index + 1; i < ticks.length; i++) {
        ticks[i] += diffSpacing;
      }
    }
  }

  /**
   * 获取数轴刻度为index与原点的绝对距离
   * @param index 目标刻度为index，默认为数轴最大长度
   */
  getAbsoluteDistance(index: number = this.maxIndex) {
    const targetIndex = Math.min(Math.max(index, 0), this.maxIndex);
    return (this.ticks[targetIndex] ?? 0) - (this.ticks[0] ?? 0);
  }

  /**
   * 获取相对于原点偏移originDistance的距离
   * @param originDistance 相对于起点的偏移距离
   * @return 轴线距离
   */
  protected getRelativeDistance(originDistance: number) {
    return originDistance + this.ticks[0];
  }

  /**
   * 在数轴上查找距离原点distance处的刻度下标
   * @param distance 目标距离
   * @return 刻度下标i（i~distance~i+1）
   */
  protected getIndexByDistance(distance: number) {
    const ticks = this.ticks;
    if (ticks.length < 2) {
      // 空轴
      return 0;
    }
    const relativeDis = this.getRelativeDistance(distance);
    let startIndex: number = 0;
    let endIndex: number = ticks.length - 2;

    // 由于刻度数组是递增序列，可以使用二分查找
    while (startIndex < endIndex) {
      const mediumIndex = startIndex + ((endIndex - startIndex) >>> 1);
      if (ticks[mediumIndex] > relativeDis) {
        endIndex = mediumIndex - 1;
      } else if (ticks[mediumIndex + 1] <= relativeDis) {
        startIndex = mediumIndex + 1;
      } else {
        // distance在刻度[mediumIndex~mediumIndex+1)之间
        return mediumIndex;
      }
    }

    // distance超出数轴最大距离
    return endIndex;
  }
}

export default StragglyAxis;
