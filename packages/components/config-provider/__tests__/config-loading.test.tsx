import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { ElButton, ElLoading } from '@element-plus/components'
import ConfigProvider from '../src/config-provider'
import type { LoadingInstance } from '@element-plus/components/loading/src/loading'

describe('loading config', () => {
  it('should render loading component', async () => {
    let instance: LoadingInstance
    const startLoading = () => {
      instance = ElLoading.service()
    }
    const wrapper = mount(() => (
      <ConfigProvider namespace="ep" zIndex={10000}>
        <ElButton onClick={startLoading}>test</ElButton>
      </ConfigProvider>
    ))
    const btn = wrapper.find('.ep-button')
    btn.trigger('click')
    expect(btn).not.toBeNull()
    const mask = document.querySelector<HTMLElement>('.ep-loading-mask')
    expect(mask).not.toBeNull()
    expect(mask?.style.zIndex).toBe('10001')
    // @ts-expect-error
    instance.close()
  })
})
