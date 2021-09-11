<script setup lang="ts">
const handleSelect = (link: string, evt: MouseEvent) => {
  console.log(link, evt)
}
</script>

<template>
  <div flex="~ row gap-2" justify-between>
    <div id="demo1-content">
      <h2 id="demo1-title1">What is Lorem Ipsum?</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <h2 id="demo1-title2">Why do we use it?</h2>
      <p class="whitespace-nowrap">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>

      <h3 id="demo1-title3">Where does it come from?</h3>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32.
      </p>
    </div>

    <el-anchor min-w-35 container="#demo1-content" @select="handleSelect">
      <el-anchor-link href="#demo1-title1" title="at is Lorem Ipsum?" />
      <el-anchor-link title="Why do we use it?" href="#demo1-title2">
        <el-anchor-link title="Where does it come from?" href="#demo1-title3" />
      </el-anchor-link>
    </el-anchor>
  </div>
</template>

<style scoped>
#demo1-content {
  height: 200px;
  overflow: scroll;
}

#demo1-content h2 {
  white-space: nowrap;
}
</style>
