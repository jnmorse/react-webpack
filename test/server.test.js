const request = require('supertest')
const app = require('../server')

describe('Request to the root path', () => {
  it('Returns a 200 status code', done => {
    request(app)
      .get('/')
      .expect(200, done)
  })

  it('Returns a HTML format', done => {
    request(app)
      .get('/')
      .expect('Content-Type', /html/u, done)
  })
})
