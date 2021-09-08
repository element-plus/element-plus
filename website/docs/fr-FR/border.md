<script>
import RadiusBox from "../../components/demo/border/radius-box.vue";
import ShadowBox from "../../components/demo/border/shadow-box.vue";

const radiusGroup =  [
  {
    name: 'Pas de radius',
    type: ''
  },
  {
    name: 'Petit radius',
    type: 'small'
  },
  {
    name: 'Grand radius',
    type: 'base'
  },
  {
    name: 'Radius rond',
    type: 'round'
  },
]

const shadowGroup = [
  {
    name: 'Ombre de base',
    type: 'base'
  },
  {
    name: 'Ombre légère',
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

## Bordure

Nous normalisons l'apparence des bordures qui peuvent être utilisées pour les boutons, les cartes, les pop-ups et d'autres composants.

### Bordure

Il y a plusieurs styles de bordure que vous pouvez choisir.

<table class="demo-border">
  <tbody>
    <tr>
      <td class="text">Nom</td>
      <td class="text">Épaisseur</td>
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

Il y a plusieurs styles de radius que vous pouvez choisir.

<radius-box :radius-group="radiusGroup" />

### Ombres

Il y a plusieurs styles d'ombres que vous pouvez choisir.

<shadow-box :shadow-group="shadowGroup" />
