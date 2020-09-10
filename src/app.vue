
<template>
  <div class="app-container">
    <mt-header fixed title="电子诗人"></mt-header>
    <h1>123</h1>
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
   
  </div>
   
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  name: 'appindex',
  data () {
    return {
      msg: '组件动态信息',
      tos:null
    }
  },
  created(){
    this.rem()
  },
  methods: {
      show(){
          this.tos = Toast({
            message:"调用了组件方法",
            position: "top",
            duration: 5000,
            iconClass:"oi oi-account-login",
            className:"mytoast"
            
          })
      },
      rem(){
        this.show()
        setTimeout(()=>{
          this.tos.close()
        },1000)
      }

  }
}
</script>

<style lang="scss" scoped>
.app-container{
  padding-top:30px;
}
</style>