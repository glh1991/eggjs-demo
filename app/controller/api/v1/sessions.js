'use strict';
const Controller = require('../base');

class SessionsController extends Controller {

  // 注册
  async signUp(ctx) {
    const phone = ctx.request.body.phone;
    let user = await ctx.model.User.findOne({ phone });
    if (user) {
      return this.fail(500, '用户已经存在');
    }
    user = ctx.model.User({ phone });
    await user.save();
    const token = _generateToken(ctx, user);
    const responseBody = { user, 'token:': token };
    this.success(responseBody);
  }

  // 登录
  async signIn(ctx) {
    const phone = ctx.request.body.phone;
    const user = await ctx.model.User.findOne({ phone });
    if (!user) {
      return this.fail(404, '用户不存在');
    }
    const token = _generateToken(ctx, user);
    const responseBody = { user, 'token:': token };
    this.success(responseBody);
  }
}

function _generateToken(ctx, user) {
  return ctx.app.jwt.sign({ iss: user._id, exp: Date.now() + 60 * 60 * 1000 }, ctx.app.config.jwt.secret);
}

module.exports = SessionsController;

