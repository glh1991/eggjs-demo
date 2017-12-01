'use strict';

const Controller = require('egg').Controller;
class BaseController extends Controller {
  success(data) {
    this.ctx.body = {
      status: 200,
      success: true,
      data,
    };
  }

  fail(status, errorMsg) {
    this.ctx.body = {
      status: status,
      success: false,
      errorMsg: errorMsg
    };
  }
}
module.exports = BaseController;
