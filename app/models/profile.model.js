module.exports = (sequelize, Sequelize) => {
    const Profile = sequelize.define("profile", {
    
      
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      address: {
          type: Sequelize.STRING
      },
      birthday: {
          type: Sequelize.STRING
      },
      image: {
          type: Sequelize.STRING
      },
    
    });


  
    return Profile;
  };