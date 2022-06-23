import { computed } from 'vue'
import { useGlobalConfig } from '../use-global-config'
import type { Component, Ref } from 'vue'

export type IconUsedName = 'Aim' | 'Loading'
export type IconUsed = Record<IconUsedName, Component>

export function useIcon(name: IconUsedName): Ref<Component | undefined>
export function useIcon(): Ref<IconUsed | undefined>
export function useIcon(name?: IconUsedName) {
  const icons = useGlobalConfig('icons')
  if (name) return computed(() => icons.value?.[name])
  return icons
}
