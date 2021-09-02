import React from 'react';
import './index.scss';
import { Input, Select } from 'antd';
import Subgroup from './subgroup';
import Content from './content';
import Function from './function';

const Form = () => {
  const { Option } = Select;
  return (
    <div className='form'>
      <Subgroup />
      <Content />
      <Function />
    </div>
  );
};

export default Form;
