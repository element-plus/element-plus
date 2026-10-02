import { mount } from '@vue/test-utils'
import { merge } from 'lodash-unified'

const makeMount = <C, O, E>(element: C, defaultOptions: O) => {
  return (props: (E | O) | (E & O) = {} as E) =>
    mount(element, merge({}, defaultOptions, props))
}

interface Options {
  data?: () => {
    [key: string]: unknown
  }
  methods?: {
    [key: string]: (...args: unknown[]) => any
  }
}

export const makeMountFunc = <T extends Record<string, unknown>>(
  defaultOptions: T
) => {
  return (template: string, options: Options) => {
    return mount({
      ...merge({}, defaultOptions, options),
      template,
    })
  }
}

export default makeMount
