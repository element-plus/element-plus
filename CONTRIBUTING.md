# How To Contribute

## Opening Issues

- Before opening an issue, please search for the keyword to see whether the issue you encountered has already been reported. :pray:

- Issues should be opened via [Issue Template](https://issue.element-plus.org/), and the form should be filled with sufficient information to reproduce the issue, so that our developers can help you verify and fix it.

**Issues with insufficient information WILL BE CLOSED directly because we cannot reproduce them.**

- Issues with feature requests should be submitted to [RFCs](https://github.com/element-plus/rfcs/issues). This helps us manage feature requests more efficiently.

Next section is for those who wants to help develop Element Plus.

## Prerequisites

You should have:

Node.js >= 20

pnpm >= 9.5

Git > 2.20

Some of our compiled code relies on features introduced in Node.js >= 20, so you will need to install that version or a newer one.

## Clone the Repository

1. Click the fork button on the top right of [the repository homepage](https://github.com/element-plus/element-plus).
2. Download the project to your machine.
3. Run commands below to bootstrap this project.

```shell
cd $THE_PROJECT_PATH_YOU_DOWNLOADED
# If you haven't installed yet
pnpm install
```

## Verify Installation

Then you can run the following commands to verify your installation.

```shell
pnpm t
pnpm format
```

## Getting Started Developing

Now that you have installed the code correctly, you can choose:

### Modify and update the documentation site

```shell
# If you would like to modify the website source code of https://element-plus.org
# It is made with [VitePress](https://vitepress.vuejs.org)
pnpm docs:gen-locale # This generates locale files for your local development
pnpm docs:dev
```

### Making Changes to the Component Instead of the Website

```shell
# If you would like to run a local playground to test out your changes against
# Some specific component
pnpm dev
```

You can follow the [LOCAL DEVELOPMENT GUIDE](https://element-plus.org/en-US/guide/dev-guide.html) to do development more quickly.

### Compile the Source Code

If you would like to compile this project locally:

```shell
# This one line code would start compiling the code which was published to https://npmjs.com
pnpm build
```

### Compile Documentation Website

If you would like to compile the website code locally:

```shell
pnpm docs:build
```

## Pull Requests

After completing your coding tasks, please note:

1. Update the tests to cover all cases.
2. Update the corresponding documentation if you are making changes to the API.
3. Write a comprehensive commit message.
4. Push your local changes to your remote, and then submit a pull request to the upstream.
5. In the description section, you can add more information about your changes, to help the reviewers for better
   understanding the context here.

## Commit Template

We have prepared a commit message template for you to refer to, you can also follow the instructions of the CLI tool to generate
commit message intuitively.

1. With command

```bash
pnpm cz
```

2. You can also write the commit message manually, but make sure your
   commit message follows the rules.

We have a [commit template](https://element-plus.org/en-US/guide/commit-examples.html)

NOTE:
**PRs with unformatted commit messages WILL NOT BE ACCEPTED.**

That's all, thanks for your contribution! 🤩
