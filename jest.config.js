module.exports = {
  setupFilesAfterEnv: ["jest-extended"],
  transformIgnorePatterns: [
    "/node_modules/(?!accessible-menu/)",
    "\\.pnp\\.[^\\/]+$",
  ],
};
