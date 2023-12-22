<template>
  <div>
    <span class="num">
      {{ date ? date.getDate() : calculateOtherMonthDate(dateIndex,weekIndex) }}
    </span>

    <div class="record"><!-- v-if="hasEvent" -->
      <div class="logo-box">
        <div class="img-logo">
          <img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231107_76%2F1699354814307vdydC_JPEG%2F%25C0%25BB%25C1%25F6%25B7%25CE%25C1%25A1.jpg" alt="">
        </div>
      </div>
      <div class="rock-count">
        <ul>
          <rock-count :rocks="rocks"></rock-count>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import RockCount from './RockCount.vue';

export default {
  props: {
    date: Object,
    dateIndex: Number,
    weekIndex: Number,
    currentDate: Object,
  },
  components:{
    RockCount
  },
  setup(props) {
    const rocks = ref([{'red':2},{'green':6},{'blue':2},{'black':6}]);
    const hasEvent = ref(false);
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
      }
      // const hasEvent = (date) =>{
      // date 이벤트가 있는지 여부
      // console.log(props.events.some((event) => event.date.getTime() === date.getTime()))
      // return props.events.some((event) => event.date.getTime() === date.getTime());
      // return false;
    // };

    return{
      calculateOtherMonthDate,
      hasEvent,
      rocks
      // hasDate
    }
  },
}
</script>

<style lang="scss">
.num{
  position:absolute;
  top:1.5rem;
  left:2rem;
  font-size: 1rem;
  z-index: 5;
}
.record{
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  &::before{
    content:'';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url('../../assets/images/bg-record.svg');
    background-size: contain;
    background-repeat: no-repeat;
  }
  .logo-box{
    height: 55.55%;
    margin: 4.762%;
  }
  .img-logo{
    height: 100%;
    mask-image: url('../../assets/images/mask-place.svg');
    mask-repeat: no-repeat;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  .rock-count{
    position: relative;
  }
}
.selected.date {
  background-color: #80cbc4;
}
</style>