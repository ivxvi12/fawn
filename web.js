var http= require('http'); 

http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/plain"});
	res.write('helloewordl');
	res.end();
	}).listen(8001);
 
console.log('server has started.');