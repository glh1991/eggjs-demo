'use strict';

module.exports = () => {
  return async function auth(ctx, next) {
    const authorization = ctx.request.headers.authorization;
    if (!authorization) {
      return;
    }
    const token = authorization.slice(7);
    const vf = ctx.app.jwt.decode(token, ctx.app.config.jwt.secret);
    if (!vf) {
      ctx.body = {
        status: 403,
        success: false,
        errorMsg: 'token错误',
      };
      return;
    }

    if (vf.exp < Date.now()) {
      ctx.body = {
        status: 403,
        success: false,
        errorMsg: 'token过期',
      };
      return;
    }
    ctx.current_user = await ctx.model.User.findOne({ _id: vf.iss });
    if (!ctx.current_user) {
      throw throwBizError('USER_NOT_FOUND')
    }

    await next();
  };
};
