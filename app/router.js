'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const jwt = app.middleware.jwt(app.config.jwt);

  router.get('/', controller.home.index);
  // restful route
  // router.resources('users', '/api/v1/users',  app.controller.api.v1.user)
  router.get('/api/v1/users/:id', app.controller.api.v1.users.show);
  router.post('/api/v1/sign_up', app.controller.api.v1.sessions.signUp)
};
