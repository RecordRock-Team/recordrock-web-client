<template>
  <div v-if="!$store.state.selectedDate">

    <!-- 방문 장소 및 횟수 -->
    <div class="place">
      <strong><span>누적</span>방문</strong>
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

  </div>

  <div v-else-if="$store.state.selectedDate">
    <button type="button" @click="showModify()">수정</button>
     <!-- 방문 장소 및 횟수 -->
    <div class="place">
      <strong v-if="!showDay"><span>누적</span>방문</strong>
      <strong v-else><span>{{$store.state.selectedDate.getMonth()+1}}월 {{$store.state.selectedDate.getDate()}}일</span></strong>
      <div class="place-box" v-if="!showDay">
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
      <div class="place-box" v-else>
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
      <div class="time-box" v-if="!showDay">
        <span>1</span> 시간
        <span>54</span> 분
      </div>
      <div class="time-box" v-else>
        <input type="number" id="hour"> <label for="hour">시간</label>
        <input type="number" id="minute"> <label for="minute">분</label>
      </div>
    </div>
    <!--// 운동 시간 -->

    <!-- 난이도 -->
    <div class="difficulty">
      <strong>난이도</strong>
      <div class="difficulty-box" v-if="!showDay">
        <ul>
          <li> <span style="background-color:#ff6600">ㅇ</span> 3</li>
          <li> <span style="background-color:#ff6600">ㅇ</span> 2</li>
          <li> <span style="background-color:#ff6600">ㅇ</span> 1</li>
          <li> <span style="background-color:#ff6600">ㅇ</span> 4</li>
        </ul>
      </div>
      <div class="difficulty-box" v-else>
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
      <div class="note-box" v-if="!showDay">
        <p>아무생각이없다</p>
      </div>
      <div class="note-box" v-else>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
    </div>
    <!--// 메모 -->

    <button type="submit" v-if="showDay">저장</button>
  </div>

</template>

<script>
import { ref } from 'vue';
import RecordPalette from './RecordPalette.vue';

export default {
  setup(){
    const showPalette = ref(false);
    const showDay = ref(false);

    const openPalette = () =>{
      showPalette.value = true;
    };
    const closePalette = () =>{
      showPalette.value = false;
    };

    const showModify = () =>{
      showDay.value = true;
      console.log(showDay,showPalette)
    };
    return{
      showPalette,
      closePalette,
      openPalette,
      showDay,
      showModify,
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