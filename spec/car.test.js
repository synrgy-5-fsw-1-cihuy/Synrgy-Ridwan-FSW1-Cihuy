const app = require('../app/index.js');
const request = require('supertest');
const {Role, User, Car} = require('../app/models');
let tokens = "";   

beforeAll(async () => {
    const credentialsLogin = {
        email:'johnny@binar.co.id',
        password:'123456'
    };

    const response = await request(app).post('/v1/auth/login').send(credentialsLogin);
    tokens = response.body.accessToken;
});


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
    it('return 201 created ok', async () => {
        const payload = {
            name:"HRV Test",
            price:20000,
            size:"large",
            image:"www.google.com"
        };
        await request(app)
        .post('/v1/cars')
        .set({
            Authorization: `Bearer ${tokens}`
        })
        .send(payload)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(201)
    });
});

describe('PUT /v1/cars/:id',() => {
    it('return 200 updated ok', async () => {
        const payloadCreate = {
            name:"HRV Test Create6",
            price:150000,
            size:"large",
            image:"www.yahoo.com"
        };

        const payloadUpdate = {
            name:"HRV Test Update Banget",
            price:155000,
            size:"medium",
            image:"www.apa.com"
        };

        const car = await Car.create(payloadCreate);
        await request(app)
        .put('/v1/cars/'+ car.id)
        .set({
            Authorization: `Bearer ${tokens}`
        })
        .send(payloadUpdate)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
    });
});

describe('DELETE /v1/cars/:id', () => {
    it('respond 204 Delete OK', async () => {
        const car = await Car.create({
            name:'pajerolagidong', 
            price:'20000',
            size:'large',
            image:'www.hehehe.com'
        });
        request(app)
        .delete('/v1/cars/' + car.id)
        .set({
               Authorization: `Bearer ${tokens}`
            })
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(204);
    });
});



