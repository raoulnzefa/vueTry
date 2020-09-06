
<template>
  <div class="app-container">
    <mt-header fixed title="电子诗人"></mt-header>
    <h1>123</h1>
    <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
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