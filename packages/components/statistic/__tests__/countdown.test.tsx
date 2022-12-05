import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import dayjs from 'dayjs'
import Countdown from '../src/countdown.vue'

const wait = (ms = 100) =>
  new Promise((resolve) => setTimeout(() => resolve(0), ms))

const mountContent = (props = {}) =>
  mount(<Countdown {...props}></Countdown>, {})
describe('Countdown.vue', () => {
  it('should work', async () =>
    new Promise((done) => {
      const wrapper = mountContent({
        value: Date.now() + 200,
        finish: () => {
          console.log('end')
        },
      })
      setTimeout(() => {
        expect(wrapper.emitted().finish).toBeTruthy()
        done()
      }, 300)
    }))

  it('superposition: Y to M', async () => {
    const wrapper = mountContent({
      value: dayjs().add(1, 'year').add(1, 'month'),
      format: 'MM-DD HH:mm:ss',
    })
    await wait()
    expect(wrapper.find('.el-statistic__number').text()).include('13-')
  })

  it('superposition: M to D', async () => {
    const wrapper = mountContent({
      // use 30 day replace 1 month
      value: dayjs().add(30, 'day').add(1, 'hour'),
      format: 'DD HH:mm:ss',
    })
    await wait()
    expect(wrapper.find('.el-statistic__number').text()).include('30 ')
  })

  it('superposition: D to H', async () => {
    const wrapper = mountContent({
      value: dayjs().add(4, 'day').add(1, 'hour'),
      format: 'HH:mm:ss',
    })
    await wait()
    expect(wrapper.find('.el-statistic__number').text()).include('96:')
  })

  it('superposition: M to H', async () => {
    const wrapper = mountContent({
      // use 30 day replace 1 month
      value: dayjs().add(30, 'day').add(1, 'hour'),
      format: 'HH:mm:ss',
    })
    await wait()
    expect(wrapper.find('.el-statistic__number').text()).include(`${30 * 24}:`)
  })
})
