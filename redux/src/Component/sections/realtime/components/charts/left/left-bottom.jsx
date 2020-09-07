import React, { Component } from 'react'
import template from '../../../../../temp/template';
import {
    Chart,
    Geom,
    Axis,
    Tooltip,
    Legend,
} from 'bizcharts';

class ChartLeftBottom extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = [
            {
                salary: '销量',
                date: '2000',
                value: 502,
            },
            {
                salary: '销量',
                date: '2004',
                value: 635,
            },
            {
                salary: '销量',
                date: '2008',
                value: 809,
            },
            {
                salary: '销量',
                date: '2012',
                value: 5268,
            },
            {
                salary: '销量',
                date: '2016',
                value: 4400,
            },
            {
                salary: '销量',
                date: '2020',
                value: 3634,
            }]
            const cols = {
                date: {
                    type: 'linear',
                    tickInterval: 2,
                },
            };
            const label={
                textStyle:{
                    fill: 'white'
                }
            }
        return (
            <div>
                <Chart height={300} data={data} scale={cols} forceFit style={{marginTop: 30}}>
                    <Axis name="date" label={label} />
                    <Axis name="value" label={label} />
                    {/* <Legend /> */}
                    <Tooltip />
                    <Geom type="areaStack" tooltip={false} position="date*value" color={['salary', ['l (90) 0:rgba(0, 146, 255, 1) 1:rgba(0, 146, 255, 0.1)']]} />
                    <Geom type="lineStack" position="date*value" size={2} color={['salary', ['rgba(0, 146, 255, 1)', '#00ff00']]} />
                </Chart>
            </div>
        )
    }
}
export default template({
    id: 'ChartLeftBottom',
    url: '',
    data: {},
    subscribeData: ['ChartLeftBottom'],
    component: ChartLeftBottom
})