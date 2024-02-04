<template>
  <div class="state">
    <user-profile></user-profile>
    <record-activity></record-activity>
  </div>
</template>

<script>
import UserProfile from '@/components/common/UserProfile.vue';
import RecordActivity from '@/components/record/RecordActivity.vue';
export default {
  data() {
    return {

    };
  },
  components:{
    RecordActivity,
    UserProfile,
  },
  mounted() {
  }
}
</script>

<style lang="scss">

</style>