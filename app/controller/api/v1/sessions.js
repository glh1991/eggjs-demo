'use strict';
const Controller = require('../base');

class SessionsController extends Controller {

  // 注册
  async signUp(ctx) {
    let phone = ctx.request.body.phone
    let user = await ctx.model.User.findOne({"phone": phone});
    if (user) {
      return this.fail(500, "用户已经存在")
    }
    user = ctx.model.User({"phone": phone})
    await user.save()
    const token = _generateToken(ctx, user)
    let responseBody = {"user": user, "token:": token}
    this.success(responseBody);
  }

  // 登录
  async signIn(ctx) {
    let phone = ctx.request.body.phone
    let user = await ctx.model.User.findOne({"phone": phone});
    if (!user) {
      return this.fail(404, "用户不存在")
    }
    const token = _generateToken(ctx, user)
    let responseBody = {"user": user, "token:": token}
    this.success(responseBody);
  }
}

function _generateToken(ctx, user) {
  return ctx.app.jwt.sign({iss: user._id, exp: Date.now() + 60 * 60 * 1000}, ctx.app.config.jwt.secret)
}

module.exports = SessionsController;


