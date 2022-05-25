#!/usr/bin/env node

import yargs from "yargs";
import { cli } from "./cli";
import { Props } from "./const";
import { usage } from "./usage.const";

const props = yargs
  .usage(usage)

  .option("src", { alias: "s", describe: "The source URL", type: "string", nargs: 1, demandOption: true })
  .option("dest", { alias: "d", describe: "The destination URL", type: "string", nargs: 1, demandOption: true })

  .option("srcToken", { alias: "t", describe: "Auth token for source", type: "string", nargs: 1 })
  .option("destToken", { alias: "n", describe: "Auth token for destination", type: "string", nargs: 1 })

  .option("srcUser", { alias: "u", describe: "Username for source", type: "string", nargs: 1 })
  .option("destUser", { alias: "r", describe: "Username for destination", type: "string", nargs: 1 })

  .option("srcPassword", { alias: "p", describe: "Password for source", type: "string", nargs: 1 })
  .option("destPassword", { alias: "w", describe: "Password for destination", type: "string", nargs: 1 })

  .option("srcEmail", { alias: "e", describe: "Email for source", type: "string", nargs: 1 })
  .option("destEmail", { alias: "l", describe: "Email for destination", type: "string", nargs: 1 })

  .option("srcPrefix", { alias: "e", describe: "Package prefix used for source", type: "string", nargs: 1 })
  .option("destPrefix", { alias: "x", describe: "Package prefix used for destination", type: "string", nargs: 1 })

  .epilog('©2020 Appsweet.co. This project is MIT licensed.')
  .wrap(yargs.terminalWidth())
  .argv;

// cli(argv, (err) => {
//   if (err) {
//     logger.error(err.stack || err, "💥");
//     process.exit(1);
//   }

//   process.exit(0);
// });

cli(props as Props);
