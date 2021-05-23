## Switch

Switch est utilisé pour choisir entre deux états opposés.

### Usage

:::demo Liez `v-model` à une variable de type `Boolean`. Les attributs `active-color` et `inactive-color` déterminent les couleurs des deux états.

```html
<el-switch v-model="value1"> </el-switch>
<el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949">
</el-switch>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true,
      }
    },
  }
</script>
```

:::

### Description

:::demo Utilisez `active-text` et `inactive-text` pour afficher une description de chaque étape.

```html
<el-switch
  v-model="value1"
  active-text="Paiement mensuel"
  inactive-text="Paiement annuel"
>
</el-switch>
<el-switch
  style="display: block"
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949"
  active-text="Paiement mensuel"
  inactive-text="Paiement annuel"
>
</el-switch>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true,
      }
    },
  }
</script>
```

:::

### Valeurs des états

:::demo Vous pouvez utiliser `active-value` et `inactive-value` pour déterminer la valeur de chaque état. Ils prennent un `Boolean`, `String` ou `Number`.

```html
<el-tooltip :content="'Valeur de l\'état: ' + value" placement="top">
  <el-switch
    v-model="value"
    active-color="#13ce66"
    inactive-color="#ff4949"
    active-value="100"
    inactive-value="0"
  >
  </el-switch>
</el-tooltip>

<script>
  export default {
    data() {
      return {
        value: '100',
      }
    },
  }
</script>
```

:::

### Désactivé

:::demo Ajoutez l'attribut `disabled` pour désactiver le switch.

```html
<el-switch v-model="value1" disabled> </el-switch>
<el-switch v-model="value2" disabled> </el-switch>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: false,
      }
    },
  }
</script>
```

:::

### Loading

:::demo Setting the `loading` attribute to `true` indicates a loading state on the Switch.

```html
<el-switch v-model="value1" loading> </el-switch>
<el-switch v-model="value2" loading> </el-switch>
<script>
  export default {
    data() {
      return {
        value1: true,
        value2: false,
      }
    },
  }
</script>
```

:::

### Empêcher la commutation

:::demo Définissez la propriété `beforeChange`. Si elle renvoie false ou renvoie une promesse et est rejetée, le commutateur s'arrêtera.

```html
<el-switch v-model="value1" :loading="loading1" :beforeChange="beforeChange1">
</el-switch>
<el-switch v-model="value2" :loading="loading2" :beforeChange="beforeChange2">
</el-switch>
<script>
  import { reactive, toRefs } from 'vue'
  import { ElMessage } from 'element-plus'

  export default {
    setup() {
      const status1 = reactive({
        value1: false,
        loading1: false,
      })

      const beforeChange1 = () => {
        status1.loading1 = true
        return new Promise(resolve => {
          setTimeout(() => {
            status1.loading1 = false
            ElMessage.success('Basculer avec succès')
            return resolve(true)
          }, 1000)
        })
      }

      const status2 = reactive({
        value2: false,
        loading2: false,
      })

      const beforeChange2 = () => {
        status2.loading2 = true
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            status2.loading2 = false
            ElMessage.error('Le commutateur a échoué')
            return reject(new Error('error'))
          }, 1000)
        })
      }

      return {
        ...toRefs(status1),
        ...toRefs(status2),
        beforeChange1,
        beforeChange2,
      }
    },
  }
</script>
```

:::

### Attributs

| Attribut            | Description                                                                                                                             | Type                      | Valeurs acceptées | Défaut  |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ----------------- | ------- |
| model-value / v-model     | Valeur liée. Elle doit être équivalente à `active-value` ou `inactive-value`, par défaut elle est de type `boolean`.                    | boolean / string / number | —                 | —       |
| disabled            | Si le switch est désactivé.                                                                                                             | boolean                   | —                 | false   |
| loading             | whether Switch is in loading state                                                                                                      | boolean                   | —                 | false   |
| width               | Largeur du switch.                                                                                                                      | number                    | —                 | 40      |
| active-icon-class   | Classe de l'icône de l'état `on`, écrase `active-text`.                                                                                 | string                    | —                 | —       |
| inactive-icon-class | Classe de l'icône de l'état `off`, écrase `inactive-text`.                                                                              | string                    | —                 | —       |
| active-text         | Texte affiché dans l'état `on`.                                                                                                         | string                    | —                 | —       |
| inactive-text       | Texte affiché dans l'état `off`.                                                                                                        | string                    | —                 | —       |
| active-value        | Valeur du switch dans l'état `on`.                                                                                                      | boolean / string / number | —                 | true    |
| inactive-value      | Valeur du switch dans l'état `off`.                                                                                                     | boolean / string / number | —                 | false   |
| active-color        | Couleur de fond de l'état `on`.                                                                                                         | string                    | —                 | #409EFF |
| inactive-color      | Couleur de fond de l'état `off`.                                                                                                        | string                    | —                 | #C0CCDA |
| name                | Nom du champ d'input du switch.                                                                                                         | string                    | —                 | —       |
| validate-event      | Si la validation doit avoir lieu.                                                                                                       | boolean                   | —                 | true    |
| before-change       | Le hook avant le changement d'état du commutateur. S'il renvoie false ou renvoie une promesse et est rejeté, le commutateur s'arrêtera. | function                  | —                 | —       |

### Évènements

| Nom    | Description                          | Paramètres                  |
| ------ | ------------------------------------ | --------------------------- |
| change | Se déclenche quand la valeur change. | La valeur après changement. |

### Méthodes

| Méthode | Description               | Paramètres |
| ------- | ------------------------- | ---------- |
| focus   | Donne le focus au switch. | —          |
