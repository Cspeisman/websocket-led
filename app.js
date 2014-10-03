var express = require('express')
var app = express();
var server = require('http').Server(app)

server.listen(5000)
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.render('index.ejs')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
