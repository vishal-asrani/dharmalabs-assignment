module.exports = function(sequelize, DataTypes) {
  var vishal = sequelize.define("vishal", {
    username: {
      type: DataTypes.STRING,
      validate: {}
    },
    password: {
      type: DataTypes.STRING,
      validate: {}
    },
    email: {
      type: DataTypes.STRING,
      validate: {}
    },
    profile_pic: {
      type: DataTypes.STRING,
      validate: {}
    }
  }, {
    classMethods: {
      associate: function(models) {},
      get_func: function() {
        console.log('asrani')
      },
    },   
    tableName : "vishal", 
    freezeTableName: true,
    underscored: true
  });

  vishal.get_records = function(callback){

    console.log("hiiiiiiii");
    console.log("In getRecords");
    var sql = "select * from vishal";
    sequelize.query(sql, {
      replacements: {
      },
      raw: true
    }).spread(function(data, metadata) {
      callback(null, data);
    }).catch(function(err) {
      callback(err, null);
    });
  }

  return vishal;
};