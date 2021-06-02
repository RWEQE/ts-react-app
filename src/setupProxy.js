// const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
// const app = express();
// app.use('/api/**/*.action', 
//   createProxyMiddleware({ 
//     target: 'http://location:4000',
//     changeOrigin: true,
//     pathRewrite: {
//       '^/api': '', // remove base path
//       '^.action': '.json', // rewrite path
//     },
//   })
// );
// app.listen(3000)
console.log('-------------------')
module.exports = function(app) {
  app.use(createProxyMiddleware('/api/**/*.action', {
    target: 'http://localhost:4000',
    pathRewrite(path) {
      return path.replace('/api', '/').replace('.action', '.json');
    }
  }));
};