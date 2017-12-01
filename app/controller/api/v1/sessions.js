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
    await user.save(function (err) {
      console.log(err);
    })
    const token = app.jwt.sign({ iss: user._id }, app.config.jwt.secret);
    this.success(user);
  }
}
module.exports = SessionsController;