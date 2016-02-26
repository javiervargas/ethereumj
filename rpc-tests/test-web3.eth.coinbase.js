#!/usr/bin/env node

var Web3 = require('web3');

// dont override global variable
if (typeof window !== 'undefined' && typeof window.Web3 === 'undefined') {
    window.Web3 = web3;
}

web3 = new Web3();

module.exports = web3;

web3.setProvider(new web3.providers.HttpProvider('http://localhost:87'));

var coinbase = web3.eth.coinbase;

console.log(coinbase);