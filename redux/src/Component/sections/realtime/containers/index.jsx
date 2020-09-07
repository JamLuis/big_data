import React, { Component, ReactDOM } from 'react';
// import PropTypes from 'prop-types';
import template from '../../../temp/template';
import { Layout, Row, Col } from 'antd';
import moment from 'moment'
// import Siders from '../componets/siders';
import ContentLeft from '../components/content/content-left'

const { Header, Footer, Sider, Content } = Layout;
/*=============
 群主页
 ==============*/
class RealTIme extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    getDayOfWeek = (day) => {
        let rs = '星期';
        switch (Number(day)) {
            case 1: rs += '一'; break;
            case 2: rs += '二'; break;
            case 3: rs += '三'; break;
            case 4: rs += '四'; break;
            case 5: rs += '五'; break;
            case 6: rs += '六'; break;
            case 0: rs += '天'; break;
        }
        return rs;
    }

    render() {
        // const { clientWidth, clientHeight } = document.body;
        const minHeight = 1080, minWidth = 1920, headHeight = 130, contentHeight = minHeight - headHeight;
        return (
            <div id='realtime'
                style={{
                    width: minWidth, height: minHeight, minHeight: minHeight,
                    minWidth: minWidth, overflow: 'auto', color: 'white'
                }}>
                <div style={{ height: headHeight }} >
                    <div className="realtime-head"><span>{moment().get('year')}年{moment().get('month') + 1}月{moment().get('date')}日&nbsp;&nbsp;{this.getDayOfWeek(moment().get('days'))}</span></div>
                    <div className="realtime-head"><span>静安区东二环万达商圈大数据</span></div>
                    <div className="realtime-head">公告：关于建设平安福州</div>
                </div>
                <div style={{ height: contentHeight, padding: '0px 50px 35px 50px' }}>
                    <div className="realtime-content realtime-content-left">
                        <ContentLeft />
                    </div>
                    <div className="realtime-content realtime-content-center"></div>
                    <div className="realtime-content realtime-content-right"></div>
                </div>
            </div>
        )
    }
}

export default template({
    id: 'RealTIme',
    url: '',
    data: {},
    subscribeData: ['RealTIme'],
    component: RealTIme
})
