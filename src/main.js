import Vue from 'vue'
import app from './app.vue'
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)
import router from './router.js'



import mintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'open-iconic/font/css/open-iconic-bootstrap.css'
import './css/index.css'
import '../lib/mui/dist/css/mui.css'
import '../lib/mui/dist/css/icons-extra.css'


Vue.use(mintUI)

import 'bootstrap/dist/css/bootstrap.css'


const vm = new Vue({
    el:"#app",
    data:{
        msg:"123"
    },
    render:c=>c(app),
    router
})

console.log('OK')