var express = require('express');
var unflatten = require('flat').unflatten;
var enchilada = require('enchilada');
var quesadilla = require('quesadilla');

var crawler = require('./crawler');

var redis = require('redis');
var client = redis.createClient();

var config = require('./config');

var port = process.env.PORT || config.port;

/**
 * connect to redis
 */

client.on('error', function(err, res) {
  if (err) throw new Error('Error: ', err);
});


/**
 * check if data exists; crawl and save to redis
 */

client.lindex(config.redis_hashkey, '0', function(err, value) {
  if (!value) {
    crawler();
  }
});


/**
 * Application Server
 */

var app = express();

/** 
 * app routes
 */


app.get('/', function(req, res) {
  client.lrange(config.redis_hashkey, 0, 9, function(err, arr) {
    var items = [];
    arr.forEach(function(element) {
      items.push(JSON.parse(unflatten(element)));
    })
    res.send(items);
  });
});

app.listen(port, function() {
  console.log('application is listening on PORT: ', port);
});

/**
 * app listen
 */

// app
//   .use(quesadilla(__dirname + '/styles'))
//   .use(enchilada(__dirname + '/scripts'))
//   .use(express.static(__dirname + '/public'))
//   .listen(port, function() {
//     console.log('application is listening on PORT: ', port);
//   });