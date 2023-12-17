<template>
  <div class="record-page">
    <div class="record-calendar">
      <div>record</div>
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
  }
}
</script>

<style>

</style>