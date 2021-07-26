<script>
import RadiusBox from "../../components/demo/border/radius-box.vue";
import ShadowBox from "../../components/demo/border/shadow-box.vue";

const radiusGroup =  [
  {
    name: 'No Radius',
    type: ''
  },
  {
    name: 'Small Radius',
    type: 'small'
  },
  {
    name: 'Large Radius',
    type: 'base'
  },
  {
    name: 'Round Radius',
    type: 'round'
  },
]

const shadowGroup = [
  {
    name: 'Basic Shadow',
    type: 'base'
  },
  {
    name: 'Light Shadow',
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

## Border

ボタンやカード、ポップアップなどで使用できる border を標準化しています。

### Border

border のスタイルはいくつかあります。

<table class="demo-border">
  <tbody>
    <tr>
      <td class="text">Name</td>
      <td class="text">Thickness</td>
      <td class="line">Demo</td>
    </tr>
    <tr>
      <td class="text">Solid</td>
      <td class="text">1px</td>
      <td class="line">
        <div></div>
      </td>
    </tr>
    <tr>
      <td class="text">Dashed</td>
      <td class="text">2px</td>
      <td class="line">
        <div class="dashed"></div>
      </td>
    </tr>
  </tbody>
</table>

### 半径(radius)

いくつかの半径(radius)のスタイルがあります。

<radius-box :radius-group="radiusGroup" />

### 影

シャドウスタイルの選択肢はほとんどありません。

<shadow-box :shadow-group="shadowGroup" />
