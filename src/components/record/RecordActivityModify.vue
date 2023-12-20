<template>
  <div>
    <span style="color:red">수정 컴포넌트</span> <!-- default 숨김 상태 -->
    <!-- 방문 장소 및 횟수 -->
    <div class="place">
      <strong>누적방문</strong>
      <div class="place-box">
        <div class="search-places">
          <input type="search" title="암장 검색" placeholder="암장 이름을 입력해주세요">
          <button type="button">search</button>
        </div>

        <ul class="search-list">
          <li>
            <div class="">
              <span>logo</span>
              <span>피커스 종로</span>
            </div>
          </li>
          <li>
            <div class="">
              <span>logo</span>
              <span>담장</span>
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
        <input type="number" id="hour"> <label for="hour">시간</label>
        <input type="number" id="minute"> <label for="minute">분</label>
      </div>
    </div>
    <!--// 운동 시간 -->

    <!-- 난이도 -->
    <div class="difficulty">
      <strong>난이도</strong>
      <div class="difficulty-box">

        <div class="difficulty-unit">

          <div>
            <span class="grade">
              <button type="button" @click="openPalette">
                <span class="circle-color" :class="$store.state.color"></span>
              </button>
            </span>
            <div v-if="showPalette">
              <record-palette></record-palette>
              <button type="button" @click="closePalette">취소</button>
            </div>
            <span class="count">
              <input type="number">
            </span>
          </div>

          <div class="">
            <span>직접추가</span>
            <div class="grade">
              <div class="palette">
                <input type="color" class="inp_color_picker">
              </div>
            </div>
            <span class="count">
              <input type="number">
            </span>
          </div>

        </div>
      </div>
    </div>
    <!--// 난이도 -->

    <!-- 메모 -->
    <div class="note">
      <strong>메모</strong>
      <div class="note-box">
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
    </div>
    <!--// 메모 -->

    <button type="submit">저장</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import RecordPalette from './RecordPalette.vue';

export default {
  setup(){
    const showPalette = ref(false);

    const openPalette = () =>{
      showPalette.value = true;
    };
    const closePalette = () =>{
      showPalette.value = false;
    };

    return{
      showPalette,
      closePalette,
      openPalette,
    };
  },
  components:{
    RecordPalette,
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/components/recordActivity.scss';

</style>