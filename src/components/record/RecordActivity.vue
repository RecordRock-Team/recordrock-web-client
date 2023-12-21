<template>
  <div>
    <button type="button">수정</button><!-- 수정 클릭 시 수정 컴포넌트 보여 짐 -->
    <!-- 방문 장소 및 횟수 -->
    <div class="place">
      <strong>누적방문</strong>
      <div class="place-box">
        <ul>
          <li>
            <div class="">
              <span>logo</span>
              <span>피커스 종로</span>
            </div>
            <div class="count">
              <span>3</span>회
            </div>
          </li>
          <li>
            <div class="">
              <span>logo</span>
              <span>담장</span>
            </div>
            <div class="count">
              <span>3</span>회
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--// 방문 장소 및 횟수 -->

    <!--운동 시간 -->
    <div class="time">
      <strong>운동 시간</strong>
      <div class="time-box">
        <span>1</span> 시간
        <span>54</span> 분
      </div>
    </div>
    <!--// 운동 시간 -->

    <!-- 난이도 -->
    <div class="difficulty">
      <strong>난이도</strong>
      <div class="difficulty-box">
        <ul>
          <li> <span style="background-color:#ff6600">ㅇ</span> 3</li>
          <li> <span style="background-color:#ff6600">ㅇ</span> 2</li>
          <li> <span style="background-color:#ff6600">ㅇ</span> 1</li>
          <li> <span style="background-color:#ff6600">ㅇ</span> 4</li>
        </ul>
      </div>
    </div>
    <!--// 난이도 -->

    <!-- 메모 -->
    <div class="note">
      <strong>메모</strong>
      <div class="note-box">
        <p>아무생각없음</p>
      </div>
    </div>
    <!--// 메모 -->

  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>