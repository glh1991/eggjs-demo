'use strict';


const Service = require('egg').Service;

class UserService extends Service {
  async find(uid) {
    try {
      return await this.ctx.model.User.findOne({_id: uid});
    } catch (error) {
      this.ctx.throwBizError('USER_NOT_FOUND', error, {bizError: true})
    }
  }

  async updateNameByPhone(phone, name) {
    await this.ctx.model.User.where({phone}).update({$set: {name}}, function (err, count) {
      console.log(`err: ${err}. count: ${count}`);
    });
  }
}

module.exports = UserService;
