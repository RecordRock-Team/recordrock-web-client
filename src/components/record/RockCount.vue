<template>
  <li v-for="(rock,index) in rocks" :key="index">
    <span class="grade" :class="`${Object.keys(rock)[0]}`"></span>
    <span class="count">{{ Object.values(rock)[0] }}</span>

  </li>
</template>

<script>

export default {
  props:{
    rocks: Object
  },
}
</script>

<style>
  ul{
    list-style: none;
  }
</style>