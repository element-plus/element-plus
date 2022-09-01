<template>
  <el-tooltip :content="helperMessage" :placement="helperPlacement">
    <el-icon :style="{ color: helperIconColor }" :class="ns.e('helper-icon')">
      <component :is="helperIcon" />
    </el-icon>
  </el-tooltip>
</template>

<script lang="ts" setup>
import { ElIcon } from '@element-plus/components/icon'
import ElTooltip from '@element-plus/components/tooltip'
import { iconPropType } from '@element-plus/utils'
import { QuestionFilled } from '@element-plus/icons-vue'
import { useNamespace } from '@element-plus/hooks'
import type { PropType } from 'vue'
import type { Placement } from '@element-plus/components/popper'
defineOptions({
  name: 'ElTableHeaderHelperMessage',
})

defineProps({
  helperMessage: String,
  helperPlacement: {
    type: String as PropType<Placement>,
    default: 'right-start',
  },
  helperIconColor: String,
  helperIcon: {
    type: iconPropType,
    default: () => QuestionFilled,
  },
})

const ns = useNamespace('table-column')
</script>
