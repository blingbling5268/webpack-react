/** 
  * @title: server/appConfig.js
  * @description: 基础服务配置 自定义服务端口，ip, 代理地址
  * @author: liubo
  * @date: 2021-07-30 09:50:47
  */
 module.exports = {
   deployUrl: '127.0.0.0:8080', // 本地代码推送到指定服务器
   proxyUrlMap: {
     "/api": 'localhost: 3000', // 代理的接口
     "/api2": 'localhost: 4000', // 代理的接口
   },
   port: 9000,
   host: 'localhost', // 主机号
 }