class Block {
    constructor (timestamp, transactions, previousHash='') {
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.hash = function() {
            return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.transactions) + this.nonce).toString();
        }
        this.nonce = 0;
    }
}

class Blockchain {
    constructor (genesisNode) {
        this.chain = [this.createGenesisBlock()];
        this.node = [+genesisNode];
        this.difficulty = 4;
        this.pendingTransactions = [];
        this.miningReward = 100;
    }
    createGenesisBlock() {
        return new Block(Date.now(),[],"0");
    }
    getLatestBlock() {
        return this.chain[this.chain.length - 1]; //Getting hash of latest block
    }
}

class Transaction {
    constructor(fromAddress, toAddress, amount) {
        this.fromAdress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }
    createTransaction(transaction) {
        this.pendingTransactions.push(transaction);
    }
    minePendingTransactions(miningRewardAddress) {
        let block = new Block(Date.now(),this.pendingTransactions, this.getLatestBlock().hash);
        block.mineBlock(this.difficulty);
        console.log("Block successfully mined")
        this.chain.push(block);
        this.pendingTransactions(null, miningRewardAddress,this.miningReward);
    }
}