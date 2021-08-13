module.exports = app => {
    const users = require("../controllers/test.controller.js");
  
    var router = require("express").Router();
  

  
    // Retrieve all users
    router.get("/", users.findA);
  
 
  
    app.use('/api/users', router);
  };