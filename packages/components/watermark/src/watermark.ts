import { buildProps } from '@element-plus/utils'
import type { ExtractPropTypes, PropType } from 'vue'
export const watermarkProps = buildProps({
  /** 水印整体透明度，取值范围 [0-1] */
  alpha: {
    type: Number,
    default: 1,
  },
  /** 水印高度 */
  height: {
    type: Number,
    default: 0,
  },
  /** 水印是否重复出现 */
  isRepeat: {
    type: Boolean,
    default: true,
  },
  /** 行间距，只作用在多行（`content` 配置为数组）情况下 */
  lineSpace: {
    type: Number,
    default: 16,
  },

  /** 水印在画布上绘制的水平和垂直偏移量，正常情况下水印绘制在中间位置，即 `offset = [gapX / 2, gapY / 2]` */
  offset: {
    type: Array<number>,
  },
  /** 水印不可被删除，默认会开启水印节点防删 */
  removable: {
    type: Boolean,
    default: true,
  },
  /** 水印旋转的角度，单位 ° */
  rotate: {
    type: Number,
    default: -22,
  },
  /** 水印内容，需要显示多行情况下可配置为数组 */
  watermarkContent: {
    type: [Object, Array] as PropType<
      WatermarkText | WatermarkImage | Array<WatermarkText | WatermarkImage>
    >,
  },
  /** 水印宽度 */
  width: {
    type: Number,
    default: 0,
  },
  /** 水印之间的水平间距 */
  x: {
    type: Number,
    default: 0,
  },
  /** 水印之间的垂直间距 */
  y: {
    type: Number,
    default: 0,
  },
  /** 水印元素的 `z-index`，默认值写在 CSS 中 */
  zIndex: {
    type: Number,
    default: 99,
  },
} as const)
export interface WatermarkText {
  /**
   * 水印文本文字颜色
   * @default rgba(0,0,0,0.1)
   */
  fontColor?: string
  /**
   * 水印文本文字大小
   * @default 16
   */
  fontSize?: number
  /**
   * 水印文本文字粗细
   * @default normal
   */
  fontWeight?: 'normal' | 'lighter' | 'bold' | 'bolder'
  /**
   * 水印文本内容
   * @default ''
   */
  text?: string
}
export interface WatermarkImage {
  /**
   * 水印图片是否需要灰阶显示
   * @default false
   */
  isGrayscale?: boolean
  /**
   * 水印图片源地址，为了显示清楚，建议导出 2 倍或 3 倍图
   * @default ''
   */
  url?: string
}
export type Props = ExtractPropTypes<typeof watermarkProps>
