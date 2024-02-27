import { isString } from '../types'
import { isClient } from '../browser'

type GetElement = <T extends string | HTMLElement | Window | null | undefined>(
  target: T
) => T extends string ? HTMLElement | null : T

export const getElement = ((
  target: string | HTMLElement | Window | null | undefined
) => {
  if (!isClient || target === '') return null
  if (isString(target)) {
    return document.querySelector<HTMLElement>(target)
  }
  return target
}) as GetElement
