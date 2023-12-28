import express from "express";

let app = express();


app.get("/",(req, res) => {
    res.render("index.ejs");
});

console.log("This is a test: Hello World!");