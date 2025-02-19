<template>
  <div
    :class="[
      ns.b(),
      {
        [ns.m('has-breadcrumb')]: !!$slots.breadcrumb,
        [ns.m('has-extra')]: !!$slots.extra,
        [ns.is('contentful')]: !!$slots.default,
      },
    ]"
  >
    <div v-if="$slots.breadcrumb" :class="ns.e('breadcrumb')">
      <slot name="breadcrumb" />
    </div>
    <div :class="ns.e('header')">
      <div :class="ns.e('left')">
        <div
          :class="ns.e('back')"
          role="button"
          tabindex="0"
          @click="handleClick"
        >
          <div
            v-if="icon || $slots.icon"
            :aria-label="title || t('el.pageHeader.title')"
            :class="ns.e('icon')"
          >
            <slot name="icon">
              <el-icon v-if="icon">
                <component :is="icon" />
              </el-icon>
            </slot>
          </div>
          <div :class="ns.e('title')">
            <slot name="title">{{ title || t('el.pageHeader.title') }}</slot>
          </div>
        </div>
        <el-divider direction="vertical" />
        <div :class="ns.e('content')">
          <slot name="content">{{ content }}</slot>
        </div>
      </div>

      <div v-if="$slots.extra" :class="ns.e('extra')">
        <slot name="extra" />
      </div>
    </div>

    <div v-if="$slots.default" :class="ns.e('main')">
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ElIcon } from '@element-plus/components/icon'
import { ElDivider } from '@element-plus/components/divider'

import { useLocale, useNamespace } from '@element-plus/hooks'
import { pageHeaderEmits, pageHeaderProps } from './page-header'

defineOptions({
  name: 'ElPageHeader',
})

defineProps(pageHeaderProps)
const emit = defineEmits(pageHeaderEmits)

const { t } = useLocale()
const ns = useNamespace('page-header')

function handleClick() {
  emit('back')
}
</script>
