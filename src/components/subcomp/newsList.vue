<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<router-link :to="`/home/newsList/${item.id}`">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
                            <p>{{item.zhaiyao}}</p>
							<p class='mui-ellipsis'>
                                <span>发表时间:{{item.add_time | dateFormat('YYYY-MM-DD')}}</span>
                                <span>点击次数:{{item.click}}</span>
                            </p>
						</div>
					</router-link >
				</li>
				
		</ul>
       
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            newsList:[]
        }
    },
    created(){
        this.getNewsList()
    },
    methods:{
        getNewsList(){
            this.$http.get('api/getnewslist').then(res=>{
                if(res.body.status==0){
                    console.log('成功')
                    this.newsList=res.body.message
                } 
                else Toast('失败')
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.mui-table-view{
    width: 100%;
    h1 {font-size: 14px;}
    .mui-ellipsis{
        font-size: 16px;
        color: cyan;
        display: flex;
        justify-content: space-between;
    }

}
</style>