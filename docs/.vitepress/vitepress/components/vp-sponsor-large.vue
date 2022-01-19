<template>
  <div class="sponsor-item">
    <a
      href="https://www.jnpfsoft.com/index.html?from=elementUI"
      title="jnpfsoft"
      target="_blank"
    >
      <img src="/images/jnpfsoft.jpg" alt="jnpfsoft" />
    </a>
  </div>
</template>

<style scoped lang="scss">
.sponsor-item {
  margin-bottom: 8px;
  img {
    border-radius: 8px;
    overflow: hidden;
  }
}
@media (max-width: 768px) {
  .sponsor-item {
    max-width: 160px;
    img {
      border-radius: 4px;
    }
  }
}
</style>
