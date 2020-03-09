<template>
  <div class="dppage">
    <div class="dppageone" :class="[this.dpname + '1']">
      <div class="congratulation-box">
        <div class="congratulation">天呐！{{ nickname }}</div>
        <div class="congratulation" style="white-space:nowrap">
          你<span class="pink">命中注定</span>的部门就是
        </div>
      </div>
      <div class="icon-box">
      <a-icon type="down-circle" class="down-icon animated infinite pulse" theme="twoTone" twoToneColor="#84a22a"/>
      </div>
    </div>
    <div class="dppagetwo" :class="[this.dpname + '2']">
      <div v-show="showBtn" class="btn-box btn-box-out animated infinite pulse" @touchend.stop="handleOut">
        <div class="little">心动不如行动！</div>
        <div class="outbtn fake"></div>
        <div class="outbtn">
          点我马上填写报名问卷
        </div>
      </div>
      <div v-show="showBtn" class="btn-box btn-box-back" @touchend.stop="handleBack">
        <div class="backbtn fake"></div>
        <div class="backbtn">
          我不服，再测一次！
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Department",
  props: ["dpname", "nickname", "view"],
  data: function() {
    return {
      page: 1,
      showBtn: true,
      ticker: undefined
    };
  },
  mounted: function() {
    this.showBtn = true;
  },
  updated: function() {
    if (this.showBtn) {
      window.scrollTo(0, 0);
    }
    if (this.showBtn === false && this.view === 'department') {
      this.showBtn = true;
    } 
  },
  methods: {
    // scrollAnimation(targetY) {
    //   // 获取当前位置方法
    //   // const currentY = document.documentElement.scrollTop || document.body.scrollTop
    //   let currentY =
    //     window.pageYOffset ||
    //     document.body.scrollTop ||
    //     document.documentElement.scrollTop;
    //   // console.log(currentY);
    //   // 计算需要移动的距离
    //   let needScrollTop = targetY - currentY;
    //   setTimeout(() => {
    //     // 一次调用滑动帧数，每次调用会不一样
    //     const dist = Math.ceil(needScrollTop / 10);
    //     window.scrollTo(0, currentY + dist);
    //     // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
    //     if (needScrollTop > 10 || needScrollTop < -10) {
    //       this.scrollAnimation(targetY);
    //     } else {
    //       window.scrollTo(0, 2 * targetY);
    //     }
    //   }, 1);
    // },
    // handleTouchEnd() {
    //   let scrollTop =
    //     window.pageYOffset ||
    //     document.body.scrollTop ||
    //     document.documentElement.scrollTop;
    //   let clientHeight =
    //     document.body.clientHeight || document.documentElement.clientHeight;
    //   const thre = 0.08;
    //   if (this.page === 1 && scrollTop > 0 && scrollTop < clientHeight * thre) {
    //     // 回滚
    //     //   window.scrollTo(0, 0);
    //     this.scrollAnimation(0);
    //     console.log('aaa');
    //   } else if (this.page === 1 && scrollTop === 0) {
    //     console.log('bbb');
    //       return;
    //   } else if (this.page === 1) {
    //     console.log('ccc');
    //     this.scrollAnimation(clientHeight);
    //     //   window.scrollTo(0, clientHeight);
    //     this.page = 2;
    //   } else if (this.page === 2 && scrollTop < clientHeight * (1 - thre)) {
    //     //   window.scrollTo(0, 0);
    //     console.log('ddd');
    //     this.scrollAnimation(0);

    //     this.page = 1;
    //   } else {
    //     console.log('eee');
    //     //   window.scrollTo(0, clientHeight);
    //     this.scrollAnimation(clientHeight);
    //   }
    // },
    handleOut() {
        window.location.href="https://www.wjx.top/m/60141438.aspx";
    },
    handleBack() {
        if (this.ticker) {
          clearTimeout(this.ticker);
          this.ticker = undefined;
        }
        this.page = 1;
        this.showBtn = false;
        this.$emit('change-routes', { view: 'home', nickname: this.nickname })
        this.ticker = setTimeout(()=>{
          if (this.showBtn === false && this.view === 'department') {
            this.showBtn = true;
          } 
        }, 2000);
    }
  }
};
</script>

<style scoped>
.dppage {
  overflow: hidden;
  height: 200%;
  background: white no-repeat center top;
  background-size: auto 50%;
  transition: all 0.5s ease-out 0s;
}

.dppageone {
  overflow: hidden;
  height: 50%;
  background: white no-repeat center top;
  background-size: auto 100%;
}

.dppagetwo {
  overflow: hidden;
  height: 50%;
  background: white no-repeat center bottom;
  background-size: auto 100%;
}

.icon-box {
  position: absolute;
  top: 92%;
  left: 50%;
  transform: translate(-50%, 0);
}

.down-icon {
  font-size: 1.5rem;
}


.btn-box {
  position: absolute;
  height: 40px;
  
  /* transform: translate(-50%, -50%); */
}

.btn-box-out {
  width: 180px;
  right: 10%;
  top: 180%;
}

.btn-box-back {
  width: 160px;
  right: 10%;
  top: 192%;
}


.little {
  position: absolute;
  right: 50%;
  top: -20px;
  transform: translate(50%, 0);

  white-space: nowrap;
  font-size: 6pt;
  font-weight: bold;
  letter-spacing: 2px;
}

.outbtn, .backbtn {
  white-space: nowrap;
  font-size: 10pt;
  font-weight: bold;
  letter-spacing: 2px;
}

.outbtn {
  position: absolute;
  background-color: rgb(245, 196, 28);
  height: 36px;
  border: 1px solid rgba(0,0,0,0.8);
  border-radius: 16px;
  width: 100%;

  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.outbtn.fake {
  position: absolute;
  background-color: white;
  transform: translate(6px, 6px);
}

.backbtn {
  position: absolute;
  background-color: rgb(253, 238, 198);
  height: 36px;
  border-radius: 16px;
  width: 100%;

  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.backbtn.fake {
  position: absolute;
  background-color: rgb(245, 242, 238);
  transform: translate(6px, 6px);
}

.ad1 {
  background-image: url("/img/ad1.jpg");
}
.ad2 {
  background-image: url("/img/ad2.jpg");
}

.eb1 {
  background-image: url("/img/eb1.jpg");
}
.eb2 {
  background-image: url("/img/eb2.jpg");
}

.linb1 {
  background-image: url("/img/linb1.jpg");
}
.linb2 {
  background-image: url("/img/linb2.jpg");
}

.op1 {
  background-image: url("/img/op1.jpg");
}
.op2 {
  background-image: url("/img/op2.jpg");
}

.pi1 {
  background-image: url("/img/pi1.jpg");
}
.pi2 {
  background-image: url("/img/pi2.jpg");
}

.pr1 {
  background-image: url("/img/pr1.jpg");
}
.pr2 {
  background-image: url("/img/pr2.jpg");
}

.tsi1 {
  background-image: url("/img/tsi1.jpg");
}
.tsi2 {
  background-image: url("/img/tsi2.jpg");
}

.yamp1 {
  background-image: url("/img/yamp1.jpg");
}
.yamp2 {
  background-image: url("/img/yamp2.jpg");
}

.congratulation-box {
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  max-height: 16%;
}

.congratulation,
.pink {
  font-size: 1.1rem;
  font-weight: bold;
  letter-spacing: 2px;
  color: white;
  transition: all 2s ease-out 0s;
}

.congratulation {
  padding: 2px 0;
}

.pink {
  background-color: rgb(235, 110, 110);
  border-radius: 8px;
  padding: 2px 4px;
  margin: 0 4px;
}
</style>
