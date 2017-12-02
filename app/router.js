'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const auth = app.middlewares.auth();

  // restful route
  // router.resources('users', '/api/v1/users',  app.controller.api.v1.user)

  router.post('/api/v1/sign_up', app.controller.api.v1.sessions.signUp)
  router.post('/api/v1/sign_in',  app.controller.api.v1.sessions.signIn)
  router.get('/api/v1/users/:id', auth, app.controller.api.v1.users.show);
  router.put('/api/v1/users/:id', auth, app.controller.api.v1.users.update);
};
