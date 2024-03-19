import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Typography from '../src/typography.vue'

const AXIOM = 'Rem is the best girl'

describe('Typography.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Typography>{AXIOM}</Typography>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
