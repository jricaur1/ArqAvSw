module.exports = app => {
    const sowns = require("../controllers/sown.controllers.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", sowns.create);
  
    // Retrieve all Tutorials
    router.get("/", sowns.findAll);

    app.use('/api/sowns', router);
};