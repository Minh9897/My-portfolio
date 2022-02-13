const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/services/Default.aspx/Xu_ly_Tra_cuu",
    createProxyMiddleware({
      target: "https://csc.edu.vn",
      changeOrigin: true,
    })
  );
  app.use(
    "/Login",
    createProxyMiddleware({
      target: "http://online.dlu.edu.vn",
      changeOrigin: true,
    })
  );
  app.use(
    "/Home",
    createProxyMiddleware({
      target: "http://online.dlu.edu.vn",
      changeOrigin: true,
    })
  );
};
