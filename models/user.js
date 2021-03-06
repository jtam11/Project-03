var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcryptjs');

var UserSchema = new Schema({
  created: { type: Date, default: Date.now },
  updated: { type: Date },
  full_name: String,
  username: String,
  email: { type: String, unique: true, lowercase: true },
  password: { type: String, select: false },
  picture: String,
  location: String
});

UserSchema.pre('save', function (next) {
  // bump date updated
  this.updated = Date.now();

  // encrypt password
  var user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(user.password, salt, function (err, hash) {
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (password, done) {
  bcrypt.compare(password, this.password, function (err, isMatch) {
    done(err, isMatch);
  });
};

var User = mongoose.model('User', UserSchema);
module.exports = User;
