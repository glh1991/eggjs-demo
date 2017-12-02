'use strict';

module.exports = appInfo => {
  const config = exports = {};
  // TODO 为什么middleware配置在这里, api/v1/sign_in会404????
  // config.middleware = [
  //   'auth',
  // ];

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
  'auth', 'compress'
];
