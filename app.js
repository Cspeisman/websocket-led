var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
var server = require('http').createServer(app).listen(process.env.PORT || 8080);
var io = require('socket.io')(server);

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index')
})

io.on('connection', function (socket) {
  console.log("WOOOOOOOOOO")
  socket.on('stateChanged', function (state) {
    console.log("State changed: " + state);
    io.emit("updateState", state);
  });
});