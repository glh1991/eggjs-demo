'use strict';

// 应用启动入口, 可以做一些初始化工作
module.exports = app => {
  app.logger.info('server start');

  app.on('responseBizError', (ctx, error) => {
    console.log(error)
  });

  app.BizErrorHandler = class extends app.BizErrorHandler {
    json(ctx, error, config) {
      ctx.body = {
        code: config.code,
        msg: config.message,
      };
    }
  }
};
