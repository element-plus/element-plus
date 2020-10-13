import { Emitter } from 'mitt'
import { Ref } from 'vue'

export interface CollapseProvider {
  activeNames: Ref
  collapseMitt: Emitter
}
