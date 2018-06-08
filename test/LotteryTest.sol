pragma solidity ^0.4.0;

import "truffle/DeployedAddresses.sol";
import "truffle/Assert.sol";
import "../contracts/Lottery.sol";      // 被测试合约

contract LotteryTest {
        Lottery lottery = Lottery(DeployedAddresses.Lottery());

        function testBalance() public {
           uint balance  =  lottery.queryBalance();
           assert(balance == 0);
        }
}