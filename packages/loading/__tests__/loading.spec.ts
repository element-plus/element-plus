import { mount } from '@vue/test-utils'
import Loading from '../src/index'
import ElInput from '../../input'
import vLoading from '../src/directive'
import { nextTick } from 'vue'
import { sleep } from '@element-plus/test-utils'

function destroyLoadingInstance(loadingInstance) {
  if(!loadingInstance) return
  loadingInstance.close()
  loadingInstance.$el &&
  loadingInstance.$el.parentNode &&
  loadingInstance.$el.parentNode.removeChild(loadingInstance.$el)
}

describe('Loading', () => {
  let loadingInstance, loadingInstance2

  afterEach(() => {
    destroyLoadingInstance(loadingInstance)
    destroyLoadingInstance(loadingInstance2)
  })

  test('create directive', async () => {
    const wrapper = mount({
      directives: {
        loading: vLoading,
      },
      template: `<div v-loading="loading"></div>`,
      data() {
        return {
          loading: true,
        }
      },
    })

    await nextTick()
    const vm = wrapper.vm

    const maskWrapper = wrapper.find('.el-loading-mask')
    expect(maskWrapper.exists()).toBeTruthy()
    vm.loading = false

    await sleep(100)
    expect(wrapper.find('.el-loading-mask').exists()).toBeFalsy()
  })

  test('unmounted directive', async () => {
    const wrapper1 = mount({
      directives: {
        loading: vLoading,
      },
      template: `<div v-if="show" v-loading="loading"></div>`,
      data() {
        return {
          show: true,
          loading: true,
        }
      },
    })

    const wrapper2 = mount({
      directives: {
        loading: vLoading,
      },
      template: `<div v-if="show" v-loading="loading"></div>`,
      data() {
        return {
          show: true,
          loading: true,
        }
      },
    })

    await nextTick()
    const vm1 = wrapper1.vm
    const vm2 = wrapper2.vm

    vm1.loading = false
    vm2.loading = false

    await nextTick()
    vm1.show = false
    vm2.show = false

    await nextTick()
    expect(document.querySelector('.el-loading-mask')).toBeFalsy()
  })

  test('body directive', async () => {
    const wrapper = mount({
      directives: {
        loading: vLoading,
      },
      template: `<div v-loading.body="loading"></div>`,
      data() {
        return {
          loading: true,
        }
      },
    })
    await nextTick()
    const mask = document.querySelector('.el-loading-mask')
    expect(mask.parentNode === document.body).toBeTruthy()
    wrapper.vm.loading = false
    document.body.removeChild(mask)
  })

  test('fullscreen directive', async () => {
    const wrapper = mount({
      directives: {
        loading: vLoading,
      },
      template: `<div v-loading.fullscreen="loading"></div>`,
      data() {
        return {
          loading: true,
        }
      },
    })
    await nextTick()
    const mask = document.querySelector('.el-loading-mask')
    expect(mask.parentNode === document.body).toBeTruthy()
    expect(mask.classList.contains('is-fullscreen')).toBeTruthy()
    wrapper.vm.loading = false
    document.body.removeChild(mask)
  })

  test('lock directive', async () => {
    const wrapper = mount({
      directives: {
        loading: vLoading,
      },
      template: `<div v-loading.fullscreen.lock="loading"></div>`,
      data() {
        return {
          loading: true,
        }
      },
    })
    const vm = wrapper.vm
    await nextTick()
    expect(document.body.classList.contains('el-loading-parent--hidden')).toBeTruthy()
    vm.loading = false
    document.body.removeChild(document.querySelector('.el-loading-mask'))
  })

  test('text directive', async () => {
    const wrapper = mount({
      directives: {
        loading: vLoading,
      },
      template: `<div v-loading="loading" element-loading-text="loading..."></div>`,
      data() {
        return {
          loading: true,
        }
      },
    })
    await nextTick()
    expect(wrapper.find('.el-loading-text').text()).toEqual('loading...')
  })

  test('customClass directive', async () => {
    const wrapper = mount({
      directives: {
        loading: vLoading,
      },
      template: `<div v-loading="loading" element-loading-custom-class="loading-custom-class"></div>`,
      data() {
        return {
          loading: true,
        }
      },
    })
    await nextTick()
    expect(wrapper.find('.loading-custom-class').exists()).toBeTruthy()
  })

  test('customSvg directive', async () => {
    const wrapper = mount({
      directives: {
        loading: vLoading,
      },
      template: `<div v-loading="loading" :element-loading-svg="svg"></div>`,
      data() {
        return {
          loading: true,
          svg: `<path class="custom-path" d="M 30 15"/>`,
        }
      },
    })
    await nextTick()
    expect(wrapper.find('.custom-path').attributes().d).toEqual('M 30 15')
  })

  test('create service', async () => {
    loadingInstance = Loading()
    expect(document.querySelector('.el-loading-mask')).toBeTruthy()
  })

  test('close service', async () => {
    loadingInstance = Loading()
    loadingInstance.close()
    expect(loadingInstance.visible.value).toBeFalsy()
  })

  test('target service', async () => {

    const container = document.createElement('div')
    container.className = 'loading-container'
    document.body.appendChild(container)

    loadingInstance = Loading({ target: '.loading-container' })
    const mask = container.querySelector('.el-loading-mask')
    expect(mask).toBeTruthy()
    expect(mask.parentNode).toEqual(container)

    expect(container.classList.contains('el-loading-parent--relative')).toBeTruthy()
    loadingInstance.close()
    await sleep(500)
    expect(container.classList.contains('el-loading-parent--relative')).toBeFalsy()
  })

  test('body service', async () => {
    const container = document.createElement('div')
    container.className = 'loading-container'
    document.body.appendChild(container)

    loadingInstance = Loading({ target: '.loading-container', body: true })
    const mask = document.querySelector('.el-loading-mask')
    expect(mask).toBeTruthy()
    expect(mask.parentNode).toEqual(document.body)
  })

  test('fullscreen service', async () => {
    loadingInstance = Loading({ fullscreen: true })
    const mask = document.querySelector('.el-loading-mask')
    expect(mask.parentNode).toEqual(document.body)
    expect(mask.classList.contains('is-fullscreen')).toBeTruthy()
  })

  test('fullscreen singleton service', async () => {
    loadingInstance = Loading({ fullscreen: true })
    await sleep(50)
    loadingInstance2 = Loading({ fullscreen: true })
    await sleep(500)
    let masks = document.querySelectorAll('.el-loading-mask')
    expect(masks.length).toEqual(1)
    loadingInstance2.close()
    await sleep(500)
    masks = document.querySelectorAll('.el-loading-mask')
    expect(masks.length).toEqual(0)
  })

  test('lock service', async () => {
    loadingInstance = Loading({ lock: true })
    expect(document.body.classList.contains('el-loading-parent--hidden')).toBeTruthy()
  })

  test('text service', async () => {
    loadingInstance = Loading({ text: 'Loading...' })
    const text = document.querySelector('.el-loading-text')
    expect(text).toBeTruthy()
    expect(text.textContent).toEqual('Loading...')
  })

  test('customClass service', async () => {
    loadingInstance = Loading({ customClass: 'el-loading-custom-class' })
    const customClass = document.querySelector('.el-loading-custom-class')
    expect(customClass).toBeTruthy()
  })

  test('parent\'s display is not block', async () => {
    const wrapper = mount({
      directives: {
        loading: vLoading,
      },
      components: {
        ElInput,
      },
      template: `<el-input v-loading="true">
      <template #append>
        <i class="el-icon-question"></i>
      </template>
      </el-input>`,
    })
    await nextTick()
    await nextTick()
    const maskDisplay = getComputedStyle(wrapper.find('.el-loading-mask').element).display
    expect(maskDisplay).toBe('block')
  })

})
