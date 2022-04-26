/*
 * @Author: LG
 * @Date: 2022-04-26 09:31:36
 * @Description:
 * @Last Modified By: liu.guo
 * @Last Modified Time: 2022-04-26 12:19:08
 */
import { createApp, defineComponent, getCurrentInstance, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ElLoading } from '@element-plus/components'
import { useLoading } from '../use-loading'
describe('useLoading', () => {
  // beforeEach(() => {
  //   mount(ElLoading)
  // })
  it('loading instance ', async () => {
    const wrapper = mount(
      defineComponent({
        props: {},
        setup() {
          const instance = getCurrentInstance()
          instance?.appContext.app.use(ElLoading)
          const loading = useLoading()
          loading({})
          // ElLoading.service({ text: 'Loading...' })
          return () => <div></div>
        },
      })
    )
    await nextTick()
    expect(document.querySelector('.el-loading-mask')).toBeTruthy()
  })
})
