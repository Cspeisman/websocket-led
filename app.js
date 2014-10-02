var express = require('express');
var app = express();
// app.use(express.static(__dirname + '/public'));
var server = require('http').Server(app)
// var io = require('socket.io')(server);

// app.set('view engine', 'ejs');

server.listen(3000);

app.get('/', function(req, res){
  res.render('index')
})

// io.on('connection', function (socket) {
//   console.log("WOOOOOOOOOO")
//   socket.on('stateChanged', function (state) {
//     console.log("State changed: " + state);
//     io.emit("updateState", state);
//   });
// });