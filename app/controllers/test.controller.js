const db = require("../models");
const Profile = db.profile;
const User = db.user;

exports.findA = (req, res) => {

    const exUser = req.query.username;
    var condition = exUser ? { username: { [Op.iLike]: `%${exUser}%` } } : null;
  
    User.findAll({ 
        where: condition,
        include: Profile 
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving products."
        });
      });
  };