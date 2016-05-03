var request = require('supertest')
var app = require('../server')

describe('Request to the root path', function() {
  it('Returns a 200 status code', function(done) {
    this.timeout(5000)

    request(app)
      .get('/')
      .expect(200, done)
  })

  it('Returns a HTML format', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /html/, done)
  })
})
