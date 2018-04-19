var express = require("express");
var router = express.Router(); //allows to brake routes into modular parts;
var db = require("../models"); //autom. requires models/index.js

//INDEX ROUTES (SHOW ALL TODOS)
router.get("/", function(req, res){
    db.Todo.find()
        .then(function(todos){
            res.json(todos);
        })
        .catch(function(err){
            res.send(err);
        })
});

//CREATE ROUTE
router.post("/", function(req, res){
        db.Todo.create(req.body)
            .then(function(newTodo) {
                res.status(201).json(newTodo); // 201 - created.
            })
            .catch(function(err){
                res.send(err);
            })
    });

//SHOW ROUTE
router.get("/:todoId", function(req, res){
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo){
        res.json(foundTodo);
    })
    .catch(function(err){
        res.send(err);
    })
});

//UPDATE ROUTE
router.put("/:todoId", function(req, res){
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true}) //{new: true} res.json with new data and not old.
    .then(function(todo){
        res.json(todo);
    })
    .catch(function(err){
        res.send(err);
    })
});

module.exports = router;