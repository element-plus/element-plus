<template>
  <div :class="ns.b()">
    <el-tooltip :content="content" v-bind="{ ...toolTipOption }">
      <div>
        <span
          :class="classEllipsis"
          :style="styleEllipsis"
          @click="expandTriggerFunc"
          v-html="state.textInner"
        />
      </div>
    </el-tooltip>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import ElTooltip from '@element-plus/components/tooltip'
import { useNamespace } from '@element-plus/hooks'
import { ellipsisProps } from './ellipsis'
defineOptions({
  name: 'ElEllipsis',
})
const ns = useNamespace('ellipsis')
const props = defineProps(ellipsisProps)
const state = reactive({
  isExpand: false,
  textCache: '',
  textInner: props.text,
})
const handleText = () => {
  if (props.ellipsis === 0) return
  if (props.placement === 'left') {
    state.textInner = `${props.text.slice(
      0,
      props.text.length - props.ellipsis
    )}...`
  }
  if (props.placement === 'center') {
    const elpNumCenter = props.ellipsis / 2
    const lenCenter = props.text.length / 2
    const subStrHead = props.text.slice(
      0,
      Math.max(0, lenCenter - elpNumCenter)
    )
    const subStrFoot = props.text.slice(
      lenCenter + elpNumCenter,
      props.text.length
    )
    state.textInner = `${subStrHead}...${subStrFoot}`
  }
  if (props.placement === 'right') {
    state.textInner = `...${props.text.slice(
      props.ellipsis,
      props.text.length
    )}`
  }
}
const initText = (val: string) => {
  state.textCache = val
  handleText()
}
watch(
  () => props.text,
  (nVal) => {
    initText(nVal)
  }
)
initText(props.text)

const styleEllipsis = ref(``)
const setStyleEllipsis = (flag: boolean): string => {
  return flag
    ? ''
    : `
      -webkit-line-clamp:${props.lineClamp};
      display:-webkit-inline-box;`
}
const classEllipsis = ref(``)
const setClassEllipsis = (flag: boolean): string => {
  return flag ? `${ns.e('inner')}` : `${ns.e('inner')} ${ns.b()}--clamp`
}
styleEllipsis.value = setStyleEllipsis(!props.lineClamp)
classEllipsis.value = setClassEllipsis(!props.lineClamp)
const expandTriggerFunc = (): void => {
  if (!props.expandTrigger) return
  state.isExpand = !state.isExpand
  styleEllipsis.value = setStyleEllipsis(state.isExpand)
  classEllipsis.value = setClassEllipsis(state.isExpand)
  state.isExpand && (state.textInner = state.textCache)
  !state.isExpand && handleText()
}
</script>
