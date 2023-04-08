import type { Table } from './defaults'

export default function useHeaderScroll(table: Table<[]>) {
  /*
   * isHeaderScroll default true is necessary
   * 默认为 false 的问题场景：鼠标放在 header 中，通过键盘刷新页面，在页面加载后不移动鼠标时直接滚动 header 就会有问题。
   * 原因：鼠标没移动， mouseenter、mouseover 事件均不会被触发（都尝试过）
   * */
  let isHeaderScroll = true

  const headerScrollHandle = () => {
    if (!isHeaderScroll) return
    table.refs.scrollBarRef.wrapRef.scrollLeft =
      table.refs.headerWrapper.scrollLeft
  }

  const headerMouseEnter = () => {
    isHeaderScroll = true
  }
  const headerMouseLeave = () => {
    isHeaderScroll = false
  }

  return {
    headerScrollHandle,
    headerMouseEnter,
    headerMouseLeave,
  }
}
