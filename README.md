<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️--><h1 align="center">@appsweet-co/npm-carbon</h1>
<p align="center">
  <b>Copy npm packages and all their versions from one registry to another</b></br>
  <sub><sub>
</p>

<br />

<p align="center">
		<a href="/"><img alt="Latest Build" src="https://img.shields.io/npm/v/@appsweet-co/npm-carbon.svg?style=for-the-badge" height="20"/></a>
<a href="https://github.com/Appsweet-co/npm-carbon/blob/main/README.md"><img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg?style=for-the-badge" height="20"/></a>
<a href="https://github.com/dperuo/npm-carbon/blob/main/LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" height="20"/></a>
	</p>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#table-of-contents)

## ➤ Table of Contents

* [➤ Install](#-install)
* [➤ Usage](#-usage)
	* [Authenticate Using Auth Tokens](#authenticate-using-auth-tokens)
	* [Authenticate Using Username, Password, and Email](#authenticate-using-username-password-and-email)
* [➤ Author](#-author)
* [➤ 🤝 Contributing](#--contributing)
	* [Working With the @appsweet-co/npm-carbon Repo](#working-with-the-appsweet-conpm-carbon-repo)
		* [Install](#install)
		* [Usage](#usage)
		* [Run Tests](#run-tests)
	* [Submit Your Pull Request](#submit-your-pull-request)
* [➤ Show your support](#-show-your-support)
* [➤ 📝 License](#--license)

_Based on [goodeggs/npm-copy](https://github.com/goodeggs/npm-copy) and [dperuo/npm-carbon](https://github.com/dperuo/npm-carbon)._

Use this command line tool to make a "carbon copy" of any npm package and all its published versions.



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#install)

## ➤ Install
No installation needed. Use `@appsweet-co/npm-carbon` directly from npm using the `npx` command.

```sh
npx @appsweet-co/npm-carbon <OPTIONS>
```



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#usage)

## ➤ Usage
Run `--help` for a full list of commands.

```sh
npx @appsweet-co/npm-carbon --help
```

### Authenticate Using Auth Tokens

```sh
npx @appsweet-co/npm-carbon \
  --src ${SRC_URL} \
  --dest ${DEST_URL} \
  --srcToken ${SRC_TOKEN} \
  --destToken ${DEST_TOKEN} \
  packageA [packageB...]
```

### Authenticate Using Username, Password, and Email

```sh
npx @appsweet-co/npm-carbon \
  --src ${FROM_URL} \
  --srcUser ${SRC_USERNAME} \
  --srcPassword ${SRC_PASSWORD} \
  --srcEmail ${SRC_EMAIL} \
  --dest ${TO_URL} \
  --destUser ${DEST_USERNAME} \
  --destPassword ${DEST_PASSWORD} \
  --destEmail ${DEST_EMAIL} \
  packageA [packageB...]
```

  ### Modify Package Prefix
Modify the package prefix using the `--from-prefix` and `--to-prefix` flags.

```sh
npx @appsweet-co/npm-carbon \
  --srcPrefix ${SRC_PREFIX} \
  --destPrefix ${DEST_PREFIX} \
  packageA [packageB...]
```

:warning: **WARNING: List packages without their prefix when using the prefix flags. Example: `@foo/packageA` becomes just `packageA`.**



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#author)

## ➤ Author
👤 **Appsweet.co**

* Website: http://a6t.co



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#-contributing)

## ➤ 🤝 Contributing
Contributions, issues and feature requests are welcome! Feel free to check [issues page](https://github.com/appsweet-co/npm-carbon/issues).

### Working With the @appsweet-co/npm-carbon Repo

#### Install
Clone this repo to your local machine and install dependencies.

```sh
git clone https://github.com/appsweet-co/npm-carbon.git
cd npm-carbon/
npm install
```

#### Usage
Use the `start` command to compile [TypeScript](https://www.typescriptlang.org/) and watch for changes.

```sh
npm start
```

Run the local JavaScript file directly to check your changes.

```sh
./bin/index.js <OPTIONS>
```

#### Run Tests
Run the full test suite using the `test` command.

```sh
npm run test
```

### Submit Your Pull Request
Always submit your Pull Request against `master`.



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#show-your-support)

## ➤ Show your support
Give a ⭐️ if this project helped you!



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#-license)

## ➤ 📝 License
Copyright © 2020 [Appsweet.co](http://a6t.co). This project is [MIT](https://github.com/appsweet-co/npm-carbon/blob/master/LICENSE) licensed.
