import type { InjectionKey } from 'vue'
import type { PanelContext, PanelItem } from './type'

export const addPanelKey: InjectionKey<(panel: PanelItem) => void> =
  Symbol('split-addPanel')

export const removePanelKey: InjectionKey<(uid: number) => void> =
  Symbol('split-removePanel')

export const panelContextKey: InjectionKey<PanelContext> =
  Symbol('split-panelContext')
