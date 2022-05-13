import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import Ellipsis from '../src/ellipsis.vue'
const _mount = (options: any) =>
  mount({
    components: {
      'el-ellipsis': Ellipsis,
    },
    ...options,
  })
const AXIOM = 'Rem is the best girl'
const AXIOMLong =
  'Rem is the best girl Rem is the best girl Rem is the best girl Rem is the best girl Rem is the best girl'
describe('Tag.vue', () => {
  test('render text & class', () => {
    const wrapper = mount(Ellipsis, {
      props: {
        text: AXIOM,
        // Rem is the...
      },
    })
    expect(wrapper.text()).toEqual('Rem is the best...')
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('el-ellipsis')).toEqual(true)
    expect(
      vm.$el
        .querySelector('.el-ellipsis__inner')
        .classList.contains('el-ellipsis__inner')
    ).toEqual(true)
    expect(
      vm.$el
        .querySelector('.el-ellipsis__inner')
        .classList.contains('el-ellipsis--clamp')
    ).toEqual(false)
  })
  test('ellipsis', () => {
    const wrapper = mount(Ellipsis, {
      props: {
        text: AXIOM,
        ellipsis: 7,
        // Rem is the...
      },
    })
    expect(wrapper.text()).toEqual('Rem is the be...')
  })
  test('placement', () => {
    const wrapperLeft = mount(Ellipsis, {
      props: {
        text: AXIOM,
        ellipsis: 7,
        placement: 'left',
        // Rem is the...
      },
    })
    const wrapperCenter = mount(Ellipsis, {
      props: {
        text: AXIOM,
        ellipsis: 7,
        placement: 'center',
        // Rem is the...
      },
    })
    const wrapperRight = mount(Ellipsis, {
      props: {
        text: AXIOM,
        ellipsis: 7,
        placement: 'right',
      },
    })
    expect(wrapperRight.text()).toEqual('Rem is the be...')
    expect(wrapperCenter.text()).toEqual('Rem is...st girl')
    expect(wrapperLeft.text()).toEqual('...the best girl')
  })
  test('placement', () => {
    const wrapperLeft = mount(Ellipsis, {
      props: {
        text: AXIOM,
        ellipsis: 7,
        placement: 'left',
        // Rem is the...
      },
    })
    const wrapperCenter = mount(Ellipsis, {
      props: {
        text: AXIOM,
        ellipsis: 7,
        placement: 'center',
        // Rem is the...
      },
    })
    const wrapperRight = mount(Ellipsis, {
      props: {
        text: AXIOM,
        ellipsis: 7,
        placement: 'right',
      },
    })
    expect(wrapperRight.text()).toEqual('Rem is the be...')
    expect(wrapperCenter.text()).toEqual('Rem is...st girl')
    expect(wrapperLeft.text()).toEqual('...the best girl')
  })
  test('lineClamp', () => {
    const lineClamp = 2
    const wrapper = mount(Ellipsis, {
      props: {
        text: AXIOMLong,
        lineClamp,
        expandTrigger: true,
        // Rem is the...
      },
    })
    const vm = wrapper.vm
    expect(
      vm.$el
        .querySelector('.el-ellipsis__inner')
        .classList.contains('el-ellipsis--clamp')
    ).toEqual(true)
    expect(
      vm.$el.querySelector('.el-ellipsis__inner').style.display ===
        '-webkit-inline-box'
    ).toEqual(true)
  })
  test('expandTrigger', async () => {
    const wrapper = _mount({
      template: `
                <el-ellipsis
                    :expandTrigger="expandTrigger"
                    :lineClamp="3"
                     text="${AXIOMLong}">
                </el-ellipsis>
               `,
      setup() {
        const expandTrigger = ref(true)
        return {
          expandTrigger,
        }
      },
    })
    const vm = wrapper.vm
    expect(
      vm.$el
        .querySelector('.el-ellipsis__inner')
        .classList.contains('el-ellipsis--clamp')
    ).toEqual(true)
    expect(
      vm.$el.querySelector('.el-ellipsis__inner').style.display ===
        '-webkit-inline-box'
    ).toEqual(true)
    await wrapper.find('.el-ellipsis__inner').trigger('click')
    expect(
      vm.$el
        .querySelector('.el-ellipsis__inner')
        .classList.contains('el-ellipsis--clamp')
    ).toEqual(false)
    expect(
      vm.$el.querySelector('.el-ellipsis__inner').style.display ===
        '-webkit-inline-box'
    ).toEqual(false)
    await wrapper.find('.el-ellipsis__inner').trigger('click')
    expect(
      vm.$el
        .querySelector('.el-ellipsis__inner')
        .classList.contains('el-ellipsis--clamp')
    ).toEqual(true)
    expect(
      vm.$el.querySelector('.el-ellipsis__inner').style.display ===
        '-webkit-inline-box'
    ).toEqual(true)
    wrapper.vm.expandTrigger = false
    await nextTick()
    await nextTick()
    await wrapper.find('.el-ellipsis__inner').trigger('click')
    expect(
      vm.$el
        .querySelector('.el-ellipsis__inner')
        .classList.contains('el-ellipsis--clamp')
    ).toEqual(true)
    expect(
      vm.$el.querySelector('.el-ellipsis__inner').style.display ===
        '-webkit-inline-box'
    ).toEqual(true)
  })
})
