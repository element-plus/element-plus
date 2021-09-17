import { getCurrentInstance, onMounted } from 'vue'
import { debugWarn } from '@element-plus/utils/error'
import { kebabCase } from '@element-plus/utils/util'

const useMigrating = function () {
  onMounted(() => {
    const instance = getCurrentInstance()
    if (process.env.NODE_ENV === 'production') return
    if (!instance.vnode) return
    const { props = {} } = getMigratingConfig()
    const { data } = instance
    const definedProps = data.attrs || {}

    for (let propName in definedProps as any) {
      propName = kebabCase(propName) // compatible with camel case
      if (props[propName]) {
        debugWarn(
          'Element Migrating',
          `[${instance.proxy.$options.name}][Attribute]: ${props[propName]}`
        )
      }
    }
  })
  const getMigratingConfig = function () {
    return {
      props: {},
      events: {},
    }
  }
  return {
    getMigratingConfig,
  }
}

export default useMigrating
