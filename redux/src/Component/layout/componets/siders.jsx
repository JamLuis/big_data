import React, { Component } from 'react'
import template from '../../temp/template';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'

class Siders extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Menu
                    // style={{ width: 256 }}
                    mode="inline"
                >
                    <Menu.Item key="home"><Link to="/" ><span className="menu_txt" ><Icon type="home" />首页</span></Link> </Menu.Item>
                    <Menu.Item key="2"><Link to="/realtime/data" ><span className="menu_txt"><Icon type="home" />实时监控</span></Link> </Menu.Item>
                    <Menu.Item key="3"><Link to="" ><span className="menu_txt"><Icon type="home" />异常管理</span></Link> </Menu.Item>
                    <Menu.Item key="4"><Link to="" ><span className="menu_txt"><Icon type="home" />项目管理</span></Link> </Menu.Item>
                    <Menu.Item key="5"><Link to="" ><span className="menu_txt"><Icon type="home" />综合服务</span></Link> </Menu.Item>
                    <Menu.Item key="6"><Link to="" ><span className="menu_txt"><Icon type="home" />财务管理</span></Link> </Menu.Item>
                    <Menu.Item key="7"><Link to="" ><span className="menu_txt"><Icon type="home" />资质认证</span></Link> </Menu.Item>

                </Menu>
            </div>
        );
    }
}

export default template({
    id: 'siders',
    url: '',
    data: {},
    subscribeData: ['Siders'],
    component: Siders
})