import { dev, error } from "@dperuo/logger";

/**
 * @param {string|number} id
 * @param {string} [prefix]
 * @returns {string}
 */
export function tag(id, prefix) {
  return prefix ? `${prefix}/${id.toString()}` : id.toString();
};

export const callback = (err, data) => err ? error(err) : dev(data.versions);
