'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const UserSchema = new mongoose.Schema({
    name: { type: String },
    phone: { type: String },
  }, {versionKey: '_version'});

  return mongoose.model('User', UserSchema);
};
