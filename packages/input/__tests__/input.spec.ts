import * as Vue from 'vue'
import { mount } from '@vue/test-utils'
import Input from '../src/index.vue'

const _mount = options => mount({
  components: {
    'el-input': Input,
  },
  ...options,
})

describe('Input.vue', () => {

  test('create', async () => {
    const wrapper = _mount({
      template: `
        <el-input
          :minlength="3"
          :maxlength="5"
          placeholder="请输入内容"
          @focus="handleFocus"
          :model-value="input">
        </el-input>
      `,
      data() {
        return {
          input: 'input',
          inputFocus: false,
        }
      },
      methods: {
        handleFocus() {
          this.inputFocus = true
        },
      },
    })
    const inputElm = wrapper.find('input')
    expect(inputElm.exists()).toBe(true)
    inputElm.element.focus()
    expect(wrapper.vm.inputFocus).toBe(true)
    expect(wrapper.attributes('placeholder')).toBe('请输入内容')
    expect(inputElm.element.value).toBe('input')
    expect(wrapper.attributes('minlength')).toBe('3')
    expect(wrapper.attributes('maxlength')).toBe('5')

    wrapper.vm.input = 'text'
    await Vue.nextTick()
    expect(inputElm.element.value).toBe('text')
  })

  test('default to empty', () => {
    const wrapper = _mount({
      template: '<el-input/>',
    })
    const inputElm = wrapper.find('input')
    expect(inputElm.element.value).toBe('')
  })

  test('disabled', () => {
    const wrapper = _mount({
      template: `<el-input disabled />`,
    })
    const inputElm = wrapper.find('input')
    expect(inputElm.element.getAttribute('disabled')).not.toBeNull()
  })

  test('suffixIcon', () => {
    const wrapper = _mount({
      template: `<el-input suffix-icon="time" />`,
    })
    const icon = wrapper.find('.el-input__icon')
    expect(icon.exists()).toBe(true)
  })

  test('prefixIcon', () => {
    const wrapper = _mount({
      template: `<el-input prefix-icon="time" />`,
    })
    const icon = wrapper.find('.el-input__icon')
    expect(icon.exists()).toBe(true)
  })

  test('size', () => {
    const wrapper = _mount({
      template: `<el-input size="large" />`,
    })
    expect(wrapper.classes('el-input--large')).toBe(true)
  })

  test('type', () => {
    const wrapper = _mount({
      template: `<el-input type="textarea" />`,
    })
    expect(wrapper.classes('el-textarea')).toBe(true)
  })

  test('rows', () => {
    const wrapper = _mount({
      template: `<el-input type="textarea" :rows="3" />`,
    })
    expect(wrapper.find('.el-textarea__inner').element.getAttribute('rows')).toEqual('3')
  })

  test('resize', async() => {
    const wrapper = _mount({
      template: `<div>
        <el-input type="textarea" :resize="resize" />
      </div>`,
      data() {
        return {
          resize: 'none',
        }
      },
    })
    await Vue.nextTick()
    expect(wrapper.find('.el-textarea__inner').element.style.resize).toEqual(wrapper.vm.resize)
    wrapper.vm.resize = 'horizontal'
    await Vue.nextTick()
    expect(wrapper.find('.el-textarea__inner').element.style.resize).toEqual(wrapper.vm.resize)
  })

  test('autosize', async() => {
    const wrapper = _mount({
      template: `<div>
        <el-input
          ref="limitSize"
          type="textarea"
          :autosize="{minRows: 3, maxRows: 5}"
          v-model="textareaValue"
        />
      </div>`,
      data() {
        return {
          textareaValue: 'sda\ndasd\nddasdsda\ndasd\nddasdsda\ndasd\nddasdsda\ndasd\nddasd',
        }
      },
    })
    // const limitSizeInput = wrapper.vm.$refs.limitSize
    // const limitlessSizeInput = wrapper.vm.$refs.limitlessSize
    // await Vue.nextTick()
    // console.log(limitSizeInput.textareaStyle)
    // expect(limitSizeInput.textareaStyle.height).toEqual('117px')
    // expect(limitlessSizeInput.textareaStyle.height).toEqual('201px')

    // wrapper.vm.textareaValue = ''
    // await Vue.nextTick()
    // expect(limitSizeInput.textareaStyle.height).toEqual('75px')
    // expect(limitlessSizeInput.textareaStyle.height).toEqual('33px')
  })

})
