'use strict';
const Controller = require('egg').Controller;

class UserController extends Controller {
  async index(ctx) {
    ctx.body = await ctx.model.User.find({});
  }
}

module.exports = UserController;
