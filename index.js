const http = require("http")
const port = 1005

const porthandler = (req,res)=>{
    res.write("<h1>Server Started</h1>")
    res.end()
}

const server = http.createServer(porthandler)

server.listen(port,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Server started on port " + port)
    }
})