const server = require('./server')

const port = 3000

server.listen(port, function(){
    console.log("Lisening on port 3000")
})