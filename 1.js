var http=require("http");
http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/plain'});
    response.end('Hello world\n');
}).listen(5000);
console.log('server running at http;//localhost:5000/');