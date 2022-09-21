<template>
  
  <div class="shopCar_container">
    <div style="border-left:2px dashed #ffcc22;border-right:2px dashed #ffcc22;border-bottom:4px solid #ffcc22;">
    <ul>
      <li class="li1" v-for="item in shopcar" :key="item.id">
        <img :src="item.imgName.url" />
        <div class="textBox">
          <p>{{ item.info }}</p>
        </div>
        <span class="priceBox">{{ item.price }}</span>
        
        <!-- 减少商品 -->
        <button type="button" class="btn" @click="sub(item)">
          <span style="font-size: 15px">-</span>
        </button>
            <span class="priceBox2">{{ item.count }}</span>
        <!-- 增加商品 -->
        <button type="button" class="btn" @click="add(item)">
          <span style="font-size: 15px">+</span>
        </button>
        
        
        <!-- 删除商品 -->
        <button type="button" class="btn btn-danger btn-lg" @click="delGood(item)">
          删除
        </button>
        <span v-show="false">{{$store.state.a=item.sum}}</span>
      <span v-show="false">{{$store.state.sum=parseInt($store.state.sum)+parseInt($store.state.a)}}</span>
      </li>

      <!-- 合计金额 -->
      <li class="li2" v-if="shopcar.length > 0">
        <div>
          <span>总计</span>
          <span>{{ sum}}</span>
          <button class="btn btn-primary btn-lg" @click="payMoney(sum)">
            <a>付款</a>
          </button>
        </div>
        
      </li>
      <!-- 购物车没有商品时 -->
      <li v-else>
          购物车里没有商品，快去加购吧！
      </li>
      
    </ul>
    <br />
    </div>
  </div>
  
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: "v-shopCar",
  data() {
    return {
        sum:0
    };
  },
  methods: {
    delGood(item) {
      if(confirm("确定要删除吗？")){
        this.$store.commit("delShop", item);
      }
    },
    add(info) {
      this.$store.commit("addCount", info);
    },
    sub(info) {
      this.$store.commit("subCount", info);
    },
    payMoney(sum){
        this.$router.push({
            name:"payMoney",
            query:{payMoney:sum}
        })
        
    }
  },
  watch:{
      
    "shopcar":{
    immediate:true,
    deep:true,
    handler(){
        this.sum = this.$store.state.shopcar.reduce((previousValue, currentValue)=>{
        return (currentValue.count * currentValue.price) + previousValue
        },0)

      // 进行本地存储shopcar
      localStorage.setItem('shopcar',JSON.stringify(this.shopcar))
        
    }
    }
    
  },
  computed:{
    ...mapState(["shopcar"])
  }
};
</script>
<style>
.shopCar_container{
  
  color: #686262
}
.shopCar_container ul{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.shopCar_container  li{
    display: flex;
  list-style: none;
}
.shopCar_container .li1{
  justify-items: center;
  align-items: center;
  justify-content: space-between;
}
li > img{
  width: 95px;
  height: 95px;
}
.li1 :nth-child(2){
  flex-basis: 500px;
}
.li1 :nth-child(3){
  color: #f00;
  text-align: center;
  flex-basis: 50px;
  
}
.li1 :nth-child(5){
  text-align: center;
  flex-basis: 20px;
}
.shopCar_container .li2{
  justify-content: space-around;
  align-items: center
}
.shopCar_container .li2 :nth-child(2){
  color: #f00;
  margin: 0 10px 0 10px;
}
.btn-lg{
  width: 80px;
}

</style>