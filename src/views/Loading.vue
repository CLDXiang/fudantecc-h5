<template>
  <div class="loading">
    <a-progress type="circle" :percent="percent" strokeColor="#84A22A" />
  </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {
      count: 0,
      percent: 0
    };
  },
  mounted: function() {
    this.preload();
  },
  methods: {
    preload() {
      // 预加载图片
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
      setTimeout(()=> {
          if (this.percent !== 100) {
              this.percent = 100;
          }
      }, 10000);
      for (let i = 0; i < imgSrc.length; i++) {
        let img = new Image();
        img.onload = () => {
          this.count++;
          this.percent = Math.floor((this.count / imgSrc.length) * 100);
        };
        img.onerror = () => {
          this.count++;
          this.percent = Math.floor((this.count / imgSrc.length) * 100);
        }
        img.src = imgSrc[i];
      }
      if (this.count === imgSrc.length) {
        this.percent = 100;
      }
    }
  },
  watch: {
      percent: function(newVal) {
          if (newVal === 100) {
              setTimeout(()=>{this.$emit('change-routes', { view: 'home' })}, 500);
          }
      }
  }
};
</script>

<style scoped>
.loading {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
