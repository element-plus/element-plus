import { buildProps, definePropType } from '@element-plus/utils/props'
import type { Key, DataItem, Format, Props } from './transfer'
import type { ExtractPropTypes, VNode } from 'vue'

export const transferPanelProps = buildProps({
  data: {
    type: definePropType<DataItem[]>(Array),
    default: () => [],
  },
  optionRender: {
    type: definePropType<({ option: VNode }) => VNode>(Function),
  },
  placeholder: String,
  title: String,
  filterable: Boolean,
  format: {
    type: definePropType<Format>(Object),
  },
  filterMethod: {
    type: definePropType<(query: string, item: DataItem) => boolean>(Function),
  },
  defaultChecked: {
    type: definePropType<(query: string, item: DataItem) => boolean>(Array),
  },
  props: {
    type: definePropType<Props>(Object),
  },
} as const)

export type TransferPanelProps = ExtractPropTypes<typeof transferPanelProps>

export interface TransferPanelState {
  checked: Key[]
  allChecked: boolean
  query: string
  inputHover: boolean
  checkChangeByUser: boolean
}
