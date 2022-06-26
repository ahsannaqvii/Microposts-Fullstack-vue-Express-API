const { defineConfig } = require('@vue/cli-service')
const path=require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  //ONLY SERVER WILL BE DEPLOYED TO HEROKU.
  // outputDir:path.resolve(__dirname , '../server/public'), 
  devServer:{
    proxy:{
      '/api':{
        target:"http://localhost:5000/"
      }
      
    }
  }
})
