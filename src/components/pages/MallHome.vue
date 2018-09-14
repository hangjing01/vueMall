<template>
  <div>
    <!--search bar layout-->
    <div class="search-bar">
      <van-row gutter="5">
        <van-col span="3"><img :src="locationIcon" width="80%" class="location-icon" /></van-col>
        <van-col span="16">
          <input type="text" class="search-input"/>
        </van-col>
        <van-col span="5"><van-button size="mini">查找</van-button></van-col>
      </van-row>
    </div>
    <div class="swiper-area">
      <van-swipe :autoplay="1000">
        <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
          <img v-lazy="banner.image" width="100%"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="type-bar">
      <div  v-for="(cate,index) in category" :key="index" >
        <img v-lazy="cate.image" width="90%" />
        <span>{{cate.mallCategoryName}}</span>
      </div>
    </div>
    <div class="ad-banner">
      <img v-lazy="adBanner.PICTURE_ADDRESS" width="100%">
    </div>
    <swiperDefault v-bind:slide="recommendGoods"></swiperDefault>
  </div>
</template>

<script>
  import axios from 'axios'
  import swiperDefault from '../swiper/SwiperDefault'
    export default {
        data(){
          return{
            locationIcon:'',
            bannerPicArray:'',
            adBanner:'',
            category:'',
            recommendGoods:''
          }
        },
      components:{swiperDefault},
      created(){
        axios({
          url: 'https://www.easy-mock.com/mock/5b9a047251bb724fd9ba074b/example/index',
          method: 'get',
        })
          .then(response => {
            console.log(response)
            if(response.status===200){
              console.log(response.data.data.category);
              this.bannerPicArray = response.data.data.slides;
              this.adBanner = response.data.data.advertesPicture;
              this.category=response.data.data.category;
              this.recommendGoods = response.data.data.recommend
            }
          })
          .catch((error) => {
          })
      }
    }
</script>

<style scoped lang="less">
  .search-bar{
    height: 2.2rem;
    background-color: #e5017d;
    line-height:2.2rem;
    .search-input{
      width:100%;
      height: 1.3rem;
      border-top:0;
      border-left:0;
      border-right:0;
      border-bottom: 1px solid !important ;
      background-color: #e5017d;
      color:#fff;
    }
    .location-icon{
      padding-top: .2rem;
      padding-left: .3rem;
    }
  }
  .swiper-area{
    width:100%;
    clear:both;
  }
  .type-bar{
    background-color: #fff;
    margin:0 .3rem .3rem .3rem;
    border-radius: .3rem;
    font-size:14px;
    display: flex;
    flex-direction:row;
    flex-wrap:nowrap;
  }
  .type-bar div{
    padding: .3rem;
    font-size: 12px;
    text-align: center;
  }

</style>
