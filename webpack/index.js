/* eslint-disable import/group-exports */
/* eslint-disable global-require */
const { NODE_ENV } = process.env;

if (NODE_ENV === 'production') {
  module.exports = require('./client/prod');
} else {
  module.exports = require('./client/dev');
}
