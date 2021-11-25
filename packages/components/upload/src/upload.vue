<script lang="ts">
import {
  defineComponent,
  h,
  ref,
  provide,
  onBeforeUnmount,
  renderSlot,
  reactive,
} from 'vue'
import { uploadContextKey } from '@element-plus/tokens'

import { useFormItem } from '@element-plus/hooks'
import UploadList from './upload-list.vue'
import UploadContent from './upload-content.vue'
import useHandlers from './use-handlers'

import { uploadProps } from './upload'
import type { UploadFile } from './upload'

export default defineComponent({
  name: 'ElUpload',
  components: {
    UploadContent,
    UploadList,
  },
  props: uploadProps,
  setup(props) {
    const { disabled: uploadDisabled } = useFormItem({})

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

    provide(
      uploadContextKey,
      reactive({
        accept: props.accept,
      })
    )

    onBeforeUnmount(() => {
      uploadFiles.value.forEach((file) => {
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
          files: this.uploadFiles,
          disabled: this.uploadDisabled,
          listType: this.listType,
          'on-remove': this.handleRemove,
          handlePreview: this.onPreview,
        },
        this.$slots.file
          ? {
              default: (props: { file: UploadFile }) => {
                return this.$slots.file!({
                  file: props.file,
                })
              },
            }
          : undefined
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
      method: this.method,
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
      'on-remove': this.handleRemove,
      'http-request': this.httpRequest,
      ref: 'uploadRef',
    }
    const trigger = this.$slots.trigger || this.$slots.default
    const uploadComponent = h(UploadContent, uploadData, {
      default: () => trigger?.(),
    })
    return h('div', [
      this.listType === 'picture-card' ? uploadList : null,
      this.$slots.trigger
        ? [uploadComponent, renderSlot(this.$slots, 'default')]
        : uploadComponent,
      this.$slots.tip?.(),
      this.listType !== 'picture-card' ? uploadList : null,
    ])
  },
})
</script>
