<script setup lang="ts">
import { toRefs, computed } from 'vue'

import ExternalIcon from './external-icon'
import { useNavLink } from 'vitepress/dist/client/theme-default/composables/navLink'

import type { DefaultTheme } from 'vitepress/types'
const skipped = ['https://www.npmjs.org/package/element-plus']

const props = defineProps<{
  item: DefaultTheme.NavItemWithLink
}>()

const propsRefs = toRefs(props)

const { props: linkProps, isExternal } = useNavLink(propsRefs.item)
const isSkipped = computed(() => skipped.includes(propsRefs.item.value.link))
</script>

<template>
  <div class="ep-nav-link">
    <a class="item" v-bind="linkProps">
      {{ item.text }}
      <el-icon
        style="font-size: 14px;margin-left: 4px"
        color="inherit"
      >
        <ExternalIcon v-if="!isSkipped && isExternal" />
      </el-icon>
    </a>
  </div>
</template>
