import { Props } from "./const";

export const getAuthOpts = (argv: Props) => ({
  src: {
    alwaysAuth: true,
    email: argv.srcEmail,
    password: argv.srcPassword,
    token: argv.srcToken,
    username: argv.srcUser,
  },

  dest: {
    alwaysAuth: true,
    email: argv.destEmail,
    password: argv.destPassword,
    token: argv.destToken,
    username: argv.destUser,
  },
});
