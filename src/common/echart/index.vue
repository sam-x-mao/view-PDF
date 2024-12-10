<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
</template>

<script>
//import tdTheme from './theme.json' // 引入默认主题S

export default {
  name: 'echart',
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '2.5rem'
    },
    options: {
      type: Object,
      default: ()=>({})
    }
  },
  data () {
    return {
      chart: null,
      timing:null,
    }
  },
  watch: {
    options: {
      handler (options) {
        // 设置true清空echart缓存
        this.chart?.setOption(options)
      },
      immediate: true,
      deep: true
    }
  },
  mounted () {
   // this.$echarts.registerTheme('tdTheme', tdTheme); // 覆盖默认主题
    this.initChart();
    // 监听窗口大小变化
  },
  beforeDestroy () {
    this.chart.dispose()
    this.chart = null
    this.timing = null
    clearInterval(this.timing)
  },
  methods: {
    initChart () {
      // 初始化echart
      const chart = document.getElementById(this.id);
      chart.removeAttribute("_echarts_instance_");
      this.chart = this.$echarts.init(chart)
       this.chart?.setOption(this.options)
       this.timing = setInterval(() => {
        this.chart?.setOption(this.options)
      }, 6000)
      // window.addEventListener('resize', function () {
      // 当窗口大小变化时，重新设置图表的大小
      this.chart.resize();
    // });
    }
  }
}
</script>

<style>
</style>
