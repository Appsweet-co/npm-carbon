import chalk from 'chalk';

type Types = 'docs' | 'error' | 'info' | 'ok' | 'warn';

const categories = {
  docs: chalk.cyan,
  error: chalk.red,
  info: chalk.blue,
  ok: chalk.green,
  warn: chalk.yellow,
};

const prefix = {
  docs: "==> [DOCS]",
  error: "==> [ERROR]",
  info: "==> [INFO]",
  ok: "==> [OK]",
  warn: "==> [WARN]",
};

const generic = (type: Types, msg: string, emoji?: string) => {
  const output = (emoji)
    ? `${prefix[type]} ${emoji}  ${msg}`
    : `${prefix[type]} ${msg}`;

  switch (type) {
    case 'error':
      console.error(categories.error(output));
      break;

    case 'warn':
      console.warn(categories.warn(output));
      break;

    default:
      console.log(categories[type](output));
      break;
  }
};

export const logger = {
  docs: (msg: string, emoji: string) => {
    generic('docs', msg, emoji);
  },

  error: (msg: string, emoji?: string) => {
    generic('error', msg, emoji);
  },

  info: (msg: string, emoji?: string) => {
    generic('info', msg, emoji);
  },

  ok: (msg: string, emoji?: string) => {
    generic('ok', msg, emoji);
  },

  warn: (msg: string, emoji?: string) => {
    generic('warn', msg, emoji);
  },
};
