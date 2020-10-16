import { mount } from '@vue/test-utils'
import { sleep } from '@element-plus/test-utils'
import { NOOP } from '@vue/shared'
import Autocomplete from '../src/index.vue'

const _mount = (payload = {}) => mount({
  components: {
    'el-autocomplete': Autocomplete,
  },
  data() {
    return {
      state: '',
      list: [
        { value: 'Java', tag: 'java' },
        { value: 'Go', tag: 'go' },
        { value: 'JavaScript', tag: 'javascript' },
        { value: 'Python', tag: 'python' },
      ],
      payload,
    }
  },
  methods: {
    querySearch(queryString, cb) {
      cb(queryString ? this.list.filter(i => i.value.indexOf(queryString.toLowerCase()) === 0) : this.list)
    },
  },
  template: `
    <el-autocomplete
      ref="autocomplete"
      v-model="state"
      :fetch-suggestions="querySearch"
      v-bind="payload"
    />
  `,
})

describe('Autocomplete.vue', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  test('placeholder', async () => {
    const wrapper = _mount()

    await wrapper.setProps({ placeholder: 'autocomplete' })
    expect(wrapper.find('input').attributes('placeholder')).toBe('autocomplete')

    await wrapper.setProps({ placeholder: 'placeholder' })
    expect(wrapper.find('input').attributes('placeholder')).toBe('placeholder')
  })

  test('triggerOnFocus', async () => {
    const wrapper = _mount()

    await wrapper.setProps({ triggerOnFocus: false })
    await wrapper.find('input').trigger('focus')
    await sleep(500)
    expect(wrapper.findAll('li').length).toBe(0)

    await wrapper.find('input').trigger('blur')

    await wrapper.setProps({ triggerOnFocus: true })
    await wrapper.find('input').trigger('focus')
    await sleep(500)
    expect(wrapper.findAll('li').length).toBe(4)
  })

  test('popperClass', async () => {
    const wrapper = _mount()

    await wrapper.setProps({ popperClass: 'error' })
    expect(document.body.querySelector('.el-popper').classList.contains('error')).toBe(true)

    await wrapper.setProps({ popperClass: 'success' })
    expect(document.body.querySelector('.el-popper').classList.contains('error')).toBe(false)
    expect(document.body.querySelector('.el-popper').classList.contains('success')).toBe(true)
  })

  test('placement', async () => {
    const wrapper = _mount()

    await wrapper.setProps({ placement: 'top' })
    expect(document.body.querySelector('.el-popper').getAttribute('data-popper-placement')).toBe('top')

    await wrapper.setProps({ placement: 'bottom' })
    expect(document.body.querySelector('.el-popper').getAttribute('data-popper-placement')).toBe('bottom')
  })

  test('popperAppendToBody', async () => {
    const wrapper = _mount()

    await wrapper.setProps({ popperAppendToBody: true })
    expect(wrapper.find('.el-popper').exists()).toBe(false)

    await wrapper.setProps({ popperAppendToBody: false })
    expect(wrapper.find('.el-popper').exists()).toBe(true)
  })

  test('debounce / fetchSuggestions', async () => {
    const fetchSuggestions = jest.fn()
    const wrapper = _mount({
      debounce: 500,
      fetchSuggestions,
    })

    await wrapper.find('input').trigger('focus')
    await wrapper.find('input').trigger('blur')
    await wrapper.find('input').trigger('focus')
    await wrapper.find('input').trigger('blur')
    await wrapper.find('input').trigger('focus')
    await wrapper.find('input').trigger('blur')
    expect(fetchSuggestions).toHaveBeenCalledTimes(0)
    await sleep(600)
    expect(fetchSuggestions).toHaveBeenCalledTimes(1)
    await wrapper.find('input').trigger('focus')
    await sleep(600)
    expect(fetchSuggestions).toHaveBeenCalledTimes(2)
  })

  test('valueKey / modelValue', async () => {
    const wrapper = _mount()

    await wrapper.setProps({ valueKey: 'tag' })
    await wrapper.find('input').trigger('focus')
    await sleep(500)
    await wrapper.findAll('li')[1].trigger('click')
    expect(wrapper.vm.state).toBe('go')
  })

  test('hideLoading', async () => {
    const wrapper = _mount({
      hideLoading: false,
      fetchSuggestions: NOOP,
    })
    await wrapper.find('input').trigger('focus')
    await sleep(500)
    expect(wrapper.find('.el-icon-loading').exists()).toBe(true)
    await wrapper.setProps({ hideLoading: true })
    expect(wrapper.find('.el-icon-loading').exists()).toBe(false)
  })

  test('selectWhenUnmatched', async () => {
    const wrapper = mount(Autocomplete, {
      props: {
        selectWhenUnmatched: true,
      },
    })
    wrapper.vm.highlightedIndex = 0
    wrapper.vm.handleKeyEnter()
    await sleep(500)
    expect(wrapper.vm.highlightedIndex).toBe(-1)
  })

  test('highlightFirstItem', async () => {
    const wrapper = _mount({ highlightFirstItem: false })

    await wrapper.find('input').trigger('focus')
    await sleep(500)
    expect(wrapper.find('.highlighted').exists()).toBe(false)

    await wrapper.setProps({ highlightFirstItem: true })
    await wrapper.find('input').trigger('focus')
    await sleep(500)
    expect(wrapper.find('.highlighted').text()).toBe('Java')
  })
})
