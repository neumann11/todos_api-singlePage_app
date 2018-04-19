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
})

module.exports = router;