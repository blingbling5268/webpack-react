/*
 * @Author: liubo lb@hzguode.com
 * @Date: 2022-05-10 09:10:50
 * @LastEditors: liubo lb@hzguode.com
 * @LastEditTime: 2022-05-13 15:48:42
 * @FilePath: \webpack-react\src\Home\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import Header from '@/components/Header';
import Form from '@/components/Form';
import First from '@/First';
import Personal from '@/Settings/Personal';
import { menuList } from '@/menu';
import { Layout, Menu } from 'antd';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
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
const Home = () => (
  <div className='home'>
    <Layout>
      <Sider>
        <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode='inline'>
          {menuList.map((item, index) =>
            item.children ? (
              <Menu.SubMenu title={item.menuName} key={item.key}>
                {
                  item.children.map((sitem, sIndex) =>
                  (
                    <Menu.Item key={sitem.key} icon={<PieChartOutlined />}>
                      <Link to={sitem.path}>{sitem.menuName}</Link>
                    </Menu.Item>
                  )
                  )
                }
              </Menu.SubMenu>
            ) : (
              <Menu.Item key={item.key} icon={<PieChartOutlined />}>
                <Link to={item.path}>{item.menuName}</Link>
              </Menu.Item>
            )
          )}
        </Menu>
      </Sider>
      <Layout>
        <Header />
        <Content>
          <Switch>
            <Route path='/main' component={First} />
            <Route path='/main/form' component={Form} />
            <Route path='/main/settings/personal' component={Personal} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  </div>
);

export default withRouter(Home);
