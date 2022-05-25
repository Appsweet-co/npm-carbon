import { dev, error } from "@dperuo/logger";

export function tag(id: string | number, prefix?: string): string {
  return prefix ? `${prefix}/${id.toString()}` : id.toString();
};

export const callback = (err, data) => err ? error(err) : dev(data.versions);
