<template>
    <div class="HomeStyle">
        <div style="display:flex;border-left:2px dashed #ffcc22;border-right:2px dashed #ffcc22;border-bottom:4px solid #ffcc22;">
        <ul v-if="$store.state.goods.length > 0">
            <li v-for="item in $store.state.goods" :key="item.id" @click="goDetailed(item)" >
                <img :src="item.imgName.url">
                <span class="priceBox ">￥{{item.price}}</span>
                <div class="textBox">
                    <span>{{item.info}}</span>
                </div>
            </li>
        </ul>
        <div v-else>
            <h3>数据加载中，请稍等!   提速得<b class="jq">加钱</b></h3>
            
            <h1>kailinちゃん给你跳舞了~~~~~~</h1><img src="../assets/tw.gif">
        </div>
        </div>
    </div>
</template>
<script>
export default{
    name:'v-Home',
    methods:{
        goDetailed(item){
            this.$router.push({
                name:"articleDetailed",
                query:{goodInfo:item}
            })
        }
    }
}
</script>
<style>
.HomeStyle ul {margin:10px 0 0 10px}
.HomeStyle ul li{list-style: none;float:left;margin:10px 0 60px 40px;width:25%;}
.HomeStyle .priceBox{display:block;color:#f00;font-weight: bold;padding:10px 0 10px 0;width:50%;}
.HomeStyle .textBox{float:left;widows: 190px;font-size: 0.8em;width:70%;height: 50px;}
.HomeStyle .textBox span{text-decoration: none; cursor: pointer;}
.HomeStyle .textBox span:hover{color:#f00;}
.HomeStyle img {width:120px;height:120px;}
.HomeStyle img:hover{transform:scale(1.1);}
.jq{font-size: 45px;margin-left: 10px; color: rgba(252, 6, 6, 0.801);}
</style>
