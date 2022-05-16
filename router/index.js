/*
 * @Author: liubo lb@hzguode.com
 * @Date: 2022-05-10 09:10:50
 * @LastEditors: liubo lb@hzguode.com
 * @LastEditTime: 2022-05-16 09:24:49
 * @FilePath: \webpack-react\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../src/login';
import Home from '../src/Home';

const AppRouter = () => (
  <Router>
    <main>
      <Switch>
        <Route path='/login' exact component={Login} />
        <Route path='/' component={Home} />
      </Switch>
    </main>
  </Router>
);

export default AppRouter;
