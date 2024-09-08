import * as echarts from 'echarts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-graph',
  templateUrl: './stats-graph.component.html',
  styleUrls: ['./stats-graph.component.css']
})
export class StatsGraphComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initChart();
  }

  initChart(): void {
    const chartDom = document.getElementById('main') as HTMLElement;
    const myChart = echarts.init(chartDom);

    const option = {
      tooltip: {
        trigger: 'axis',
        formatter: '{b0}: {c0} استخدام',
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        textStyle: {
          color: '#333'
        }
      },
      grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمبر'],
        axisLine: {
          lineStyle: {
            color: '#ddd'
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#ddd'
          }
        },
        splitLine: {
          lineStyle: {
            color: '#eee'
          }
        }
      },
      series: [
        {
          name: 'استخدام',
          type: 'line',
          smooth: true,
          data: [100, 120, 130, 140, 170, 200, 250, 180, 160, 170, 180, 220],
          lineStyle: {
            color: '#A38AFF',
            width: 2
          },
          itemStyle: {
            color: '#5C59F0'
          },
          areaStyle: {
            color: 'rgba(163, 138, 255, 0.2)'
          },
          emphasis: {
            focus: 'series'
          }
        }
      ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', () => {
      myChart.resize();
    });
  }
}