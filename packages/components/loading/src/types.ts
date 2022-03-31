import type { MaybeRef } from '@vueuse/core'

export type LoadingOptionsResolved = {
  parent: LoadingParentElement
  background: MaybeRef<string>
  svg: MaybeRef<string>
  svgViewBox: MaybeRef<string>
  spinner: MaybeRef<boolean | string>
  text: MaybeRef<string>
  fullscreen: boolean
  lock: boolean
  customClass: MaybeRef<string>
  visible: boolean
  target: HTMLElement
  beforeClose?: () => boolean
  closed?: () => void
}
export type LoadingOptions = Partial<
  Omit<LoadingOptionsResolved, 'parent' | 'target'> & {
    target: HTMLElement | string
    body: boolean
  }
>

export interface LoadingParentElement extends HTMLElement {
  vLoadingAddClassList?: () => void
}
