/*
 * @Author: liubo lb@hzguode.com
 * @Date: 2022-05-10 09:10:50
 * @LastEditors: liubo lb@hzguode.com
 * @LastEditTime: 2022-05-16 17:54:53
 * @FilePath: \webpack-react\src\login\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react';
import './index.scss';
import { Input, Button } from 'antd';
import { MehTwoTone, ShoppingTwoTone } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { LoginParams } from './interface';
import store from '../../store';
import { USER_INFO } from '../../store/user';
import { successApi, failApi } from '../serviceApi/index'

const Login = () => {
  const history = useHistory();
  const [params, setParams] = useState<LoginParams>({ username: '', password: '' });
  const [isError, setIsError] = useState(false);

  const login = async () => {
    const res = await successApi(params);
    console.log(1212, res)
    if (res) {
      setIsError(false);
      const action = {
        type: USER_INFO,
        value: {
          ...res.data
        },
      };

      store.dispatch(action);

      history.push('/first');
    } else {
      setIsError(true);
    }
  };

  return (
    <div className='login'>
      <div className='box'>
        <div className='box-title'>登录</div>
        <label htmlFor='username' className='row-label'>
          用户名
        </label>
        <Input
          size='large'
          placeholder='请输入用户名'
          id='username'
          prefix={<MehTwoTone />}
          value={params.username}
          onChange={(e) => {
            setParams({
              ...params,
              username: e.target.value,
            });
          }}
        />
        <label htmlFor='password' className='row-label'>
          密码
        </label>
        <Input
          type='password'
          size='large'
          placeholder='请输入密码'
          id='password'
          prefix={<ShoppingTwoTone />}
          value={params.password}
          onChange={(e) => {
            setParams({
              ...params,
              password: e.target.value,
            });
          }}
        />
        {isError ? <div className='row-error'>用户名密码错误</div> : ''}
        <Button type='primary' block className='login-btn' onClick={login}>
          登录
        </Button>
      </div>
    </div>
  );
};

export default Login;
