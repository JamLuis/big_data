import React, {Component,ReactDOM} from 'react';
import PropTypes from 'prop-types';
import template from './temp/template';
import LayOut from './layout/containers/index'
/*=============
 群主页
 ==============*/
class Index extends Component {
    constructor() {
        super();
        this.state = {
            "info":{
                "title":"",
                "name":"",
                "author":"",
                "license":"",
                "Github":"",
                "npm":""
            }
        }
    }
    render() {

        let {GetInitData} = this.props;
        let info = this.state.info;
        if(GetInitData.get('initData')!=undefined){
            info = GetInitData.get('initData').data.info;
            // redux 数据 传递测试
            console.log(info)
        }


        return (
            <div id='app_'>
                <LayOut />
            </div>
        )
    }
}
Index.propTypes = {
  GetInitData: PropTypes.object
};
export default template({
    id: 'index',
    url: '/getData',
    data: {},
    subscribeData: ['GetInitData'],
    component: Index
})
