const METoken = artifacts.require("METoken");
const METFaucet = artifacts.require("METFaucet");
const owner = web3.eth.getAccounts();
//web3.eth.getAccounts().then( function(s){FirstA=s[0]})



// const owner = web3.eth.getAccounts().then(function(acc){ accounts = acc })
// const owner1 = owner[0]

module.exports = function(deployer){
    // Deploy the METoken contract first
    deployer.deploy(METoken, {from:owner}).then(function(){
        // Then deploy METFaucet and pass the address of METoken and the 
        // address of the owner of all the MET who will approve METFaucet
        return deployer.deploy(METFaucet, METoken.address, FirstA);
    });
}

