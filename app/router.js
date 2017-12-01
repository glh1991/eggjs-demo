'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/', '/api/v1/users', app.controller.api.v1.user.index);
  router.get('/', '/api/v1/users/:id', app.controller.api.v1.user.show);
};
