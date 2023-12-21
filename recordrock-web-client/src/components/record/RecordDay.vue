<template>
  <div>
    <span class="num">
      {{ date ? date.getDate() : calculateOtherMonthDate(dateIndex,weekIndex) }}
      <div v-if="hasEvent(date)" class="event-dot"></div>
    </span>
    <div class="record">
      <div class="logo-box">
        <div class="img-logo"></div>
      </div>
      <div class="rock-count">
        <ul>
          <rock-count></rock-count>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import RockCount from './RockCount.vue';

export default {
  props: {
    date: Object,
    dateIndex: Number,
    weekIndex: Number,
    currentDate: Object,
    events: Array,
  },
  components:{
    RockCount
  },
  setup(props) {
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
      } else if( dateIndex > lastDay && dateIndex < 7 ){
        // 다음월의 날짜
        return nextMonthDate;
      }
    };

    const hasEvent = (date) =>{
      // date 이벤트가 있는지 여부
      return props.events.some((event) => event.date.getTime() === date.getTime());
      // return false;
    };

    return{
      calculateOtherMonthDate,
      hasEvent
    }
  },
}
</script>

<style>
.num{
  position:absolute;
  top:0;
  left:0;
}
.record{
  width: 100%;
  height: 100%;
  border: 1px solid #c8c8c8;
  border-radius: 2px;
}
.selected .record {
  background-color: #80cbc4;
}
</style>