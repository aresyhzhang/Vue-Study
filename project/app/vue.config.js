module.exports={
    lintOnSave:false,
    //使用webpack解决跨域问题,如果路径中有/api，则代理服务器会找真实服务器请求数据 
    devServer: {
        proxy: {
          '/api': {
            target: 'http://localhost:3000',
            pathRewrite: { '^/api': '' },
          },
        },
      },
}