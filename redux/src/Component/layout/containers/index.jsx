import React, { Component, ReactDOM } from 'react';
// import PropTypes from 'prop-types';
import template from '../../temp/template';
import { Layout } from 'antd';
import Siders from '../componets/siders';

const { Header, Footer, Sider, Content } = Layout;
/*=============
 群主页
 ==============*/
class LayOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const borderWidth = document.body.clientWidth;
        const borderHeigth = document.body.clientHeight;

        return (
            <div id='layout'>
                <Layout theme="light" style={{ height: borderHeigth, width: borderWidth }} >
                    <Sider
                        style={{ padding: '24px 0 24px 24px' }}
                        theme='light'>
                        <Siders />
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: '12px 35px' }}>Header</Header>
                        <Content style={{padding: 34}} >Content</Content>
                        {/* <Footer>Footer</Footer> */}
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default template({
    id: 'layout',
    url: '',
    data: {},
    subscribeData: ['LayOut'],
    component: LayOut
})
