<template>
  <div class="el-result">
    <div class="el-result__icon">
      <slot name="icon">
        <i :class="typeClass"></i>
      </slot>
    </div>
    <div v-if="title || $slots.title" class="el-result__title">
      <slot name="title">
        <p>{{ title }}</p>
      </slot>
    </div>
    <div v-if="subTitle || $slots.subTitle" class="el-result__subtitle">
      <slot name="subTitle">
        <p>{{ subTitle }}</p>
      </slot>
    </div>
    <div v-if="$slots.extra" class="el-result__extra">
      <slot name="extra"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'

const TypeMap: Indexable<string> = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error',
}

export default defineComponent({
  name: 'ElResult',
  props: {
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'info',
    },
  },
  setup(props) {
    const typeClass = computed(() => {
      const type = props.type
      return type && TypeMap[type] ? `el-icon-${TypeMap[type]}` : 'el-icon-info'
    })

    return {
      typeClass,
    }
  },
})
</script>
