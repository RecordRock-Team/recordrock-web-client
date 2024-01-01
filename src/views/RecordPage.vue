<template>
  <div class="record-page">
    <div class="record-calendar">
      <h2 class="page-title">RECORD</h2>
      <record-calendar></record-calendar>
    </div>
    <div class="record-state">
      <record-state></record-state>
    </div>
  </div>
</template>

<script>
import RecordCalendar from '../components/record/RecordCalendar.vue';
import RecordState from '../components/record/RecordState.vue';

export default {
  components:{
    RecordCalendar,
    RecordState,
  },
}
</script>

<style lang="scss">
  .record-page{
    @include flex-box(flex-start,flex-start);
    padding: 5.9% 2.85%;
  }
  .record-calendar{
    flex:  0 1 73%;
  }
  .record-state{
    flex: 1 0 23%;
  }
</style>