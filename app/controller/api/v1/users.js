'use strict';
const Controller = require('../base');

class UsersController extends Controller {

  async show(ctx) {
    const user = await ctx.model.User.findOne({_id: ctx.params.id});
    this.success(user);
  }

  async update(ctx) {
    await ctx.model.User.where({"phone": ctx.request.body.phone}).update({$set: {name: ctx.request.body.name}}, function (err, count) {
      console.log(`err: ${err}. count: ${count}`)
    });

    this.success()
  }
}

module.exports = UsersController;
