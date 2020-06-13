var express = require("express");
var router=express.Router()

const userRoutes = (app, fs) => {
    
    app.get("/coinGame", (req, res) => {
          var coins = [18,20,15,30,10,14 ];
          var len = coins.length;

          var add1 = 0
          var add2 = 0
          var index;

          for(index in coins){
              if(index%2 == 0){
                  add1 = add1 + coins[index]
                  console.log('Player 1 ', coins[index])
              }
              else{
                  add2 = add2 + coins[index]
                  console.log('Player 2 ', coins[index])
              }
              // console.log(coins[index], '  ', index)
          }

          if(add2 > add1 ){
              console.log('Player 2 is win ', add2, ' :)')
              res.send('Player 2 is win ');
          }else{
              console.log('Player 1 is win ', add1, ' :)')
              res.send('Player 1 is win ');
          }  
          //  res.send();
      });
  };
  
  module.exports = userRoutes;