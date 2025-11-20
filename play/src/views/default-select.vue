<template>
  <div>
    <select v-for="i in 500" :key="i">
      <option :label="'common.low'" :value="0" />
      <option :label="'common.middle'" :value="1" />
      <option :label="'common.high'" :value="2" />
      <option :label="'common.ext_high'" :value="3" />
    </select>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
