<template>
  <div class="page-resource">
    <h1>Resources</h1>
    <p>More resources are still in development...</p>
    <el-space :size="20" alignment="start">
      <el-card class="card" shadow="hover">
        <img src="/images/Axure-Components.svg" alt="axure" />
        <h3>Axure Components</h3>
        <p>
          By importing Element UI in Axure, you can easily apply all the
          components we provide during interaction design.
        </p>
        <a
          href="https://github.com/ElementUI/Resources/raw/master/Element_Components_v2.1.0.rplib"
        >
          <el-button type="primary">Download</el-button>
        </a>
      </el-card>
      <el-card class="card" shadow="hover">
        <img src="/images/Sketch-Template.svg" alt="Sketch" />
        <h3>Sketch Template</h3>
        <p>
          Apply components from Element template, so you can improve design
          efficiency while keeping a unified visual style.
        </p>
        <a
          href="https://github.com/ElementUI/Resources/raw/master/Element%20UI%20Kit_v2.0.sketch"
        >
          <el-button type="primary">Download</el-button>
        </a>
      </el-card>
      <el-card class="card" shadow="hover">
        <img src="/images/figma.png" alt="Figma" />
        <h3>Figma Template</h3>
        <p>
          Newly designed Figma component library for 2022 with new features such
          as Auto-layout and Variants.
        </p>
        <a
          href="https://www.figma.com/community/file/1021254029764378306"
          target="_blank"
        >
          <el-button type="primary">Download</el-button>
        </a>
      </el-card>
    </el-space>
  </div>
</template>

<style lang="scss" scoped>
.page-resource {
  box-sizing: border-box;
  padding: 0 40px;

  h1 {
    color: var(--text-color);

    + p {
      color: var(--text-color-light);
    }
  }
}

.card {
  text-align: center;
  padding: 32px 0;

  img {
    margin: auto;
    margin-bottom: 16px;
    height: 87px;
  }

  h3 {
    margin: 10px;
    font-size: 18px;
    font-weight: normal;
  }

  p {
    font-size: 14px;
    color: #99a9bf;
    padding: 0 30px;
    margin: 0;
    word-break: break-word;
    line-height: 1.8;
    min-height: 75px;
    margin-bottom: 16px;
  }
}
</style>
