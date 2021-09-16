import { Ref } from 'vue'

export interface CollapseProvider {
  activeNames: Ref
  handleItemClick: (name: string | number) => void
}
