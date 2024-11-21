
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res)=>{
    // console.log(req.rawHeaders);
    res.send("<h1>Hello, Angela!</h1>");
});

app.get("/Contact", (req, res)=>{
    res.send("<p>PHone:748368364</p><p>Adress:34n/4 snathi nagar tirunelveli</p> ");
});

app.get("/About", (req,res)=>{
    res.send("<h2>About npm</h2><p>Assuming you’ve already installed Node.js, create a directory to hold your application, and make that your working directory.</p>");
})

app.listen(port , ()=>{
    console.log(`Server started on ${port}...`);
})