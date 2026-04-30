const path = require("path");

/** @type {import('@craco/craco').CracoConfig} */
module.exports = {
  eslint: {
    enable: false,
  },
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
