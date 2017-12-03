'use strict';
const { app } = require('egg-mock/bootstrap');


describe('test/controller/api/sessions.test.js', () => {

  describe('test signUp. POST /api/v1/sign_up', () => {
    it('注册成功 返回用户信息', () => {
      app.httpRequest().post('/api/v1/sign_up')
        .type('form')
        .send({
          phone: '18767135915',
        })
        .expect(200)
        .expect(res => {
          console.log(res.text);
        });


    });

    // it('注册失败 返回手机号已经存在信息', () => {
    //   app.httpRequest().post('/api/v1/sign_up')
    //     .type('form')
    //     .send({
    //       phone: '18767135915',
    //     })
    //     .expect(200);
    //
    //   const ctx = app.mockContext();
    //   assert(ctx.response.body.status === 500);
    // });
  });


});
