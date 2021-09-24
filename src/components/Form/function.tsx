import React, { useState, useContext, useEffect } from 'react';
import './index.scss';
import { Form, Input, Button, Radio } from 'antd';
import { AppContext } from './app-context';

const Function = () => {
  const { setFormData } = useContext(AppContext);
  const [value, setValue] = useState(1);
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    setFormData({ ...values });
    form.resetFields();
    console.log(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='form-right'>
      <span className='form-right-title'>功能</span>
      <Form
        name='func'
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ label: '', keyValue: '', required: false, rules: '', message: '' }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
        form={form}
      >
        <Form.Item label='文案' name='label' rules={[{ required: true, message: '请输入文案' }]}>
          <Input />
        </Form.Item>
        <Form.Item label='字段名' name='keyValue' rules={[{ required: true, message: '请输入字段名' }]}>
          <Input />
        </Form.Item>

        <Form.Item label='是否必填' name='required' rules={[{ required: true, message: '请选择是否必填' }]}>
          <Radio.Group value={value}>
            <Radio value={1}>是</Radio>
            <Radio value={2}>否</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label='正则表达式' name='rules' rules={[{ required: true, message: '请输入正则表达式' }]}>
          <Input />
        </Form.Item>

        <Form.Item label='提示信息' name='message' rules={[{ required: true, message: '请输入提示信息' }]}>
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Function;
