import express from "express";
import bodyParser from "body-parser"; // ho tro lay tham so frontend gui len
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
require('dotenv').config(); // chay dong process.env

let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

let port = process.env.port || 8080;

app.listen(port, () => {
    //call back
    console.log("Backen Nodejs Running Port : " + port);
})