import { withInstall } from '@element-plus/utils'
import Select from './src/select.vue'

const _Select = withInstall(Select)

export default _Select
export const ElSelectV2 = _Select

export * from '@element-plus/tokens/select-v2'
