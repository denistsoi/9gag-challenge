var config = {
  port: 5000,
  redis_hashkey: '9gag',
  instagram_credentials: {
    client_id: process.env.INSTAGRAM_CLIENT_ID,
    client_secret: process.env.INSTAGRAM_SECRET,
    redirect_uri: process.env.INSTAGRAM_REDIRECT_URI,
    access_token: process.env.INSTAGRAM_ACCESS_TOKEN
  }
}

exports = module.exports = config;