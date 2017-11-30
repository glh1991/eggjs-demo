'use strict';
const Controller = require('../base')

class UserController extends Controller {
  async index(ctx) {
    let users = await ctx.model.User.find({});
    this.success(users);
  }
}

module.exports = UserController;
