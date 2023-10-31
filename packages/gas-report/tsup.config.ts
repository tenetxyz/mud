import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["ts/index.ts", "ts/mud-gas-report.ts"],
  target: "esnext",
  format: ["esm", "cjs"],
  dts: false,
  sourcemap: true,
  clean: true,
  minify: true,
});
