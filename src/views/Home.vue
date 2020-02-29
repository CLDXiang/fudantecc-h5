<template>
    <div class="homepage" @touchend="handleTouch" :class="page">
      <div v-show="page==='pic3'" class="input-box">
        <span class="input-title">请输入你的昵称</span>
        <a-input class="input-text" placeholder="小明" v-model="nickname" @change="handleInput" pressEnter="handleGo"/>
      </div>
      <div v-show="page==='pic3'" class="btn-box" @touchend="handleGo">
        <div class="gobtn fake"></div>
        <div class="gobtn"><img class="img" src="/img/go.png" /></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HomePage',
  data: function() {
    return {
      page: 'pic1',
      nickname: ''
    }
  },
  methods: {
    handleTouch: function() {
      switch (this.page) {
        case 'pic1':
          this.page = 'pic2';
          break;
        case 'pic2':
          this.page = 'pic3';
          break;
        case 'pic3':
          // 注意这个图里有按钮，不该直接跳转
          
          break;
      }
    },
    handleInput: function(e) {
      if (e.target.value.length > 20) {
        this.nickname = e.target.value.substr(0, 20);
      }
    },
    handleGo: function() {
      // 随机一个
      let deps = ['ad', 'eb', 'linb', 'op', 'pi', 'pr', 'tsi', 'yamp'];
      let dep = deps[Math.floor(Math.random() * deps.length)];

      this.$router.push({ path: `/department/${dep}/${this.nickname || '小明'}` });
    }
    
  }
}
</script>

<style scoped>
.homepage {
    overflow: hidden;
    height: 100%;
    background: white no-repeat center top;
    background-size: auto 100%;
    transition: background 0.5s ease-out 0s;
}

.pic1 {
    background-image: url('/img/pic1.jpg');
}

.pic2 {
    background-image: url('/img/pic2.jpg');
}

.pic3 {
    background-image: url('/img/pic3.jpg');
}

.input-box {
  position: absolute;
  height: 40px;
  width: 80%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  
  border-radius: 16px;
  background: white;

  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-size: 11pt;
  font-weight: bold;
  letter-spacing: 2px;

}

.input-title {
  text-align: center;
  white-space: nowrap;
  flex: 1;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(244, 220, 153);
  border-radius: 16px;
}

.input-text {
  flex: 1;
  height: 40px;
  border: 0 !important;
  border-radius: 16px;
  box-shadow: 0 0 0 0 transparent !important;
}

.btn-box {
  position: absolute;
  height: 40px;
  width: 86px;
  right: 10%;
  top: 60%;
  /* transform: translate(-50%, -50%); */
}

.gobtn {
  position: absolute;
  background-color: rgb(234, 107, 109);
  height: 40px;
  border-radius: 16px;
  width: 100%;

  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.gobtn.fake {
  position: absolute;
  background-color: rgb(245, 186, 178);
  transform: translate(6px, 6px);
}

.img {
  height: 16px;
}

</style>
