const app = require ('../src/app')
const request = require('supertest')

describe('GET /v1', () => {

    test('should respond with a 200 status code', async () => {
        const response = await request(app).get('/v1').send()
        expect(response.statusCode).toBe(200)
    })
})

describe('GET /v1/location', () => {

    test('should respond with a 200 status code', async () => {
        const response = await request(app).get('/v1/location').send()
        expect(response.statusCode).toBe(200)
    })

    test('should respond with an array', async () => {
        const response = await request(app).get('/v1/location').send()
        expect(response.body).toBeInstanceOf(Object)
    })
})

describe('GET /v1/current', () => {

    test('should respond with a 200 status code', async () => {
        const response = await request(app).get('/v1/current').send()
        expect(response.statusCode).toBe(200)
    })

    test('should respond with an array', async () => {
        const response = await request(app).get('/v1/current').send()
        expect(response.body).toBeInstanceOf(Object)
    })
})

describe('GET /v1/forecast', () => {

    test('should respond with a 200 status code', async () => {
        const response = await request(app).get('/v1/forecast').send()
        expect(response.statusCode).toBe(200)
    })

    test('should respond with an array', async () => {
        const response = await request(app).get('/v1/forecast').send()
        expect(response.body).toBeInstanceOf(Object)
    })
})
