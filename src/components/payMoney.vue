<template>
    <div class="MoneyStyle">
        <div style="border-left:2px dashed #ffcc22;border-right:2px dashed #ffcc22;border-bottom:4px dashed #ffcc22;">
        <ul>
            <li>
                <span style="font-size:30px;line-height: 100px;">您需付款{{payMoney}}元:</span>     
            </li>
            <li class="li1">
            <img border="0" src="../assets/002.jpg">
            </li>
            <button @click="emptyShopCar" class="btn btn-primary pay_btn">立即支付</button>
        </ul>
        
        </div>
    </div>
</template>
<script>
export default {
    props:['payMoney'],
    methods:{
        emptyShopCar(){
            this.$store.commit("empty")
            localStorage.removeItem("shopcar")
            alert("恭喜你支付成功")
            this.$router.push({
                name:"shopCar"
            })
        }
    }
}
</script>
<style >
.MoneyStyle ul{
    position: relative;
}
.MoneyStyle ul li{list-style: none;}
.MoneyStyle .li1{list-style: none;text-align: center;width:100%}
.MoneyStyle .img_wrap{

    display: table-cell;
    vertical-align: middle;
    text-align: center;
}
.pay_btn{
    position: absolute;
    bottom: 0;
    right: 0;
}
</style>