<script lang="ts">
import {
  computed,
  defineComponent,
  h,
  getCurrentInstance,
  inject,
  ref,
  provide,
  onBeforeUnmount,
} from 'vue'
import { NOOP } from '@vue/shared'
import { elFormKey } from '@element-plus/form'

import ajax from './ajax'
import UploadList from './upload-list.vue'
import Upload from './upload.vue'
import useHandlers from './useHandlers'

import type { PropType } from 'vue'
import type { ElFormContext } from '@element-plus/form'
import type {
  ListType,
  UploadFile,
  FileHandler,
  FileResultHandler,
} from './upload.type'

type PFileHandler<T> = PropType<FileHandler<T>>
type PFileResultHandler<T = any> = PropType<FileResultHandler<T>>
type Nullable<T> = null | T

export default defineComponent({
  name: 'ElUpload',
  components: {
    Upload,
    UploadList,
  },
  props: {
    action: {
      type: String,
      required: true,
    },
    headers: {
      type: Object as PropType<Headers>,
      default: () => ({}),
    },
    data: {
      type: Object,
      default: () => ({}),
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: 'file',
    },
    drag: {
      type: Boolean,
      default: false,
    },
    withCredentials: Boolean,
    showFileList: {
      type: Boolean,
      default: true,
    },
    accept: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'select',
    },
    beforeUpload: {
      type: Function as PFileHandler<void>,
      default: NOOP,
    },
    beforeRemove: {
      type: Function as PFileHandler<boolean>,
      default: NOOP,
    },
    onRemove: {
      type: Function as PFileHandler<void>,
      default: NOOP,
    },
    onChange: {
      type: Function as PFileHandler<void>,
      default: NOOP,
    },
    onPreview: {
      type: Function as PropType<() => void>,
      default: NOOP,
    },
    onSuccess: {
      type: Function as PFileResultHandler,
      default: NOOP,
    },
    onProgress: {
      type: Function as PFileResultHandler<ProgressEvent>,
      default: NOOP,
    },
    onError: {
      type: Function as PFileResultHandler<Error>,
      default: NOOP,
    },
    fileList: {
      type: Array as PropType<UploadFile[]>,
      default: () => {
        return [] as UploadFile[]
      },
    },
    autoUpload: {
      type: Boolean,
      default: true,
    },
    listType: {
      type: String as PropType<ListType>,
      default: 'text' as ListType, // text,picture,picture-card
    },
    httpRequest: {
      type: Function,
      default: ajax,
    },
    disabled: Boolean,
    limit: {
      type: Number as PropType<Nullable<number>>,
      default: null,
    },
    onExceed: {
      type: Function,
      default: () => NOOP,
    },
  },
  setup(props) {
    const elForm = inject(elFormKey, {} as ElFormContext)

    const uploadDisabled = computed(() => {
      return props.disabled || elForm.disabled
    })

    const {
      abort,
      clearFiles,
      handleError,
      handleProgress,
      handleStart,
      handleSuccess,
      handleRemove,
      submit,
      uploadRef,
      uploadFiles,
    } = useHandlers(props)


    provide('uploader', getCurrentInstance())

    onBeforeUnmount(() => {
      uploadFiles.value.forEach(file => {
        if (file.url && file.url.indexOf('blob:') === 0) {
          URL.revokeObjectURL(file.url)
        }
      })
    })

    return {
      abort,
      dragOver: ref(false),
      draging: ref(false),
      handleError,
      handleProgress,
      handleRemove,
      handleStart,
      handleSuccess,
      uploadDisabled,
      uploadFiles,
      uploadRef,
      submit,
      clearFiles,
    }
  },
  render() {
    let uploadList
    if (this.showFileList) {
      uploadList = h(
        UploadList,
        {
          disabled: this.uploadDisabled,
          listType: this.listType,
          files: this.uploadFiles,
          onRemove: this.handleRemove,
          handlePreview: this.onPreview,
        },
        this.$slots.file ? {
          default: (props: { file: UploadFile; }) => {
            return this.$slots.file({
              file: props.file,
            })
          },
        } : null,
      )
    } else {
      uploadList = null
    }

    const uploadData = {
      type: this.type,
      drag: this.drag,
      action: this.action,
      multiple: this.multiple,
      'before-upload': this.beforeUpload,
      'with-credentials': this.withCredentials,
      headers: this.headers,
      name: this.name,
      data: this.data,
      accept: this.accept,
      fileList: this.uploadFiles,
      autoUpload: this.autoUpload,
      listType: this.listType,
      disabled: this.uploadDisabled,
      limit: this.limit,
      'on-exceed': this.onExceed,
      'on-start': this.handleStart,
      'on-progress': this.handleProgress,
      'on-success': this.handleSuccess,
      'on-error': this.handleError,
      'on-preview': this.onPreview,
      'on-remove': this.handleRemove,
      'http-request': this.httpRequest,
      ref: 'uploadRef',
    }
    const trigger = this.$slots.trigger || this.$slots.default
    const uploadComponent = h(Upload, uploadData, {
      default: () => trigger?.(),
    })
    return h('div', [
      this.listType === 'picture-card' ? uploadList : null,
      this.$slots.trigger
        ? [uploadComponent, this.$slots.default()]
        : uploadComponent,
      this.$slots.tip?.(),
      this.listType !== 'picture-card' ? uploadList : null,
    ])
  },
})
</script>
