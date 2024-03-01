import glob from "glob";
import path, { basename } from "path";
import { rmSync } from "fs";
import { loadConfig } from "@latticexyz/config/node";
import { getSrcDirectory } from "@latticexyz/common/foundry";
import { worldgen } from "../node";
import { World as WorldConfig } from "../config/v2/output";

(async () => {
  // TODO dedupe this and cli's worldgen command
  const configPath = undefined;
  const clean = false;
  const srcDir = await getSrcDirectory();

  // Get a list of all contract names
  const existingContracts = glob.sync(`${srcDir}/**/*.sol`).map((path) => ({
    path,
    basename: basename(path, ".sol"),
  }));

  // Load and resolve the config
  const mudConfig = (await loadConfig(configPath)) as WorldConfig;

  const outputBaseDirectory = path.join(srcDir, mudConfig.codegen.outputDirectory);

  // clear the worldgen directory
  if (clean) {
    rmSync(path.join(outputBaseDirectory, mudConfig.codegen.worldgenDirectory), { recursive: true, force: true });
  }

  // generate new interfaces
  // override the namespace to be the root namespace for generating the core system interface
  const rootMudConfig = { ...mudConfig, namespace: "" };
  await worldgen(rootMudConfig, existingContracts, outputBaseDirectory);
})();
