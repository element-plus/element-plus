# Guide à destination des contributeurs d'Element Plus

Bonjour! Merci d'avoir choisi Element Plus.

Element Plus est une bibliothèque de composants basée sur Vue 3 pour les développeurs, les designers et les chefs de produits.

Nous sommes ravis que vous souhaitiez contribuer à Element Plus. Avant de soumettre votre contribution, veuillez vous assurer de prendre un moment pour lire les indications suivantes.

## Concernant les issues

- Les issues concernent exclusivement les bugs, les demandes de fonctionnalités et les sujets liés à la conception. Les questions concernant d'autres sujets peuvent être fermées directement. Si vous avez des questions à propos de l'utilisation d'Element Plus, veuillez vous rendre sur [Discord](https://discord.com/invite/gXK9XNzW3X) pour obtenir de l'aide.

- Avant de soumettre une issue, veuillez vérifier si des problèmes similaires n'ont pas déjà été signalés.

- Veuillez spécifier la version de `Element Plus` et `Vue` que vous utilisez, et fournir des informations sur le système d'exploitation et le navigateur. [JSFiddle](https://jsfiddle.net/) est recommandé afin de construire une démo pour que votre problème puisse être reproduit clairement.

## Concernant les pull requests

- Faites un fork de ce dépôt vers votre compte. Ne créez pas de branches ici.

- les informations soumises doivent être présentées sous la forme `type(scope): info about commit`.(par exemple, `fix(components): [scrollbar] fix xxx bug`)

  1. Type: le type doit être l'un des [build, chore, ci, docs, feat, fix, perf, refactor, revert, release, style, test, improvement].

  2. Scope: scope doit être l'un des [components, directives, element-plus, hooks, locale, test-utils, theme-chalk, tokens, utils, project, core, style, docs, ci, dev, build, deploy, other, typography, color, border, var].

  3. Titre: le titre ne doit pas dépasser 72 caractères.

- **NE PAS** inclure de fichiers dans le répertoire `lib`.

- Assurez-vous que l'exécution de `npm run build` génère les bons fichiers.

- Faites un rebase avant la création d'une PR pour garder l'historique clair.

- Assurez-vous que les PRs sont créés dans la branche `dev` au lieu de la branche `master`.

- Si votre PR corrige un bug, veuillez fournir une description du bug en question.

- La fusion d'un PR nécessite deux responsables: l'un approuve les modifications après révision, puis l'autre les révise et les fusionne.
