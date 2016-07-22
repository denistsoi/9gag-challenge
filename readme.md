# 9Gag Challenge 

### Dependencies

    node.js
    redis

### TODO

[x] scrape  
[x] flushall   
[x] save to redis  
[x] render fetch  
[ ] add tests  
[ ] render on page  
[ ] fetch (infinite scroll)  
[ ] diff patch  

### Development

    git clone http://www.github.com:denistsoi/9gag-challenge.git
    cd 9gag-challenge
    npm install
    npm start

### running locally *Important*

You'll need to have installed `redis` and `node` on your local machine. 

if you currently have `redis` installed locally; as a *precaution*,   
please change the `redis_hashkey` from `9gag` to another hashkey if you have data already stored in that location.  

if you want to show the prints from `redis` and `node` in separate windows;   
please use the commands `redis-server` and `node index.js` separately rather than `npm start`  

Also, for the local config variables in `api.js`,   
please save the instagram credientials in your local `bash/zshrc` as exports

[as of 22 Jul 2016]
- This project has very minimal frontend due to illness; however, I'll add more as I have more time.


### Project Directory

    /documentation  // .md files to document project development and thoughts
    /node_modules   // project dependency files from where npm install 
    /public         // index.html file (remove if using express templates/.ejs)
    /scripts        // where frontend js files should be placed
    /styles         // where .scss files should be placed 
    /tests          // for tests

    api.js          // standalone api module
    config.js       // config file 
    crawler.js      // crawler
    index.js        // project entry point
    package.json    // npm package.json
    readme.md       
    redis.js        // sample file to that needs to be migrated into crawler/api .js files

### Author
Denis Tsoi <denistsoi@gmail.com>

### License
MIT
