<template>
  <h2 class="page-title">LOGIN</h2>
  <div class="page-cont login-cont">
    <div class="login-box">
      <fieldset>
        <input type="text" class="inp-id">
        <input type="password" class="inp-pw">
        <button type="submit" class="btn-login">
          로그인
        </button>
      </fieldset>
    </div>
    <!-- <div class="sns-login">
      <button type="button" class="kakao-login"><span>카카오 로그인</span></button>
      <button type="button" class="naver-login"><span>네이버 로그인</span></button>
      <button type="button" class="google-login"><span>구글 로그인</span></button>
    </div> -->
  </div> 
</template>

<script>
export default {

}
</script>

<style scope lang="scss">
  .login-cont {
    max-width: 300px;
    margin: auto;
  }
  .login-box{
    margin-top: 1rem;
    input{
      width: 100%;
      margin-bottom: 0.5em;
    }
    .btn-login{
      width: 100%;
      background-color: var(--black);
      color: var(--white);
      padding: 1em;
    }
    input[type="text"],input[type="number"],input[type="search"],input[type="password"]{
      border: 1px solid var(--black);
      background-color: transparent;
    }
  }
  
</style>