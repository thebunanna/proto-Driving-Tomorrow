const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 7000;

app.use(express.static("photos", redirect = false));
app.get('./gallery/:photoid', (req, res) => {
  console.log(__dirname);
  console.log(path.join('./photos',req.params.photoid));
  res.sendFile(path.join('./photos',req.params.photoid));
})
app.listen(port, () => {console.log('listening~')});
