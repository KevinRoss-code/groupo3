const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model")(sequelize, Sequelize);
db.articles = require ('./article.model')(sequelize, Sequelize);
db.commentaires = require('./commentaire.model')(sequelize, Sequelize);

//user to article
db.users.hasMany(db.articles, { as: "articles"});
db.articles.belongsTo(db.users, {
  foreignKey: "userId",
  as: "user",
})

//article to commentaire faire one to many + faire de même pour entre user et commentaire 
db.articles.hasMany(db.commentaires, {as: "commentaires"});
db.commentaires.belongsTo(db.articles, {
  foreignKey: "articleId",
  as: "article",
});

db.users.hasMany(db.commentaires, {as: "commentaires"});
db.commentaires.belongsTo(db.users, {
  foreignKey: "userId",
  as: 'user',
})

module.exports = db;
