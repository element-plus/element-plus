import { kebabCase } from '@element-plus/utils/util'
import { onMounted, getCurrentInstance } from 'vue'

const useMigrating = function () {
  onMounted(() => {
    const instance = getCurrentInstance()
    if (process.env.NODE_ENV === 'production') return
    if (!instance.vnode) return
    const { props = {}, events = {} } = getMigratingConfig()
    // const { data, componentOptions } = instance;
    const { data } = instance
    const definedProps = data.attrs || {}
    // const definedEvents = componentOptions.listeners || {};

    for (let propName in definedProps as any) {
      propName = kebabCase(propName) // compatible with camel case
      if (props[propName]) {
        console.warn(
          `[Element Migrating][${this.$options.name}][Attribute]: ${props[propName]}`,
        )
      }
    }

    // for (let eventName in definedEvents) {
    //   eventName = kebabCase(eventName); // compatible with camel case
    //   if (events[eventName]) {
    //     console.warn(
    //       `[Element Migrating][${this.$options.name}][Event]: ${events[eventName]}`
    //     );
    //   }
    // }
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
