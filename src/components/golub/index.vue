<template>
    <div v-if="hintShow"
      class="animate animate__animated animate__bounceIn" >
        
    </div>
  </template>
  
  <script>
  export default {
    props:{
      cabinInfo:Object
    },
    data() {
      return {
        hintShow:false,
      }
    },
    watch:{

    },
    methods:{
  
    }
  }
  </script>
  
  <style lang="scss" scoped>
  #center {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  </style>
  