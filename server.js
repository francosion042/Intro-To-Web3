const Web3 = require('web3')
const {bnbABI} = require('./utils/ABI')

// console.log(bnbABI)

const url = 'https://mainnet.infura.io/v3/6ebfb0968e2e46dbbd702e699190e9f6' 

const contractAddress = '0xB8c77482e45F1F44dE1745F52C74426C631bDD52'

const web3 = new Web3(url)


const contract = new web3.eth.Contract(bnbABI, contractAddress)

contract.methods.name().call((error, result) => { console.log(result)})

contract.methods.totalSupply().call((error, result) => { console.log(result)})

const someAddress = '0xb4b3351918a9bedc7d386c6a685c42e69920b34d'
contract.methods.balanceOf(someAddress).call((error, result) => { console.log(result)})

// console.log(contract.methods)