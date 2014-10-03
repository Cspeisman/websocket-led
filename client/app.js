var socket = require("socket.io-client")("http://floating-beach-1298.herokuapp.com/");

socket.on('connect', function(){
  console.log("Connected to server");
  socket.on("updateState", function(state){
    console.log("The new state is: " + state);
  })
})

