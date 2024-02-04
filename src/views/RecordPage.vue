<template>
  <h2 class="page-title">RECORD</h2>
  <div class="page-cont record-page">
    <div class="record-state">
      <record-state></record-state>
    </div>
    <div class="record-calendar">
      <record-calendar></record-calendar>
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
@import '@/assets/scss/record.scss';
</style>