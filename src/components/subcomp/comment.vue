<template>
<div>
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入你的评论" maxlength="120"></textarea>
    <mt-button type="primary" size="large" @click="publish"> 发表 </mt-button>
    <div class="cmt-list">
        <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
            <div class="cmt-title">
                第{{i+1}}楼：&nbsp; &nbsp; 用户：{{ item.user_name }}&nbsp; &nbsp;<br/>
                发表时间：{{item.add_time | dateFormat}}
            </div>
            <div class="cmt-body">{{item.content? item.content: '什么都没说'}}</div>
        </div>
    </div>
    <mt-button type="danger" size="large" plain @click="addpage"> 加载更多 </mt-button>
</div>
</template>
<script>
export default {
    data(){
        return{
            pageIndex:1,
            comments:[]
        }
    },
    created(){
        this.getComment()
    },
    methods:{
        publish(){
            console.log('pubok')
        },
        getComment(){
            this.$http.get(`api/getcomments/${this.id}?pageindex=${this.pageIndex}`).then(data=>{
                console.log('获取评论成功')
                console.log(data)
                this.comments=data.body.message
                 console.log(this.comments)
            },err=>{

            })
        },
        addpage(){
            this.pageIndex++
            this.getComment()
        }
    },
    props:["id"]
}
</script>
<style lang="scss" scoped>
.cmt-list{
    .cmt-item{
        .cmt-title{
            background-color: rgb(32, 20, 209);
            color: white;
        }
    }
}
</style>