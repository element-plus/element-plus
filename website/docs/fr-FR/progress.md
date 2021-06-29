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
  export default {
    methods: {
      format(percentage) {
        return percentage === 100 ? 'Full' : `${percentage}%`;
      }
    }
  };
</script>
<!--
<setup>

  import { defineComponent } from 'vue';

  export default defineComponent({
    setup() {
      const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`);
      return {
        format,
      };
    },
  });

</setup>
-->
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
<el-progress :percentage="percentage2" :color="customColors"></el-progress>
<div>
  <el-button-group>
    <el-button icon="el-icon-minus" @click="decrease"></el-button>
    <el-button icon="el-icon-plus" @click="increase"></el-button>
  </el-button-group>
</div>

<script>
  export default {
    data() {
      return {
        percentage: 20,
        percentage2: 0,
        customColor: '#409eff',
        customColors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods: {
      customColorMethod(percentage) {
        if (percentage < 30) {
          return '#909399';
        } else if (percentage < 70) {
          return '#e6a23c';
        } else {
          return '#67c23a';
        }
      },
      increase() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      }
    },
    mounted() {
      setInterval(() => {
        this.percentage2 = (this.percentage2 % 100) + 10
      }, 500)
    }
  }
</script>
<!--
<setup>

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

</setup>
-->
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
<el-progress type="dashboard" :percentage="percentage2" :color="colors"></el-progress>
<div>
  <el-button-group>
    <el-button icon="el-icon-minus" @click="decrease"></el-button>
    <el-button icon="el-icon-plus" @click="increase"></el-button>
  </el-button-group>
</div>

<script>
  export default {
    data() {
      return {
        percentage: 10,
        percentage2: 0,
        colors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods: {
      increase() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      }
    },
    mounted() {
      setInterval(() => {
        this.percentage2 = (this.percentage2 % 100) + 10
      }, 500)
    }
  }
</script>
<!--
<setup>

  import { defineComponent, reactive, toRefs, onMounted } from 'vue';

  export default defineComponent({
    setup() {
      const state = reactive({
        percentage: 10,
        percentage2: 0,
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
      onMounted(() => {
        setInterval(() => {
          state.percentage2 = (state.percentage2 % 100) + 10
        }, 500)
      });
      return {
        ...toRefs(state),
        increase,
        decrease,
      };
    },
  });

</setup>
-->
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

### Indeterminate progress

:::demo Use `indeterminate` attribute to set indeterminate progress, with `duration` to control the animation duration.

```html
<el-progress :percentage="50" :indeterminate="true"></el-progress>
<el-progress :percentage="100" :format="format" :indeterminate="true"></el-progress>
<el-progress :percentage="100" status="success" :indeterminate="true" :duration="5"></el-progress>
<el-progress :percentage="100" status="warning" :indeterminate="true" :duration="1"></el-progress>
<el-progress :percentage="50" status="exception" :indeterminate="true"></el-progress>

<script>
  export default {
    methods: {
      format(percentage) {
        return percentage === 100 ? 'Full' : `${percentage}%`;
      }
    }
  };
</script>
<!--
<setup>

  import { defineComponent } from 'vue';

  export default defineComponent({
    setup() {
      const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`);
      return {
        format,
      };
    },
  });

</setup>
-->
```
:::

### Attributs

| Attribut       | Description                                                                                | Type                  | Valeurs acceptées      | Défaut |
| -------------- | ------------------------------------------------------------------------------------------ | --------------------- | ---------------------- | ------ |
| **percentage** | Le pourcentage, **requis**.                                                                | number                | 0-100                  | 0      |
| type           | Le type de barre.                                                                          | string                | line/circle/dashboard  | line   |
| stroke-width   | La largeur de la barre.                                                                    | number                | —                      | 6      |
| text-inside    | Si le pourcentage doit être à l'intérieur de la barre, ne marche que si `type` est 'line'. | boolean               | —                      | false  |
| status         | Le statut actuel de la progression.                                                        | string                | success/exception/text | —      |
| indeterminate  | set indeterminate progress                                                                 | boolean               | -                      | false  |
| duration       | control the animation duration of indeterminate progress                                   | number                | -                      | 3      |
| color          | La couleur de fon de la barre. Écrase `status`.                                            | string/function/array | —                      | ''     |
| width          | La largeur du canvas dans le cas d'une barre circulaire.                                   | number                | —                      | 126    |
| show-text      | Si le pourcentage doit être affiché.                                                       | boolean               | —                      | true   |
| stroke-linecap | circle/dashboard type shape at the end path                                                | string                | butt/round/square      | round  |
| format         | Vous pouvez personnaliser le format du texte en définissant le format                      | function(percentage)  | —                      | —      |

### Slot
| name    | Description                                     |
| ------- | ----------------------------------------------- |
| default | Customized content, parameter is { percentage } |
