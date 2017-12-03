'use strict';

// had enabled by egg
// exports.static = true;

exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

exports.jwt = {
  enable: true,
  package: 'egg-jwt',
};

exports.bizerror = {
  enable: true,
  package: 'egg-bizerror',
};