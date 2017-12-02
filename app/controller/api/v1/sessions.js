'use strict';
const Controller = require('../base');

class SessionsController extends Controller {

  // 注册
  async signUp(ctx) {
    let phone = ctx.request.body.phone
    let user = await ctx.model.User.findOne({"phone": phone});
    if(user) {
      return this.fail(500, "用户已经存在")
    }
    user = ctx.model.User({"phone": phone, "name": "nil"})
    await user.save()
    const token = ctx.app.jwt.sign({ iss: user._id, exp: Date.now()+1*60*1000 }, ctx.app.config.jwt.secret)
    let responseBody = {"user": user, "token:": token}
    this.success(responseBody);
  }
}
module.exports = SessionsController;


