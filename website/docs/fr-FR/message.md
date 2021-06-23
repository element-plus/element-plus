## Message

Utilisé pour avoir un retour après une action particulière. La différence avec Notification est que ce dernier est surtout utilisé pour afficher des notifications système passives.

### Usage

S'affiche en haut de la page et disparaît après trois secondes.

:::demo L'utilisation de Message est très similaire à Notification, la plupart des options ne sont donc pas expliquées ici. Référez-vous à la table en fin de page et celle de Notification pour en savoir plus. Element Plus affecte la méthode `$message` pour appeler Message. Il peut prendre en paramètre un string ou un VNode, qui sera affiché en tant que body principal.

```html
<template>
  <el-button :plain="true" @click="open">Afficher le message</el-button>
  <el-button :plain="true" @click="openVn">VNode</el-button>
</template>

<script>
  import { h } from 'vue';

  export default {
    methods: {
      open() {
        this.$message('Ceci est un message.');
      },

      openVn() {
        this.$message({
          message: h('p', null, [
            h('span', null, 'Message peut être '),
            h('i', { style: 'color: teal' }, 'VNode')
          ])
        });
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent, h } from 'vue';
  import { ElMessage } from 'element-plus';

  export default defineComponent({
    setup() {
      
      const open = () => {
        ElMessage('Ceci est un message.');
      };

      const openVn = () => {
        ElMessage({
          message: h('p', null, [
            h('span', null, 'Message peut être '),
            h('i', { style: 'color: teal' }, 'VNode'),
          ]),
        });
      };

      return {
        open,
        openVn,
      };
    },
  });

</setup>
-->
```
:::

### Types

Utilisé pour montrer un retour d'activités Success, Warning, Message ou Error.

:::demo Lorsque vous avez besoin de plus de personnalisation, Message peut aussi accepter un objet en paramètre. Par exemple, le paramètre `type` définit différents types, son défaut étant `info`. Dans ce cas le body est passé comme valeur de `message`. De plus, il existe des méthodes pour chaque type, afin que vous puissiez vous passer de la propriété `type` comme dans `open4`.
```html
<template>
  <el-button :plain="true" @click="open2">success</el-button>
  <el-button :plain="true" @click="open3">warning</el-button>
  <el-button :plain="true" @click="open1">message</el-button>
  <el-button :plain="true" @click="open4">error</el-button>
</template>

<script>
  export default {
    methods: {
      open1() {
        this.$message('Ceci est un message.');
      },
      open2() {
        this.$message({
          message: 'Félicitations, ceci est un message de succès.',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: 'Attention, ceci est un avertissement.',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('Ouups, ceci est une erreur.');
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent } from 'vue';
  import { ElMessage } from 'element-plus';

  export default defineComponent({
    setup() {
      
      const open1 = () => {
        ElMessage('Ceci est un message.');
      };

      const open2 = () => {
        ElMessage({
          message: 'Félicitations, ceci est un message de succès.',
          type: 'success',
        });
      };
      const open3 = () => {
        ElMessage({
          message: 'Attention, ceci est un avertissement.',
          type: 'warning',
        });
      };
      const open4 = () => {
        ElMessage.error('Ouups, ceci est une erreur.');
      };

      return {
        open1,
        open2,
        open3,
        open4,
      };
    },
  });

</setup>
-->
```
:::

### Fermeture

Un bouton de fermeture peut être ajouté.

:::demo Un Message ne peut être fermé par défaut. Utiliséez `showClose` si vous avez besoin de pouvoir le fermer. De plus, tout comme Notification, Message possède une `duration` réglable. La durée par défaut est de 3000 ms, et infinie si à `0`.
```html
<template>
  <el-button :plain="true" @click="open1">message</el-button>
  <el-button :plain="true" @click="open2">success</el-button>
  <el-button :plain="true" @click="open3">warning</el-button>
  <el-button :plain="true" @click="open4">error</el-button>
</template>

<script>
  export default {
    methods: {
      open1() {
        this.$message({
          showClose: true,
          message: 'Ceci est un message.'
        });
      },

      open2() {
        this.$message({
          showClose: true,
          message: 'Félicitations, ceci est un message de succès.',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          showClose: true,
          message: 'Attention, ceci est un avertissement.',
          type: 'warning'
        });
      },

      open4() {
        this.$message({
          showClose: true,
          message: 'Ouups, ceci est une erreur.',
          type: 'error'
        });
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent } from 'vue';
  import { ElMessage } from 'element-plus';

  export default defineComponent({
    setup() {
      
      const open1 = () => {
        ElMessage({
          showClose: true,
          message: 'Ceci est un message.',
        });
      };

      const open2 = () => {
        ElMessage({
          showClose: true,
          message: 'Félicitations, ceci est un message de succès.',
          type: 'success',
        });
      };
      const open3 = () => {
        ElMessage({
          showClose: true,
          message: 'Attention, ceci est un avertissement.',
          type: 'warning',
        });
      };
      const open4 = () => {
        ElMessage({
          showClose: true,
          message: 'Ouups, ceci est une erreur.',
          type: 'error',
        });
      };

      return {
        open1,
        open2,
        open3,
        open4,
      };
    },
  });

</setup>
-->
```
:::

