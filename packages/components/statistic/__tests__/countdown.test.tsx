import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Countdown from '../src/countdown.vue'
const mountContent = (props = {}) =>
  mount(<Countdown {...props}></Countdown>, {})
describe('Countdown.vue', () => {
  it('should work', async () =>
    new Promise((done) => {
      const wrapper = mountContent({
        value: Date.now() + 200,
        timeIndices: true,
        finish: () => {
          console.log('end')
        },
      })
      setTimeout(() => {
        expect(wrapper.emitted().finish).toBeTruthy()
        done()
      }, 300)
    }))
})
