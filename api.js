/** 
 * version 1: using instagram-node-lib
 */

// var Instagram = require('instagram-node-lib');
// var config = require('./config');

// Instagram.set('client_id', config.instagram_credentials.client_id);
// Instagram.set('client_secret', config.instagram_credentials.client_secret);
// Instagram.set('redirect_uri', config.instagram_credentials.redirect_uri);
// Instagram.set('access_token', config.instagram_credentials.access_token);

// Instagram.users.recent({ name: '9gag'});

/** 
 * version 2: using request
 */

var request = require('request');
var config = require('./config');

// var url = 'https://api.instagram.com/v1/tags/9gag/media/recent?client_id=' + config.instagram_credentials.client_id + '&access_token=' + config.instagram_credentials.access_token;
var url = 'https://api.instagram.com/v1/users/search?q=9gag&access_token=' + config.instagram_credentials.access_token;

request(url, function(req, res, body) {
  console.log(res.statusCode, body);
});