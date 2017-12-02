const Service = require('egg').Service;

class UserService extends Service {
  async find(uid) {
    return await this.ctx.model.User.findOne({_id: uid});
  }

  async updateNameByPhone(phone, name) {
    await this.ctx.model.User.where({"phone": phone}).update({$set: {name: name}}, function (err, count) {
      console.log(`err: ${err}. count: ${count}`)
    });
  }
}
module.exports = UserService;
