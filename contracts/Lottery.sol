pragma solidity ^0.4.23;

contract Lottery
{
      address public manage;

      mapping (uint256=>uint256) luckNums;

      mapping (uint256=>address[]) players;

      mapping (uint256=>address) winners;
 
      
      uint256 constant NONE = 0;

//构造函数
       constructor() public {
            manage = msg.sender;
  }
  
  
  function joinGame(uint termNum) public{
      players[termNum].push(msg.sender);
  }

//选择幸运儿
function pickWinner(uint termNum) public{
    require(msg.sender == manage);
    uint256 luckNum = pickLuckNum(termNum);
    require(winners[termNum] == address(0));
    winners[termNum] = players[termNum][luckNum];
}


//生成幸运数
      function  pickLuckNum(uint termNum) private returns(uint256){
          require(msg.sender == manage);
          uint encode = uint(keccak256(manage,now,players[termNum]));
          uint256 luckNum = uint256(encode)%players[termNum].length;
          luckNums[termNum] = luckNum;
          return luckNum;
      }

//查询合约余额
      function queryBalance() public view returns(uint){
          return this.balance;
      }
//查询幸运儿
      function queryWinner(uint256 termNum) public view returns(address){
         return winners[termNum];
      }
}