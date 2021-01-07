import fibrous from "fibrous";
import RegClient from 'npm-registry-client';
import { CustomArgv } from "./cli.const";
import { getAuth } from "./index.service";
import { logger } from "./logger";

const npm = new RegClient();

export const cli = fibrous((argv: CustomArgv) => {
  const modules = argv._;

  const srcAuth = getAuth('src', argv);
  const destAuth = getAuth('dest', argv);

  const { dest, destPrefix, src, srcPrefix } = argv;

  modules.forEach(module => {
    const srcName = srcPrefix ? `${srcPrefix}/${module}` : module;
    const destName = destPrefix ? `${destPrefix}/${module}` : module;

    const srcUrl = `${src}/${srcName}`;
    const destUrl = `${dest}/${destName}`;

    const srcConfig = {auth: srcAuth, timeout: 3000};
    const destConfig = {auth: destAuth, timeout: 3000};

    try {
      logger.info("Getting versions from source...", "📡");
      const srcVersions = npm.sync.get(srcUrl, srcConfig).versions;

      logger.info("Getting versions from destination...", "📡");
      let destVersions;
      try {
        destVersions = npm.sync.get(destUrl, destConfig).versions;
      } catch (e) {
        destVersions = {};
        
        if (e.code !== "E404") {
          throw e;
        }
      }

      const srcKeys = Object.keys(srcVersions);
      const destKeys = Object.keys(destVersions);

      // Hat Tip: https://medium.com/@alvaro.saburido/set-theory-for-arrays-in-es6-eb2f20a61848
      const diff = srcKeys.filter(x => !destKeys.includes(x));

      if (!diff.length) {
        logger.ok('No items differ. Nothing to migrate!', "✅");
        process.exit(0)
      }

      logger.info(diff.length === 1 ? "1 item differs!" : `${diff.length} items differ!`, "🔀");

      diff.forEach((key) => {
        const srcMetadata = srcVersions[key];
        const { dist } = srcMetadata;

        const tarball = npm.sync.fetch(dist.tarball, { auth: srcAuth });

        const destMetadata = { ...srcMetadata }

        // Delete private properties and the 'dist' object.
        delete destMetadata._;
        delete destMetadata.dist;

        npm.sync.publish(dest, { auth: destAuth, metadata: destMetadata, access: 'public', body: tarball })

        logger.ok(`${key} migrated!`, "✅")
      })
    } catch (err) {
      logger.error(err, "💥");
    }
  })
})
