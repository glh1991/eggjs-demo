'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1511962744685_3209';

  return config;
};

module.exports = pluginConfig => {
  const config = exports = {};
  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/nico',
    options: {},
  };

  config.security =  {
    csrf: {
      enable: false,
    },
  };

  config.jwt = {
    secret: 'nicokids!',
    enable: false
  }
  return config;
}

exports.middleware = [
  'auth',
];
