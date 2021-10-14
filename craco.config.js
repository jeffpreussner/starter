// craco.config.js

const path = require("path");
const CracoEsbuildPlugin = require("craco-esbuild");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");
const { whenProd } = require("@craco/craco");

module.exports = {
  plugins: [
    {
      plugin: CracoEsbuildPlugin,
      options: {
        includePaths: ["/external/dir/with/components"], // Optional. If you want to include components which are not in src folder
        enableSvgr: true, // Optional.
        esbuildLoaderOptions: {
          // Optional. Defaults to auto-detect loader.
          loader: "jsx", // Set the value to 'tsx' if you use typescript
          target: "es2015",
        },
        esbuildMinimizerOptions: {
          // Optional. Defaults to:
          target: "es2015",
          css: true, // if true, OptimizeCssAssetsWebpackPlugin will also be replaced by esbuild.
        },
        skipEsbuildJest: false, // Optional. Set to true if you want to use babel for jest tests,
        esbuildJestOptions: {
          loaders: {
            ".ts": "ts",
            ".tsx": "tsx",
          },
        },
      },
    },
  ],
  style: {
    sass: {
      loaderOptions: {
        // Prefer 'sass' (dart-sass) over 'node-sass' if both packages are installed.
        implementation: require("sass"),
        // Workaround for this bug: https://github.com/webpack-contrib/sass-loader/issues/804
        webpackImporter: false,
      },
    },
    postcss: {
      env: {
        autoprefixer: {
          cascade: true,
        },
        postcss: {
          env: {
            stage: 3,
            features: {
              "nesting-rules": true,
            },
          },
        },
      },
    },
  },
  webpack: {
    plugins: {
      add: [
        new StyleLintPlugin({
          configBasedir: __dirname,
          context: path.resolve(__dirname, "src"),
          files: ["**/*.css", "**/*.scss"],
        }),
        //TODO: How is this working?
        ...whenProd(
          () => [
            new HtmlCriticalWebpackPlugin({
              base: path.resolve(__dirname, "build"),
              src: "index.html",
              dest: "index.html",
              inline: true,
              minify: true,
              extract: true,
              width: 375,
              height: 565,
              penthouse: {
                blockJSRequests: false,
              },
            }),
          ],
          [],
        ),
      ],
    },
  },
};

// module.exports = {
//   plugins: [{ plugin: CracoEsbuildPlugin }],
// };
