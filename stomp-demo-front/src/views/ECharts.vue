<template>
  <div>
    <h1>ECharts</h1>
    <div id="mychart" class="mychart"></div>
  </div>
</template>

<script>
import ECharts from 'echarts'

export default {
  name: 'echarts',
  data () {
    return {
      thread: null,
      now: +new Date(),
      data: [],
      option: {
        title: {
          text: '动态数据 + 时间坐标轴'
        },
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            params = params[0]
            var date = new Date(params.name)
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1]
          },
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          type: 'time',
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%'],
          splitLine: {
            show: false
          }
        },
        series: [{
          name: '模拟数据',
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          data: []
        }]
      }
    }
  },
  methods: {
    randomData () {
      this.now = new Date(+this.now + (24 * 3600 * 1000))
      let value = Math.random() * 1000 + 500
      return {
        name: this.now.toString(),
        value: [
          [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'), Math.round(value)
        ]
      }
    }
  },
  mounted () {
    // 基于准备好的dom，初始化echarts实例
    let mychart = ECharts.init(document.querySelector('#mychart'))
    for (var i = 0; i < 100; i++) {
      this.data.push(this.randomData())
    }

    // 绘制图表
    mychart.setOption(this.option)

    let that = this
    this.thread = setInterval(function () {
      if (that.data.length > 100) that.data.shift()
      that.data.push(that.randomData())

      mychart.setOption({
        series: [{
          data: that.data
        }]
      })
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.thread)
  }
}
</script>

<style scoped>
.mychart {
  width: 500px;
  height: 500px;
}
</style>