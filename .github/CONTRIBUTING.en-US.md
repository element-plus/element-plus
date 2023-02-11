# Element Plus Contributing Guide

Hi! Thank you for choosing Element Plus.

Element Plus is a Vue 3 based component library for developers, designers and product managers.

We are excited that you are interested in contributing to Element Plus. Before submitting your contribution though, please make sure to take a moment and read through the following guidelines.

## Issue Guidelines

- Issues are exclusively for bug reports, feature requests and design-related topics. Other questions may be closed directly. If any questions come up when you are using Element Plus, please hit [Discord](https://discord.com/invite/gXK9XNzW3X) for help.

- Before submitting an issue, please check if similar problems have already been issued.

- Please specify which version of `Element Plus` and `Vue` you are using, and provide OS and browser information. [JSFiddle](https://jsfiddle.net/) is recommended to build a live demo so that your issue can be reproduced clearly.

## Pull Request Guidelines

- Fork this repository to your own account. Do not create branches here.

- Commit info should be formatted as `type(scope): info about commit`. (e.g. `fix(components): [scrollbar] fix xxx bug`)

  1. type: type must be one of [build, chore, ci, docs, feat, fix, perf, refactor, revert, release, style, test, improvement].

  2. scope: scope must be one of [components, directives, element-plus, hooks, locale, test-utils, theme-chalk, tokens, utils, project, core, style, docs, ci, dev, build, deploy, other, typography, color, border, var].

  3. header: header must not be longer than 72 characters.

- **DO NOT** include files inside `lib` directory.

- Make sure that running `npm run build` outputs the correct files.

- Rebase before creating a PR to keep commit history clear.

- Make sure PRs are created to `dev` branch instead of `master` branch.

- If your PR fixes a bug, please provide a description about the related bug.

- Merging a PR takes two maintainers: one approves the changes after reviewing, and then the other reviews and merges.
