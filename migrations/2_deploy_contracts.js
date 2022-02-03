var NftMinter = artifacts.require("nftMinter");

module.exports = function(deployer) {
    deployer.deploy(NftMinter);
        // Additional contracts can be deployed here
};