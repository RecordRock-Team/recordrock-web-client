<template>
  <div class="palette">
    <button type="button" class="btn_color" v-for="color in colors" :key="color" @click="SET_COLOR(Object.values(color)[0])">
      <span class="grade-circle" :class="`${Object.values(color)[0]}`"></span><br>
      <span>{{Object.keys(color)[0]}}</span>
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props:{
    color: Object,
    showPalette: Object
  },
  setup(){
    const colors = [
      {"갈색":"brown"},{"빨강":"red"},{"핑크":"pink"},{"주황":"orange"},{"노랑":"yellow"},{"초록":"green"},
      {"하늘":"sky"},{"파랑":"blue"},{"남색":"navy"},{"보라":"violet"},{"회색":"grey"},{"검정":"black"},
      {"흰색":"white"}
    ];
    return{
      colors,
    }
  },
  methods:{
    ...mapMutations([
      "SET_COLOR"
    ])
  }
}
</script>

<style lang="scss" scope>
  .palette{
    width: 100%;
    background-color:  #fff;
    border-radius: 1rem;
    button{
      text-align: center;
    }
  }
  </style>