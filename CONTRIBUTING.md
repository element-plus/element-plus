# How To Contribute

## Opening issues

- Before opening issue please search for the keyword see whether the issue you encountered has been reported already. :pray:

- Issues should be opened via [Issue Template](https://issue.element-plus.org/), fill in the form to provide
  sufficient information to reproduce the issue, so that our developers can help you verify and fix it

**Insufficient information issue WILL BE CLOSED directly because we cannot reproduce them**

- Issues that with feature request should to go to [RFCs](https://github.com/element-plus/rfcs/issues). This helps us managing the project.

Next section is for those who wants to help develop Element Plus.

## Pre-request

You should be having:

NodeJS >= 18

Pnpm >= 9.5

Git > v2.20

Some of our compiling code used syntax that introduced in NodeJS>18 so you will be need to install that in advance.

## Clone the repository

1. Click the fork button on the top right of this page.
2. Download the project to your machine.
3. Run commands below to bootstrap the this project.

```shell
cd $THE_PROJECT_PATH_YOU_DOWNLOADED
# If you haven't installed yet
pnpm install
```

## Verify Installation

Then you can following command to verify your installation.

```shell
pnpm t
pnpm format
```

## Getting Started developing

Ah, now you have installed the code correctly, you can choose:

### Modify and update the documentation site.

```shell
# If you would like to modify the website source code of https://element-plus.org
# It was made with [VitePress](https://vitepress.vuejs.org)
pnpm docs:gen-locale # This generates locale files for your local development
pnpm docs:dev
```

### Making changes to the component instead of website

```shell
# If you would like to run a local playground to test out your changes against
# Some specific component
pnpm dev
```

You can follow the [LOCAL DEVELOPMENT GUIDE](https://element-plus.org/en-US/guide/dev-guide.html) to do development more quickly.

### Compile the source code

If you would like to compile this project locally:

```shell
# This one line code would start compiling the code which was published to https://npmjs.com
pnpm build
```

### Compile documentation website

If you would like to compile the website code locally:

```shell
pnpm docs:build
```

## Pulling request

After you done your coding section, please note:

1. Update the tests to cover all cases
2. Update co-responding documentation if you are making changes against API
3. Write a comprehensive commit message
4. Push your local changes to your remote, and then pull request to the upstream.
5. In the description section, you can add more information about your changes, to help the reviewers for better
   understanding the context here.

## Commit template

We prepared a commit message template for you to refer to, you can also follow the instruction of the CLI tool to generate
commit message intuitively.

1. With command

```bash
pnpm cz
```

2. You can also write the commit message by hand, but make sure your
   commit message follows the rules.

We have a [commit template](https://element-plus.org/en-US/guide/commit-examples.html)

NOTE:
**PRs with unformatted commit message WILL NOT BE ACCEPTED**

That's all, thanks for your contribution! 🤩
