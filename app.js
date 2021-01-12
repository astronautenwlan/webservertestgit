const http = require('http')  // this loads the http library into our http variable
const fs = require('fs')    // Library that does the file handling
const port = 3000

const server = http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('index.html', function(error, data){
        if (error) {
            res.writeHead(404)
            res.write('Error: File Not Found!')
        }
        else {
            res.write(data)
        }
        res.end()
    })

})

server.listen(port, function(error) {
    if (error) {
        console.log('something went wrong: ', error)
    }
    else {
        console.log('Server is listening on port: ' + port)
    }
})