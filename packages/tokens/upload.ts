import type { InjectionKey } from 'vue'

export interface UploadContext {
  accept: string
}

export const uploadContextKey: InjectionKey<UploadContext> =
  Symbol('uploadContextKey')
