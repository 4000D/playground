pragma solidity ^0.4.10;

contract ArrayTest{
	address[] public addr;

  function itr(uint n) {
    for(uint i = 0; i < n; i++) {
      addr.push(address(i));
    }
  }

  function getAddr() constant returns (address[]) {
    return addr;
  }

  function getLength() constant returns (uint) {
    return addr.length;
  }
}
