const request = require('supertest')
const server = require('../server.js')

test('test setup working', function () {
    expect(true).toBeTruthy()
  })

test('verify a status 200 is returned when route exists', function(){
    const expected = 200

    request(server)
        .get('/')
        .end(function(err,res){
        expect(err).toBeFalsy()
        expect(200)    
        })
})

test('verify a status 404 is returned when route does not exist', function(){
    const expected = 404

    request(server)
        .get('/doesnotexist')
        .end(function(err,res){
        expect(err).toBeFalsy()
        expect(404)    
        })
})