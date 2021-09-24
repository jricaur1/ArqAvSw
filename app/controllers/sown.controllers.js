const db = require("../models");
const Sown = db.sowns;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.sownname) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    
      const sown = {
        sownname: req.body.sownname,
        reference: req.body.reference,
        sowntype: req.body.sowntype,
        plot: req.body.plot,
        optimaltemp: req.body.optimaltemp
      };
    
      Sown.create(sown)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Sown."
          });
        });
};

exports.findAll = (req, res) => {
    const sownname = req.query.sownname;
    var condition = sownname ? { sownname: { [Op.like]: `%${sownname}%` } } : null;
  
    Sown.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving sowns."
        });
      });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};