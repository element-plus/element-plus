<template>
  <div
    :class="[
      ns.b(),
      ns.is('contentful', !!$slots.default),
      {
        [ns.m('has-breadcrumb')]: !!$slots.breadcrumb,
        [ns.m('has-extra')]: !!$slots.extra,
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
            :aria-label="title || t('g.pageHeader.title')"
            :class="ns.e('icon')"
          >
            <slot name="icon">
              <g-icon v-if="icon">
                <component :is="icon" />
              </g-icon>
            </slot>
          </div>
          <div :class="ns.e('title')">
            <slot name="title">{{ title || t('g.pageHeader.title') }}</slot>
          </div>
        </div>
        <g-divider direction="vertical" />
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
import { GIcon } from '@element-plus/components/icon'
import { GDivider } from '@element-plus/components/divider'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { Back } from '@element-plus/icons-vue'
import { pageHeaderEmits } from './page-header'

import type { PageHeaderProps } from './page-header'

defineOptions({
  name: 'GPageHeader',
})

withDefaults(defineProps<PageHeaderProps>(), {
  icon: () => Back,
  content: '',
})
const emit = defineEmits(pageHeaderEmits)

const { t } = useLocale()
const ns = useNamespace('page-header')

function handleClick() {
  emit('back')
}
</script>
