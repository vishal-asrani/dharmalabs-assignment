"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var config = {
  "username": "db12980935-node",
  "password": "Test4DharmaLabs",
  "pool": 200,
  "database": "db12980935-node",
  // "host": "localhost",
  "host": "WP12980935.SERVER-HE.DE",
  "dialect": "mysql",
  "dialectOptions": {
    "multipleStatements": true
  },
  //"logging": true,
  "define": {
    "timestamps": true,
    "underscored": true
  },
  "port": 3306
};
console.log("Database Connection String=>" + JSON.stringify(config));
var sequelize = new Sequelize(config.database, config.username, config.password, config);
// console.log(sequelize);
var db = {};
fs
        .readdirSync(__dirname)
        .filter(function (file) {
          return (file.indexOf(".") !== 0) && (file !== "index.js");
        })
        .forEach(function (file) {
          console.log("file);", file);
          var model = sequelize["import"](path.join(__dirname, file));
          db[model.name] = model;
        });
Object.keys(db).forEach(function (modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
