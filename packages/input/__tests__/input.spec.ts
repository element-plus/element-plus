import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { sleep, defineGetter } from '@element-plus/test-utils'
import Input from '../src/index.vue'

const _mount = options => mount({
  components: {
    'el-input': Input,
  },
  ...options,
})

describe('Input.vue', () => {

  test('create', async () => {
    const handleFocus = jest.fn()
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
      setup() {
        const input = ref('input')

        return {
          input,
          handleFocus,
        }
      },
    })

    const inputElm = wrapper.find('input')
    const vm = wrapper.vm as any
    const nativeInput = inputElm.element

    await inputElm.trigger('focus')

    expect(inputElm.exists()).toBe(true)
    expect(handleFocus).toHaveBeenCalled()
    expect(nativeInput.placeholder).toBe('请输入内容')
    expect(nativeInput.value).toBe('input')
    expect(nativeInput.minLength).toBe(3)
    expect(nativeInput.maxLength).toBe(5)

    vm.input = 'text'
    await sleep()
    expect(inputElm.element.value).toBe('text')
  })

  test('default to empty', () => {
    const wrapper = _mount({
      template: '<el-input />',
    })
    const inputElm = wrapper.find('input')
    expect(inputElm.element.value).toBe('')
  })

  test('disabled', () => {
    const wrapper = _mount({
      template: `<el-input disabled />`,
    })
    const inputElm = wrapper.find('input')
    expect(inputElm.element.disabled).not.toBeNull()
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
    expect(wrapper.find('textarea').element.rows).toEqual(3)
  })

  test('resize', async() => {
    const wrapper = _mount({
      template: `
        <div>
          <el-input type="textarea" :resize="resize" />
        </div>
      `,
      data() {
        return {
          resize: 'none',
        }
      },
    })
    const vm = wrapper.vm as any
    const textarea = wrapper.find('textarea').element
    await sleep()
    expect(textarea.style.resize).toEqual(vm.resize)
    vm.resize = 'horizontal'
    await sleep()
    expect(textarea.style.resize).toEqual(vm.resize)
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
  //   await sleep()
  //   expect(limitSizeInput.computedTextareaStyle.height).toEqual('117px')
  //   expect(limitlessSizeInput.computedTextareaStyle.height).toEqual('201px')

  //   wrapper.vm.textareaValue = ''
  //   await sleep()
  //   expect(limitSizeInput.computedTextareaStyle.height).toEqual('75px')
  //   expect(limitlessSizeInput.computedTextareaStyle.height).toEqual('33px')
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
    await sleep()
    expect(vm.$el.querySelector('textarea').value).toEqual('123')
    vm.type = 'password'
    await sleep()
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
    await sleep()
    expect(inputElm1.querySelectorAll('.el-input__count').length).toEqual(1)

    vm.input4 = '1'
    await sleep()
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

      const input = wrapper.find('input').element
      // mock selectionRange behaviour, due to jsdom's reason this case cannot run well, may be fixed later using headlesschrome or puppeteer
      let selected = false
      defineGetter(input, 'selectionStart', function() {
        return selected ? 0 : this.value.length
      })
      defineGetter(input, 'selectionEnd', function() {
        return this.value.length
      })

      expect(input.selectionStart).toEqual(testContent.length)
      expect(input.selectionEnd).toEqual(testContent.length)

      input.select()
      selected = true
      await sleep()
      expect(input.selectionStart).toEqual(0)
      expect(input.selectionEnd).toEqual(testContent.length)
    })
    test('method:resizeTextarea', async () => {
      const testContent = 'TEXT:resizeTextarea'
      const wrapper = _mount({
        template: `<el-input  ref="textarea"  :autosize="{ minRows: 1, maxRows: 1 }" type="textarea" v-model="text" />`,
        data() {
          return {
            text: testContent,
          }
        },
      })
      const ref = wrapper.vm.$refs.textarea
      const originMinHeight  = ref.computedTextareaStyle.minHeight

      ref.autosize.minRows = 5
      ref.resizeTextarea()
      // Atfer this textarea min-height (style)  will change
      const nowMinHeight = ref.computedTextareaStyle.minHeight
      expect(originMinHeight).not.toEqual(nowMinHeight)
    })
  })

  describe('Input Events', () => {
    const handleFocus = jest.fn()
    const handleBlur = jest.fn()

    test('event:focus & blur', async () => {
      const wrapper = _mount({
        template: `<el-input
          placeholder="请输入内容"
          :model-value="input"
          @focus="handleFocus"
          @blur="handleBlur"
        />`,
        setup() {
          const input = ref('')

          return {
            input,
            handleFocus,
            handleBlur,
          }
        },
      })

      const input = wrapper.find('input')

      await input.trigger('focus')
      expect(handleFocus).toBeCalled()

      await input.trigger('blur')
      expect(handleBlur).toBeCalled()
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
      await sleep()
      expect(vm.val).toBe('2')
      simulateEvent('1', 'input')
      await sleep()
      expect(vm.val).toBe('2')
    })

    test('event:clear', async() => {
      const handleClear = jest.fn()
      const wrapper = _mount({
        template: `
          <el-input
            placeholder="请输入内容"
            clearable
            v-model="input"
            @clear="handleClear"
          />
        `,
        setup() {
          const input = ref('a')

          return {
            input,
            handleClear,
          }
        },
      })

      const input = wrapper.find('input')
      const vm = wrapper.vm as any
      // focus to show clear button
      await input.trigger('focus')
      await sleep()
      vm.$el.querySelector('.el-input__clear').click()
      await sleep()
      expect(vm.input).toEqual('')
      expect(handleClear).toBeCalled()
    })

    test('event:input', async() => {
      const handleInput = jest.fn()
      const wrapper = _mount({
        template: `
          <el-input
            placeholder="请输入内容"
            clearable
            :model-value="input"
            @input="handleInput"
          />
        `,
        setup() {
          const input = ref('a')
          return {
            input,
            handleInput,
          }
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
      expect(handleInput).toBeCalledTimes(1)
      // native input value is controlled
      expect(vm.input).toEqual('a')
      expect(nativeInput.value).toEqual('a')
    })
  })

  test('non-emit event such as keyup should work', async () => {
    const handleKeyup = jest.fn()
    const wrapper = mount(Input, {
      attrs: {
        onKeyup: handleKeyup,
      },
    })

    await wrapper.find('input').trigger('keyup')
    expect(handleKeyup).toBeCalledTimes(1)
  })

  test('input-style', async () => {
    const wrapper = _mount({
      template: `
          <el-input
            placeholder="请输入内容"
            :input-style="{color: 'red'}"
          />
          <el-input
            placeholder="请输入内容"
            :input-style="{color: 'red'}"
            type="textarea"
          />
        `,
    })

    const input = wrapper.find('input')
    const textarea = wrapper.find('textarea')
    await nextTick()
    expect(input.element.style.color === 'red').toBeTruthy()
    expect(textarea.element.style.color === 'red').toBeTruthy()
  })

  describe('Textarea Events', () => {
    test('event:keydown', async () => {
      const handleKeydown = jest.fn()
      const wrapper = _mount({
        template: `<el-input
          type="textarea"
          :model-value="val"
          @keydown="handleKeydown"
        />`,
        setup() {
          const val = ref('')

          return {
            val,
            handleKeydown,
          }
        },
      })

      await wrapper.find('textarea').trigger('keydown')
      expect(handleKeydown).toBeCalledTimes(1)
    })
  })

  // TODO: validateEvent & input containes select cases should be added after the rest components finished
  // ...

})
