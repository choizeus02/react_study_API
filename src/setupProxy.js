const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware( {
      target: "http://116.121.184.161",
      changeOrigin: true,
    })
  );
};