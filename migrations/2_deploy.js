// migrations/2_deploy.js
// SPDX-License-Identifier: MIT
const WBTC = artifacts.require("WBTC");

module.exports = function(deployer) {
  deployer.deploy(WBTC);
};
