var express = require('express');
var db = require("../models")


var router = express.Router();

router.get('/', function(req,res){
    console.log('Requested : /api/todos/');
    db.Todo.find()
    .then(function(data){
        res.json(data);
    })
    .catch(function(err){
        console.log(err);
        res.json({
            message:"Error Loading Todo's",
            error:err
        })
    })
})

router.post('/', function(req,res){
    console.log('/ POST API requested');
    console.log(req.body);
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo);
    })
    .catch(function(err){
        console.log(err);
        res.json({
            message:"Error Saving Todo",
            error:err
        })
    })
    
})


module.exports = router;