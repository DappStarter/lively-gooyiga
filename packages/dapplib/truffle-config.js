require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name recipe sad upset harvest deposit equal genuine'; 
let testAccounts = [
"0x201d8c6ddd7539670132de9c921e3e9ae950ddf0172e191a26bb17bf73375c4f",
"0x054ecfdb1391f511108977264faecd02b1a0b47e84ee956ff8686bd4f45befff",
"0xae61755f775c7e1fa825c35acf9c5eb02d3f968017a3f518f8da3f029105e1f0",
"0x0707496c401e69e64e8456eb0d4cbc0112d49458b7f8e92a3e119a523aebbd29",
"0xab494747d4c92f982b79d044a9a2ba9be39365d8f69cc54fc9eccba66b423de1",
"0x29832be47ee6d913eb8153a898405ef372baf9f3a2a0f50ca5c77b4119ff6acc",
"0x7bf6f4ce2d2ca6998a8c1ce4c07b5fe04e8ca9ac18a4b6f4800530a82c614c94",
"0x5ff4e6be512b99e2657c0c4510d1ee93c6de36eed61fe068ef1501bab708dac4",
"0xf9c9a4f0a24a22ab90a057ac57c80ad5504faec7ecc8360b8a8e96cd87ddc82e",
"0xa5783813765caacbcc40a72e232ae03ce48f6fcbccc02d4a142ac8c355412773"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
