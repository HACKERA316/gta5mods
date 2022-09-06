const express = require('express');
const app = express();
const port = 5310;

app.get('/', (req, res) => {
  res.send('gta5ModMakerIDE devoloper server to started')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
