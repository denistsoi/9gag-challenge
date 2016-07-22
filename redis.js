var redis = require('redis');
var client = redis.createClient();
// var sample = require('./sample.json');

var flatten = require('flat');
var crawl = require('./crawler');

// client.on('error', function(err) {
//   console.log('Error' + err);
// });


// /*
//  * check if db exists
//  * diff db if exists
//  */

// client.exists('9gag', function(err, response) {
//   if (err) throw new Error('Error: ' + err);
//   console.log(response);
//   client.quit();
//   // if (!response) { crawl(); }
// });

// /**
//  * insert one sample record to redis
//  */
// // client.lpush('9gag', JSON.stringify(flatten(sample.items[1])), redis.print);

// /**
//  * check if index exists
//  */

// // client.lindex('9gag', '0', function(err, value) {
// //   console.log(value);
// //   if (!value) {
// //     crawl();
// //   }
// // });

// /**
//  * crawler diff (update and lpush to redis)
//  */

// // var media = JSON.parse(body);
// // media.items.forEach(function(item, index) {
// //   if (item.createdAt > db.recentItem.createdAt) {
// //     var 
// //   }
// // })

// /**
//  * insert all items to redis
//  */

// // sample.items.forEach(function(item) {
// //   client.lpush('9gag', JSON.stringify(flatten(item)), redis.print);
// // });


// // client.lrange("9gag", '0', '1', function(err, values) {
// //   // var val = [];
// //   // val.push(flatten.unflatten(values));
// //   // console.log(val);
// //   console.log(values.length);
// //   // console.log(JSON.parse(flatten.unflatten(values)));
// //   // client.quit();
// // });