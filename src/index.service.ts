import { CustomArgv } from "./cli.const";

export function getAuth(type: 'src' | 'dest', argv: CustomArgv) {
  return {
    alwaysAuth: true,
    email: argv[`${type}Email`],
    password: argv[`${type}Password`],
    token: argv[`${type}Token`],
    username: argv[`${type}User`],
  }
}
