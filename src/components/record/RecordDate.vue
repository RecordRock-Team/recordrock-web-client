<template>
  <div>
    <div class="date-inner">
      <span class="num">
        {{ date ? date.getDate() : calculateOtherMonthDate(dateIndex,weekIndex) }}
      </span>
      <div class="record" v-if="hasData">
        <div class="logo-box">
          <div class="img-logo">
            <img :src="hasData['img_url']" alt="">
          </div>
        </div>
        <div class="rock-count">
          <ul>
            <rock-count v-for="(rock,index) in hasData['clear_record']" :key="index" :rock="rock"></rock-count>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import RockCount from '@/components/record/RockCount.vue';


export default {
  props: {
    date: Object,
    dateIndex: Number,
    weekIndex: Number,
    currentDate: Object,
    hasData: Object
  },
  components:{
    RockCount
  },
  setup(props) {
    const clearInfo = ref(null);
    // const rocks = ref([{'red':2},{'green':6},{'blue':2},{'black':6}]);]
    
    const calculateOtherMonthDate = (dateIndex, weekIndex) => {
      const firstDayOfMonth = new Date(props.currentDate.getFullYear(), props.currentDate.getMonth(), 1);
      const lastDayOfMonth = new Date(props.currentDate.getFullYear(), props.currentDate.getMonth() + 1, 0);
      const daysInLastMonth = lastDayOfMonth.getDate();
      const startDay = firstDayOfMonth.getDay();
      const lastDay = lastDayOfMonth.getDay();
      const lastMonthDate = daysInLastMonth - (startDay - dateIndex) + 1;
      const nextMonthDate = (dateIndex - lastDay);

      if (dateIndex < startDay && weekIndex === 0) {
        // 전월의 날짜
        return lastMonthDate;
      } else if( dateIndex > lastDay && dateIndex < 7 )
        // 다음월의 날짜
        return nextMonthDate;
    };
    
    return{
      calculateOtherMonthDate,
      clearInfo,
    }
  },
  mounted(){
    this.$store.dispatch('fetchMonth');
  },
}
</script>
