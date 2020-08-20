import { mount } from '@vue/test-utils'
import Upload from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Upload.vue', () => {
  test('render test', () => {
    const wrapper = mount(Upload, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
