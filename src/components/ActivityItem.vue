<template>
  <div class="activity-item">

    <div
      aspectratio
      w-640-300
    >
      <div aspectratio-content>
        <img
          src="https://gc29.cdtop100.net/attachment/images/7/2019/03/vMFabe3e62q4b6zf0994HeA3500j3q.jpg"
          class="activity-poster"
        >
      </div>
    </div>
    <div class="activity-title">
      请编辑！在线预约演示（非真实活动）
    </div>
    <div class="activity-deadline"> 2021.02.11 15:30 结束报名</div>
    <div class="activity-deadline">
      人气 98 | 9 人已报名
    </div>
    <div class="activity-extra">
      <div class="activity-price">
        ￥50
      </div>
      <div class="activity-signup">立即报名</div>

    </div>

  </div>
</template>

<script>
export default {
  name: "ActivityItem"
};
</script>

<style lang="scss" scoped>
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

[w-640-300] {
  aspect-ratio: "640:300";
}

[aspectratio-content] img {
  width: 100%;
  height: 100%;
  vertical-align: top;
}

.activity-item {
  padding: 12px;
  background-color: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
}

.activity-poster {
  border-radius: 5px;
}
.activity-title {
  margin-top: 11px;
  color: #333333;
  font-size: 14px;
  margin-bottom: 10px;
}

.activity-deadline {
  color: #828282;
  font-size: 12px;
  margin-bottom: 5px;
}

.activity-extra {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.activity-price {
  font-size: 16px;
  color: #ff4768;
}

.activity-signup {
  font-size: 12px;
  color: #5d2f18;
  background-color: #feda00;
  border-radius: 3.75px;
  padding: 3.75px 7.5px;
}
</style>
