// 引入http模块
var http = require("http"); 

// 创建server，指定处理客户端请求的函数
http.createServer(
    function(request, response) { 
        console.log("method - " + request.method);
        console.log("version - " + request.httpVersion);
        console.log("url - " + request.url);
        response.writeHead(200, {"Content-Type": "text/plain"}); 
        response.write("Hello World!"); 
        response.end(); 
    }
).listen(8000); 

console.log("Hello World start listen on port 8000");
