<template>
  <div class="record-state">
    <div class="profile">

    </div>
    <div class="activity">
      <record-activity></record-activity>
      <record-activity-modify></record-activity-modify>
    </div>
  </div>
</template>

<script>
import RecordActivity from './RecordActivity.vue';
import RecordActivityModify from './RecordActivityModify.vue';
export default {
  data() {
    return {

    };
  },
  components:{
    RecordActivity,
    RecordActivityModify
  },
  mounted() {
  }
}
</script>

<style>

</style>