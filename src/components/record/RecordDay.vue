<template>
  <div>
    <span class="num">
      {{ date ? date.getDate() : calculateOtherMonthDate(dateIndex) }}
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
    currentDate: Object,
    events: Array
  },
  components:{
    RockCount
  },
  methods: {
    calculateOtherMonthDate(dateIndex) {
      const firstDayOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
      const lastDayOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0);
      const daysInLastMonth = lastDayOfMonth.getDate();
      const startDay = firstDayOfMonth.getDay();
      const lastMonthDate = daysInLastMonth - (startDay - dateIndex) + 1;
      
      if (dateIndex < startDay) {
        // 전월의 날짜
        return lastMonthDate;
      } else {
        // 다음월의 날짜
        return lastMonthDate - daysInLastMonth;
      }
    },
    hasEvent(date) {
      // date 이벤트가 있는지 여부
      return this.events.some((event) => event.date.getTime() === date.getTime());
      // return false;
    },
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