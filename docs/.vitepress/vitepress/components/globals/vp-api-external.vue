<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  prefix: {
    type: String,
    default: 'see',
  },
})
</script>

<template>
  <span v-if="prefix" class="mr-4">{{ prefix }}</span>
  <a :href="url" class="vp-link" target="_blank" rel="noopener noreferrer">
    {{ text }}
    <svg
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      width="1.2em"
      height="1.2em"
      class="link-icon"
    >
      <path
        fill="currentColor"
        d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3h8z"
      />
    </svg>
  </a>
</template>
