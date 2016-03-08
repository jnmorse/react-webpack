var request = require('supertest');
var app = require('../server');

describe('Request to the root path', function() {

  it('Returns a 200 status code', function(done) {

    request(app)
      .get('/')
      .expect(200, done);

  });

  it('Returns a HTML format', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /html/, done);
  });

  it('Returns an index file with the word react', function(done) {

    request(app)
      .get('/')
      .expect(/react/i, done);

  });

});
