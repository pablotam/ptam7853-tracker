const express = require('express');

const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html')
   })

   let port = 8888; 
   let server = app.listen(port, () => {
        console.log (`App server is running on port ${port}`)
   });