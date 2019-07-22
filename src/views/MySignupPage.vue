<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="全部">
        <div class="signup-item">
          <div class="header">
            <div class="title">
              启乐智网
            </div>
            <div class="status">
              待参与
            </div>
          </div>
          <div class="content">
            <div
              aspectratio
              w-80-80
              class="poster"
            >
              <div aspectratio-content>
                <img src="https://gc29.cdtop100.net/attachment/images/7/2018/12/FynPPyYp07tx0uYx2M020N0s7y0Y8U.jpg">
              </div>
            </div>
            <div class="info">
              <div class="title">在线预约演示（非真实活动）</div>
              <div class="valid-from">

                12月22日 15:30 ~ 10月15日 15:30

              </div>

            </div>
            <div class="quantity">
              x1
            </div>
          </div>
          <div class="footer">
            <div class="amount-wrap">
              <div class="amount">共一张票</div>
              <div class="price">免费票</div>
            </div>
            <div class="action">
              <router-link :to="{name:'signupDetail'}">
                <div class="btn-detail">查看详情</div>
              </router-link>
              <div class="btn-cancel">取消报名</div>

              <router-link
                :to="{name:'ticketPage'}"
                tag="div"
              >
                <div class="btn-ticket">电子票</div>
              </router-link>
            </div>

          </div>

        </div>
      </van-tab>
      <van-tab title="待参与"></van-tab>
      <van-tab title="已完成"></van-tab>
      <van-tab title="已取消"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Tab, Tabs } from "vant";
export default {
  components: {
    [Tabs.name]: Tabs,
    [Tab.name]: Tab
  },
  data: () => ({
    active: 0
  })
};
</script>

<style lang="scss">
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
.signup-item {
  background-color: #ffffff;
  margin-top: 10px;
  margin-bottom: 10px;
  .header {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ededed;
    .title {
      font-size: 14px;
    }
    .status {
      color: #ff4768;
      font-size: 14px;
    }
  }
  .content {
    padding: 10px;
    display: flex;
    .poster {
      width: 80px;
      margin-right: 10px;
    }
    [w-80-80] {
      aspect-ratio: "80:80";
    }
    .info {
      flex: 1;
      font-size: 12px;
      color: #666;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .quantity {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      font-size: 12px;
      color: #666666;
    }
  }
  .footer {
    padding: 10px;
  }
  .amount-wrap {
    display: flex;

    font-size: 12px;
    justify-content: flex-end;
    margin-bottom: 10px;
  }
  .action {
    display: flex;
    justify-content: flex-end;
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
</style>
