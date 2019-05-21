import React, { Component } from 'react';
import { connect } from 'react-redux';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class TempChart extends Component {
  componentDidUpdate() {
    const { forcastData } = this.props;
    const { page } = this.props;
    const startIndex = page * 10;
    const endIndex = startIndex + 10;
    const arr = forcastData.slice(startIndex, endIndex);
    const minTemps = [];
    const maxTemps = [];
    for (const item of arr) {
      minTemps.push(Math.round(item.getIn(['main', 'temp_min'])));
      maxTemps.push(Math.round(item.getIn(['main', 'temp_max'])));
    }

    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('chart-days'));
    // 绘制图表
    myChart.setOption({
      xAxis: {
        show: false,
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        type: 'category',
        boundaryGap: false,
      },
      yAxis: {
        show: false,
        min: 'dataMin',
        max: 'dataMax',
      },
      series: [
        {
          data: minTemps,
          type: 'line',
          symbol: 'circle',
          symbolSize: 6,
          lineStyle: {
            color: '#96cdf7',
            width: 3,
          },
          itemStyle: {
            color: '#96cdf7',
            borderColor: '#96cdf7',
          },
          label: {
            show: true,
            color: '#384c78',
            fontSize: 18,
            formatter: '{@degree}°',
            lineHeight: 40,
          },
        },
      ],
      grid: {
        x: 50,
        y: 50,
        x2: 50,
        y2: 50,
      },
    });
  }

  render() {
    return <div id="chart-days">test</div>;
  }
}

const mapStateToProps = state => ({
  forcastData: state.getIn(['home', 'forcast']),
  page: state.getIn(['home', 'page']),
});

export default connect(
  mapStateToProps,
  null
)(TempChart);
