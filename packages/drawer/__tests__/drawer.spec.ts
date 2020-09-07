import { mount } from '@vue/test-utils'
import Drawer from '../src/index'
import Button from '../../button/src/button.vue'
import { nextTick } from 'vue'

jest.useFakeTimers()

const _mount = (template: string, data, otherObj?) =>
  mount({
    components: {
      [Drawer.name]: Drawer,
      [Button.name]: Button,
    },
    template,
    data,
    ...otherObj,
  })
const title = 'Drawer Title'
const content = 'content'

describe('Drawer', () => {
  test('create', async () => {
    const wrapper = _mount(
      `
      <el-drawer :title="title" v-model="visible"></el-drawer>
      `,
      () => ({
        title,
        visible: true,
      }),
    )
    const vm = wrapper.vm
    expect(document.querySelector('.v-modal')).not.toBeNull()
    expect(vm.$el.querySelector('.el-drawer__header').textContent).toEqual(title)
    expect(vm.$el.style.display).not.toEqual('none')
  })

  test('render correct content', async () => {
    const wrapper = _mount(
      `
      <el-drawer :title='title' v-model='visible'>
        <span>this is a sentence</span>
        <el-button @click.native='dialogVisible = false'>cancel</el-button>
        <el-button type='primary' @click.native='dialogVisible = false'>confirm</el-button>
      </el-drawer>
      `,
      () => ({
        title,
        visible: true,
      }),
    )

    await nextTick()
    expect(wrapper.find('.el-drawer__body span').element.textContent).toEqual('this is a sentence')
    const footerBtns = wrapper.findAll('.el-button')
    expect(footerBtns.length).toEqual(2)
    expect(footerBtns[0].find('span').element.textContent).toEqual('cancel')
    expect(footerBtns[1].find('span').element.textContent).toEqual('confirm')
  })

  test('should append to body, when append-to-body flag is true', async () => {
    const wrapper = _mount(
      `
      <el-drawer ref='d' :title='title' v-model='visible' :append-to-body='true'>
        <span> content </span>
      </el-drawer>
      `,
      () => ({
        title,
        visible: false,
      }),
    )
    const vm = wrapper.vm as any

    vm.visible = true
    await nextTick()
    expect(document.querySelector('.el-drawer__wrapper').parentNode).toEqual(document.body)
  })

  test('should open and close drawer properly', async () => {
    const wrapper = _mount(
      `
      <el-drawer :title='title' v-model='visible'>
        <span>${content}</span>
      </el-drawer>
      `,
      () => ({
        title,
        visible: false,
      }),
    )
    const vm = wrapper.vm as any
    await nextTick()

    const drawer = wrapper.findComponent(Drawer).vm
    const drawerEl = drawer.$el
    expect(drawerEl.style.display).toEqual('none')

    vm.visible = true
    await nextTick()
    expect(drawerEl.style.display).not.toEqual('none')

    // TODO these will be added back when the @vue/text-utils is updated with transition-stub
    // vm.visible = false
    // await nextTick()
    // expect(drawerEl.style.display).toEqual('none')
  })

  test('should destroy every child after drawer was closed when destroy-on-close flag is true', async () => {
    const wrapper = _mount(
      `
      <el-drawer :title='title' v-model='visible' :append-to-body='false' :destroy-on-close='true' ref='drawer'>
        <span>${content}</span>
      </el-drawer>
      `,
      () => ({
        title,
        visible: true,
      }),
    )
    const vm = wrapper.vm as any

    await nextTick()
    expect(wrapper.find('.el-drawer__body span').element.textContent).toEqual(content)
    vm.$refs.drawer.closeDrawer()
    await nextTick()
    expect(vm.$el.querySelector('.el-drawer__body')).toBeNull()
  })

  test('should close dialog by clicking the close button', async () => {
    const wrapper = _mount(
      `
      <el-drawer :title='title' v-model='visible' :append-to-body='false' :destroy-on-close='true' ref='drawer'>
        <span>${content}</span>
      </el-drawer>
      `,
      () => ({
        title,
        visible: true,
      }),
    )
    const vm = wrapper.vm as any

    wrapper.findComponent(Drawer).find('.el-drawer__close-btn').trigger('click')
    expect(vm.visible).toEqual(false)
  })

  test('should invoke before-close', async () => {
    const beforeClose = jest.fn()
    const wrapper = _mount(
      `
      <el-drawer
          :before-close='beforeClose'
          :title='title'
          v-model='visible'
          :append-to-body='true'
          :destroy-on-close='true'
          ref='drawer'
          >
        <span>${content}</span>
      </el-drawer>
      `,
      () => ({
        title,
        visible: true,
        beforeClose,
      }),
    )
    const vm = wrapper.vm as any
    vm.$refs.drawer.closeDrawer()

    expect(beforeClose).toHaveBeenCalled()
  })

  test('should not show close button when show-close flag is false', async () => {
    const wrapper = _mount(
      `
      <el-drawer :title='title' v-model='visible' ref='drawer' :show-close='false'>
        <span>${content}</span>
      </el-drawer>
      `,
      () => ({
        title,
        visible: true,
      }),
    )
    const vm = wrapper.vm as any

    expect(vm.$el.querySelector('.el-drawer__close-btn')).toBeNull()
  })

  test('should have custom classes when custom classes were given', async () => {
    const classes = 'some-custom-class'
    const wrapper = _mount(
      `
      <el-drawer :title='title' v-model='visible' ref='drawer' custom-class='${classes}'>
        <span>${content}</span>
      </el-drawer>
      `,
      () => ({
        title,
        visible: true,
      }),
    )
    const vm = wrapper.vm as any

    expect(vm.$el.querySelector(`.${classes}`)).not.toBeNull()
  })

  test('should not render header when withHeader attribute is false', async () => {
    const wrapper = _mount(
      `
      <el-drawer :title='title' v-model='visible' ref='drawer' :with-header='false'>
        <span>${content}</span>
      </el-drawer>
      `,
      () => ({
        title,
        visible: true,
      }),
    )
    const vm = wrapper.vm as any

    expect(vm.$el.querySelector('.el-drawer__header')).toBeNull()
  })

  describe('directions', () => {
    const renderer = direction => {
      return _mount(
        `
        <el-drawer :title='title' v-model='visible' direction='${direction}'>
          <span>${content}</span>
        </el-drawer>
        `,
        () => ({
          title,
          visible: true,
        }),
      )
    }
    test('should render from left to right', async () => {
      expect(renderer('ltr').find('.ltr').element).not.toBeUndefined()
    })

    test('should render from right to left', async () => {
      expect(renderer('rtl').find('.rtl').element).not.toBeUndefined()
    })

    test('should render from top to bottom', async () => {
      expect(renderer('ttb').find('.ttb').element).not.toBeUndefined()
    })

    test('should render from bottom to top', async () => {
      expect(renderer('btt').find('.btt').element).not.toBeUndefined()
    })
  })

  test('events', async () => {
    const open = jest.fn()
    const opened = jest.fn()
    const close = jest.fn()
    const closed = jest.fn()
    const wrapper = _mount(
      `
      <el-drawer 
        :title='title'
        v-model='visible'
        ref="drawer"
        @open="open"
        @opened="opened"
        @close="close"
        @closed="closed">
        <span>${content}</span>
      </el-drawer>
      `,
      () => ({
        title,
        visible: false,
      }),
      {
        methods: {
          close,
          closed,
          open,
          opened,
        },
      },
    )
    const vm = wrapper.vm as any
    const drawer = wrapper.findComponent(Drawer).vm

    vm.visible = true
    await nextTick()
    expect(open).toHaveBeenCalled()
    drawer.afterEnter()
    expect(opened).toHaveBeenCalled()
    expect(close).not.toHaveBeenCalled()
    expect(closed).not.toHaveBeenCalled()

    vm.visible = false
    await nextTick()
    expect(close).toHaveBeenCalled()
    drawer.afterLeave()
    expect(closed).toHaveBeenCalled()
  })

  describe('size', () => {
    const renderer = (size, isVertical) =>
      _mount(
        `
        <el-drawer :title='title' v-model='visible' direction='${isVertical ? 'ltr' : 'ttb'}' size='${size}'>
          <span>${content}</span>
        </el-drawer>
        `,
        () => ({
          visible: true,
          title,
        }),
      )

    test('should effect height when drawer is vertical', async () => {
      const size = '50%'
      const vm = renderer(size, true).vm as any

      expect(vm.$el.querySelector('.el-drawer').style.width).toEqual('50%')
    })

    test('should effect width when drawer is horizontal', async () => {
      const size = '50%'
      const vm = renderer(size, false).vm as any

      expect(vm.$el.querySelector('.el-drawer').style.height).toEqual('50%')
    })
  })
})
