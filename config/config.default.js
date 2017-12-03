'use strict';

module.exports = () => {
  const config = exports = {};
  // TODO 为什么middleware配置在这里, api/v1/sign_in会404????
  // config.middleware = [
  //   'auth',
  // ];

  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/nico',
    options: {},
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.jwt = {
    secret: 'nicokids!',
    enable: false,
  };
  return config;
};

exports.middleware = [
  'auth', 'compress'
];

exports.bizerror = {
  breakDefault: true, // disable default error handler
  sendClientAllParams: true, // return error bizParams to user
  interceptAllError: true, // handle all exception, not only bizError exception
};

exports.onerror = {
  json(err, ctx) {
    ctx.body = { msg: 'error' };
    ctx.status = 200;
  }
}