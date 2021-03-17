// A dummy hash function
const lightningHash = (data) => {
    return data + "*";
}

class Block {
    constructor(data, hash, lastHash) {
        this.data = data;
        this.hash = hash;
        this.lastHash = lastHash;
    }
}

// const dummyBlock = new Block('dummy-data', 'dummy-hash', 'dummy-lastHash')
// console.log(dummyBlock)

class Blockchain{
    constructor() {
        const genesis = new Block('gen-data', 'gen-hash', 'gen-lastHash');
        this.chain = [genesis];       
    }

    addBlock(data) {
        const lastHash = this.chain[this.chain.length-1].hash;

        const hash = lightningHash(data + lastHash);

        const block = new Block(data, hash, lastHash);

        this.chain.push(block);
    }
}

const simpleBlockchain = new Blockchain();
simpleBlockchain.addBlock('one');
simpleBlockchain.addBlock('two');
simpleBlockchain.addBlock('three');

console.log(simpleBlockchain)
