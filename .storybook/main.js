module.exports = {
  stories: [
    "../src/stories/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@whitespace/storybook-addon-html",
    "storybook-preset-craco"
  ],
}; // .storybook/main.js
