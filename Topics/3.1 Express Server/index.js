
import http from "http";
const port = 3000;



const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        'content-Type':'text/html'
    })
    res.end("<h2>Hello Students</h2>");
});
server.listen(port,()=>{
    console.log(`Server running on ${port}...`);
})