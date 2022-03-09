<template>
  <transition-group
    tag="ul"
    :class="[
      nsUpload.b('list'),
      nsUpload.bm('list', listType),
      nsUpload.is('disabled', disabled),
    ]"
    :name="nsList.b()"
  >
    <li
      v-for="file in files"
      :key="file.uid || file.name"
      :class="[
        nsUpload.be('list', 'item'),
        nsUpload.is(file.status),
        { focusing },
      ]"
      tabindex="0"
      @keydown.delete="!disabled && handleRemove(file)"
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
          :class="nsUpload.be('list', 'item-thumbnail')"
          :src="file.url"
          alt=""
        />
        <a :class="nsUpload.be('list', 'item-name')" @click="handleClick(file)">
          <el-icon :class="nsIcon.m('document')"><Document /></el-icon>
          {{ file.name }}
        </a>
        <label :class="nsUpload.be('list', 'item-status-label')">
          <el-icon
            v-if="listType === 'text'"
            :class="[nsIcon.m('upload-success'), nsIcon.m('circle-check')]"
          >
            <circle-check />
          </el-icon>
          <el-icon
            v-else-if="['picture-card', 'picture'].includes(listType)"
            :class="[nsIcon.m('upload-success'), nsIcon.m('check')]"
          >
            <Check />
          </el-icon>
        </label>
        <el-icon
          v-if="!disabled"
          :class="nsIcon.m('close')"
          @click="handleRemove(file)"
        >
          <Close />
        </el-icon>
        <!-- Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn-->
        <!-- This is a bug which needs to be fixed -->
        <!-- TODO: Fix the incorrect navigation interaction -->
        <i v-if="!disabled" :class="nsIcon.m('close-tip')">{{
          t('el.upload.deleteTip')
        }}</i>
        <!-- todo -->

        <el-progress
          v-if="file.status === 'uploading'"
          :type="listType === 'picture-card' ? 'circle' : 'line'"
          :stroke-width="listType === 'picture-card' ? 6 : 2"
          :percentage="Number(file.percentage)"
          :style="listType === 'picture-card' ? '' : 'margin-top: 0.5rem'"
        />
        <span
          v-if="listType === 'picture-card'"
          :class="nsUpload.be('list', 'item-actions')"
        >
          <span
            :class="nsUpload.be('list', 'item-preview')"
            @click="handlePreview(file)"
          >
            <el-icon :class="nsIcon.m('zoom-in')"><zoom-in /></el-icon>
          </span>
          <span
            v-if="!disabled"
            :class="nsUpload.be('list', 'item-delete')"
            @click="handleRemove(file)"
          >
            <el-icon :class="nsIcon.m('delete')"><Delete /></el-icon>
          </span>
        </span>
      </slot>
    </li>
  </transition-group>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { ElIcon } from '@element-plus/components/icon'
import {
  Document,
  Delete,
  Close,
  ZoomIn,
  Check,
  CircleCheck,
} from '@element-plus/icons-vue'
import { useLocale, useNamespace } from '@element-plus/hooks'
import ElProgress from '@element-plus/components/progress'

import { uploadListEmits, uploadListProps } from './upload-list'
import type { UploadFile } from './upload'

defineOptions({
  name: 'ElUploadList',
})

const props = defineProps(uploadListProps)
const emit = defineEmits(uploadListEmits)

const { t } = useLocale()
const nsUpload = useNamespace('upload')
const nsIcon = useNamespace('icon')
const nsList = useNamespace('list')

const focusing = ref(false)

const handleClick = (file: UploadFile) => {
  props.handlePreview(file)
}

const onFileClicked = (e: Event) => {
  ;(e.target as HTMLElement).focus()
}

const handleRemove = (file: UploadFile) => {
  emit('remove', file)
}
</script>
