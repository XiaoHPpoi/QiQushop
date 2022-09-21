<template>
  <div class="container">
    <div class="head">
      <img border="0" :src="userImg" align="top" width="150" height="128">
      <span class="title">这里是QiQu商城</span>
    </div>
    <div class="menu">
      <ul class="one">
        <li ><router-link to="/home">首页</router-link></li>
        <li ><router-link to="/thisWeb">关于</router-link></li>
        <li ><router-link to="/aboutMe">我的</router-link></li>
        <li ><router-link to="/shopCar">购物车</router-link><span class="carCount">{{carCount}}</span></li>
      </ul>
    </div>
    <router-view></router-view>
     <div style="text-align:center;border-left:2px dashed #ffcc22;border-right:2px dashed #ffcc22;border-bottom:4px dashed #ffcc22;">
		 <span>@2020 严伟源小组版权所有</span><b>|</b><span>关于我们</span><b>|</b><span>广告服务</span><b>|</b><span>邮箱反馈：10********@qq.com</span>
		 <p>***安备：****************号 备案号:粤ICP备**************号：</p>
     </div>
    </div>
</template>
<script>
import {reqImg} from './api'
export default{
    created(){
        this.$store.dispatch('getData');
    },
    async mounted(){
      const res = await reqImg()
      if(res.code === 200){
        this.userImg = res.data.imgurl
      }
    },
    data() {
      return {
        carCount:0,
        userImg:""
      }
    },
    watch:{
       "$store.state.shopcar":{
        immediate:true,
        deep:true,
        handler(){
          
          this.carCount = this.$store.state.shopcar.reduce((previousValue, currentValue)=>{
            return currentValue.count + previousValue
          },0)
        }
       }
      
    }
}
</script>

<style>
body{
  background-color: #F2F3F5;
}
.container{width:900px;margin:auto;color: #686262; background-color: #fff;}
.nav{background:#ed2;}
.navStyle{width:250px;height: 40px;padding-top:20px;margin:auto;}
.head span
{
	line-height: 150px;
	font-family: "STKaiti";/*字体类型*/
	font-weight: 700;/*字粗细*/
}
.head
{
	height: 128px;
	overflow: hidden;/*缩放隐藏*/
	background-color:#ffcc66;
}
.head .title{
  font-size:70px;
  color: #000;
}
.menu
{
	height: 40px;
	margin: 10px -8px 0 -8px;
	overflow: hidden;/*缩放隐藏*/
	background-color:#66CCFF;
}
ul.one li
{
 height:40px;
 text-align:center;/*字体居中*/
 line-height: 10px;/*字体位置*/
 font-size: 25px;
 float:left;/*左动态浮动*/
 list-style-type: none;
 margin-left:13%;
}
ul.one li a
{
	color:white;
	text-decoration:none;/*取消下划线 */
}
ul.one li a:hover
{
	color:#989898
}
ul.one .carCount 
{
  display:block;
  float:right;
  width:16px;
  border-radius:50%;
  background: white;
  line-height:18px;
  text-align: center;
  font-size: 9px;
  font-weight: bold
}
</style>
