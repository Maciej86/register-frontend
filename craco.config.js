const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@common": path.resolve(__dirname, "src/common"),
      "@core": path.resolve(__dirname, "src/core"),
      "@features": path.resolve(__dirname, "src/features"),
      "@coreHooks": path.resolve(__dirname, "src/core/hooks"),
      "@store": path.resolve(__dirname, "src/store"),
      "@storeBar": path.resolve(__dirname, "src/store/Bar"),
      "@storeConfirm": path.resolve(__dirname, "src/store/Confirm"),
      "@storeOrganization": path.resolve(__dirname, "src/store/Organization"),
      "@storeUser": path.resolve(__dirname, "src/store/User"),
    },
  },
};
