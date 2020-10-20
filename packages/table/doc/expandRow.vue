<template>
  <h3>展开行</h3>
  <el-button type @click="toggleRowExpansion">切换某一行的展开状态</el-button>
  <el-table ref="table" :data="tableData" style="width: 100%">
    <el-table-column type="expand">
      <template #default="props">
        <div class="expand-table-demo">
          <div>
            <label>商品名称</label>
            <span>{{ props.row.name }}</span>
          </div>
          <div>
            <label>所属店铺</label>
            <span>{{ props.row.shop }}</span>
          </div>
          <div>
            <label>商品 ID</label>
            <span>{{ props.row.id }}</span>
          </div>
          <div>
            <label>店铺 ID</label>
            <span>{{ props.row.shopId }}</span>
          </div>
          <div>
            <label>商品分类</label>
            <span>{{ props.row.category }}</span>
          </div>
          <div>
            <label>店铺地址</label>
            <span>{{ props.row.address }}</span>
          </div>
          <div>
            <label>商品描述</label>
            <span>{{ props.row.desc }}</span>
          </div>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="商品 ID" prop="id" />
    <el-table-column label="商品名称" prop="name" />
    <el-table-column label="描述" prop="desc" />
  </el-table>
</template>

<script>
import { getCurrentInstance, ref } from 'vue'
export default {
  setup() {
    const instance = getCurrentInstance()
    const tableData = ref([
      {
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333',
      },
      {
        id: '12987123',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333',
      },
      {
        id: '12987125',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333',
      },
      {
        id: '12987126',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333',
      },
    ])
    const toggleRowExpansion = () => {
      instance.refs.table.toggleRowExpansion(tableData.value[0])
    }
    return {
      toggleRowExpansion,
      tableData,
    }
  },
}
</script>

<style scoped>
  .expand-table-demo > div > label {
    width: 90px;
    color: #99a9bf;
    display: inline-block;
  }
  .expand-table-demo > div {
    margin: 10px 0;
  }
</style>
