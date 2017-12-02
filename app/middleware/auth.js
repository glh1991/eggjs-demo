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
    // vf: { iss: '5a22280e16ce9b5d695fe283',
    //   exp: 1512187978051,
    //   iat: 1512187918 }
    if (vf.exp < Date.now()) {
      return ctx.body = {
        status: 403,
        success: false,
        errorMsg: "token过期"
      };
    }
    await next();
  }
};