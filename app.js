const express = require('express');
const bodyparser = require('body-parser');

const feedroutes = require('./routes/feedroutes');

const app = express();


// Used when we work with <form>
// app.use(bodyparser.urlencoded({extended:false}));

// Used to Parse JSON
app.use(bodyparser.json());

app.use('/feed',feedroutes);

// app.use('/home',(req,res,next)=>{
//     res.send('<h1>Hello</h1>')
// });

// app.use('/exit',(req,res,next)=>{
//     res.send('<h1>Bye </h1>')
// });

app.listen(8080);