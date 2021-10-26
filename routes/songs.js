var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const songs = [
    {name: 'song 1', singer: 'singer 1'},
    {name: 'song 2', singer: 'singer 2'},
    {name: 'song 3', singer: 'singer 3'},
    {name: 'song 4', singer: 'singer 4'},
    {name: 'song 5', singer: 'singer 5'},
    {name: 'song 6', singer: 'singer 6'},
    {name: 'song 7', singer: 'singer 7'},
    {name: 'song 8', singer: 'singer 8'},
    {name: 'song 9', singer: 'singer 9'},
    {name: 'song 10', singer: 'singer 10'},
    {name: 'song 11', singer: 'singer 11'},
    {name: 'song 12', singer: 'singer 12'},
  ]
  res.send(songs);
});

module.exports = router;
