var chai = require('chai')
var request = require('supertest')
var sinon = require('sinon')
var app = require('../../app')
var helpers = require('../../_helpers');

describe('# request', () => {

  context('# test', () => {
    before(async() => {
      // console.log(' \t===== before ===== ')
      this.ensureAuthenticated = sinon.stub(
        helpers, 'ensureAuthenticated'
      ).returns(true);
    })

    describe('logined', () => {
      it('200', (done) => {
        request(app)
          .get('/users')
          .set('Accept', 'application/json')
          .expect(200)
          .end(function(err, res) {
            if (err) return done(err);
            return done();
          });
      })
    })

    after(async () => {
      // console.log(' \t===== after =====')
      this.ensureAuthenticated.restore();
    })
  })

  context('# test', () => {
    before(async() => {
      // console.log(' \t===== before ===== ')
    })

    describe('not logined', () => {
      it('304', (done) => {
        request(app)
          .get('/users')
          .set('Accept', 'application/json')
          .expect(302)
          .end(function(err, res) {
            if (err) return done(err);
            return done();
          });
      })
    })

    after(async () => {
      // console.log(' \t===== after =====')
    })
  })
});