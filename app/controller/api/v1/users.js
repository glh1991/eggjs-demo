'use strict';
const Controller = require('../base');

class UsersController extends Controller {

  async show(ctx) {
    const user = await ctx.service.user.find(ctx.params.id);
    ctx.body = user
  }

  async update(ctx) {
    await ctx.service.user.updateNameByPhone(ctx.request.body.phone, ctx.request.body.name);
  }
}

module.exports = UsersController;
