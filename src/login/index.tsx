import React, { useState } from 'react';
import './index.scss';
import { Input, Button } from 'antd';
import { MehTwoTone, ShoppingTwoTone } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { LoginParams } from './interface';
import store from '../../store';
import { USER_INFO } from '../../store/user';

const Login = () => {
  const history = useHistory();
  const [params, setParams] = useState<LoginParams>({ username: '', password: '' });
  const [isError, setIsError] = useState(false);

  const login = () => {
    if (params.username === 'admin' && params.password === '123456') {
      setIsError(false);
      const action = {
        type: USER_INFO,
        value: {
          token: '12345',
          username: 'admin',
          userId: '0001',
        },
      };

      store.dispatch(action);

      console.log(121212, store.getState().userInfo.token);
      history.push('/main');
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
