const app = require('../app/index.js');
const request = require('supertest');



describe('GET /',() => {
    it('return 200 ok', (done) => {
        request(app)
        .get('/')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done)
    });
});

describe('GET /v1/cars',() => {
    it('return 200 cars ok', (done) => {
        request(app)
        .get('/v1/cars')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done)
    });
});

describe('POST /v1/cars',() => {
    it('return 201 created ok', (done) => {
        const payload = {
            name:"HRV Test",
            price:20000,
            size:"large",
            image:"www.google.com"
        };
        request(app)
        .post('/v1/cars')
        .set(payload)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done)
    });
});


