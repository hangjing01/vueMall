<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide class="swiper-slide" v-for=" (item ,index) in slide" :key="index">
        <div class="recommend-item">
          <img :src="item.image" width="80%" />
          <div class="info">{{item.goodsName}}</div>
          <div class="info">￥{{item.price}} (￥{{item.mallPrice}})</div>
        </div>
      </swiper-slide>
     <!-- <div class="swiper-pagination" slot="pagination"></div>-->
    </swiper>
  </div>
</template>
<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    data() {
      return {
        slide: '',
        swiperOption:{
          slidesPerView: 3,
          /*pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },*/
        }
      }
    },
    props:['slide'],
    components:{swiper,swiperSlide},
  }
</script>
<style scoped>
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    border-right: 1px solid #eee;
    box-sizing: border-box;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .recommend-item{
    width:80%;
    font-size: 12px;
    text-align: center;
  }
  .info{
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

</style>
