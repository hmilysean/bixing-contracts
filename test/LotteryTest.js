const Lottery = artifacts.require("Lottery");
const assert = require('assert');

contract('Lottery', function(accounts) {
  
    it("query Lottery Balance", function() {
      return Lottery.deployed().then(function(instance) {
        return instance.queryBalance.call();
      }).then(function(balance) {
        assert.equal(balance.valueOf(), 0, "there is zero in the first account");
      });
    });

    it("Join Game",function(){
      return Lottery.deployed().then(function(instance){
       accounts.forEach(element => {
        console.log(element + "join the Game")
        instance.joinGame(2,{from:element})
       });
      });
    })

      it("pick winner", function(){

        return Lottery.deployed().then(function(instance){
          instance.pickWinner(2,{from:accounts[0]})
          console.log("PIck a winner")
        });
      })

      it("query winner",function(){
        return Lottery.deployed().then(function(instance){
            return instance.queryWinner.call(2)
        }).then(function(winner){
          console.log(winner)
        });
      })

  })