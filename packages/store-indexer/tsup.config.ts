import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  target: "esnext",
  format: ["esm", "cjs"],
  dts: false,
  sourcemap: true,
  clean: true,
  minify: true,
});
