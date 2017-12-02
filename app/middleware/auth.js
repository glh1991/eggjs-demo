'use strict';

module.exports = options => {
  return async function auth(ctx, next) {
    const authorization = ctx.request.headers.authorization
    if (!authorization) {
      return;
    }
    const token = authorization.slice(7);
    const vf = ctx.app.jwt.decode(token, ctx.app.config.jwt.secret);
    if (!vf) {
      return ctx.body = {
        status: 403,
        success: false,
        errorMsg: "token错误"
      };
    }

    if (vf.exp < Date.now()) {
      return ctx.body = {
        status: 403,
        success: false,
        errorMsg: "token过期"
      };
    }
    ctx.current_user = await ctx.model.User.findOne({_id: vf.iss})
    if (!ctx.current_user) {
      return ctx.body = {
        status: 403,
        success: false,
        errorMsg: "用户不存在"
      }
    }

    await next();
  }
};