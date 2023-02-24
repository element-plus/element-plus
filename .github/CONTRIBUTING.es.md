# Guía para Contribuidores a `Element Plus`

¡Hola! Gracias por elegir [Element Plus](http://element.eleme.io/#/en-US).

`Element Plus` es un archivo de componentes para desarrolladores y para gerentes de productos ‘web’ basado en [Vue 3](https://vuejs.org/)

Estamos orgullosos de que usted esta interesado en contribuir al proyecto `Element Plus`. Antes de someter sus contribuciones, por favor tome un momentito para leer estas simples guías para contribuidores.

## Guía Para Reportar Problemas (“Issues”)

- Preguntas de otro tipo corren el riesgo de ser cerradas inmediatamente. Sí tiene preguntas sobre el uso de `Element`, vea [Discord](https://discord.com/invite/gXK9XNzW3X) para más ayuda.

- Antes de someter un informe sobre algún problema, sírvase de revisar sí ya hubo un informe.

- Por favor especifique que versión de `Element Plus` y `Vue` que esta utilizando, y que versión de sistema operativo y que versión de navegador web que está utilizando. [Playground](https://element-plus.run/) esta recomendado para crear un entorno para reproducir el problema claramente.

## Guías para un “Pull Request (PR)”

- Crea una bifurcación (“fork”) del repositorio a su propia cuenta en github.com. Por favor no crea ramas nuevas aquí.

- El formato de la información de envío debe ser `type(scope): info about commit`. (por ejemplo, `fix(components): [scrollbar] fix xxx bug`)

  1. Tipo: el tipo debe ser uno de [build, chore, ci, docs, feat, fix, perf, refactor, revert, release, style, test, improvement].

  2. Ámbito de aplicación: el ámbito de aplicación debe ser uno de [components, directives, element-plus, hooks, locale, test-utils, theme-chalk, tokens, utils, project, core, style, docs, ci, dev, build, deploy, other, typography, color, border, var].

  3. Título: el título no debe exceder de 72 caracteres.

- **DE NINGUNA MANERA** incluya archivos dentro del directorio `lib`.

- Asegúrese de que el comando `npm run build` produzca los archivos correctos.

- “Rebase” antes de crear un “pull request (PR)” para mantener la historia de “commits” limpia.

- Asegúrese que sus PRs se refrieran a la rama `dev` y no a la rama `master`.

- Si su PR arregla un error técnico, por favor, haga referencia al error especifico.

- Fusión de un PR requiere dos mantenedores: el primero aprueba los cambios después de revisar, y entonces el segundo mantenedor revisa los cambios y hace la fusión.
