'use strict';
const Controller = require('../base');

class UsersController extends Controller {
  
  async show(ctx) {
    const user = await ctx.model.User.findOne({ _id: ctx.params.id });
    this.success(user);
  }
}

module.exports = UsersController;
