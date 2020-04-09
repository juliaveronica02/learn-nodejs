const http = require('http');
const hostname = '127.0.0.1'; //biasa disebut localhost.
const port = 3000; // port website biasanya 80 atau 8000.
// untuk menghindari bentrok dengan yang sudah memakai port 80;
//maka kita pakai port 3000.

const server = http.createServer((request, response)=>{
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hi can nodejs');
});
server.listen(port, hostname, ()=>{
    console.log(`server is running at ${hostname}:${port}`);
})