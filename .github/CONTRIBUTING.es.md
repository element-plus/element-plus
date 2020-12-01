# Guía para Contribuidores a `Element Plus`

¡Hola! Gracias por elegir [Element Plus](http://element.eleme.io/#/en-US).

`Element Plus` es un archivo de componentes para desarrolladores y para gerentes de productos ‘web’ basado en [Vue 3.0](https://vuejs.org/)

Estamos orgullosos de que usted esta interesado en contribuir al proyecto `Element Plus`. Antes de someter sus contribuciones, por favor tome un momentito para leer estas simples guías para contribuidores.


## Guía Para Reportar Problemas (“Issues”)

- Preguntas de otro tipo corren el riesgo de ser cerradas inmediatamente. Sí tiene preguntas sobre el uso de `Element`, vea [Discord](https://discord.link/ElementPlus) para más ayuda.

- Antes de someter un informe sobre algún problema, sírvase de revisar  sí ya hubo un informe.

- Por favor especifique que versión de `Element Plus` y `Vue` que esta utilizando, y que versión de sistema operativo y que versión de navegador web que está utilizando. [JSFiddle](https://jsfiddle.net/) esta recomendado para crear un entorno para reproducir el problema claramente.


## Guías para un “Pull Request (PR)”

- Crea una bifurcación (“fork”) del repositorio a su propia cuenta en github.com. Por favor no crea ramas nuevas aquí.

- Cuando cometa su cambio, formatea en esta forma: `[Nombre de componente]: Datos sobre el “commit”.` (por ejemplo. `Button: Reparación de xxx error`)

- **DE NINGUNA MANERA** incluya archivos dentro del directorio `lib`.

- Asegúrese de que el comando `npm run build` produzca los archivos correctos.

- “Rebase” antes de crear un “pull request (PR)” para mantener la historia de “commits” limpia.

- Asegúrese que sus PRs se refrieran a la rama `dev`  y no a la rama  `master`.

- Si su PR arregla un error técnico, por favor, haga referencia al error especifico.

- Fusión de un PR requiere dos mantenedores: el primero aprueba los cambios después de revisar, y entonces el segundo mantenedor revisa los cambios y hace la fusión.

