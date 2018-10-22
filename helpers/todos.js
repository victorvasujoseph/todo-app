var db = require("../models");

exports.getTodos = function (req,res){
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
}

exports.createTodo = function(req,res){
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
}

exports.updateTodo = function(req,res){
    console.log(req.params.todoID);
    console.log(req.body.name);

    db.Todo.findOneAndUpdate({_id:req.params.todoID},{'$set':{"name":req.body.name}}, {new:true})
    .then(function(todo){   
        res.json(todo);
    })
    .catch(function(err){
        console.log(err);
        res.json({
            message:"Error Updating Todo",
            error:err
        })
    })
}

exports.deleteTodo = function (req,res){
    console.log(req.params.todoID);
    db.Todo.deleteOne({_id:req.params.todoID}).then(function(){
        res.json({messages:"Delete Success"});
    })
}

module.exports = exports;