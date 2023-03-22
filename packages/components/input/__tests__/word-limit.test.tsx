import { shallowMount } from '@vue/test-utils'
import { afterEach, describe, expect, it } from 'vitest'
import WordLimit from '../src/word-limit.vue'

describe('<word-limit />', () => {
  let wrapper: ReturnType<typeof shallowMount>
  const maxlength = 10
  const defaultTextLength = 5
  const createWrapper = (props = {}) => {
    wrapper = shallowMount(WordLimit, {
      props: {
        textLength: defaultTextLength,
        ...props,
      },
      attrs: {
        maxlength,
      },
    })
  }

  afterEach(() => {
    wrapper.unmount()
  })

  it('should compose word limit', () => {
    createWrapper()

    expect(wrapper.text()).toBe(`${defaultTextLength} / ${maxlength}`)
  })

  it('with a different delimiter', () => {
    const delimiter = 'of'
    createWrapper({
      delimiter,
    })

    expect(wrapper.text()).toBe(
      `${defaultTextLength} ${delimiter} ${maxlength}`
    )
  })
})
