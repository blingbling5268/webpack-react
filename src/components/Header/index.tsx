import React, { useState } from 'react';
import './index.scss';
import { Menu, Dropdown } from 'antd';
import { ThemeArray } from './interface';

const Header = () => {
  // 初始化下拉列表数据
  const [themeList] = useState<ThemeArray[]>([
    {
      id: 0,
      menuName: '开灯',
      menuKey: 'light',
    },
    {
      id: 1,
      menuName: '关灯',
      menuKey: 'dark',
    },
  ]);
  // 初始化主题名称
  const [themeName, setThemeName] = useState(themeList[0].id);
  const [dataTheme, setDataTheme] = useState(themeList[0].menuKey);

  /**
   * @description: 切换主题
   * @param {item} 当前数据索引对应的数据
   * @author: liubo
   * @date: 2021-09-01 15:48:23
   */
  const changeTheme = (item: ThemeArray) => {
    setThemeName(item.id);
    setDataTheme(item.menuKey);

    document.documentElement.setAttribute('data-theme', item.menuKey);
  };

  const menu = (
    <Menu>
      {themeList.map(
        (item) =>
          item.id != themeName && (
            <Menu.Item key={item.id} onClick={() => changeTheme(item)}>
              {item.menuName}
            </Menu.Item>
          ),
      )}
    </Menu>
  );

  return (
    <div className='home-header' data-theme={dataTheme}>
      <Dropdown overlay={menu} placement='bottomCenter' arrow>
        <div className='home-theme'>{themeName ? '夜间模式' : '白天模式'}</div>
      </Dropdown>
    </div>
  );
};

export default Header;
