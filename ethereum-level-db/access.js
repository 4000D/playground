const levelup = require('levelup');
const leveldown = require('leveldown');

// access to geth level db. make sure no mutex is on `chaindata`
const db = levelup(leveldown('./.ethereum/geth/chaindata'));

// state root of block# 40000
const stateRoot = Buffer.from('35685ec258bc31096f437e345a45f98bb353b09d4f51582e79fa2e17e375e428', 'hex');

db.get(stateRoot, { encoding: 'binary' }, (err, data) => {
  console.log(data);
});
