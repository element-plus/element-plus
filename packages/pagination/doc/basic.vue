<template>
  <div>
    <div class="item">
      <span class="demonstration">页数较少时的效果</span>
      <el-pagination
        class="item"
        layout="prev, pager, next"
        :total="50"
      />
    </div>
    <div class="item">
      <span class="demonstration">大于 7 页时的效果</span>
      <el-pagination
        class="item"
        layout="prev, pager, next"
        :total="1000"
      />
    </div>
    <div class="item">
      <span class="demonstration">大于 7 页时的 small 效果</span>
      <el-pagination
        small
        class="item"
        layout="prev, pager, next"
        :total="1000"
      />
    </div>
    <div class="item">
      <span class="demonstration">大于 7 页时的 background 效果</span>
      <el-pagination
        background
        class="item"
        layout="prev, pager, next"
        :total="1000"
      />
    </div>
    <div class="item">
      <span class="demonstration">大于 7 页时的 Pager background 效果</span>
      <el-pagination
        background
        class="item"
        :pager-count="13"
        layout="prev, pager, next"
        :total="1000"
      />
    </div>
    <div class="item">
      <span class="demonstration">显示总数</span>
      <el-pagination
        class="item"
        layout="total, prev, pager, next"
        :page-size="100"
        :total="500"
      />
    </div>
    <div class="item">
      <span class="demonstration">调整每页显示条数</span>
      <el-pagination
        class="item"
        layout="sizes, prev, pager, next"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        :total="1000"
      />
    </div>
    <div class="item">
      <span class="demonstration">直接前往</span>
      <el-pagination
        class="item"
        layout="prev, pager, next, jumper"
        :page-size="100"
        :total="1000"
      />
    </div>
    <div class="item">
      <span class="demonstration">完整功能</span>
      <el-pagination
        class="item"
        layout="total, sizes, prev, pager, next, jumper"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        :total="400"
      />
    </div>
    <div class="item">
      <span class="demonstration">当只有一页时隐藏分页</span>
      <el-switch v-model="toggle" class="switch" />
      <el-pagination
        class="item"
        :hide-on-single-page="toggle"
        layout="prev, pager, next"
        :page-size="100"
        :total="5"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      toggle: false,
    }
  },
}
</script>

<style scoped>
.item {
  margin-bottom: 40px;
}

.switch {
  display: block;
  margin-top: 10px;
}
</style>


