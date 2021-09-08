import { mount } from '@vue/test-utils'
import { merge } from 'lodash'

const makeMount = <C, O, E>(element: C, defaultOptions: O) => {
  return (props: (E | O) | (E & O) = {} as E) =>
    mount(element, merge({}, defaultOptions, props))
}

interface Options {
  data?: () => {
    [key: string]: any
  }
  methods?: {
    [key: string]: (...args) => any
  }
}

export const makeMountFunc = (defaultOptions) => {
  return (template: string, options: Options) => {
    return mount({
      ...merge({}, defaultOptions, options),
      template,
    })
  }
}

export default makeMount
