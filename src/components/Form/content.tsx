import React, { useState, useContext, useEffect } from 'react';
import './index.scss';
import { Form, Input, Button, Radio, Select, DatePicker, Checkbox } from 'antd';
import { FormItemObj } from './interface';
const { Option } = Select;
import { AppContext } from './app-context';

const Content = () => {
  const { formData, setFormData } = useContext(AppContext);
  const [formList, setFormList] = useState<FormItemObj[]>([]);
  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log(121212, index);
    const newFormList = [...formList];
    newFormList[index] = { ...formData };
    setFormList(newFormList);
    console.log(formList);
  }, [formData]);

  useEffect(() => {
    console.log(5555, index);
  }, [index]);

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const drop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('type');
    const newFormList = [...formList];
    newFormList[index].type = type;
    // newFormList.push({
    //   type: type,
    //   label: '',
    //   required: false,
    //   rules: '',
    //   message: '',
    //   keyValue: '',
    // });
    setIndex(newFormList.length - 1);
    setFormData({ ...formData, type: type });
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
        {formList.map((item, index) =>
          !!item.type || !!item.keyValue ? (
            <Form.Item
              label={item.label}
              name={item.keyValue}
              rules={[{ required: item.required, message: item.message }]}
              key={item.keyValue}
            >
              {renderForm(item)}
            </Form.Item>
          ) : null,
        )}

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
