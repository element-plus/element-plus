<template>
  <transition-group
    tag="ul"
    :class="[
      'el-upload-list',
      'el-upload-list--' + listType,
      { 'is-disabled': disabled },
    ]"
    name="el-list"
  >
    <li
      v-for="file in files"
      :key="file.uid || file"
      :class="[
        'el-upload-list__item',
        'is-' + file.status,
        focusing ? 'focusing' : '',
      ]"
      tabindex="0"
      @keydown.delete="!disabled && handleRemove($event, file)"
      @focus="focusing = true"
      @blur="focusing = false"
      @click="onFileClicked"
    >
      <slot :file="file">
        <img
          v-if="
            file.status !== 'uploading' &&
            ['picture-card', 'picture'].includes(listType)
          "
          class="el-upload-list__item-thumbnail"
          :src="file.url"
          alt=""
        />
        <a class="el-upload-list__item-name" @click="handleClick(file)">
          <el-icon class="el-icon--document"><document /></el-icon>
          {{ file.name }}
        </a>
        <label class="el-upload-list__item-status-label">
          <el-icon
            v-if="listType === 'text'"
            class="el-icon--upload-success el-icon--circle-check"
          >
            <circle-check />
          </el-icon>
          <el-icon
            v-else-if="['picture-card', 'picture'].includes(listType)"
            class="el-icon--upload-success el-icon--check"
          >
            <check />
          </el-icon>
        </label>
        <el-icon
          v-if="!disabled"
          class="el-icon--close"
          @click="handleRemove($event, file)"
        >
          <close />
        </el-icon>
        <!-- Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn-->
        <!-- This is a bug which needs to be fixed -->
        <!-- TODO: Fix the incorrect navigation interaction -->
        <i v-if="!disabled" class="el-icon--close-tip">{{
          t('el.upload.deleteTip')
        }}</i>
        <el-progress
          v-if="file.status === 'uploading'"
          :type="listType === 'picture-card' ? 'circle' : 'line'"
          :stroke-width="listType === 'picture-card' ? 6 : 2"
          :percentage="+file.percentage"
        />
        <span
          v-if="listType === 'picture-card'"
          class="el-upload-list__item-actions"
        >
          <span
            class="el-upload-list__item-preview"
            @click="handlePreview(file)"
          >
            <el-icon class="el-icon--zoom-in"><zoom-in /></el-icon>
          </span>
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove($event, file)"
          >
            <el-icon class="el-icon--delete"><delete /></el-icon>
          </span>
        </span>
      </slot>
    </li>
  </transition-group>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { NOOP } from '@vue/shared'
import { ElIcon } from '@element-plus/components/icon'
import {
  Document,
  Delete,
  Close,
  ZoomIn,
  Check,
  CircleCheck,
} from '@element-plus/icons-vue'
import { useLocale } from '@element-plus/hooks'
import ElProgress from '@element-plus/components/progress'

import type { PropType } from 'vue'
import type { UploadFile } from './upload.type'

export default defineComponent({
  name: 'ElUploadList',
  components: {
    ElProgress,
    ElIcon,
    Document,
    Delete,
    Close,
    ZoomIn,
    Check,
    CircleCheck,
  },
  props: {
    files: {
      type: Array as PropType<UploadFile[]>,
      default: () => [] as File[],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    handlePreview: {
      type: Function as PropType<(file: UploadFile) => void>,
      default: () => NOOP,
    },
    listType: {
      type: String as PropType<'picture' | 'picture-card' | 'text'>,
      default: 'text',
    },
  },
  emits: ['remove'],
  setup(props, { emit }) {
    const { t } = useLocale()

    const handleClick = (file: UploadFile) => {
      props.handlePreview(file)
    }

    const onFileClicked = (e: Event) => {
      ;(e.target as HTMLElement).focus()
    }

    const handleRemove = (e: Event, file: UploadFile) => {
      emit('remove', file)
    }
    return {
      focusing: ref(false),
      handleClick,
      handleRemove,
      onFileClicked,
      t,
    }
  },
})
</script>
