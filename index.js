// SL CHNage 

var express = require('express')
var app = express()

const PORT = 8080

app.get('/', function (req, res) {
  res.json({
    msg: 'Hello from CUBETIQ!',
    timestamp: new Date().getTime(),
  })
})

app.get('/info', function (req, res) {
  res.json({
    status: 'OK',
    message: 'Hello, CUBETIQ Solution',
  })
})

app.listen(PORT, function () {
  console.log(`app listening on port ${PORT}!`)
})
