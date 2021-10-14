// .storybook/YourTheme.js

import { create } from "@storybook/theming";

export default create({
  base: "light",

  colorPrimary: "#003057",
  colorSecondary: "#003057",

  // UI
  appBg: "#F5F5F5",
  appContentBg: "#FFFFFF",
  appBorderColor: "#DEDEDE",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "#001514",
  textInverseColor: "#F5FBEF",

  // Toolbar default and active colors
  barTextColor: "#000",
  barSelectedColor: "#003057",
  barBg: "#f9f9f9",

  // Form colors
  inputBg: "#FFFFFF",
  inputBorder: "#DEDEDE",
  inputTextColor: "#000",
  inputBorderRadius: 4,
  brandTitle: "Museum of Science",
  brandUrl: "https://www.mos.org/",
  brandImage:
    "https://www.mos.org/sites/dev-elvis.mos.org/themes/mos_refresh/img/logos/MOS_logo-horizontal_L-color-NEW.svg",
});
