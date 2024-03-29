<h1 align="center">@appsweet-co/npm-carbon</h1>

<p align="center">
  <b>Copy npm packages and all their versions from one registry to another</b>
</p>

<br />

<p align="center">
		<a href="/"><img alt="Latest Build" src="https://img.shields.io/npm/v/@appsweet-co/npm-carbon.svg?style=for-the-badge" height="20"/></a>
<a href="https://github.com/Appsweet-co/npm-carbon/blob/main/README.md"><img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg?style=for-the-badge" height="20"/></a>
<a href="https://github.com/dperuo/npm-carbon/blob/main/LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" height="20"/></a>
	</p>

_Based on [goodeggs/npm-copy](https://github.com/goodeggs/npm-copy) and [dperuo/npm-carbon](https://github.com/dperuo/npm-carbon)._

Use this command line tool to make a "carbon copy" of any npm package and all its published versions.

## ESM vs CJS

We migrated to [ESM](https://nodejs.org/api/esm.html) starting in v2.0.0. Please use v1 if you need CommonJS modules.

## Install

No installation needed. Use `@appsweet-co/npm-carbon` directly from the command line.

### Node

```zsh
npx @appsweet-co/npm-carbon -s $SRC_URL -d $DEST_URL <OPTIONS>
```

### Bun

```zsh
bunx @appsweet-co/npm-carbon -s $SRC_URL -d $DEST_URL <OPTIONS>
```

## Usage

Run `--help` for a full list of options.

```zsh
npx @appsweet-co/npm-carbon --help
```

### Authenticate Using Auth Tokens

```zsh
npx @appsweet-co/npm-carbon \
  --src https://registry.npmjs.org \
  --dest https://registry.npmjs.org \
  --srcToken w7ikVizKsyP98uyBS6 \
  --destToken JmNMqitWbnOex3py9A \
  packageA [packageB...]
```

### Authenticate Using Username, Password, and Email

```zsh
npx @appsweet-co/npm-carbon \
  --src https://registry.npmjs.org \
  --srcUser helloworld \
  --srcPassword https://registry.npmjs.org \
  --srcEmail helloworld@company.com \
  --dest https://registry.npmjs.org \
  --destUser helloworld \
  --destPassword gUbcneqpbxC8 \
  --destEmail helloworld@company.com \
  packageA [packageB...]
```

### Specify a Version Range

By default, `@appsweet-co/npm-carbon` copies all avaliable versions of the package. Use `--range` to specify a subset of versions.

The `--range` flag accepts any valid [npm version range](https://github.com/npm/node-semver#ranges)/

```zsh
npx @appsweet-co/npm-carbon \
  --range "~3.0.0 || 5.1.x" \
  packageA [packageB...]
```

### Modify Package Prefix

Modify the package prefix using the `--srcprefix` and `--destPrefix` flags.

```zsh
npx @appsweet-co/npm-carbon \
  --srcPrefix @company \
  --destPrefix @company \
  packageA [packageB...]
```

:warning: **WARNING: List packages without their prefix when using the prefix flags. Example: `@foo/packageA` becomes just `packageA`.**

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#author)

## Contributing

Contributions, issues and feature requests are welcome! Feel free to check [issues page](https://github.com/appsweet-co/npm-carbon/issues).

### Install

Clone this repo to your local machine and install dependencies.

```zsh
git clone https://github.com/appsweet-co/npm-carbon.git
cd npm-carbon/
npm install
```

### Usage

Use the `start` command to compile [TypeScript](https://www.typescriptlang.org/) and watch for changes.

```zsh
npm start
```

Run the local JavaScript file directly to check your changes.

```zsh
node ./bin/index.js <OPTIONS>
```

### Run Tests

Run the full test suite using the `test` command.

```zsh
npm run test
```

### Submit Your Pull Request

Always submit your Pull Request against `main`.
