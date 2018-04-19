var express = require("express");
var router = express.Router(); //allows to brake routes into modular parts;
var db = require("../models"); //autom. requires models/index.js


router.get("/", function(req, res){
    db.Todo.find()
        .then(function(todos){
            res.json(todos);
        })
        .catch(function(err){
            res.send(err);
        })
});

router.post("/", function(req, res){
        db.Todo.create(req.body)
            .then(function(newTodo) {
                res.status(201).json(newTodo); // 201 - created.
            })
            .catch(function(err){
                res.send(err);
            })
    });

module.exports = router;