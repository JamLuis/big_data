import {
    G2,
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend,
    View,
    Guide,
    Shape,
    Facet,
    Util
} from "bizcharts";
import DataSet from "@antv/data-set";
import React, { Component, ReactDOM } from 'react';
// import PropTypes from 'prop-types';
import template from '../../../../../temp/template';
class ChartLeftCenter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {


        const data = [{
            name: "2018年12月",
            "商家": 18.9,
            "企业": 28.8,
            "商铺": 39.3,
            "店铺": 81.4,
            "其他": 20.3,
        },
        {
            name: "2019年1月",
            "商家": 12.4,
            "企业": 23.2,
            "商铺": 34.5,
            "店铺": 99.7,
            "其他": 35.5,
        }] //静态假数据

        const ds = new DataSet();
        const dv = ds.createView().source(data);
        dv.transform({
            type: "fold",
            fields: ["商家", "企业", "商铺", "店铺",  "其他" ],
            // 展开字段集
            key: "类别",
            // key字段
            value: "数量" // value字段
        });
        const label={
            textStyle:{
                fill: 'white'
            }
        }
        return (
            <div style={{}}>
                <Chart height={240} data={dv} style={{marginTop: 30, marginRight: 20}} forceFit>
                    <Axis name="类别" label={label} />
                    <Axis name="数量" label={label}/>
                    <Legend  position="top" textStyle={{fill: 'white'}}  />
                    <Tooltip
                        crosshairs={{
                            type: "y"
                        }}
                    />
                    <Geom
                        type="interval"
                        position="类别*数量"
                        color={['name', ['#F5A773', '#2FA3DA']]}
                        adjust={[
                            {
                                type: "dodge",
                                marginRatio: 1 / 32
                            }
                        ]}
                    />
                </Chart>
            </div >
        )
    }

}

export default template({
    id: 'ChartLeftCenter',
    url: '',
    data: {},
    subscribeData: ['ChartLeftCenter'],
    component: ChartLeftCenter
})