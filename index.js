const express =require("express");
const cron = require('node-cron');
const cors= require('cors')
require("dotenv").config()

const app = express();
app.use(express.json({limit:'25mb'}))
app.use(express.urlencoded({limit:'25mb'}))
app.use(cors())

// app.all('*', (req, res) => {
//     res.status(404)
//     if (req.accepts('json')) 
//     {
//         res.json({ message: '404 Not Found' })
//     } 
//     else
//     {
//         res.type('txt').send('404 Not Found')
//     }
// })

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.listen("3000", () => {
    console.log("app running");
});

