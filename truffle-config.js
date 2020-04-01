require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other food champion rescue magic hole great light army gaze'; 
let testAccounts = [
"0x21b085aa87985489f8498521a3316165253978474e63c9e91940512886bf7a94",
"0xd0a937d683a7003558e56adc54e9de15798adc73537efd2004ae0dd7e1d597b6",
"0x8303fb24a6a2dbf373eb28b0a7389772798c785b9e766ebe36b07c699021dacf",
"0x277c7304b7f31fec7f79ea85d9932e4c54da15e33c2753598ed40f3cdd8e3f25",
"0xad697b844145469fcfe2e83f7ba5eeb66f3fb1d8408014ae31db628e3747f347",
"0x02c05b25d5fadd207a309d6ff725cdd9bdeb82d8218c6b80f0aa87ae4ee75408",
"0xb3a52f2b49f57c465dbcbbf5c1f665c5d960bf26e1b1897de5d096567f52776d",
"0x03b100739a827fb5995d3f6bc7c65243d3aae7c6f827ae852805c063fd7fd26e",
"0x460dad41dddbdaed87eaa2e2bb8cc1981ee71d27f387e9598cebbc92cdcb1a3b",
"0x4fd7c29f132e2d4b661f45d94945b86af388e603bc65f53e719db3851ae96393"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
