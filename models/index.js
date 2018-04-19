var mongoose = require("mongoose");
mongoose.set("debug", true); //optional
mongoose.connect("mongodb://localhost/todo-api"); //connect to db;

mongoose.Promise = Promise;  //allows to use promise syntax;

module.exports.Todo = require("./todo"); //by def module/index is opened. This line links index to todo;




