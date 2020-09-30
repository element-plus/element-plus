import { mount } from '@vue/test-utils'
import { merge } from 'lodash'

const makeMount = <C,O, E>(element: C, defaultOptions: O) => {
  return (props: (E | O) | (E & O)= {} as E) => mount(element, merge({}, defaultOptions, props))
}

export default makeMount
