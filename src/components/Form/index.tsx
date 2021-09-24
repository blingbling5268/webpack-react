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

  const toIndex = () => {};

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
