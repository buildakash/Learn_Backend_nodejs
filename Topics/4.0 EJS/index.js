import express from "express";


const app = express();
const port = 3000;


app.get("/", (req,res)=>{
    const today = new Date("jan 6, 2024");
    const day = today.getDay();

    let type = "a weekday";
    let adv = "So,its time to work hard";

    if(day === 0 || day === 6){
        type = " the weekday";
        adv = "So, its time to have some fun";
    }

    res.render("index.ejs" , {
        dayType: type,
        advice: adv,
    })
})

app.listen(port , ()=>{
    console.log(`Server is running on Port ${port}.`);
});

