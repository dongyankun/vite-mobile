import { UserConfig, ConfigEnv, loadEnv } from "vite";

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import WindiCSS from "vite-plugin-windicss";
import eslintPlugin from "vite-plugin-eslint";

import { resolve } from "path";

export default ({ mode }: ConfigEnv): UserConfig => {
  const VITE_APP_NODE_ENV = loadEnv(mode, process.cwd()).VITE_APP_NODE_ENV;
  console.log(VITE_APP_NODE_ENV); // 如何使用环境变量
  return {
    plugins: [vue(), vueJsx(), WindiCSS(), eslintPlugin({ include: ["src/**/*.vue"] })],
    resolve: {
      // 配置路径别名
      alias: {
        "@": resolve(__dirname, "./src")
      }
    },
    base: "./",
    // publicDir: "./static",
    server: {
      port: 4000,
      open: true,
      cors: true
    },
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
          additionalData: '@import "./src/style/global.scss";'
        }
      }
    }
  };
};
