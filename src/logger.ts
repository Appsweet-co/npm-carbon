import { categories, prefix, Types } from "./logger.const";

export const logger = {
  docs: (msg: string, emoji: string) => {
    generic('docs', msg, emoji)
  },

  error: (msg: string, emoji?: string) => {
    generic('error', msg, emoji)
  },

  info: (msg: string, emoji?: string) => {
    generic('info', msg, emoji)
  },

  ok: (msg: string, emoji?: string) => {
    generic('ok', msg, emoji)
  },

  warn: (msg: string, emoji?: string) => {
    generic('warn', msg, emoji)
  },
}

function generic(type: Types, msg: string, emoji?: string) {
  const output = (emoji)
    ? `${prefix[type]} ${emoji}  ${msg}`
    : `${prefix[type]} ${msg}`

  switch (type) {
    case 'error':
      console.error(categories.error(output))
      break;

    case 'warn':
      console.warn(categories.warn(output))
      break;

    default:
      console.log(categories[type](output))
      break;
  }
}
