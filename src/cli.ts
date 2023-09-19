import { done, error, info, ok } from '@dperuo/logger';
import { satisfies, validRange } from 'semver';
import { SemVer } from '../types/primitives';
import { Props } from "./const";
import { fetchTarball, getAuthOpts, getDest, getSrc, publish } from "./service";

export const cli = (argv: Props) => {
  const bundles = argv._;
  const { src, srcPrefix, dest, destPrefix, range } = argv;
  const auth = getAuthOpts(argv);

  bundles.forEach(async (bundle) => {

    const srcName = srcPrefix ? `${srcPrefix}/${bundle}` : bundle;
    const srcUrl = `${src}/${srcName}`;
    const srcConfig = { auth: auth.src, timeout: 3000 };

    const destName = destPrefix ? `${destPrefix}/${bundle}` : bundle;
    const destUrl = `${dest}/${destName}`;
    const destConfig = { auth: auth.dest, timeout: 3000 };

    const srcVersions = await getSrc(srcUrl, srcConfig);
    const destVersions = await getDest(destUrl, destConfig);

    const validatedRange = validRange(range);

    if (!validatedRange) {
      error(`The range you endered seems to be invalid. You entered ${range}.`);
      error('Please enter a valid npm version range: https://github.com/npm/node-semver#ranges');
      process.exit(1);
    }

    const srcKeys = Object.keys(srcVersions).filter(key => satisfies(key, validatedRange));
    const destKeys = Object.keys(destVersions);

    // Hat Tip: https://medium.com/@alvaro.saburido/set-theory-for-arrays-in-es6-eb2f20a61848
    const diff = srcKeys.filter(x => !destKeys.includes(x));

    if (!diff.length) {
      ok('No items differ. Nothing to migrate.');
      done();
      process.exit(0);
    }

    info(diff.length === 1 ? "1 item differs" : `${diff.length} items differ.`);

    diff.forEach(async (key: SemVer) => {
      const srcMetadata = srcVersions[key];
      const { dist } = srcMetadata;

      const tarball = await fetchTarball(dist.tarball, { auth: auth.src });

      const destMetadata = { ...srcMetadata };

      // Delete private properties and the 'dist' object.
      delete destMetadata._;
      delete destMetadata.dist;

      publish(dest, { auth: auth.dest, metadata: destMetadata, access: 'public', body: tarball })
        .then(() => ok(`${key} migrated...`))
        .catch(error)
        .finally(() => done());
    });
  });
};
