## Result

Used to give feedback on the result of user's operation or access exception.

### Basic usage

:::demo

```html
<el-result type="success" title="Success Tip" subTitle="Please follow the instructions">
  <template #extra>
    <el-button type="primary" size="medium">Back</el-button>
  </template>
</el-result>
```
:::

### Other type

:::demo

```html
<el-row>
  <el-col :span="8">
    <el-result type="info" title="Info Tip" subTitle="Please follow the instructions">
      <template #extra>
        <el-button type="primary" size="medium">Back</el-button>
      </template>
    </el-result>
  </el-col>
  <el-col :span="8">
    <el-result type="warning" title="Warning Tip" subTitle="Please follow the instructions">
      <template #extra>
        <el-button type="primary" size="medium">Back</el-button>
      </template>
    </el-result>
  </el-col>
  <el-col :span="8">
    <el-result type="error" title="Error Tip" subTitle="Please follow the instructions">
      <template #extra>
        <el-button type="primary" size="medium">Back</el-button>
      </template>
    </el-result>
  </el-col>
</el-row>
```
:::

### Access Exception

:::demo

```html
<el-result type="404" title="404" subTitle="Sorry, request error">
  <template #extra>
    <el-button type="primary" size="medium">Back</el-button>
  </template>
</el-result>
<el-result type="403" title="403" subTitle="Sorry, no permission">
  <template #extra>
    <el-button type="primary" size="medium">Back</el-button>
  </template>
</el-result>
<el-result type="500" title="500" subTitle="Sorry, server error">
  <template #extra>
    <el-button type="primary" size="medium">Back</el-button>
  </template>
</el-result>
```
:::

### Result Attributes
| Attribute     | Description    | Type            | Accepted Values      | Default   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| title          | title         | string  |          —             |    —     |
| sub-title    | sub title  | string | — |    —  |
| type  | result type    | string  |    success/warning/info/error/404/403/500  |  info |

### Result Slots

| Name | Description |
|------|--------|
| icon | custom icon  |
| title | custom title     |
| sub-title | custom sub title     |
| extra | custom  extra area    |