### Texte centré

Utilisez l'attribut `center` pour centrer le texte.

:::demo

```html
<template>
  <el-button :plain="true" @click="openCenter">Texte centré</el-button>
</template>

<script>
  export default {
    methods: {
      openCenter() {
        this.$message({
          message: 'Texte centré',
          center: true
        });
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent } from 'vue';
  import { ElMessage } from 'element-plus';

  export default defineComponent({
    setup() {
      
      const openCenter = () => {
        ElMessage({
          message: 'Texte centré',
          center: true,
        });
      };

      return {
        openCenter,
      };
    },
  });

</setup>
-->
```
:::

### Utiliser du HTML

`message` supporte le HTML.

:::demo Mettez `dangerouslyUseHTMLString` à true et `message` sera traité comme du HTML.

```html
<template>
  <el-button :plain="true" @click="openHTML">Utiliser du HTML</el-button>
</template>

<script>
  export default {
    methods: {
      openHTML() {
        this.$message({
          dangerouslyUseHTMLString: true,
          message: '<strong>Ceci est du <i>HTML</i></strong>'
        });
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent } from 'vue';
  import { ElMessage } from 'element-plus';

  export default defineComponent({
    setup() {
      
      const openHTML = () => {
        ElMessage({
          dangerouslyUseHTMLString: true,
          message: '<strong>Ceci est du <i>HTML</i></strong>',
        });
      };

      return {
        openHTML,
      };
    },
  });

</setup>
-->
```
:::

:::warning
Bien que la propriété `message` supporte le HTML, générer du contenu HTML dynamiquement peut être très dangereux, car cela permet des [attaques XSS](https://en.wikipedia.org/wiki/Cross-site_scripting). Donc lorsque `dangerouslyUseHTMLString` est présent, soyez certain de sécuriser le contenu de `message`, et n'assignez **jamais** à `message` du contenu fournit par l'utilisateur.
:::

### Méthode globale

Element Plus ajoute une méthode `$message` à `app.config.globalProperties`. Vous pouvez donc appeler `Message` dans l'instance de Vue comme dans cette page.

### Import à la demande

```javascript
import { ElMessage } from 'element-plus';
```

Dans ce cas il faudra appeler `ElMessage(options)`. Les méthodes des différents types sont aussi ajoutées, e.g. `ElMessage.success(options)`. Vous pouvez appeler `ElMessage.closeAll()` pour fermer manuellement toutes les instances.

### Options

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| message | Texte du message. | string / VNode | — | — |
| type | Type du message. | string | success/warning/info/error | info |
| iconClass | Classe de l'icône, écrase `type`. | string | — | — |
| dangerouslyUseHTMLString | Si `message` doit être traité comme du HTML. | boolean | — | false |
| customClass | Nom de classe pour Message. | string | — | — |
| duration | La durée d'affichage, en millisecondes. Si 0, la durée est infinie. | number | — | 3000 |
| showClose | Si un bouton de fermeture doit être affiché. | boolean | — | false |
| center | Si le texte doit être centré. | boolean | — | false |
| onClose | Callback de fermeture avec en paramètre l'instance de Message. | function | — | — |
| offset | set the distance to the top of viewport | number | — | 20 |

### Méthodes

`Message` et `this.$message` retourne l'instance actuelle. Pour fermer manuellement cette instance, appelez sa méthode `close`.

| Méthode | Description |
| ---- | ---- |
| close | Ferme l'instance de Message. |
