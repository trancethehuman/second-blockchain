# HaiCoin 2.0
### Built upon HaiCoin 1.0, with better documentation and stuff.

## Files

- app.js: containts Express API that interacts with the blockchain
- blockchain.js: contains all classes for constructing blockchain, blocks and transactions
- package.json: stores prerequisite

## JavaScript package being used
cryptoJS: for hashing

## Block structure:

- A block's properties are consisted of: timestamp (indicating when the block was created), an array of transactions, and a link to the previous - block (which the *genesis block* doesn't have).
- Genesis block: the first block (much religion)

## Some features of the coin:
- hash: quick definition: takes in an input (previous hash + timestamp + pending transactions + nonce), and generates an output that makes it impossible to reverse engineer. The hash calculation in this blockchain uses sha256 (which is taken from cryptojs).
- nonce: increase this variable as I try different combinations of hashes so that I don't try the same hash twice. This is basically mining coins $$$$.


