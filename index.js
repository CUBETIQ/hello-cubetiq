// SL CHNage 

var express = require('express')
var app = express()

const PORT = 8080

app.get('/', function (req, res) {
  res.send('Hello from CUBETIQ!')
})

app.listen(PORT, function () {
  console.log(`app listening on port ${PORT}!`)
})
