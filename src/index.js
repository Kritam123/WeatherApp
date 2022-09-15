const express = require('express')
const app =  express();
const port = process.env.PORT || 3000;
const path = require('path');
const hbs = require('hbs')
const setPath = path.join(__dirname,"../public")
const setPaths = path.join(__dirname,"../templates/view");
const partialPath = path.join(__dirname,"../templates/partials");
app.set('view engine','hbs');
app.set("views",setPaths);
hbs.registerPartials(partialPath)
app.use(express.static(setPath))
app.get("/",(req,res)=>{
    res.render('index')
})
app.get("/about",(req,res)=>{
    res.render('about')
})
app.get("/weather",(req,res)=>{
    res.render('weather')
})

app.get("*",(req,res)=>{
    res.render('404error')
})
app.listen(8000,()=>{
    console.log("Listening on port 8000");
})