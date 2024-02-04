<template>
  <div class="record-count">
    <span class="grade">
      <button type="button" @click="openPalette">
        <span class="grade-circle" :class="`${ Object.keys(grade)[0] }`"></span>
      </button>
    </span>
    <div class="grade-choose" v-if="showPalette">
      <record-palette></record-palette>
      <button type="button" @click="closePalette">닫기</button>
    </div>
    <span class="count">
      <input type="number" :placeholder="`${ Object.values(grade)[0] }`">
      개
    </span>
    <button type="button" class="btn-remove" @click="RemoveRock">
      <span>삭제</span>
    </button>
  </div>
</template>

<script>
import { ref } from 'vue';
import RecordPalette from '@/components/record/RecordPalette.vue';

export default {
  props:{
    grade: Object
  },
  setup(){
    const showPalette = ref(false);
    const openPalette = () =>{
      showPalette.value = true;
    };
    const closePalette = () =>{
      showPalette.value = false;
    };

    const RemoveRock =(e)=>{
      if(e.currentTarget.closest('.grade-unit').querySelectorAll('.record-count').length <= 1) {
        alert('최소 1개 이상의 난이도가 필요합니다');
        return;
      }
      e.currentTarget.closest('.record-count').remove();
    };
    return{
      RemoveRock,
      openPalette,
      closePalette,
      showPalette
    }
  },
  components:{
    RecordPalette,
  },
}
</script>

<style>

</style>