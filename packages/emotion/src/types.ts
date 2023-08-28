import type { Component, ComputedOptions, MethodOptions } from 'vue'

export type StyledComponentType<
  Props = any,
  RawBindings = any,
  D = any,
  C extends ComputedOptions = ComputedOptions,
  M extends MethodOptions = MethodOptions
> = string | Component<Props, RawBindings, D, C, M>

export type Interpolations = Array<any>

export type StyledOptions = {
  label?: string
  shouldForwardProp?: (arg: string) => boolean
  target?: string
}

export type StyledComponent<
  Props = any,
  RawBindings = any,
  D = any,
  C extends ComputedOptions = ComputedOptions,
  M extends MethodOptions = MethodOptions
> = Component<Props, RawBindings, D, C, M> & {
  toString: () => string
  withComponent: (nextTag: Component) => StyledComponentType
}

export type PrivateStyledComponent<
  Props = any,
  RawBindings = any,
  D = any,
  C extends ComputedOptions = ComputedOptions,
  M extends MethodOptions = MethodOptions
> = StyledComponent<Props, RawBindings, D, C, M> & {
  __emotion_real: StyledComponent<Props, RawBindings, D, C, M>
  __emotion_base: any
  __emotion_styles: any
  __emotion_forwardProp: any
}
