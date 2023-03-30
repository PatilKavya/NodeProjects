// console.log('hello World!')

const http=require('http');

http.createServer((req,res)=>{
    console.log(req.headers,req.method,req.url);
    res.setHeader('Content-Type','text/html');
    if(req.url==='/home'){
        res.write('<html>')
        res.write('<body> <h1>Hello home! </h1></body>');
        res.write('</html>')
    }
    else if(req.url==='/about'){
        res.write('<html>')
        res.write('<body> <h1>About </h1></body>');
        res.write('</html>')
    }
    if(req.url==='/node'){
        res.write('<html>')
        res.write('<body> <h1>welcome to node.js </h1></body>');
        res.write('</html>')
    }
    res.end()
   // process.exit();
}).listen(3000)