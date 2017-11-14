const path = require('path')
const levelup = require('levelup');
const leveldown = require('leveldown');

const RLP = require('rlp');
const Trie = require('merkle-patricia-tree');

const toBuffer = str => new Buffer(str, 'hex');

const db_path = '/Users/PJH/Library/Ethereum/geth/chaindata';
// const db_path = '/Users/PJH/.ethereum/geth/chaindata';
const db = levelup(leveldown(db_path));

const _root = "d7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544"

db.get(toBuffer(_root))
  .then(v => {
    console.log(v.toString());
  })
  .catch(console.error)
