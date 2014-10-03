var express = require('express');
var app = express();
var server = require('http').createServer(app).listen(process.env.PORT || 8080);
var io = require('socket.io')(server);


app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');


app.get('/', function(req, res){
  res.render('index')
})

io.on('connection', function (socket) {
  console.log("socket.io connected")
  socket.on('stateChanged', function (state) {
    console.log("State changed: " + state);
    io.emit("updateState", state);
  });
});