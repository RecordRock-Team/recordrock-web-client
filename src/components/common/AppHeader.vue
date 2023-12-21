<template>
  <header>
    <div>
      <router-link to="/login" class="logo">
        RR
      </router-link>
    </div>
    <div class="navigation">
      <router-link to="/record">RECORD</router-link>
      <router-link to="/community">COMMUNITY</router-link>
    </div>
    <div>
      <AppSearch></AppSearch>
      <router-link to="/settings">settings</router-link>
    </div>
  </header>
</template>

<script>
import AppSearch from './AppSearch.vue';

export default {
  name: 'AppHeader',
  components: {
    AppSearch
  }
}
</script>

<style scoped>
</style>
