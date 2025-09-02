const http = require("http");
const fs = require("fs");
const port = 1005;

const handleRequest = (req,res)=>{
    let filename = "";
    switch (req.url) {
        case "/":
            filename = "index.html";
            break;

        default:
            filename = "error.html";
            break;
    }
    fs.readFile(filename,(err,result)=>{
        if(!err){
            res.end(result);
        }
    })
}

const server = http.createServer(handleRequest);

server.listen(port,(err)=>{
    if(err){
        console.log("server not found")
    }else{
        console.log("server started on port " + port)
    }
})