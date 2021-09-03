import React, { useState } from 'react';
import './index.scss';
import Subgroup from './subgroup';
import Content from './content';
import Function from './function';
import { AppContext } from './app-context';
import { FormItemObj } from './interface';

const Form = () => {
  const [formData, setFormData] = useState<FormItemObj>({
    type: '',
    label: '',
    required: false,
    rules: '',
    message: '',
    keyValue: '',
  });

  return (
    <div className='form'>
      <AppContext.Provider value={{ formData, setFormData }}>
        <Subgroup />
        <Content />
        <Function />
      </AppContext.Provider>
    </div>
  );
};

export default Form;
