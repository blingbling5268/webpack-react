/*
 * @Author: liubo lb@hzguode.com
 * @Date: 2022-05-10 09:10:50
 * @LastEditors: liubo lb@hzguode.com
 * @LastEditTime: 2022-05-13 13:55:54
 * @FilePath: \webpack-react\src\components\Form\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react';
import './index.scss';
import { Button } from 'antd';
import Subgroup from './subgroup';
import Content from './content';
import Function from './function';
import { AppContext } from './app-context';
import { FormDataObj } from './interface';
import { Link } from 'react-router-dom';

const Form = () => {
  const [formData, setFormData] = useState<FormDataObj>({
    label: '',
    required: false,
    rules: '',
    message: '',
    keyValue: '',
  });
  const toIndex = () => { };

  return (
    <div className='form'>
      <AppContext.Provider value={{ formData, setFormData }}>
        <Subgroup />
        <Content />
        <Function />
      </AppContext.Provider>
      <Link to='/first'>
        <div>
          <Button type='primary' onClick={toIndex}>
            首页
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default Form;
