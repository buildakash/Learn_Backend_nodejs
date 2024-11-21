import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";


const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var brandname = "";

app.use(bodyParser.urlencoded({extended: true}));


function brandnames (req, res , next){
  console.log(req.body);
  brandname = req.body["street"]  + req.body["pet"];
  next();

}
app.use(brandnames);

app.post("/submit", (req, res) => {
  res.send(`<h2>Your brand name is:</h2> <h3>${brandname}</h3>`);

});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
