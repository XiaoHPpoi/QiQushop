<template>
  <div class="articleDetailedStyle">
      <div style="display:flex;border-left:2px dashed #ffcc22;border-right:2px dashed #ffcc22;border-bottom:4px solid #ffcc22;">
        <ul>
            <li>
                <img :src="goodInfo.imgName.url" >
                <div class="textBox">{{goodInfo.info}}</div>
                <span  class="priceBox ">￥{{goodInfo.price}}</span>
                <button class="btn btn-info" @click="addShopcar(goodInfo)">加入购物车</button>
                <span class="priceBox2 ">详情：</span>
                <hr>
            </li>
        </ul>
        
    </div>
  </div>   
</template>

<script>
export default {
    props:["goodInfo"],
    methods:{
        addShopcar(goodinfo){
            this.$store.commit('addShop',goodinfo)
        }
    }
}
</script>

<style>
.articleDetailedStyle ul {margin:10px 0 0 90px}
.articleDetailedStyle img {margin:0 0 0 55px}
.articleDetailedStyle ul li{list-style: none;float:left;margin:10px 0 60px 40px;}
.articleDetailedStyle .priceBox{text-align:right;display:block;color:#f00;font-weight: bold;padding:10px 0 10px 0;}
.articleDetailedStyle .priceBox2{text-align:left;display:block;font-weight: bold;padding:10px 0 10px 0;}
.articleDetailedStyle .btn {margin:0 0 0 500px}

</style>