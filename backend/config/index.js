const NODE_ENV =  process.env.NODE_ENV;

const config = {
  STAGING: {
    MONGO_URI: process.env.MONGO_CONNECTION_STRING,
  },
};

console.log('NODE_ENV:', NODE_ENV);
module.exports = config[NODE_ENV];
