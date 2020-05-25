process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')
console.log("NODE ENV IS  ======  ", process.env.NODE_ENV);
module.exports = environment.toWebpackConfig()
