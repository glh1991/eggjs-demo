'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1511962744685_3209';

  // add your config here
  config.middleware = [];

  return config;
};
