module.exports = {
  publicPath: "./",
  outputDir: 'dist',   //build输出目录
    assetsDir: 'assets', //静态资源目录（js, css, img）
    lintOnSave: false, //是否开启eslint
    devServer: {
      open: true, //是否自动弹出浏览器页面
      host: "localhost", 
      port: '8080',
      https: true,
      hotOnly: false, 
      proxy: {
           
      },
    },
    
};
