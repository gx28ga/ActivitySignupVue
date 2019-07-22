<template>
  <div>
    <div class="activity">
      <div class="sponsor">
        <div
          aspectratio
          w-36-36
          class="avatar"
        >
          <div aspectratio-content>
            <img src="https://gc29.cdtop100.net/attachment/images/7/2018/12/FynPPyYp07tx0uYx2M020N0s7y0Y8U.jpg">
          </div>
        </div>

        <div class="name">启乐智网</div>
      </div>
      <div class="anchor">
        <div
          aspectratio
          w-100-50
          class="poster"
        >
          <div aspectratio-content>
            <img src="https://gc29.cdtop100.net/attachment/images/7/2018/12/FynPPyYp07tx0uYx2M020N0s7y0Y8U.jpg">
          </div>
        </div>

        <div class="info">
          <div class="title">在线预约演示（非真实活动）</div>
          <div class="misc">
            <div class="start-date">时间: 18年02月22日 15:30开始</div>
            <div class="specification">暂无</div>
          </div>

        </div>

      </div>

      <div class="footer">
        <div class="quantity">共一张票</div>
        <div class="action">
          <router-link
            :to="{name:'ticketPage'}"
            tag="div"
          >
            <div class="btn-ticket">电子票</div>
          </router-link>

        </div>
      </div>

    </div>
    <div class="signup-info">
      <div class="item">
        <div class="key">总票价</div>
        <div class="val amount">￥0.00</div>
      </div>
      <div class="item">
        <div class="key">优惠金额</div>
        <div class="val">￥0.00</div>
      </div>
      <div class="item">
        <div class="key">订单实付金额</div>
        <div class="val price">￥0.00</div>
      </div>
    </div>
    <div class="signup-info">
      <div class="item">
        <div class="key">报名状态</div>
        <div class="val">待参与</div>
      </div>
      <div class="item">
        <div class="key">订单编号</div>
        <div class="val">20190712382397814301</div>
      </div>
      <div class="item">
        <div class="key">交易编号</div>
        <div class="val">暂无</div>
      </div>
      <div class="item">
        <div class="key">创建时间</div>
        <div class="val">2019-07-01 10:10:10</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  lang="scss" scoped>
[aspectratio] {
  position: relative;
}
[aspectratio]::before {
  content: "";
  display: block;
  width: 1px;
  margin-left: -1px;
  height: 0;
}

[aspectratio-content] {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

[aspectratio-content] img {
  width: 100%;
  height: 100%;
  vertical-align: top;
}

.activity {
  background-color: #ffffff;

  .sponsor {
    padding: 10px;
    display: flex;
    align-items: center;

    .avatar {
      width: 36px;
      margin-right: 10px;
    }
    [w-36-36] {
      aspect-ratio: "36:36";
    }
    [w-36-36] img {
      border-radius: 50%;
    }
    .name {
      font-size: 14px;
    }
  }
  .anchor {
    display: flex;
    padding: 10px;
    background-color: #f8f8f8;
    .poster {
      width: 100px;
      margin-right: 10px;
    }
    [w-100-50] {
      aspect-ratio: "100:50";
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-size: 12px;
      .title {
        font-size: 14px;
      }
      .misc {
        font-size: 12px;
        color: #828282;
      }
    }
  }
  .footer {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .quantity {
      font-size: 14px;
      color: #999;
    }
    [class*="btn"] {
      border: 1px solid #fec200;

      font-size: 14px;
      padding: 5px 10px;
      border-radius: 5px;
      margin-left: 3px;
    }

    .btn-detail {
      background-color: #fec200;
      color: #5d2f18;
    }
    .btn-ticket {
      color: #fec200;
    }
  }
}

.signup-info {
  margin-top: 10px;
  padding: 10px;
  background-color: #ffffff;
  .item {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 1.5;
    .val {
      color: #828282;
    }
    .amount {
      color: #333333;
    }
    .price {
      color: firebrick;
    }
  }
}
</style>
