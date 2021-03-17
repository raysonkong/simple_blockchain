
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

}
