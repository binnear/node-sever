const app = require('../src/app');
const supertest = require('supertest');
const should = require('should');
const request = supertest(app);

describe('test index', function () {
  it('should equal 55 when n === 10', function (done) {
    request.get('/fib')
      .query({ n: 10 })
      .end(function (err, res) {
        res.text.should.equal('55')
        done(err)
      })
  });
  const testFib = function (n, statusCode, expect, done) {
    request.get('/fib')
      .query({ n })
      .expect(statusCode)
      .end(function (err, res) {
        res.text.should.equal(expect)
        done(err)
      })
  };
  it('should equal 0 when n === 0', function (done) {
    testFib(0, 200, '0', done)
  });
  it('should equal 1 when n === 1', function (done) {
    testFib(1, 200, '1', done)
  });
  it('should throw when n > 10', function (done) {
    testFib(11, 500, 'n should <= 10', done)
  });
  it('should throw when n < 0', function (done) {
    testFib(-1, 500, 'n should >= 0', done)
  });
  it('should throw when n isnt Number', function (done) {
    testFib('good', 500, 'n should be a Number', done)
  });
  it('should status 500 when error', function (done) {
    request.get('/fib')
      .query({ n: 100 })
      .expect(500)
      .end(function (err, res) {
        done(err)
      })
  })

});