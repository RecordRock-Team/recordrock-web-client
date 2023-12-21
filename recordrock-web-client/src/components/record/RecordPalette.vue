<template>
  <div class="palette">
    <button type="button" class="btn_color" v-for="color in colors" :key="color" @click="changeColor(Object.values(color)[0])">
      <span class="circle-color" :class="`${Object.values(color)[0]}`"></span><br>
      <span>{{Object.keys(color)[0]}}</span>
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  props:{
    color: Object
  },
  setup(){
    const colors = [
      {"갈색":"brown"},{"빨강":"red"},{"핑크":"pink"},{"주황":"orange"},{"노랑":"yellow"},{"초록":"green"},
      {"하늘":"sky"},{"파랑":"blue"},{"남색":"navy"},{"보라":"violet"},{"회색":"grey"},{"검정":"black"},
      {"흰색":"white"}];
    return{
      colors
    }
  },
  methods:{
    ...mapMutations([
      "changeColor"
    ])
  }
}
</script>

<style lang="scss">
  .palette{
    width: 100%;
    button{
      text-align: center;
    }
  }
  .circle-color{
    display: inline-block;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,0.15);
    &.brown{
      background-color:#804040;
    }
    &.grey{
      background-color:#c0c0c0;
    }
    &.violet{
      background-color:#cb9bf2;
    }
    &.red{
      background-color: #ef050c;
    }
    &.blue{
      background-color: #287bf9;
    }
    &.green{
      background-color: #229527;
    }
    &.orange{
      background-color:#fd7800;
    }
    &.yellow{
      background-color:#fff200;
    }
    &.sky{
      background-color:#b0d8ff;
    }
    &.pink{
      background-color:#ffcaeb;
    }
    &.navy{
      background-color:#2027b7;
    }
    &.black{
      background-color:#000000;
    }
    &.white{
      background-color:#ffffff;
    }
  }
</style>