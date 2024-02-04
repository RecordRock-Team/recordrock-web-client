<template>
  <div class="activity" v-if="!$store.state.selectedDate">

    <!-- 방문 장소 및 횟수 -->
    <div class="place-area">
      <strong><span>누적</span>방문</strong>
      <div class="place-box">
        <ul>
          <li>
            <div class="place">
              <span>logo</span>
              <span>피커스 종로</span>
            </div>
            <div class="count">
              <span>3</span>회
            </div>
          </li>
          <li>
            <div class="place">
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
    <div class="time-area">
      <strong>운동 시간</strong>
      <div class="time-box">
        <div class="time-unit">
          <span>1</span> 시간
        </div>
        <div class="time-unit">
          <span>54</span> 분
        </div>
      </div>
    </div>
    <!--// 운동 시간 -->

    <!-- 난이도 -->
    <div class="grade-area">
      <strong>난이도</strong>
      <div class="grade-box">
        <ul>
          <rock-count v-for="(rock,index) in rocks" :key="index" :rock="rock"></rock-count>
        </ul>
      </div>
    </div>
    <!--// 난이도 -->

  </div>

  <div class="activity" v-else-if="$store.state.selectedDate">
    <button type="button" @click="showModify()" class="btn-edit"><span>수정</span></button>
     <!-- 방문 장소 및 횟수 -->
    <div class="place-area">
      <strong><span>{{$store.state.selectedDate.getMonth()+1}}월 {{$store.state.selectedDate.getDate()}}일</span></strong>

      <div class="place-box" v-if="!showDay">
        <ul>
          <li>
            <div class="place">
              <span><div class="img-logo"><img :src="activityData['img_url']" alt=""></div></span>
              <span>{{activityData['center_fullname']}}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="place-box" v-else>
        <div class="search-places">
          <div class="search-box">
            <input type="search" title="암장 검색" :placeholder="activityData['center_fullname']">
            <button type="button"><span>검색</span></button>
          </div>
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
    <div class="time-area">
      <strong>운동 시간</strong>
      <div class="time-box" v-if="!showDay">
        <div class="time-unit">
          <span>{{ activityData['workout_time_hour'] }}</span> 시간
        </div>
        <div class="time-unit">
          <span>{{activityData['workout_time_minute']}}</span> 분
        </div>
      </div>
      <div class="time-box" v-else>
        <div class="time-unit">
          <span><input type="number" id="hour" :placeholder="activityData['workout_time_hour']"></span> <label for="hour">시간</label>
        </div>
        <div class="time-unit">
          <span><input type="number" id="minute" :placeholder="activityData['workout_time_minute']"></span> <label for="minute">분</label>
        </div>
      </div>
    </div>
    <!--// 운동 시간 -->

    <!-- 난이도 -->
    <div class="grade-area">
      <strong>난이도</strong>
      <div class="grade-box" v-if="!showDay">
        <ul>
          <rock-count v-for="(rock,index) in activityData['clear_record']" :key="index" :rock="rock"></rock-count>
        </ul>
      </div>
      <div class="grade-box" v-else>
        <div class="grade-unit">
          <record-count v-for="(rock,index) in activityData['clear_record']" :key="index" :grade="rock"></record-count>
          <button type="button" @click="SET_ADDGRADE(activityData)">추가</button>
          <!-- <div class="">
            <span>직접추가</span>
            <div class="grade">
              <div class="palette">
                <input type="color" class="inp_color_picker">
              </div>
            </div>
            <span class="count">
              <input type="number">
            </span>
          </div> -->

        </div>
      </div>
    </div>
    <!--// 난이도 -->

    <!-- 메모 -->
    <div class="memo-area">
      <strong>메모</strong>
      <div class="memo-box" v-if="!showDay">
        <p>{{activityData['daily_memo']}}</p>
      </div>
      <div class="memo-box" v-else>
        <textarea name="" id="" :placeholder="activityData['daily_memo']"></textarea>
      </div>
    </div>
    <!--// 메모 -->

    <button type="submit" v-if="showDay" class="btn-save">저장</button>
  </div>

</template>

<script>
import { useStore,mapMutations } from 'vuex';
import { ref , computed } from 'vue';
import RecordCount from '@/components/record/RecordCount.vue';
import RockCount from '@/components/record/RockCount.vue';

export default {
  setup(){
    const store = useStore();
    const rocks = ref([{'red':2},{'green':6},{'blue':2},{'black':6}]);
    const showDay = ref(false);
    // let matchData = ref({});

    const showModify = () =>{
      showDay.value = true;
    };
    const activityData = computed (() => {
      let matchDate =  store.state.selectedDate && store.state.selectedDate.getDate();
      return store.state.calendarInfo.filter(el=>el.day === matchDate)[0];
    });
    return{
      showDay,
      showModify,
      rocks,
      // matchData,
      activityData
    };
  },
  components:{
    RecordCount,
    RockCount,
  },
  methods:{
    ...mapMutations([
      "SET_COLOR",
      "SET_ADDGRADE"
    ])
  },
  mounted(){

  }
}
</script>

<style lang="scss"> 
@import '@/assets/scss/activity.scss';
</style>
