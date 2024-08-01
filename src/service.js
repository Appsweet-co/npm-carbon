import RegClient from 'npm-registry-client';
import { info } from '@dperuo/logger';

const npm = new RegClient();

/** @param {Props} argv */
export const getAuthOpts = (argv) => ({
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

/** @returns {Promise<Record<SemVer, any>>} */
export async function getSrc(srcUrl, srcConfig) {
  return new Promise((resolve, reject) => {
    info("Getting versions from source...");

    npm.get(srcUrl, srcConfig, (err, data) => {
      if (err) reject(err);
      resolve(data?.versions ?? {});
    });
  });
}

/** @returns {Promise<Record<SemVer, any>>} */
export async function getDest(destUrl, destConfig) {
  return new Promise((resolve, reject) => {
    info("Getting versions from destination...");

    npm.get(destUrl, destConfig, (err, data) => {
      if (err) reject(err);
      resolve(data?.versions ?? {});
    });
  });
}

/**
 * @param {string} url
 * @param {Record<string, any>} params 
 */
export async function fetchTarball(url, params) {
  return new Promise((resolve, reject) => {
    npm.fetch(url, params, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

/**
 * @param {string} url
 * @param {Record<string, any>} params 
 */
export async function publish(url, params) {
  return new Promise((resolve, reject) => {
    npm.publish(url, params, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}
