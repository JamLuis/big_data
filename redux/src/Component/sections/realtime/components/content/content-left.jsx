import React, { Component, ReactDOM } from 'react';
// import PropTypes from 'prop-types';
import template from '../../../../temp/template';
import { Layout, Row, Col } from 'antd';
import ChartLeftCenter from '../charts/left/left-center'
import ChartLeftBottom from '../charts/left/left-bottom'
import moment from 'moment'
// import Siders from '../componets/siders';

// const { Header, Footer, Sider, Content } = Layout;
/*=============
 群主页
 ==============*/
class ContentLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div id='content-left' style={{ width: '100%', height: '100%' }}>
                <div className="ctn-left" style={{ width: '100%', height: 295 }}>
                    <span className="realtime-title">
                        地理介绍
                    </span>
                    <div style={{ padding: '8px 45px' }}>
                        <span style={{ fontSize: 46, fontFamily: 'icrosoft YaHei', display: 'inline-block' }}>东</span>
                        <span style={{ display: 'inline-block',position: 'absolute', top: 208 }}>
                            <p style={{fontSize: 26, lineHeight: 0}}>东二环xxxx广场</p>
                            <p style={{fontSize: 18, lineHeight: 0}}>xxxxxxxxxx</p>
                        </span>
                        <span style={{ fontSize: 14, color: '#02CCCE', display: 'block', marginTop: 28 }}>东二环xxxxxx广场位于连江路与塔头路的交汇处，地处晋安新区中心CBD的腹心地块。</span>
                        <div style={{ width: '100%' ,marginTop: 22}}>
                            <p>
                                <div style={{ width: '50%', display: 'inline-block' }}>占地面积：226.62亩</div><div style={{ width: '50%', display: 'inline-block' }}>主力户型：城市综合体</div>
                            </p>
                            <p>
                                <div style={{ width: '50%', display: 'inline-block' }}>占项目区域：晋安区</div><div style={{ width: '50%', display: 'inline-block' }}>物业类别：普通公寓 写字楼</div>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="ctn-left" style={{ width: '100%', height: 270 }}>
                    <span className="realtime-title">东片区统计</span>
                    <ChartLeftCenter />
                </div>
                <div className="ctn-left" style={{ width: '100%', height: 337 }}>
                    <span className="realtime-title">西片区统计</span>
                    <ChartLeftBottom />
                </div>
            </div>
        )
    }
}

export default template({
    id: 'ContentLeft',
    url: '',
    data: {},
    subscribeData: ['ContentLeft'],
    component: ContentLeft
})
