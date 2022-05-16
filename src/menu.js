/*
 * @Author: liubo lb@hzguode.com
 * @Date: 2022-05-10 09:10:50
 * @LastEditors: liubo lb@hzguode.com
 * @LastEditTime: 2022-05-16 09:24:19
 * @FilePath: \webpack-react\src\menu.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const menuList = [
  {
    key: 1,
    father: false,
    path: '/first',
    menuName: '首页',
  },
  {
    key: 2,
    father: false,
    path: '/form',
    menuName: '表单',
  },
  {
    key: 3,
    father: true,
    menuName: '设置',
    children: [
      {
        key: 4,
        father: false,
        path: '/settings/personal',
        menuName: '表单',
      },
    ],
  },
];
