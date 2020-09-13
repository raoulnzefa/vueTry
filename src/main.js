import Vue from 'vue'
import app from './app.vue'
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)
import router from './router.js'

import VueResource from 'vue-resource'
// 1.2 安装路由
Vue.use(VueResource)
Vue.http.options.root='http://www.liulongbin.top:3005/'
import moment from 'moment'
Vue.filter('dateFormat',(dateStr,pattern="YYYY-MM-DD HH:mm:ss")=>{
    return moment(dateStr).format(pattern)
})


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