<template>
<div>
    <h3 class="title">{{title}}</h3>
    <p>
        <span>发表时间 {{add_time | dateFormat('YYYY-MM-DD')}}</span>
        <span>点击次数：{{click}}次</span>
    </p>
    <hr>
    <div class="context" v-html="context"></div>
    <comment-box :id="this.id"></comment-box>
</div>
</template>
<script>
import comment from './comment.vue'
export default {
    data(){
        return {
            id:this.$route.params.id,
            title:null,
            context:null,
            click:null,
            add_time:null

        }
    },
    created(){
        this. getNewsInfo()
    },
    methods:{
        getNewsInfo(){
             this.$http.get(`api/getnew/${this.$route.params.id}`).then(
                 res=>{
                     console.log(res)
                     this.title   = res.body.message[0].title;
                     this.context = res.body.message[0].content;
                     this.click = res.body.message[0].click;
                     this.add_time = res.body.message[0].add_time;
                     console.log(this.context)

                 },err=>{
                     console.log(err)
                 }
             )
        }
    },
    components: {
        'comment-box':comment
    }
}
</script>
<style lang="scss" scoped>
.title{
    color: rgb(255, 56, 86);
    text-align: center;
    overflow:hidden;
}
p{
    display: flex;
    justify-content: space-between;
    margin: 5px 10px;
    font-size: 13px;
    color:lightskyblue;
}
div{
    margin: 5px 10px;
}
</style>