<script setup lang="ts">
import VPEditLink from './vp-edit-link.vue'
</script>

<template>
  <footer class="page-footer">
    <div class="edit">
      <VPEditLink />
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '../../styles/mixins' as *;
.page-footer {
  padding-top: 1rem;
  padding-bottom: 1rem;
  overflow: auto;

  .updated {
    padding-top: 4px;
  }
}

@include respond-to('lg') {
  .page-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .updated {
    padding-top: 0;
  }
}
</style>
