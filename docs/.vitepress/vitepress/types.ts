import type { EnhanceAppContext } from 'vitepress'

export type Link = {
  text: string
  link: string
  promotion?: string
  activeMatch: string
}

export type UserModule = (ctx: EnhanceAppContext) => void
