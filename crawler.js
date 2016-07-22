/**
 * instagram crawler
 * based on https://github.com/rarcega/instagram-scraper-node/
 */

var request = require('request');
var path = require('path');
var qs = require('querystring');
var url = require('url');
var flatten = require('flat');
var config = require('./config');

var redis = require('redis');
var client = redis.createClient();


client.on('error', function(err) {
  console.log('Error' + err);
});

function Scraper(username) {
  this.username = username;
  this.baseUrl = url.format({
    protocol : 'http',
    host     : 'instagram.com',
    pathname : path.join(username, 'media')
  });
  this.counter = 0;
}

Scraper.prototype.crawl = function(maxId) {
  var url = this.baseUrl + '?' + qs.stringify({ max_id: maxId });
  
  return request(url, function(req, res, body) {
    var media = JSON.parse(body);
    if (media.more_available && this.counter < 20) {
      this.counter = this.counter + media.items.length;

      // push to redis
      media.items.forEach(function(item) {
        client.lpush(config.redis_hashkey, JSON.stringify(flatten(item)), redis.print);
      });
      this.crawl( media.items[media.items.length - 1].id );      
    } else {
      client.quit();
    }
  }.bind(this));
}

// Scraper.prototype.diff = function() {
//   client.
// }

exports = module.exports = function() {
  new Scraper('9gag').crawl();
}