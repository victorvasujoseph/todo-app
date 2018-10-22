var express = require('express');
var db = require('../models');
var todos = require('../helpers/todos');

var router = express.Router();

router.route('/')
    .get(todos.getTodos)
    .post(todos.createTodo);


router.route('/:todoID')
    .delete(todos.deleteTodo)
    .put(todos.updateTodo)


module.exports = router;