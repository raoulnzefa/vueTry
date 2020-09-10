import VueRouter from 'vue-router'

import cartContainer from './components/tabbar/cartContainer.vue'
import homeContainer from './components/tabbar/homeContainer.vue'
import memberContainer from './components/tabbar/memberContainer.vue'
import searchContainer from './components/tabbar/searchContainer.vue'

const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:homeContainer},
        {path:'/cart',component:cartContainer},
        {path:'/member',component:memberContainer},
        {path:'/search',component:searchContainer}
    ],
    linkActiveClass: 'mui-active'
})

export default router