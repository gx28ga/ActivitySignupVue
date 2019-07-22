<template>
  <div class="ticket">
    <div class="header">
      <div class="title">活动参与凭证</div>
      <div class="number">
        NO.15
      </div>
    </div>
    <div class="content">
      <div class="digi-code">
        核销码: 16689361

      </div>
      <div class="qrcode">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563735221865&di=c2f23c47709ed92aeff1e9565b801477&imgtype=0&src=http%3A%2F%2Fimg3.cache.netease.com%2Fgame%2F2013%2F11%2F26%2F20131126143638f53f4.png"
          alt=""
        >
      </div>
      <div class="info">
        <div class="item">活动场地：鹿城区百里大厦丰和巷7号</div>
        <div class="item">开始时间：2018-12-22 15:30:00</div>
      </div>
      <div class="info">
        <div class="item">活动名称：在线报名演示（非真实活动）</div>
        <div class="item">参加名额：1 人</div>
        <div class="item">用户昵称：我是关心</div>
        <div class="item">报名时间：2019-07-21 21:55:00</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.ticket {
  margin: 10px;

  border-radius: 5px;
  border: 1px solid #ccc;
  .header {
    padding: 10px;
    background-color: #ddd;
    border-bottom: 1px solid #ccc;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    .title {
      color: #333333;
    }
    font-size: 18px;
    .number {
      color: #666;
    }
  }
  .content {
    padding: 10px;
    .digi-code {
      font-size: 16px;
      text-align: center;
      margin-bottom: 10px;
    }
    .qrcode {
      text-align: center;
      img {
        width: 40vw;
      }
    }
    .info {
      border-top: 1px dotted #ccc;
      .item {
        padding-left: 10px;
        padding-right: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 14px;
        color: #aaa;
      }
    }
  }
}
</style>
