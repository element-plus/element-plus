## Result 结果

用于对用户的操作结果或者异常状态做反馈。

### 基础用法

:::demo

```html
<el-result type="success" title="成功提示" subTitle="请根据提示进行操作">
  <template #extra>
    <el-button type="primary" size="medium">返回</el-button>
  </template>
</el-result>
```
:::

### 其他状态

:::demo

```html
<el-row>
  <el-col :span="8">
    <el-result type="info" title="信息提示" subTitle="请根据提示进行操作">
      <template #extra>
        <el-button type="primary" size="medium">返回</el-button>
      </template>
    </el-result>
  </el-col>
  <el-col :span="8">
    <el-result type="warning" title="警告提示" subTitle="请根据提示进行操作">
      <template #extra>
        <el-button type="primary" size="medium">返回</el-button>
      </template>
    </el-result>
  </el-col>
  <el-col :span="8">
    <el-result type="error" title="错误提示" subTitle="请根据提示进行操作">
      <template #extra>
        <el-button type="primary" size="medium">返回</el-button>
      </template>
    </el-result>
  </el-col>
</el-row>
```
:::

### 访问异常

:::demo

```html
<el-result type="404" title="404" subTitle="抱歉，请求错误">
  <template #extra>
    <el-button type="primary" size="medium">返回</el-button>
  </template>
</el-result>
<el-result type="403" title="403" subTitle="抱歉，无权限访问">
  <template #extra>
    <el-button type="primary" size="medium">返回</el-button>
  </template>
</el-result>
<el-result type="500" title="500" subTitle="抱歉，服务器错误">
  <template #extra>
    <el-button type="primary" size="medium">返回</el-button>
  </template>
</el-result>
```
:::

### Result Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| title          | 标题         | string  |          —             |    —     |
| sub-title    | 二级标题  | string | — |    —  |
| type  | 结果类型    | string  |    success/warning/info/error/404/403/500  |  info |

### Result Slots

| Name | 说明 |
|------|--------|
| icon | 自定义图标  |
| title | 自定义标题     |
| sub-title | 自定义二级标题     |
| extra | 自定义底部额外区域     |
