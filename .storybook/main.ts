import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../app/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@": path.resolve(__dirname, "../"),
        "@components": path.resolve(__dirname, "../components"),
        "@app": path.resolve(__dirname, "../app"),
        "@stories": path.resolve(__dirname, "../stories"),
        "@lib": path.resolve(__dirname, "../app/lib"),
      };
    }
    return config;
  },
};

export default config;
