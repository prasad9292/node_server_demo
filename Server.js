http=require("http");

fs=require('fs')
url=require("url");
query=require("querystring");




server_request= function (req,resp){
	d=url.parse(req.url);
	
	
	console.log(d);
	switch(d.pathname){
	case "/":
	resp.writeHead(200,{'Content-Type':'text/html'})
	fs.readFile("add_form.html",function(error,data){
         if(error){
		      console.log("error ocureed");
		 }
		 else{
			resp.end(data);
		 }
   }); 
	break;
	case "/calculate":
   resp.writeHead(200,{'Content-Type':'text/html'})
   data=query.parse(d.query);
   resp.write("data is :"+data.num1+"--->"+data.num2);
   c=data.num1+data.num2;
   resp.end("Addition :"+c);
   
   
   break;
	
	default:
		resp.writeHead(200,{'Content-Type':'text/html'})
		resp.end("<h1>page not found</h1>");
		break;
	
	}
	
}

server=http.createServer(server_request);
server.listen(1234);
console.log("server at 1234");