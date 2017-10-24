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
      data: [[11, 11, 15, 13, 12, 13, 10], [1, -2, 2, 5, 3, 2, 0], ['周一', '周二', '周三', '周四', '周五', '周六', '周日']],
      option: {
        title: {
          text: '一周气温变化',
          subtext: '纯属虚构'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['最高气温', '最低气温']
        },
        toolbox: {
          show: true,
          feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: []
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              formatter: '{value} °C'
            }
          }
        ],
        series: [
          {
            name: '最高气温',
            type: 'line',
            data: []
          },
          {
            name: '最低气温',
            type: 'line',
            data: []
          }
        ]
      }
    }
  },
  methods: {
    randomData () {
      this.data[0].shift()
      this.data[1].shift()
      this.data[0].push(Math.random() * 10 + 10)
      this.data[1].push(Math.random() * 10)
      this.data[2].push(this.data[2].shift())
    }
  },
  mounted () {
    // 基于准备好的dom，初始化echarts实例
    let mychart = ECharts.init(document.querySelector('#mychart'))

    // 绘制图表
    mychart.setOption(this.option)
    mychart.setOption({
      xAxis: [
        {
          data: this.data[2]
        }
      ],
      series: [
        {
          data: this.data[0]
        }, {
          data: this.data[1]
        }
      ]
    })

    let that = this
    this.thread = setInterval(function () {
      if (that.data.length > 100) that.data.shift()
      that.randomData()

      mychart.setOption({
        xAxis: [
          {
            data: that.data[2]
          }
        ],
        series: [
          {
            data: that.data[0]
          }, {
            data: that.data[1]
          }
        ]
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