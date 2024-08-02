import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, test } from 'vitest'
import sleep from '@element-plus/test-utils/sleep'
import Mention from '../src/mention.vue'

describe('Mention.vue', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  const options = [
    {
      label: 'Fuphoenixes',
      value: 'Fuphoenixes',
    },
    {
      label: 'kooriookami',
      value: 'kooriookami',
    },
    {
      label: 'Jeremy',
      value: 'Jeremy',
    },
    {
      label: 'btea',
      value: 'btea',
    },
  ]

  test('should work with `options` prop', async () => {
    const wrapper = mount(Mention, {
      attachTo: document.body,
      props: { options },
    })

    wrapper.find('input').element.focus()
    wrapper.find('input').setValue('@')

    await sleep(150)
    expect(document.querySelector('.el-mention-dropdown')).not.toEqual(null)
    expect(document.querySelectorAll('.el-mention-dropdown__item').length).toBe(
      4
    )
  })

  test('should work with `type` prop', async () => {
    const wrapper = mount(Mention, {
      attachTo: document.body,
      props: { options },
    })

    expect(wrapper.find('input').exists()).toBe(true)

    await wrapper.setProps({ type: 'text' })
    expect(wrapper.find('input').exists()).toBe(true)

    await wrapper.setProps({ type: 'textarea' })
    expect(wrapper.find('textarea').exists()).toBe(true)
  })

  test('should work with `loading` prop', async () => {
    const wrapper = mount(Mention, {
      attachTo: document.body,
      props: { options, loading: true },
    })

    wrapper.find('input').element.focus()
    await wrapper.find('input').setValue('@')
    await sleep(150)
    expect(document.querySelector('.el-mention-dropdown__loading')).not.toEqual(
      null
    )
  })

  test('should work with `prefix` prop', async () => {
    const wrapper = mount(Mention, {
      attachTo: document.body,
      props: { options, prefix: '#' },
    })

    wrapper.find('input').element.focus()
    await wrapper.find('input').setValue('#')
    await sleep(150)
    expect(document.querySelector('.el-mention-dropdown')).not.toEqual(null)
    expect(document.querySelectorAll('.el-mention-dropdown__item').length).toBe(
      4
    )
  })
})
