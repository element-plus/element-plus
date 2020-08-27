import { mount } from '@vue/test-utils'
import { wait } from '../../test-utils'
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
    const vm = wrapper.vm as any
    expect(inputElm.exists()).toBe(true)
    inputElm.element.focus()
    expect(vm.inputFocus).toBe(true)
    expect(wrapper.attributes('placeholder')).toBe('请输入内容')
    expect(inputElm.element.value).toBe('input')
    expect(wrapper.attributes('minlength')).toBe('3')
    expect(wrapper.attributes('maxlength')).toBe('5')

    vm.input = 'text'
    await wait()
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
    const vm = wrapper.vm as any
    await wait()
    expect(wrapper.find('.el-textarea__inner').element.style.resize).toEqual(vm.resize)
    vm.resize = 'horizontal'
    await wait()
    expect(wrapper.find('.el-textarea__inner').element.style.resize).toEqual(vm.resize)
  })

  // TODO: Due to jsdom's reason this case cannot run well, may be fixed later using headlesschrome or puppeteer
  // test('autosize', async() => {
  //   const wrapper = _mount({
  //     template: `<div>
  //       <el-input
  //         ref="limitSize"
  //         type="textarea"
  //         :autosize="{minRows: 3, maxRows: 5}"
  //         v-model="textareaValue"
  //       />
  //     </div>`,
  //     data() {
  //       return {
  //         textareaValue: 'sda\ndasd\nddasdsda\ndasd\nddasdsda\ndasd\nddasdsda\ndasd\nddasd',
  //       }
  //     },
  //   })
  //   const limitSizeInput = wrapper.vm.$refs.limitSize
  //   const limitlessSizeInput = wrapper.vm.$refs.limitlessSize
  //   await wait()
  //   expect(limitSizeInput.textareaStyle.height).toEqual('117px')
  //   expect(limitlessSizeInput.textareaStyle.height).toEqual('201px')

  //   wrapper.vm.textareaValue = ''
  //   await wait()
  //   expect(limitSizeInput.textareaStyle.height).toEqual('75px')
  //   expect(limitlessSizeInput.textareaStyle.height).toEqual('33px')
  // })

  test('sets value on textarea / input type change', async () => {
    const wrapper = _mount({
      template: `<el-input :type="type" v-model="val" />`,
      data() {
        return {
          type: 'text',
          val: '123',
        }
      },
    })
    const vm = wrapper.vm as any
    expect(vm.$el.querySelector('input').value).toEqual('123')
    vm.type = 'textarea'
    await wait()
    expect(vm.$el.querySelector('textarea').value).toEqual('123')
    vm.type = 'password'
    await wait()
    expect(vm.$el.querySelector('input').value).toEqual('123')
  })

  test('limit input and show word count', async () => {
    const wrapper = _mount({
      template: `
        <div>
          <el-input
            class="test-text"
            type="text"
            v-model="input1"
            maxlength="10"
            :show-word-limit="show">
          </el-input>
          <el-input
            class="test-textarea"
            type="textarea"
            v-model="input2"
            maxlength="10"
            show-word-limit>
          </el-input>
          <el-input
            class="test-password"
            type="password"
            v-model="input3"
            maxlength="10"
            show-word-limit>
          </el-input>
          <el-input
            class="test-initial-exceed"
            type="text"
            v-model="input4"
            maxlength="2"
            show-word-limit>
          </el-input>
        </div>
      `,
      data() {
        return {
          input1: '',
          input2: '',
          input3: '',
          input4: 'exceed',
          show: false,
        }
      },
    })

    const inputElm1 = wrapper.vm.$el.querySelector('.test-text')
    const inputElm2 = wrapper.vm.$el.querySelector('.test-textarea')
    const inputElm3 = wrapper.vm.$el.querySelector('.test-password')
    const inputElm4 = wrapper.vm.$el.querySelector('.test-initial-exceed')

    expect(inputElm1.querySelectorAll('.el-input__count').length).toEqual(0)
    expect(inputElm2.querySelectorAll('.el-input__count').length).toEqual(1)
    expect(inputElm3.querySelectorAll('.el-input__count').length).toEqual(0)
    expect(inputElm4.classList.contains('is-exceed')).toBe(true)

    const vm = wrapper.vm as any
    vm.show = true
    await wait()
    expect(inputElm1.querySelectorAll('.el-input__count').length).toEqual(1)

    vm.input4 = '1'
    await wait()
    expect(inputElm4.classList.contains('is-exceed')).toBe(false)
  })

  describe('Input Methods', () => {

    test('method:select', async () => {
      const testContent = 'test'
      const wrapper = _mount({
        template: `<el-input v-model="text" />`,
        data() {
          return {
            text: testContent,
          }
        },
      })

      // mock selectionRange behaviour, due to jsdom's reason this case cannot run well, may be fixed later using headlesschrome or puppeteer
      let selected = false
      Object.defineProperties(window.HTMLInputElement.prototype, {
        selectionStart: {
          get() {
            return selected ? 0 : this.value.length
          },
        },
        selectionEnd: {
          get() {
            return this.value.length
          },
        },
      })

      expect(wrapper.find('input').element.selectionStart).toEqual(testContent.length)
      expect(wrapper.find('input').element.selectionEnd).toEqual(testContent.length)

      wrapper.find('input').element.select()
      selected = true
      await wait()
      expect(wrapper.find('input').element.selectionStart).toEqual(0)
      expect(wrapper.find('input').element.selectionEnd).toEqual(testContent.length)
    })
  })

  describe('Input Events', () => {

    test('event:focus & blur', async () => {
      const wrapper = _mount({
        template: `<el-input
          placeholder="请输入内容"
          :model-value="input"
          @focus="handleFocus"
          @blur="handleBlur"
        />`,
        data() {
          return {
            input: '',
            focused: false,
          }
        },
        methods: {
          handleFocus() {
            this.focused = true
          },
          handleBlur() {
            this.focused = false
          },
        },
      })
      const vm = wrapper.vm as any
      const el = wrapper.find('input').element
      el.focus()
      await wait()
      expect(vm.focused).toBe(true)

      el.blur()
      await wait()
      expect(vm.focused).toBe(false)
    })

    test('event:change', async() => {
      // NOTE: should be same as native's change behavior
      const wrapper = _mount({
        template: `
          <el-input
            placeholder="请输入内容"
            :model-value="input"
            @change="handleChange"
          />
        `,
        data() {
          return {
            input: 'a',
            val: '',
          }
        },
        methods: {
          handleChange(val) {
            this.val = val
          },
        },
      })

      const el = wrapper.find('input').element
      const vm = wrapper.vm as any
      const simulateEvent = (text, event) => {
        el.value = text
        el.dispatchEvent(new Event(event))
      }

      // simplified test, component should emit change when native does
      simulateEvent('2', 'change')
      await wait()
      expect(vm.val).toBe('2')
      simulateEvent('1', 'input')
      await wait()
      expect(vm.val).toBe('2')
    })

    test('event:clear', async() => {
      const wrapper = _mount({
        template: `
          <el-input
            placeholder="请输入内容"
            clearable
            v-model="input"
            @clear="handleCleared"
          />
        `,
        data() {
          return {
            input: 'a',
            cleared: false,
          }
        },
        methods: {
          handleCleared() {
            this.cleared = true
          },
        },
      })

      const el = wrapper.find('input').element
      const vm = wrapper.vm as any
      // focus to show clear button
      el.focus()
      await wait()
      vm.$el.querySelector('.el-input__clear').click()
      await wait()
      expect(vm.input).toEqual('')
      expect(vm.cleared).toBe(true)
    })

    test('event:input', async() => {
      const wrapper = _mount({
        template: `
          <el-input
            placeholder="请输入内容"
            clearable
            :model-value="input"
            @input="handleInput"
          />
        `,
        data() {
          return {
            input: 'a',
            inputCalled: false,
          }
        },
        methods: {
          handleInput() {
            this.inputCalled = true
          },
        },
      })
      const vm = wrapper.vm as any
      const inputWrapper = wrapper.find('input')
      const nativeInput = inputWrapper.element
      nativeInput.value = '1'
      await inputWrapper.trigger('compositionstart')
      await inputWrapper.trigger('input')
      nativeInput.value = '2'
      await inputWrapper.trigger('compositionupdate')
      await inputWrapper.trigger('input')
      await inputWrapper.trigger('compositionend')
      expect(vm.inputCalled).toBe(true)
      // native input value is controlled
      expect(vm.input).toEqual('a')
      expect(nativeInput.value).toEqual('a')
    })
  })

  // TODO: validateEvent & input containes select cases should be added after the rest components finished
  // ...

})
