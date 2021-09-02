import React, { useState } from 'react';
import './index.scss';
import { Form, Input, Button, Radio, Select, DatePicker, Checkbox } from 'antd';
import { FormItemObj } from './interface';
const { Option } = Select;

const Content = () => {
  const [formList, setFormList] = useState<FormItemObj[]>([]);
  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const drop = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('onDrop', e);
    e.preventDefault();
    const type = e.dataTransfer.getData('type');
    const newFormList = [...formList];
    newFormList.push({
      type: type,
      label: '',
      required: false,
      rules: '',
      message: '',
      keyValue: '',
    });
    setFormList(newFormList);
  };

  const allowDrop = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('onDragOver', e);
    e.preventDefault();
  };

  const renderForm = (item: FormItemObj) => {
    switch (item.type) {
      case 'input':
        return <Input value={item.keyValue} />;
      case 'select':
        return (
          <Select defaultValue='lucy' value={item.keyValue}>
            <Option value='jack'>Jack</Option>
            <Option value='lucy'>Lucy</Option>
            <Option value='Yiminghe'>yiminghe</Option>
          </Select>
        );
      case 'radio':
        return (
          <Radio.Group value={item.keyValue}>
            <Radio value={1}>是</Radio>
            <Radio value={2}>否</Radio>
          </Radio.Group>
        );
      case 'time':
        return <DatePicker className='sub-time' />;
      case 'checkbox':
        return <Checkbox.Group options={plainOptions} defaultValue={['Apple']} />;
      default:
        return null;
    }
  };

  return (
    <div className='form-center' onDrop={(e) => drop(e)} onDragOver={(e) => allowDrop(e)}>
      <Form
        name='content'
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        {formList.map((item) => (
          <Form.Item
            label={item.label}
            name={item.keyValue}
            rules={[{ required: item.required, message: item.message }]}
            key={item.keyValue}
          >
            {renderForm(item)}
          </Form.Item>
        ))}
        {/* <Input /> */}

        {/*
        <Form.Item label='是否必填' name='password' rules={[{ required: true, message: '请选择是否必填' }]}>
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
        </Form.Item> */}

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit'>
            生成代码
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Content;
