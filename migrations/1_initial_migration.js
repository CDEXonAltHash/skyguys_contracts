const SkyGuys = artifacts.require('SkyGuys')

module.exports = function (deployer) {
  deployer.deploy(SkyGuys, 'https://api.skyguys.io/info/')
}


