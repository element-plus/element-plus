import type { ComputedRef, InjectionKey } from 'vue'

export interface UploadContext {
  accept: ComputedRef<string>
}

export const uploadContextKey: InjectionKey<UploadContext> =
  Symbol('uploadContextKey')
