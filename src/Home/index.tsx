import React from 'react';
import Header from '@/components/Header';
import Form from '@/components/Form';
import First from '@/First';
import { menuList } from '@/menu';
import { Layout, Menu } from 'antd';
import { Link, HashRouter as Router, Route, Switch } from 'react-router-dom';
import { createHashHistory } from 'history';
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
const history = createHashHistory();

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
              <Route exact path='/main/first' component={First} />
              <Route exact path='/main/form' component={Form} />
            </Switch>
          </Router>
        </Content>
      </Layout>
    </Layout>
  </div>
);

export default Home;
