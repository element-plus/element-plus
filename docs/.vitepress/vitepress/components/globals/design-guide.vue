<template>
  <div class="guide-design">
    <div class="el-row cards" style="margin-left: -7px; margin-right: -7px">
      <div class="el-col el-col-24 el-col-xs-12 el-col-sm-6 is-guttered">
        <div class="card">
          <img src="/images/consistency.png" alt="Consistency" />
          <p>Consistency</p>
        </div>
      </div>
      <div class="el-col el-col-24 el-col-xs-12 el-col-sm-6 is-guttered">
        <div class="card">
          <img src="/images/feedback.png" alt="Feedback" />
          <p>Feedback</p>
        </div>
      </div>
      <div class="el-col el-col-24 el-col-xs-12 el-col-sm-6 is-guttered">
        <div class="card">
          <img src="/images/efficiency.png" alt="Efficiency" />
          <p>Efficiency</p>
        </div>
      </div>
      <div class="el-col el-col-24 el-col-xs-12 el-col-sm-6 is-guttered">
        <div class="card">
          <img src="/images/controllability.png" alt="Controllability" />
          <p>Controllability</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.el-col {
  padding: 0 7px;
}
.card {
  background: var(--el-fill-color-lighter);
  height: 204px;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    margin: 1rem;
    width: 5rem;
    height: 5rem;
  }
}

@media screen and (max-width: 767px) {
  .el-col {
    padding-bottom: 8px;
  }
}
</style>
