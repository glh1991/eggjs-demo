// 应用启动入口, 可以做一些初始化工作
module.exports = app => {

  app.beforeStart(async () => {
    await console.log("server start")
  });
};
