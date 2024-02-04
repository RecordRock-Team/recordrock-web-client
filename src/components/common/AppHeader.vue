<template>
  <header class="header">
    <div class="header-left">
      <router-link to="/login" class="logo">
        RECORD<br>ROCK
      </router-link>
      <div class="navigation">
        <router-link to="/record">RECORD</router-link>
        <router-link to="/community">COMMUNITY</router-link>
      </div>
    </div>
    <div class="header-right">
      <app-search></app-search>
      <router-link to="/settings" class="btn-settings"><span>설정</span></router-link>
    </div>
  </header>
</template>

<script>
import AppSearch from '@/components/common/AppSearch.vue';

export default {
  name: 'AppHeader',
  components: {
    AppSearch
  }
}
</script>

<style scoped>
</style>
