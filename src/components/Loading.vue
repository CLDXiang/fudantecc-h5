<template>
  <div class="loading-box">
    <div class="icon-box">
      使用外部浏览器体验更佳哦！<a-icon type="arrow-up" />
    </div>
    <div class="loading">
      <a-progress type="circle" :percent="percent" strokeColor="#84A22A" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {
      count: 0,
      percent: 0,
      ticker: undefined
    };
  },
  mounted: function() {
    this.preload();
  },
  methods: {
    preload() {
      // 预加载图片
      let _this = this;
      window.addEventListener('load', ()=>{
        _this.percent = 100;
      });
  
      let imgSrc = [
          '/img/ad1.jpg',
          '/img/ad2.jpg',
          '/img/eb1.jpg',
          '/img/eb2.jpg',
          '/img/go.png',
          '/img/linb1.jpg',
          '/img/linb2.jpg',
          '/img/op1.jpg',
          '/img/op2.jpg',
          '/img/pi1.jpg',
          '/img/pi2.jpg',
          '/img/pic1.jpg',
          '/img/pic2.jpg',
          '/img/pic3.jpg',
          '/img/pr1.jpg',
          '/img/pr2.jpg',
          '/img/tsi1.jpg',
          '/img/tsi2.jpg',
          '/img/yamp1.jpg',
          '/img/yamp2.jpg'
      ];
      this.ticker = setInterval(()=>{
        if (this.percent !== 99){
          this.percent ++;
        }
        // if (this.count === imgSrc.length) {
        //   this.percent = 100;
        // }
        // console.log(this.percent);
      }, 50); // 等五秒，每 0.05 秒加 1%

      setTimeout(()=> {
          if (this.percent !== 100) {
              this.percent = 100;
          }
      }, 10000);
      for (let i = 0; i < imgSrc.length; i++) {
        let img = new Image();
        // img.onload = () => {
        //   this.count++;
        //   // this.percent = Math.floor((this.count / imgSrc.length) * 100);
        // };
        // img.onerror = () => {
        //   this.count++;
        //   // this.percent = Math.floor((this.count / imgSrc.length) * 100);
        // }
        img.src = imgSrc[i];
      }
      
    }
  },
  watch: {
      percent: function(newVal) {
          if (newVal === 100) {
              clearInterval(this.ticker);
              setTimeout(()=>{this.$emit('change-routes', { view: 'home' });}, 500);
          }
      }
  }
};
</script>

<style scoped>
.loading-box {
  overflow: hidden;
  height: 100%;
  background: white no-repeat center top;
  background-size: 100% 100%;
  background-image:
    linear-gradient(
      15deg,
      rgb(132, 162, 42),
      rgb(132, 162, 42) 15%,
      rgb(192, 206, 145) 15%,
      rgb(192, 206, 145) 30%,
      white 30%,
      white 70%,
      rgb(192, 206, 145) 70%,
      rgb(192, 206, 145) 85%,
      rgb(132, 162, 42) 85%,
      rgb(132, 162, 42) 100%
      );
}

.icon-box {
  position: absolute;
  right: 10px;
  top: 10px;
  color: white;
  font-size: 1rem;
  white-space: nowrap;
  font-weight: normal;
  letter-spacing: 2px;
}

.loading {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
