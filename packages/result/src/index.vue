<template>
  <div class="el-result">
    <div class="el-result__icon">
      <slot v-if="$slots.icon" name="icon"></slot>
      <template v-else-if="statusCode">
        <img-forbidden v-if="statusCode === '403'" />
        <img-not-found v-if="statusCode === '404'" />
        <img-server-error v-if="statusCode === '500'" />
      </template>
      <i v-else :class="typeClass"></i>
    </div>
    <div v-if="title || $slots.title" class="el-result__title">
      <slot v-if="$slots.title" name="title"></slot>
      <p v-else>{{ title }}</p>
    </div>
    <div v-if="subTitle || $slots.subTitle" class="el-result__subtitle">
      <slot v-if="$slots.subTitle" name="subTitle"></slot>
      <p v-else>{{ subTitle }}</p>
    </div>
    <div v-if="$slots.extra" class="el-result__extra">
      <slot name="extra"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import ImgForbidden from './img-forbidden.vue'
import ImgNotFound from './img-not-found.vue'
import ImgServerError from './img-server-error.vue'

const TypeMap: Indexable<string> = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error',
}

const StatusMap: Indexable<string> = {
  '403': '403',
  '404': '404',
  '500': '500',
}

export default defineComponent({
  name: 'ElResult',
  components: {
    [ImgForbidden.name]: ImgForbidden,
    [ImgNotFound.name]: ImgNotFound,
    [ImgServerError.name]: ImgServerError,
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
    const statusCode = computed(() => {
      const status = props.type
      return status && StatusMap[status] ? StatusMap[status] : ''
    })

    return {
      typeClass,
      statusCode,
    }
  },
})
</script>
