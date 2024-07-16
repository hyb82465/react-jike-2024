// 柱状图组件
import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
// 1. 把功能代码都放入到这个组件中
// 2. 把可变的部分抽象成prop参数
const BarChart = ({ title, data }) => {
    const chartRef = useRef(null)
    useEffect(() => {
        //保证dom可用 才进行图表渲染
        // 1. 获取渲染图表的dom节点
        // const chartDom = document.getElementById('main')
        const chartDom = chartRef.current
        // 2. 图标初始化生成图表实例对象
        const myChart = echarts.init(chartDom);

        const defaultData = {
            categories: ['Vue', 'React', 'Angular'],
            values: [70, 80, 60]
        }

        const { categories, values } = data || defaultData
        // 3. 准备图标参数
        const option = {
            title: {
                text: title
            },
            xAxis: {
                type: 'category',
                data: categories
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: values,
                    type: 'bar'
                }
            ]
        };
        // 4. 使用图表参数完成图表的渲染
        option && myChart.setOption(option);
        // 5. 清理图表实例
        return () => myChart.dispose();
    }, [title])
    return <div ref={chartRef} style={{ width: '500px', height: '400px' }}></div>
}

export default BarChart