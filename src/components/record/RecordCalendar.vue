  <template>
  <div class="calendar">

    <!-- 월 -->
    <div class="header">
      <button @click="prevMonth">&lt;</button>
      <span>{{ formattedMonth }}</span>
      <button @click="nextMonth">&gt;</button>
    </div>

    <!-- 요일 -->
    <div class="days">
      <div v-for="day in days" :key="day" class="day">{{ day }}</div>
    </div>

    <!-- 날짜 -->
    <div class="dates-wrap">
      <div class="dates">
        <!-- week -->
        <div
          v-for="(week, weekIndex) in calendar"
          :key="weekIndex"
          class="week"
        >
          <record-day
            v-for="(date, dateIndex) in week"
            :weekIndex="weekIndex"
            :date="date"
            :dateIndex="dateIndex"
            :nextMonthDate="nextMonthDate"
            :week="week"
            :key="dateIndex"
            :currentDate="currentDate"
            :events="events"
            class="date"
            :class="{ today: isToday(date), selected: isSelected(date), 'other-month': !date }"
            @click="selectDate(date)"
            >
          </record-day>
        </div>
        <!--// week -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import RecordDay from '../record/RecordDay.vue';

export default {
  setup(){
    const currentDate = ref(new Date());
    const selectedDate= ref(null);
    const nextMonthDate = ref(0);
    const events = ref([]);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const calendar = computed (() => {
      const firstDayOfMonth = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth(), 1);
      const lastDayOfMonth = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 0);
      const daysInMonth = lastDayOfMonth.getDate();
      const startDay = firstDayOfMonth.getDay();

      const weeks = [[]];
      let currentWeek = 0;

      for (let i = 0; i < startDay; i++) {
        weeks[currentWeek].push(null);
      }

      for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth(), i);
        if (weeks[currentWeek].length === 7) {
          currentWeek++;
          weeks[currentWeek] = [];
        }
        weeks[currentWeek].push(date);
      }

      while (weeks[currentWeek].length < 7) {
        weeks[currentWeek].push(null);
      }

      return weeks;
    });

    const formattedMonth = computed (() => {
      return currentDate.value.toLocaleString('default', { month: 'long' });
    });

     const prevMonth = () => {
      currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1);
    };

    const nextMonth = () => {
      currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1);
    };
    const selectDate = (date) => {
      selectedDate.value = date;
      // 선택한 날짜에 대한 추가 작업 수행
    };
    // addEvent = () => {
    //   if (selectedDate) {
    //     events.push({
    //       date: selectedDate,
    //     });
    //   }
    // },
    const isToday = (date) => {
      const today = new Date();
      return (
        date &&
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      );
    };
    const isSelected = (date) => {
      return (
        selectedDate.value &&
        date &&
        selectedDate.value.getDate() === date.getDate() &&
        selectedDate.value.getMonth() === date.getMonth() &&
        selectedDate.value.getFullYear() === date.getFullYear()
      );
    };

    return{
      currentDate,
      selectedDate,
      nextMonthDate,
      events,
      days,
      prevMonth,
      nextMonth,
      selectDate,
      isToday,
      isSelected,
      formattedMonth,
      calendar,
    }
  },
  components:{
    RecordDay,
  },
};
</script>

<style lang="scss">
.calendar {
  font-family: 'Arial', sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.dates-wrap{
  position: relative;
  width:100%;
  padding-top: 100%;
  height:0;
}

.week {
  display: flex;
  width: 100%;
  height:calc(100% / 7);
}
.days {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
}
.dates{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height: 100%;
}
.date {
  position:relative;
  flex: 0 0 calc(100% / 7);
  height: 100%;
  padding: 1%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #c8c8c8;
  cursor: pointer;
  box-sizing: border-box;
}

.other-month {
  cursor: default;
  color: #aaa; /* 다른 달의 날짜는 회색으로 스타일링 */
}
.today {
  background-color: #e0f7fa;
}

</style>
