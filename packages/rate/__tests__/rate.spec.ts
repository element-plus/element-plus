import { mount } from '@vue/test-utils'
import Rate from '../src/index.vue'

describe('Rate.vue', () => {
  test('create', () => {
    const wrapper = mount(Rate, {
      props: {
        max: 10,
      },
    })
    const vm = wrapper.vm
    const stars = vm.$el.querySelectorAll('.el-rate__item')
    expect(stars.length).toEqual(10)
  })

  test('with texts', () => {
    const vm = mount(Rate, {
      props: {
        showText: true,
        modelValue: 4,
        texts: ['1', '2', '3', '4', '5'],
      },
    }).vm

    const text = vm.$el.querySelector('.el-rate__text')
    expect(text.textContent).toEqual('4')
  })

  test('value change', async done => {
    const wrapper = mount(Rate, {
      props: {
        modelValue: 0,
      },
    })
    const vm = wrapper.vm
    await wrapper.setProps({ modelValue: 3 })
    expect(vm.modelValue).toEqual(3)
    done()
  })

  test('click', () => {
    const vm = mount({
      template: `
        <div>
          <el-rate v-model="value1" />
        </div>
      `,
      props:{},
      data() {
        return {
          value1: 0,
        }
      },
      components: {
        'el-rate': Rate,
      },
    }, {
      props: {
      },
    }).vm

    const thirdStar = vm.$el.querySelectorAll('.el-rate__item')[2]

    thirdStar.click()
    expect(vm.value1).toEqual(3)
  })
})
