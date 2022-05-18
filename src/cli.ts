import { Props } from "./const";
import { getAuthOpts } from "./service";
import { dev, error, info } from "@dperuo/logger";
import RegClient from 'npm-registry-client';

const npm = new RegClient();

export const cli = (argv: Props) => {
  const bundles = argv._;
  const { src, dest, srcPrefix, destPrefix } = argv;
  const auth = getAuthOpts(argv);

  bundles.forEach(bundle => {
    const srcName = srcPrefix ? `${srcPrefix}/${bundle}` : bundle;
    const destName = destPrefix ? `${destPrefix}/${bundle}` : bundle;

    const srcUrl = `${src}/${srcName}`;
    const destUrl = `${dest}/${destName}`;

    const srcConfig = { auth: auth.src, timeout: 3000 };
    const destConfig = { auth: auth.dest, timeout: 3000 };

    dev(srcName, destName, srcUrl, destUrl, srcConfig, destConfig);

    info('Getting versions from source...');

    const callback = (err, data) => err ? error(err) : dev(data);

    info('Getting versions from source...');
    npm.get(srcUrl, srcConfig, callback);

    info('Getting versions from destination...');
    npm.get(destUrl, destConfig, callback);
  });
};

// export const cli = (argv: CustomArgv) => {
//   modules.forEach(module => {
//     try {
//       logger.info("Getting versions from source...", "📡");
//       const srcVersions = npm.sync.get(srcUrl, srcConfig).versions;

//       logger.info("Getting versions from destination...", "📡");
//       let destVersions;
//       try {
//         destVersions = npm.sync.get(destUrl, destConfig).versions;
//       } catch (e: any) {
//         destVersions = {};

//         if (e.code !== "E404") {
//           throw e;
//         }
//       }

//       const srcKeys = Object.keys(srcVersions);
//       const destKeys = Object.keys(destVersions);

//       // Hat Tip: https://medium.com/@alvaro.saburido/set-theory-for-arrays-in-es6-eb2f20a61848
//       const diff = srcKeys.filter(x => !destKeys.includes(x));

//       if (!diff.length) {
//         logger.ok('No items differ. Nothing to migrate!', "✅");
//         process.exit(0);
//       }

//       logger.info(diff.length === 1 ? "1 item differs!" : `${diff.length} items differ!`, "🔀");

//       diff.forEach((key) => {
//         const srcMetadata = srcVersions[key];
//         const { dist } = srcMetadata;

//         const tarball = npm.sync.fetch(dist.tarball, { auth: srcAuth });

//         const destMetadata = { ...srcMetadata };

//         // Delete private properties and the 'dist' object.
//         delete destMetadata._;
//         delete destMetadata.dist;

//         npm.sync.publish(dest, { auth: destAuth, metadata: destMetadata, access: 'public', body: tarball });

//         logger.ok(`${key} migrated!`, "✅");
//       });
//     } catch (err: any) {
//       logger.error(err, "💥");
//     }
//   });
// };
