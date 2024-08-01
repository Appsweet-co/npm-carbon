#!/usr/bin/env node

import yargs from "yargs";
import { cli } from '../src/cli';
import { usage } from "../src/usage";

const props = yargs
  .usage(usage)

  .option("src", { alias: "s", describe: "The source registry URL", type: "string", nargs: 1, demandOption: true, })
  .option("dest", { alias: "d", describe: "The destination registry URL", type: "string", nargs: 1, demandOption: true, })

  .option("srcToken", { alias: "t", describe: "Auth token for source", type: "string", nargs: 1 })
  .option("destToken", { alias: "n", describe: "Auth token for destination", type: "string", nargs: 1 })

  .option("srcUser", { alias: "u", describe: "Username for source", type: "string", nargs: 1 })
  .option("destUser", { alias: "r", describe: "Username for destination", type: "string", nargs: 1 })

  .option("srcPassword", { alias: "p", describe: "Password for source", type: "string", nargs: 1 })
  .option("destPassword", { alias: "w", describe: "Password for destination", type: "string", nargs: 1 })

  .option("srcEmail", { alias: "e", describe: "Email for source", type: "string", nargs: 1 })
  .option("destEmail", { alias: "l", describe: "Email for destination", type: "string", nargs: 1 })

  .option("srcPrefix", { alias: "f", describe: "Package prefix used for source", type: "string", nargs: 1 })
  .option("destPrefix", { alias: "x", describe: "Package prefix used for destination", type: "string", nargs: 1 })

  .option("range", { alias: "g", describe: "Any valid npm version range (https://github.com/npm/node-semver#ranges)", type: "string", nargs: 1, default: 'x' })

  .epilog('©2023 Appsweet.co. This project is MIT licensed.')
  .wrap(yargs.terminalWidth())

  .example([
    ['npx @appsweet-co/npm-carbon -s $SRC_URL -d $DEST_URL <OPTIONS>', 'Mix and match OPTIONS as needed.']
  ])

  .argv;

cli(props);
