import type { InjectionKey, Ref } from 'vue'

export interface UploadContext {
  accept: Ref<string>
}

export const uploadContextKey: InjectionKey<UploadContext> =
  Symbol('uploadContextKey')
