<template>
  <div class="user">
    <div class="user-pic">
      <img src="../../assets/images/img_user.png" alt="버터 프로필">
    </div>
    <div class="user-info">
      <div class="user-level">LV.2</div>
      <div class="user-nickname">쓰묻라잌버러</div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.user{
  @include radius-box(white);
  @include flex-box(flex-start,flex-end);
  .user-pic{
    width: 28.84%;
  }
  .user-info{
    margin-left: 2em;
    .user-nickname{
      font-size:1.25rem;
      font-weight: 600;
    }
  }
}
</style>