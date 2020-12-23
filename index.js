var express = require('express')
var app = express();

console.log(`Starting server on port ${process.env.PORT}...`);
app.use(express.static('app'));
app.listen(process.env.PORT);

