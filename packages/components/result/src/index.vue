<template>
  <div class="el-result">
    <div class="el-result__icon">
      <slot name="icon">
        <component :is="iconElement" :class="iconElement" />
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
import IconSuccess from './icon-success.vue'
import IconError from './icon-error.vue'
import IconWarning from './icon-warning.vue'
import IconInfo from './icon-info.vue'

const IconMap: Indexable<string> = {
  success: 'icon-success',
  warning: 'icon-warning',
  error: 'icon-error',
  info: 'icon-info',
}

export default defineComponent({
  name: 'ElResult',
  components: {
    [IconSuccess.name]: IconSuccess,
    [IconError.name]: IconError,
    [IconWarning.name]: IconWarning,
    [IconInfo.name]: IconInfo,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: 'info',
    },
  },
  setup(props) {
    const iconElement = computed(() => {
      const icon = props.icon
      return icon && IconMap[icon] ? IconMap[icon] : 'icon-info'
    })

    return {
      iconElement,
    }
  },
})
</script>
