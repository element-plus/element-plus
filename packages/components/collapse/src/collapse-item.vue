<template>
  <div
    :class="[
      ns.b('item'),
      ns.is('active', isActive),
      ns.is('disabled', disabled),
    ]"
  >
    <div
      role="tab"
      :aria-expanded="isActive"
      :aria-controls="ns.b(`content-${id}`)"
      :aria-describedby="ns.b(`content-${id}`)"
    >
      <div
        :id="ns.b(`head-${id}`)"
        :class="[
          ns.be('item', 'header'),
          ns.is('active', isActive),
          { focusing: focusing && !disabled },
        ]"
        role="button"
        :tabindex="disabled ? -1 : 0"
        @click="handleHeaderClick"
        @keypress.space.enter.stop.prevent="handleEnterClick"
        @focus="handleFocus"
        @blur="focusing = false"
      >
        <slot name="title">{{ title }}</slot>
        <el-icon :class="[ns.be('item', 'arrow'), ns.is('active', isActive)]">
          <arrow-right />
        </el-icon>
      </div>
    </div>
    <el-collapse-transition>
      <div
        v-show="isActive"
        :id="ns.b(`content-${id}`)"
        :class="ns.be('item', 'wrap')"
        role="tabpanel"
        :aria-hidden="!isActive"
        :aria-labelledby="ns.b(`head-${id}`)"
      >
        <div :class="ns.be('item', 'content')">
          <slot />
        </div>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject, ref } from 'vue'
import { generateId } from '@element-plus/utils'
import ElCollapseTransition from '@element-plus/components/collapse-transition'
import ElIcon from '@element-plus/components/icon'
import { ArrowRight } from '@element-plus/icons-vue'
import { useNamespace } from '@element-plus/hooks'
import { collapseContextKey } from '@element-plus/tokens'
import { collapseItemProps } from './collapse-item'

defineOptions({
  name: 'ElCollapseItem',
})

const props = defineProps(collapseItemProps)

const collapse = inject(collapseContextKey)
const ns = useNamespace('collapse')

const focusing = ref(false)
const isClick = ref(false)
const id = ref(generateId())

const isActive = computed(() =>
  collapse?.activeNames.value.includes(props.name)
)

const handleFocus = () => {
  setTimeout(() => {
    if (!isClick.value) {
      focusing.value = true
    } else {
      isClick.value = false
    }
  }, 50)
}

const handleHeaderClick = () => {
  if (props.disabled) return
  collapse?.handleItemClick(props.name)
  focusing.value = false
  isClick.value = true
}

const handleEnterClick = () => {
  collapse?.handleItemClick(props.name)
}

defineExpose({
  /** @description current collapse-item whether active */
  isActive,
})
</script>
