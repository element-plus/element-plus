## Progress

Progress est utilisé pour afficher la progression d'une opération et informer l'utilisateur de son status actuel.

### Barre de progression linéaire

:::demo Utilisez l'attribut `percentage` pour indiquer le pourcentage. Cet attribut est **requis** et doit être compris entre 0 et 100. Vous pouvez personnaliser le format du texte en définissant le `format`.
```html
<el-progress :percentage="50"></el-progress>
<el-progress :percentage="100" :format="format"></el-progress>
<el-progress :percentage="100" status="success"></el-progress>
<el-progress :percentage="100" status="warning"></el-progress>
<el-progress :percentage="50" status="exception"></el-progress>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    setup() {
      const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`);
      return {
        format,
      };
    },
  });
</script>
```
:::

### Pourcentage interne

Dans ce cas le pourcentage ne prends pas de place en plus.

:::demo L'attribut `stroke-width` détermine le `width` de la barre de progression. Utilisez `text-inside` mettre la description à l'intérieur de la barre.
```html
<el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
<el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
<el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
<el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
```
:::

### Couleur personnalisée

Vous pouvez utiliser l'attribut `color` pour définir la couleur de la barre de progression. il accepte une couleur, une fonction ou un tableau.

:::demo

```html
<el-progress :percentage="percentage" :color="customColor"></el-progress>

<el-progress :percentage="percentage" :color="customColorMethod"></el-progress>

<el-progress :percentage="percentage" :color="customColors"></el-progress>
<div>
  <el-button-group>
    <el-button icon="el-icon-minus" @click="decrease"></el-button>
    <el-button icon="el-icon-plus" @click="increase"></el-button>
  </el-button-group>
</div>

<script>
  import { defineComponent, reactive, toRefs } from 'vue';

  export default defineComponent({
    setup() {
      const state = reactive({
        percentage: 20,
        customColor: '#409eff',
        customColors: [
          { color: '#f56c6c', percentage: 20 },
          { color: '#e6a23c', percentage: 40 },
          { color: '#5cb87a', percentage: 60 },
          { color: '#1989fa', percentage: 80 },
          { color: '#6f7ad3', percentage: 100 },
        ],
      });
      const customColorMethod = (percentage) => {
        if (percentage < 30) {
          return '#909399';
        } if (percentage < 70) {
          return '#e6a23c';
        }
        return '#67c23a';
      };
      const increase = () => {
        state.percentage += 10;
        if (state.percentage > 100) {
          state.percentage = 100;
        }
      };
      const decrease = () => {
        state.percentage -= 10;
        if (state.percentage < 0) {
          state.percentage = 0;
        }
      };
      return {
        ...toRefs(state),
        customColorMethod,
        increase,
        decrease,
      };
    },
  });
</script>
```
:::

### Barre de progression circulaire

:::demo Vous pouvez mettre l'attribut `type` à `circle` pour obtenir une barre circulaire, et utiliser `width` pour changer la taille du cercle.
```html
<el-progress type="circle" :percentage="0"></el-progress>
<el-progress type="circle" :percentage="25"></el-progress>
<el-progress type="circle" :percentage="100" status="success"></el-progress>
<el-progress type="circle" :percentage="70" status="warning"></el-progress>
<el-progress type="circle" :percentage="50" status="exception"></el-progress>
```
:::

### Barre de progression du tableau de bord

Vous pouvez également spécifier l'attribut `type` de `dashboard` pour utiliser la barre de progression du tableau de bord.

:::demo

```html
<el-progress type="dashboard" :percentage="percentage" :color="colors"></el-progress>
<div>
  <el-button-group>
    <el-button icon="el-icon-minus" @click="decrease"></el-button>
    <el-button icon="el-icon-plus" @click="increase"></el-button>
  </el-button-group>
</div>

<script>
  import { defineComponent, reactive, toRefs } from 'vue';

  export default defineComponent({
    setup() {
      const state = reactive({
        percentage: 10,
        colors: [
          { color: '#f56c6c', percentage: 20 },
          { color: '#e6a23c', percentage: 40 },
          { color: '#5cb87a', percentage: 60 },
          { color: '#1989fa', percentage: 80 },
          { color: '#6f7ad3', percentage: 100 },
        ],
      });
      const increase = () => {
        state.percentage += 10;
        if (state.percentage > 100) {
          state.percentage = 100;
        }
      };
      const decrease = () => {
        state.percentage -= 10;
        if (state.percentage < 0) {
          state.percentage = 0;
        }
      };
      return {
        ...toRefs(state),
        increase,
        decrease,
      };
    },
  });
</script>
```
:::

### Customized content

:::demo Use default slot to add customized content.

```html
<el-progress :percentage="50">
  <el-button type="text">Content</el-button>
</el-progress>
<el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception">
  <span>Content</span>
</el-progress>
<el-progress type="circle" :percentage="100" status="success">
  <el-button type="success" icon="el-icon-check" circle></el-button>
</el-progress>
<el-progress type="dashboard" :percentage="80">
  <template #default="{ percentage }">
    <span class="percentage-value">{{ percentage }}%</span>
    <span class="percentage-label">Progressing</span>
  </template>
</el-progress>
```
:::

### Attributs

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
| --- | ---- | ---- | ---- | ---- |
| **percentage** | Le pourcentage, **requis**. | number | 0-100 | 0 |
| type | Le type de barre. | string | line/circle/dashboard | line |
| stroke-width | La largeur de la barre. | number | — | 6 |
| text-inside | Si le pourcentage doit être à l'intérieur de la barre, ne marche que si `type` est 'line'. | boolean | — | false |
| status | Le statut actuel de la progression. | string | success/exception/text | — |
| color  | La couleur de fon de la barre. Écrase `status`. | string/function/array | — | '' |
| width | La largeur du canvas dans le cas d'une barre circulaire. | number | — | 126 |
| show-text | Si le pourcentage doit être affiché. | boolean | — | true |
| stroke-linecap  | circle/dashboard type shape at the end path | string | butt/round/square | round |
| format  | Vous pouvez personnaliser le format du texte en définissant le format  | function(percentage) | — | — |

### Slot
| name | Description |
|------|--------|
| default | Customized content, parameter is { percentage } |
