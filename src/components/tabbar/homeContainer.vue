<template>
    <div>
      
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunboList" >
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
          <h1>这是首页</h1>
           <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">Home</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
		           
		        </ul> 
    </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
    data(){
        return {
            lunboList:[]
        }
    },
    created(){
        this.getLunbo()
    },
    methods:{
        getLunbo(){
            this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(result=>{
                console.log(result.body)
                if(result.body.status==0){
                    this.lunboList=result.body.message
               
                }else{
                     Toast({
                     message:"未成功",
                     position: "top",
                     duration: 1000,
                     iconClass:"oi oi-account-login",
                     className:"mytoast"
            
                    })
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
}
.mint-swipe-item {
   &:nth-child(1){
       background-color: #098;
   }
   &:nth-child(2){
       background-color: #f98;
   }
   &:nth-child(3){
       background-color: #0f0;
   }
   img{
       width: 100%;
       height: 100%;
   }
}
.mui-table-view.mui-grid-view {
    background-color: white;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border:0px;
}
</style>