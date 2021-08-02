<script>
import RadiusBox from "../../components/demo/border/radius-box.vue";
import ShadowBox from "../../components/demo/border/shadow-box.vue";

const radiusGroup =  [
  {
    name: '无圆角',
    type: ''
  },
  {
    name: '小圆角',
    type: 'small'
  },
  {
    name: '大圆角',
    type: 'base'
  },
  {
    name: '圆形圆角',
    type: 'round'
  },
]

const shadowGroup = [
  {
    name: '基础投影',
    type: 'base'
  },
  {
    name: '浅色投影',
    type: 'light'
  }
]

export default {
  components: {
    RadiusBox,
    ShadowBox
  },
  data() {
    return {
      radiusGroup,
      shadowGroup,
    }
  }
}
</script>

## Border 边框

我们对边框进行统一规范，可用于按钮、卡片、弹窗等组件里。

### 边框

我们提供了以下几种边框样式，以供选择。

<table class="demo-border">
  <tbody>
    <tr>
      <td class="text">名称</td>
      <td class="text">粗细</td>
      <td class="line">举例</td>
    </tr>
    <tr>
      <td class="text">实线</td>
      <td class="text">1px</td>
      <td class="line">
        <div></div>
      </td>
    </tr>
    <tr>
      <td class="text">虚线</td>
      <td class="text">2px</td>
      <td class="line">
        <div class="dashed"></div>
      </td>
    </tr>
  </tbody>
</table>

### 圆角

我们提供了以下几种圆角样式，以供选择。

<radius-box :radius-group="radiusGroup" />

### 投影

我们提供了以下几种投影样式，以供选择。

<shadow-box :shadow-group="shadowGroup" />
