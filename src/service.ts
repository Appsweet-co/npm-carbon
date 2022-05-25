import RegClient from 'npm-registry-client';
import { info } from '@dperuo/logger';
import { Props } from "./const";
import type { SemVer } from '../types/primitives';

const npm = new RegClient();

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

export async function getSrc(srcUrl, srcConfig): Promise<Record<SemVer, any>> {
  return new Promise((resolve, reject) => {
    info("Getting versions from source...");

    npm.get(srcUrl, srcConfig, (err, data) => {
      if (err) reject(err);
      resolve(data.versions);
    });
  });
}

export async function getDest(destUrl, destConfig): Promise<Record<SemVer, any>> {
  return new Promise((resolve, reject) => {
    info("Getting versions from destination...");

    npm.get(destUrl, destConfig, (err, data) => {
      if (err) reject(err);
      resolve(data.versions);
    });
  });
}

export async function fetchTarball(url: string, params: Record<string, any>) {
  return new Promise((resolve, reject) => {
    npm.fetch(url, params, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

export async function publish(url: string, params: Record<string, any>) {
  return new Promise((resolve, reject) => {
    npm.publish(url, params, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}
