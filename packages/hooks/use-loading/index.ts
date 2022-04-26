/*
 * @Author: LG
 * @Date: 2022-04-26 09:26:58
 * @Description:
 * @Last Modified By: liu.guo
 * @Last Modified Time: 2022-04-26 15:54:30
 */
import { computed, getCurrentInstance } from 'vue'
import { debugWarn } from '@element-plus/utils'

import { ElLoading } from '@element-plus/components'
export const useLoading = () => {
  const instance = getCurrentInstance()
  if (!instance) {
    debugWarn(
      'use-loading',
      'getCurrentInstance() returned null. useLoading() must be called at the top of a setup function'
    )
    return computed(() => ({}))
  }
  // await
  // instance.appContext.app.use(ElLoading)
  // console.log(instance.appContext.config.globalProperties['$loading'])
  if (!instance.appContext.config.globalProperties['$loading']) {
    debugWarn('use-loading', 'useLoading() must be use ElLoading component')
    return computed(() => ({}))
  }
  // eslint-disable-next-line vue/return-in-computed-property
  return instance.appContext.config.globalProperties['$loading']
  // fromPairs(
}
