const { Job } = require("../Job");
const ethers = require("ethers");

const contract = require("../../contracts/keeper/yearnv1keeper.js");

class YearnV1EarnKeeperJob extends Job {
  constructor(account, provider) {
    super(
      "YearnV1Keeper",
      new ethers.Contract(contract.address, contract.abi, account),
      provider
    );
  }
}

exports.YearnV1EarnKeeperJob = YearnV1EarnKeeperJob;
