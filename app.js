var express = require('express');
var fs = require('fs');
var app = express();

var port = process.env.PORT || 4000;

app.use((req, res) => {
    res.setHeader('content-type', 'text/html');
    fs.createReadStream('./index.html').pipe(res);
});

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});