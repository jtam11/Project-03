var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/commune");

module.exports = {
  Talk: require('./talk'),
  User: require('./user')
};
