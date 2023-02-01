import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
import { loadEnv } from "vite";
export default ({ mode }) => {
  console.log(loadEnv(mode, process.cwd()).VITE_GITHUB_REPOSITORY);
  return defineConfig({
    plugins: [react()],
    base: ((loadEnv(mode, process.cwd()).GITHUB_REPOSITORY ?? "") + "/").match(
      /(\/.*)/
    )?.[1],
  });
};
