import chalk from 'chalk';

export type Types = 'docs' | 'error' | 'info' | 'ok' | 'warn'

export const categories = {
  docs: chalk.cyan,
  error: chalk.red,
  info: chalk.blue,
  ok: chalk.green,
  warn: chalk.yellow,
}

export const prefix = {
  docs: "==> [DOCS]",
  error: "==> [ERROR]",
  info: "==> [INFO]",
  ok: "==> [OK]",
  warn: "==> [WARN]",
}
