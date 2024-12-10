import { InlineConfig } from "vite";
import path from "node:path";

import core from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import tsPaths from "vite-tsconfig-paths";

export const defaultConfig: InlineConfig = {
  appType: "spa",
  publicDir: "public",
  assetsInclude: ["**/*.tgs"],
  plugins: [tsPaths(), core(), svgr()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
};
