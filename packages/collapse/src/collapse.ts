import { Ref } from 'vue'

export interface CollapseProvider {
  activeNames: Ref
  triggerClick: (name: string | number) => void
}
