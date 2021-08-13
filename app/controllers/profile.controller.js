const db = require("../models");
const Profile = db.profile;
const User = db.user;

exports.createProfile = (req, res) => {

    if (!req.body.firstname) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
      if (!req.body.lastname) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
      if (!req.body.address) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
      if (!req.body.birthday) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
      const utserId = req.params.userId;
    
      // Create a Product
      const profile = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        birthday: req.body.birthday,
        image: req.body.image,
        userId: utserId
    
        
      };
    
      // Save Product in the database
      Profile.create(profile)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Somezzz error occurred while creating the Product."
          });
        });
};

// Find a single Product with an id
exports.findOne = (req, res) => {

    const id = req.params.id;

  Profile.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving profile with id=" + id
      });
    });
  
};
// Update a Product by the id in the request
exports.updateProfile = (req, res) => {
  
    const id = req.params.id;

    Profile.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Profile was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Profile with id=${id}. Maybe Profile was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Profile with id=" + id
      });
    });
};