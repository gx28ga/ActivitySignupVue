<template>
  <div class="content">
    <div class="detail-page">
      <div
        aspectratio
        w-375-175
      >
        <div aspectratio-content>
          <img
            src="https://gc29.cdtop100.net/attachment/images/7/2019/03/vMFabe3e62q4b6zf0994HeA3500j3q.jpg"
            class="activity-poster"
          >
        </div>
      </div>
      <div class="activity-title">请编辑！在线预约演示（非真实活动）</div>
      <div class="signup-deadline">

      </div>
      <div class="signup-stats">
        <div class="title-wrap">
          <div class="title">
            报名活动
          </div>
          <div class="signed">
            已报名 <span class="number">9</span>人
          </div>
        </div>
        <div class="timer"></div>
        <div class="view-wrap">
          <div class="view">105</div>
          <div class="share">1</div>

        </div>
      </div>
      <div class="signup-info">
        <div class="title">
          报名信息
        </div>
        <div class="address">
          鹿城区百里大厦丰和巷7号2
        </div>
        <div class="valid-from">
          18年12月22日 15:30 至 20年10月15日 15:30
        </div>
      </div>
      <div class="sponsor">
        <div
          aspectratio
          w-72-72
          class="avatar"
        >
          <div aspectratio-content>
            <img src="https://gc29.cdtop100.net/attachment/images/7/2018/12/FynPPyYp07tx0uYx2M020N0s7y0Y8U.jpg">
          </div>
        </div>
        <div class="name">
          启乐智网
        </div>
      </div>

      <div class="sigup-summary">
        <div class="title">
          报名须知
        </div>
        <div class="detail">
          <p>时间：1月17日起，每周三次</p>
          <p>声乐部</p>
          <p>本期主题：最美童声</p>
          <p>现开设一主题班，限招20名宝贝！期待你们的加入</p>
          <p>舞蹈部（霜弦舞蹈）</p>
          <p>本期主题：</p>
          <p>公主养成记、古典小仙女、形体训练营</p>
          <p>每班限招12名（每主题限开2小班）精品小班制欢迎小公主们加入！</p>
          <p>原价699元！最低价168元并赠送价值128元主题服装1套</p>
          <p></p>
        </div>
      </div>

    </div>
    <van-submit-bar button-text="立即报名" />
  </div>

</template>

<script>
import { SubmitBar } from "vant";
export default {
  name: "ActivityDetailPage",
  components: {
    [SubmitBar.name]: SubmitBar
  }
};
</script>

<style lang="scss">
.content {
  padding-bottom: 50px;
}
.detail-page {
  background-color: #f5f4f9;
}
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

[w-375-175] {
  aspect-ratio: "375:175";
}

[aspectratio-content] img {
  width: 100%;
  height: 100%;
  vertical-align: top;
}

.activity-title {
  padding: 10px;
  font-size: 16px;
  color: #333333;
  background-color: #ffffff;
}

.signup-stats {
  padding: 10px;
  background-color: #ffffff;
  margin-bottom: 10px;
  .title-wrap {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 10px;
    .title {
      font-size: 16px;
      color: #ff7b33;
    }
    .signed {
      font-size: 14px;
      color: #828282;
      .number {
        color: #ff7b33;
      }
    }
  }
  .view-wrap {
    display: flex;
    font-size: 14px;
    color: #828282;
    .view {
      margin-right: 10px;
    }
  }
}

.signup-info {
  margin-bottom: 10px;
  background-color: #ffffff;
  .title {
    padding: 10px;
    font-size: 14px;
  }
  .address {
    padding: 10px;
    color: #828288;
    font-size: 14px;
  }
  .valid-from {
    padding: 10px;
    color: #fe5001;
    font-size: 14px;
  }
}

.sponsor {
  display: flex;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #ffffff;
  [w-72-72] {
    aspect-ratio: "72:72";
    img {
      border-radius: 5px;
    }
  }
  .avatar {
    width: 36px;
  }

  .name {
    margin-left: 10px;
    font-size: 14px;
  }
}

.sigup-summary {
  margin-bottom: 20px;
  background-color: #ffffff;
  .title {
    padding: 10px;
    font-size: 14px;
  }
  .detail {
    padding: 10px;
    p {
      font-size: 14px;
      margin: 0 0 10px;
    }
  }
}
</style>
