<template>
<transition-group name="pic" >
    <div v-show="page==='pic1'" class="homepage pic1" @touchend="handleTouch" key='pic1'>
    </div>
    <div v-show="page==='pic2'" class="homepage pic2" @touchend="handleTouch" key='pic2'>
    </div>
    <div v-show="page==='pic3'" class="homepage pic3" @touchend="handleTouch" key='pic3'>
      <div v-show="page==='pic3'" class="input-box">
        <span class="input-title">请输入你的昵称</span>
        <a-input class="input-text" placeholder="小明" v-model="nickname" @change="handleInput" pressEnter="handleGo"/>
      </div>
      <div v-show="page==='pic3'" class="btn-box animated infinite pulse" @touchend="handleGo">
        <div class="gobtn fake"></div>
        <div class="gobtn"><img class="img" src="/img/go.png" /></div>
      </div>
    </div>
</transition-group>
</template>

<script>
export default {
  name: 'HomePage',
  data: function() {
    return {
      page: 'pic1',
      nickname: this.nick || ''
    }
  },
  props: ['nick'],
  methods: {
    handleTouch: function() {
      console.log(this.page)
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
      if (e.target.value.length > 15) {
        this.nickname = e.target.value.substr(0, 15);
      }
    },
    handleGo: function() {
      // 随机一个
      let deps = ['ad', 'eb', 'linb', 'op', 'pi', 'pr', 'tsi', 'yamp'];
      let dep = deps[Math.floor(Math.random() * deps.length)];

      this.$emit('change-routes', { view: 'department', dep: dep, nickname: this.nickname || '小明'});
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
    /* transition: background 2s ease-out 0s; */
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


.pic-enter, .pic-leave-to {
  opacity: 0;
}

.pic-enter-to {
  opacity: 1;
}

.pic-enter-active {
  transition: opacity 2s;
}

</style>
