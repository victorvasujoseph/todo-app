var express = require('express');
var todoRouter = require('./routes/todos');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 4040;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req,res,next){
    console.log('/ GET API requested');
    res.json({message:"send",Date:Date.now()});
});

app.use('/api/todos',todoRouter);

app.listen(PORT,function(){
    console.log("Server Started on PORT :" + PORT);
})