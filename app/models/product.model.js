module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
      brand: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      }
    });
  
    return Product;
  };