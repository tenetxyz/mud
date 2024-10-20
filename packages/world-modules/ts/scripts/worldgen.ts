import { globSync } from "glob";
import path, { basename } from "path";
import { rmSync } from "fs";
import { loadConfig } from "@latticexyz/config/node";
import { getSrcDirectory } from "@latticexyz/common/foundry";
import { World as WorldConfig } from "@latticexyz/world";
import { worldgen } from "@latticexyz/world/node";

// TODO dedupe this and cli's worldgen command
const configPath = undefined;
const clean = false;
const srcDir = await getSrcDirectory();

// Get a list of all contract names
const existingContracts = globSync(`${srcDir}/**/*.sol`)
  .sort()
  .map((path) => ({
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
await worldgen(mudConfig, existingContracts, outputBaseDirectory);
