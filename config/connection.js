const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  "postgres://yyozqphz:MrCBSsfomOStgr8jIvE7QPbPx4O_-gcu@babar.db.elephantsql.com/yyozqphz", {
  define: {
    timetamps: true,
    underscored: true,
  },
});

try {
  sequelize.authenticate();
  console.log('Conectado com o ElephantSQL!');
} catch (error) {
  console.error('Anteção, a conexão falhou!:', error);
}

module.exports = { Sequelize, sequelize };