const express = require('express')
const dns = require('dns')
const os = require('os');
const app = express()
const port = 80

dns.lookup(os.hostname(), function(err, result) {
  console.log("My ip address is: " + result);
  app.get('/', (req, res) => {
    res.send('IP: ' + result);
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  })
})
