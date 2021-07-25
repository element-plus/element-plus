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

We standardize the borders that can be used in buttons, cards, pop-ups and other components.

### Border

There are few border styles to choose.

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

### Radius

There are few radius styles to choose.

<radius-box :radius-group="radiusGroup" />

### Shadow

There are few shadow styles to choose.

<shadow-box :shadow-group="shadowGroup" />
