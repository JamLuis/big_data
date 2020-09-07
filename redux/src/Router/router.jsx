import React, {Component} from 'react';
import { Router, Route, Redirect, IndexRoute,Switch } from 'react-router';
import { HashRouter } from 'react-router-dom'
import Index from '../Component/Index.jsx';
import RealTIme from '../Component/sections/realtime/containers'
/*=================
   router.jsx 组件
  专门用来管理路由的
==================*/

const RouteConfig =(
  <HashRouter>
     <Switch>
         <Route exact path='/' component={Index}/>
         <Route path='/realtime/data' component={RealTIme} />
     </Switch>
   </HashRouter>
);
export default RouteConfig
