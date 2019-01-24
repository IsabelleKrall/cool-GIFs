"use strict";

const browsersync = require("rollup-plugin-browsersync");
const postcss = require("rollup-plugin-postcss");
const babel = require("rollup-plugin-babel");
const babelCore = require("@babel/core");
const babelPreset = require("@babel/preset-env");
const normalize = require("postcss-normalize");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const nodeResolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = isProduction === false;

module.exports = {
  input: "src/scripts/index.js",
  output: {
    file: "public/giphy.js",
    format: "iife",
    sourcemap: true
  },

  plugins: [
    postcss({
      extract: true,
      plugins: [normalize(), autoprefixer(), cssnano()],
      sourceMap: true
    }),
    babel(),
    nodeResolve(),
    commonjs(),
    isDevelopment && browsersync({ server: "public" })
  ]
};
