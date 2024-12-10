<template>
  <div id="index" ref="appRef">
    <view-pdf ref="viewPDf"></view-pdf>
    <button @click="viewPdf">viewPdf</button>
  </div>
</template>

<script>

import drawMixin from "../utils/drawMixin";
import ViewPdf from './viewPdf.vue';
export default {
  mixins: [ drawMixin ],
  
  data() {
    return {
  
    }
  },
  components: {
    ViewPdf
  },
  mounted() {
    // const fs = require('fs')
    // const path = require('path')
    // const folderPath = '../../public/PDF'
    // fs.readdir(folderPath, (err, files) => {
    //   if (err) {
    //     return console.error('无法扫描目录: ' + err);
    //   } 
    //    // 过滤出PDF文件
    //   const pdfFiles = files.filter(file => 
    //   path.extname(file).toLowerCase() === '.pdf');

    // // 输出PDF文件列表
    // console.log('PDF文件列表:', pdfFiles);
  // })
  },
  beforeDestroy () {

  },
  methods: {
    viewPdf(){
      this.$refs.viewPDf.visible = true
    }

  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';
</style>
