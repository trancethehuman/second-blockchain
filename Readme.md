# HaiCoin 2.0

## Files

```
app.js: containts Express API that interacts with the blockchain
blockchain.js: contains all classes for constructing blockchain, blocks and transactions
package.json: stores prerequisite
```


## JavaScript package being used
cryptoJS: for hashing

## Block structure:

```
A block's properties are consisted of: timestamp (indicating when the block was created), an array of transactions, and a link to the previous block (which the *genesis block* doesn't have).
Genesis block: the first block (much religion)
```
