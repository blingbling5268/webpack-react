/*
 * @Author: liubo lb@hzguode.com
 * @Date: 2022-05-10 09:10:50
 * @LastEditors: liubo lb@hzguode.com
 * @LastEditTime: 2022-05-13 10:20:50
 * @FilePath: \webpack-react\src\Home\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import Header from '@/components/Header';
import Form from '@/components/Form';
import First from '@/First';
import { menuList } from '@/menu';
import { Layout, Menu } from 'antd';
import { Link, BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import './index.scss';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;
console.log()
const Home = () => (
  <div className='home'>
    <Layout>
      <Sider>
        <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode='inline'>
          {menuList.map((item, index) => (
            <Menu.Item key={item.key} icon={<PieChartOutlined />}>
              <Link to={item.path}>{item.menuName}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header />
        <Content>
          <Router>
            <Switch>
              <Route exact path='/main' component={First} />
              <Route path='/main/form' component={Form} />
            </Switch>
          </Router>
        </Content>
      </Layout>
    </Layout>
  </div>
);

export default withRouter(Home);
