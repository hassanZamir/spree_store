process.env.NODE_ENV = process.env.NODE_ENV || 'production'

console.log("NODE ENV IS  ======  ", process.env.NODE_ENV);
const environment = require('./environment')

module.exports = environment.toWebpackConfig()
