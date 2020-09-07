import React,{Component} from 'react';
import {Provider,connect} from 'react-redux';
import {render} from 'react-dom';
import store from './Redux/store';
import router from './Router/router';
import './Style/comm.scss';
import './Style/index.scss';
import './Style/style.css';

store.subscribe(() => {

});

render(
    <Provider store={store}>
      {router}
    </Provider>,
    document.getElementById('root')
);
