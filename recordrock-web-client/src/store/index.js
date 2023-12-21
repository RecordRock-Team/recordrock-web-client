import { createStore } from 'vuex';

export default createStore({
  state: {
    // 상태(state) 정의
    color: 'red',
  },
  mutations: {
    // 동기적인 상태 변이(mutations) 정의
    changeColor(state, data) {
      state.color = data;
    }
  },
  actions: {
    // 비동기적인 상태 변이(actions) 정의
  },
  getters: {
    // 상태(state)에 기반한 getter 정의
  }
});