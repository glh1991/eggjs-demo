module.exports = app => {
  class BaseController extends app.Controller {
    // 成功
    success(data) {
      this.ctx.body = {
        status: 200,
        success: true,
        data
      };
    }

    
  }
}