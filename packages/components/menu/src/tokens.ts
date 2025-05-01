import type { InjectionKey } from 'vue'
import type { MenuProvider } from './types'

export const MENU_INJECTION_KEY: InjectionKey<MenuProvider> = Symbol('rootMenu')

export const SUB_MENU_INJECTION_KEY = 'subMenu:'
