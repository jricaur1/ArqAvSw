module.exports = (sequelize, Sequelize) => {
    const Sown = sequelize.define("sown", {
      sownname: {
        type: Sequelize.STRING
      },
      reference: {
        type: Sequelize.STRING
      },
      sowntype: {
        type: Sequelize.STRING
      },
      plot: {
        type: Sequelize.STRING
      },
      optimaltemp: {
        type: Sequelize.STRING
      }
    });
  
    return Sown;
  };