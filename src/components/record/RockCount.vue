<template>
  <li>
    <span class="grade-circle" :class="`${ Object.keys(rock)[0] }`"></span> 
    <span class="count">{{ Object.values(rock)[0] }}</span>
  </li>
</template>

<script>
export default {
  props:{
    rock: Object
  },
}
</script>
