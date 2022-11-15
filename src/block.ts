import * as crypto from 'crypto';
import Transaction from './transaction';

// A block contains a list of transactions 'just like a node in a linked list'
class Block {
  // create a rndom nonce for mining the block
  public nonce = Math.round(Math.random() * 999999999);
  constructor(
    public prevHash: string,
    public transaction: Transaction,
    public ts = Date.now()
  ) {}
  //  hash can't be changed once set
  //  hash can't reconstruct the data
  //  hash is unique and can be used to identify the block and to compare values
  get hash() {
    const str = JSON.stringify(this);
    const hash = crypto.createHash('SHA256'); // Secure Hash Algorithm with 256 bits
    hash.update(str).end();
    return hash.digest('hex');
  }
}

export default Block;
