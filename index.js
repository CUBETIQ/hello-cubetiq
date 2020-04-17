var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello from CUBETIQ!')
})

app.listen(7000, function () {
  console.log('app listening on port 7000!')
})