  <template>
  <div class="calendar">

    <!-- 월 -->
    <div class="month">
      <button @click="prevMonth" class="btn-prev-month"></button>
      <span>{{ formattedMonth }}</span>
      <button @click="nextMonth" class="btn-next-month"></button>
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
          <record-date
            v-for="(date, dateIndex) in week"
            :weekIndex="weekIndex"
            :dateIndex="dateIndex"
            :date="date"
            :currentDate="currentDate"
            :key="dateIndex"
            :class="{ today: isToday(date), selected: isSelected(date), 'other-month': !date }"
            :hasData="hasData(date)"
            @click="SET_DATE(date)" 
            class="date"
            >
          </record-date>
          <!--:hasData="$store.state.calendarInfo.some(el=>el.day === date.getDate())"-->
        </div>
        <!--// week -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore, mapMutations } from 'vuex';
import RecordDate from '@/components/record/RecordDate.vue';


export default {
  setup(){
    const store = useStore();
    const currentDate = ref(new Date());
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
      return currentDate.value.getMonth() + 1;
    });

    const prevMonth = () => {
      currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1);
    };

    const nextMonth = () => {
      currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1);
    };

    const isToday = (date) => {
      const today = new Date();
      return (
        date &&
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      );
    };

    const hasData = (date) =>{
      let matchDate =  date && date.getDate();
      return (store.state.calendarInfo.filter(el=>el.day === matchDate)[0]);
    };

    const parseDateString = (dateString) => {
      const parts = dateString.split('-');
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1; // 월은 0부터 시작하므로 1을 빼줍니다.
      const day = parseInt(parts[2], 10);

      return new Date(year, month, day);
    };
    const isSelected = (date) => {
      return (
        store.state.selectedDate &&
        date &&
        store.state.selectedDate.getDate() === date.getDate() &&
        store.state.selectedDate.getMonth() === date.getMonth() &&
        store.state.selectedDate.getFullYear() === date.getFullYear()
      );
    };
    return{
      calendar,
      currentDate,
      days,
      prevMonth,
      nextMonth,
      isToday,
      isSelected,
      hasData,
      formattedMonth,
      parseDateString
    }
  },
  methods:{
    ...mapMutations([
        "SET_DATE",
        // "SET_MONTHDATA"
    ]),
  },
  components:{
    RecordDate,
  },
  mounted(){
    this.$store.dispatch('fetchMonth');
  },
};
</script>
<style lang="scss"> 
@import '@/assets/scss/calendar.scss';
</style>
