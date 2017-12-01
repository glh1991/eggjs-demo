'use strict';
const Controller = require('../base');

class UserController extends Controller {
  async index(ctx) {
    const users = await ctx.model.User.find({});
    this.success(users);
  }

  async show(ctx) {
    const user = await ctx.model.User.findOne({ _id: ctx.params.id });
    this.success(user);
  }
}

module.exports = UserController;
