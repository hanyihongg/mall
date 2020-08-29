<template>
  <div class="profile-info">
    <div class="avatar">
      <img src="~assets/img/profile/avatar.png" alt="">
    </div>
    <div class="message">
      <a href="#">登录/注册</a>
      <p>
        <img src="~assets/img/profile/phone.png" alt="">
        <span>暂无绑定手机号</span>
      </p>
    </div>

    <div class="arrow">
      <img src="~assets/img/profile/arrow.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileInfo"
}
</script>

<style scoped>
.profile-info{
  height:80px;
  background: var(--color-tint);
  align-items: center;
  display: flex;
  color:#fff;
  font-size: 10px;
}
a{
  color:#fff;
  font-size: 15px;
}
.avatar img{
  width:50px;
  height: 50px;
}
.avatar{
  padding:10px;
}
.message{
  flex:1;
}
p{
  margin-top:8px;
}
.message img{
  width:13px;
  height:13px;
  vertical-align:bottom;
}
.arrow{
  margin:0px 10px;
}
</style>