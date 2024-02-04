import { createStore } from 'vuex';
import fetchMonth from '@/api/month.js'

export default createStore({
  state: {
    // 상태(state) 정의
    color: 'red',
    calendarInfo: [],
    selectedDate: null,
  },
  mutations: {
    // 동기적인 상태 변이(mutations) 정의
    SET_COLOR(state, data) {
      state.color = data;
    },
    SET_DATE(state, data) {
      state.selectedDate = data;
    },
    SET_MONTHDATA(state, data) {
      state.calendarInfo = data;
    },
    SET_ADDGRADE(state,data) {
      let addTarget = state.calendarInfo.filter(el=>el.day === data.day)[0];
      addTarget['clear_record'].push(addTarget['clear_record'][addTarget['clear_record'].length-1])
      console.log(state.calendarInfo);
    },
  },
  actions: {
    // 비동기적인 상태 변이(actions) 정의
    async fetchMonth({commit}){
      const response = await fetchMonth();
      commit('SET_MONTHDATA', response.data);
    }
  },
  getters: {
    // 상태(state)에 기반한 getter 정의
  }
});