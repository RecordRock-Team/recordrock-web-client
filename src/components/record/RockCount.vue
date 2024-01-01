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

<style lang="scss" scope>
.rock-count{
  li{
    flex: 0 0 50%;
    text-align:center;
    line-height: 1.4;
    // font-size: 0.875rem;
    span{
      vertical-align: middle;
      margin: 0 0.25em; 
    }
  }
}

</style>