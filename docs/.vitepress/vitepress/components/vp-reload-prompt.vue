<script setup lang="ts">
import { computed, watch } from 'vue'
import { useStorage } from '@vueuse/core'
import { useRegisterSW } from 'virtual:pwa-register/vue'
import { useLang } from '../composables/lang'
import pwaLocale from '../../i18n/component/pwa.json'

const lang = useLang()
const locale = computed(() => pwaLocale[lang.value])
const { needRefresh, updateServiceWorker } = useRegisterSW()
const alwaysRefresh = useStorage('PWA_Always_Refresh', false)

watch(needRefresh, (value) => {
  value && alwaysRefresh.value && updateServiceWorker()
})
</script>

<template>
  <transition name="pwa-popup">
    <el-card v-if="!alwaysRefresh && needRefresh" class="pwa-card" role="alert">
      <p class="pwa-card-text">{{ locale.message }}</p>
      <el-button type="primary" plain @click="updateServiceWorker()">
        {{ locale.refresh }}
      </el-button>
      <el-button plain @click="alwaysRefresh = true">
        {{ locale['always-refresh'] }}
      </el-button>
      <el-button plain @click="needRefresh = false">
        {{ locale.close }}
      </el-button>
    </el-card>
  </transition>
</template>

<style scoped>
.pwa-card {
  position: fixed;
  right: 1em;
  bottom: 1em;
  z-index: 3000;
  text-align: center;
}

.pwa-card .pwa-card-text {
  margin: 0 0 1em;
}

.pwa-popup-enter-active,
.pwa-popup-leave-active {
  transition: var(--el-transition-md-fade);
}

.pwa-popup-enter,
.pwa-popup-leave-to {
  opacity: 0;
  transform: translate(0, 50%) scale(0.5);
}
</style>
