const levelup = require('levelup');
const leveldown = require('leveldown');

const RLP = require('rlp');
const Trie = require('merkle-patricia-tree');

const Web3 = require('web3');

const web3 = new Web3();
const { sha3, toHex } = web3.utils;
const dbPath = './.ethereum/geth/chaindata';

// access to geth level db. make sure no mutex is on `chaindata`
const db = levelup(leveldown(dbPath));

// state root of block#40000
const stateRoot = Buffer.from('35685ec258bc31096f437e345a45f98bb353b09d4f51582e79fa2e17e375e428', 'hex');

async function main() {
  const data = await db.get(stateRoot, { encoding: 'binary' });

  console.log('state raw trie : key', stateRoot);
  console.log('state raw trie : value', data);
  console.log('state raw trie : value.length', data.length);
}

// Decode Trie
const trie = new Trie(db);
// const blockMiner = Buffer.from('ff7cae450435b0bf2776edf6dfe650a0d45e2d7f', 'hex'); // block#39999
const blockMiner = Buffer.from('eef57aad0173d2f94b9f3890771f359ea9b8f7115d1430e7b04edc86534353d8', 'hex'); // sha3 of above
// const blockMiner = Buffer.from('88d74a59454f6cf3b51ef6b9136afb6b9d405a88', 'hex'); // block#40000
const account = trie.get(blockMiner, (err, account) => {
  console.log('trie account : key', Buffer.from(blockMiner, 'hex'));
  console.log('trie account : value', account);
});

console.log('SHA3');
console.log(sha3(Buffer.from('00000000000000000000000000000001', 'hex')));

// account = trie.get(d.digest('hex'), (err, account) => {
//   console.log('trie account : key', Buffer.from(blockMiner, 'hex'));
//   console.log('trie account : value', account);
// });

main();
