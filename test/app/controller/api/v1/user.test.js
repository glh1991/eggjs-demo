'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/controller/api/v1/user.test.js', () => {

  describe('test users show', () => {
    it('should GET /api/v1/users/:id', () => {
      return app.httpRequest()
        .get('/api/v1/users/5a1d8408e6c3c190effaadb6')
        .expect({
          success: true,
          data: {
            _id: '5a1d8408e6c3c190effaadb6',
            name: 'allen',
            phone: '18767135914',
          },
        })
        .expect(200);
    });
  });

});
